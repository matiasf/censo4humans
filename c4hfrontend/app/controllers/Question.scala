package controllers

import play.api.mvc.Action
import play.api.mvc.Controller
import play.api.libs.json.Json
import play.api.libs.ws.WS
import play.api.libs.oauth.OAuthCalculator
import play.api.libs.concurrent.Execution.Implicits._

object Question extends Controller {

  def newQuestion(user: String, question: String, query: String) = Action {
    models.Question.create(user, question, query)
    Ok(Json.toJson(models.Question.all(user)))
  }
  
  def myQuestions(user: String) = Action {
    Ok(Json.toJson(models.Question.all(user)))
  }

  def deleteQuestion(id: Long) = TODO

}