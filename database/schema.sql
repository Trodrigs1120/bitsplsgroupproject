-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS ourRappersDB;
-- Creates the "animals_db" database --
CREATE DATABASE ourRappersDB;

-- Makes it so all of the following code will affect animals_db --
USE ourRappersDB;

-- Creates the table "people" within animals_db --
CREATE TABLE rapStats (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,

  name VARCHAR(30),

  uWords INT(11),

  uWordsProp FLOAT(11),

  PRIMARY KEY (id)
);