/**
 *   Censo 4 Humans is a web app to provide census data in a friendly way.
 *   Copyright (C) 2013  Guillermo Polito, Guillermo Suarez, Matías Fernández
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
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
    implicit request => Ok(views.html.index(request, ""))
  }

  def personas(question: String) = Action {
    implicit request => Ok(views.html.graphpage(request, "personas"))
  }

  def viviendas(question: String) = Action {
    implicit request => Ok(views.html.graphpage(request, "viviendas"))
  }

  def hogares(question: String) = Action {
    implicit request => Ok(views.html.graphpage(request, "hogares"))
  }

  def contact = Action {
    implicit request => Ok(views.html.contact(request, "contact"))
  }

  def about = Action {
    implicit request => Ok(views.html.about(request, "about"))
  }

}