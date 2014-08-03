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