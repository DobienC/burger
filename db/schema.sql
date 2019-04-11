CREATE DATABASE burgers_db;

use burgers_db;
CREATE TABLE burgers(
	id					INTEGER(10)		NOT NULL AUTO_INCREMENT,
	burger_name			VARCHAR(30),
	devoured			BOOLEAN,
    PRIMARY KEY(id)
);

use burgers_db;
INSERT INTO burgers (burger_name, devoured) VALUES ("Double Cheese Burger", False);