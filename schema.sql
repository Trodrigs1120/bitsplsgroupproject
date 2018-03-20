DROP DATABASE IF EXISTS ourRappersDB;

CREATE DATABASE ourRappersDB;


USE ourRappersDB;


CREATE TABLE rapStats (
  
  id INTEGER(11) AUTO_INCREMENT NOT NULL,

  name VARCHAR(30),

  uWords INT(11),

  uToArtist VARCHAR(255),

  numSongs INT(11),

  wordsPerSong FLOAT(11),

  imgURL VARCHAR(255),

  uWordsProp FLOAT(11),

  mysteryNumSongs FLOAT(11),

  wordsPerSongProp FLOAT(11),

  PRIMARY KEY (id)
);