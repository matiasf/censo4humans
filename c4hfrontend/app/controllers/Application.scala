package controllers

import play.api.mvc.Action
import play.api.mvc.Controller

object Application extends Controller {

  def home = Action {
    Ok(views.html.index())
  }
  
  def personas(question: String) = Action {
    Ok(views.html.personas())
  }
  
  def viviendas(question: String) = Action {
    Ok(views.html.viviendas(models.Question.all))
  }
  
  def hogares(question: String) = Action {
    Ok(views.html.hogares())
  }
  
  def contact = Action {
    Ok(views.html.contact())
  }
  
  def about = Action {
    Ok(views.html.about())
  }

}