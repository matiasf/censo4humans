# Tasks schema
 
# --- !Ups

CREATE TABLE question (
    id integer NOT NULL AUTO_INCREMENT,
    question varchar(255),
    primary key (id)
);
 
# --- !Downs
 
DROP TABLE question;