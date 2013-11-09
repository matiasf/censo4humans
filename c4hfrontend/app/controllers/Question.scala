package controllers

import play.api.mvc.Action
import play.api.mvc.Controller
import play.api.libs.json.Json

object Question extends Controller {
  
  def newQuestion(user: String, question: String, query: String) = Action {
    models.Question.create(user, question, query)
    Ok(Json.toJson(models.Question.all))
  }
  
  def deleteQuestion(id: Long) = TODO

}