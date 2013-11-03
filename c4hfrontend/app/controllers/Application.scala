package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {

  def home = Action {
    Ok(views.html.index())
  }
  
  def personas(question: String) = Action {
    Ok(views.html.personas())
  }
  
  def viviendas(question: String) = Action {
    Ok(views.html.viviendas())
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