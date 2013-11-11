package controllers

import play.api._
import play.api.mvc._
import play.api.data._
import play.api.data.Forms._
import play.api.libs.openid._
import play.api.libs.concurrent.Execution.Implicits._
import play.api.libs.oauth._
import play.api.libs.ws.WS

object TwitterLogin extends Controller {

  val KEY = ConsumerKey("OyQrMeqsLOP7K6HCpTJg", "lECQV74cckXfIwfl9dW1SKVSkwjzZqa162AZqTGNxg")

  val TWITTER = OAuth(ServiceInfo(
    "https://api.twitter.com/oauth/request_token",
    "https://api.twitter.com/oauth/access_token",
    "https://api.twitter.com/oauth/authorize", KEY),
    true)

  def authenticate = Action { request =>
    request.getQueryString("oauth_verifier").map { verifier =>
      val tokenPair = sessionTokenPair(request).get
      // We got the verifier; now get the access token, store it and back to index
      TWITTER.retrieveAccessToken(tokenPair, verifier) match {
        case Right(t) => {
          // We received the authorized tokens in the OAuth object - store it before we proceed
          Redirect(routes.Application.home).withSession("token" -> t.token, "secret" -> t.secret)
        }
        case Left(e) => throw e
      }
    }.getOrElse(
      TWITTER.retrieveRequestToken("http://localhost:9000/twitter/auth") match {
        case Right(t) => {
          // We received the unauthorized tokens in the OAuth object - store it before we proceed
          Redirect(TWITTER.redirectUrl(t.token)).withSession("token" -> t.token, "secret" -> t.secret)
        }
        case Left(e) => throw e
      })
  }

  def sessionTokenPair(implicit request: RequestHeader): Option[RequestToken] = {
    for {
      token <- request.session.get("token")
      secret <- request.session.get("secret")
    } yield {
      RequestToken(token, secret)
    }
  }

  def twitterInfo = Action { implicit request =>
    TwitterLogin.sessionTokenPair match {
      case Some(credentials) =>
        Async {
          WS.url("https://api.twitter.com/1.1/account/verify_credentials.json")
            .sign(OAuthCalculator(TwitterLogin.KEY, credentials))
            .get
            .map(result => Ok(result.json))
        }
    }
  }

}