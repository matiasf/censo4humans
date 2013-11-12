package controllers

import play.api.mvc.Action
import play.api.mvc.Controller
import play.api.data._
import play.api.data.Forms._
import play.api.libs.ws.WS
import play.api.libs.oauth.OAuthCalculator
import play.api.libs.concurrent.Execution.Implicits._

object Application extends Controller {

  val userOpenIDForm = Form(
    single(
      "openid" -> email))

  def home = Action { 
    implicit request => Ok(views.html.index(request))
  }

  def personas(question: String) = Action {
    implicit request => Ok(views.html.personas(request))
  }

  def viviendas(question: String) = Action {
    implicit request => Ok(views.html.viviendas(request))
  }

  def hogares(question: String) = Action {
    implicit request => Ok(views.html.hogares(request))
  }

  def contact = Action {
    implicit request => Ok(views.html.contact(request))
  }

  def about = Action {
    implicit request => Ok(views.html.about(request))
  }

}