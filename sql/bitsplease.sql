DROP DATABASE IF EXISTS bitsPleaseDB;

CREATE DATABASE bitsPleaseDB;

USE bitsPleaseDB;

CREATE TABLE artists (
  artist VARCHAR(32) NOT NULL,
  numOfSongs INT NOT NULL,
  unique_words INT NOT NULL,
  wordsPerSong FLOAT NOT NULL,
  uniqueWPS FLOAT NOT NULL,
  url VARCHAR(128) NOT NULL,
  percentUnique FLOAT NOT NULL,
  PRIMARY KEY (artist)
);

CREATE TABLE users (
  user VARCHAR(32) NOT NULL,
  password VARCHAR(32) NOT NULL,
  PRIMARY KEY (userName)

);

CREATE TABLE history (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(32) NOT NULL REFERENCES users(user),
  date DATETIME NOT NULL,
  artist VARCHAR(32) NOT NULL REFERENCES artists(artist),
  PRIMARY KEY (id)
;)

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
