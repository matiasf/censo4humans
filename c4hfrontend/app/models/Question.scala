package models

import play.api.db._
import play.api.Play.current
import anorm._
import anorm.SqlParser._
import play.api.libs.json.Format
import play.api.libs.json.JsValue
import play.api.libs.json.JsObject
import play.api.libs.json.JsNumber
import play.api.libs.json.JsString
import play.api.libs.json.JsResult
import play.api.libs.json.JsSuccess

case class Question(id: Long, question: String, user: String, query: String)

object Question {

  val question = {
    get[Long]("id") ~
      get[String]("question") ~
      get[String]("user") ~
      get[String]("query") map {
        case id ~ question ~ user ~ query => Question(id, question, user, query)
      }
  }

  def all(user: String): List[Question] = DB.withConnection { implicit c =>
    SQL("select * from question where user = {user}").on(
      'user -> user).as(question *)
  }

  def create(user: String, question: String, query: String) {
    DB.withConnection { implicit c =>
      SQL("insert into question (user, question, query) values ({user}, {question}, {query})").on(
        'question -> question,
        'user -> user,
        'query -> query).executeUpdate()
    }
  }

  def delete(id: Long) {
    DB.withConnection { implicit c =>
      SQL("delete from question where id = {id}").on(
        'id -> id).executeUpdate()
    }
  }

  implicit object QuestionFormat extends Format[Question] {

    def reads(json: JsValue): JsResult[Question] = JsSuccess(Question(
      (json \ "id").as[Long],
      (json \ "question").as[String],
      (json \ "query").as[String],
      (json \ "user").as[String]))

    def writes(question: Question) = JsObject(Seq(
      "id" -> JsNumber(question.id),
      "question" -> JsString(question.question),
      "query" -> JsString(question.query),
      "user" -> JsString(question.user)))

  }

}
