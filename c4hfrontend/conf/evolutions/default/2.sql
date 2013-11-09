# --- !Ups

ALTER TABLE question ADD COLUMN user varchar(255);
ALTER TABLE question ADD COLUMN query varchar(255);

# ---!Downs

ALTER TABLE question DROP COLUMN user;
ALTER TABLE question DROP COLUMN query;
