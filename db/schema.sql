-- Running mysql in cmd line:
-- Start MySQL command line tool and login: mysql -u root -p.
-- With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
-- Now insert the entries you defined in seeds.sql by running the file: source <filename>.sql.
-- Close out of the MySQL command line tool: exit.

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    burger_name TINYTEXT NOT NULL,
    devoured BOOLEAN NOT NULL
);
