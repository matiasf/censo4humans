package models

case class Question(id: Long, question: String)

object Question {
  
  def all(): List[Question] = Nil
  
  def create(question: String) {}
  
  def delete(id: Long) {}
  
}