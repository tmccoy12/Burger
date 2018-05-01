
CREATE DATABASE burger_db;

USE burger_db;
CREATE TABLE burger
(
	id int NOT NULL Auto_Increment,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);