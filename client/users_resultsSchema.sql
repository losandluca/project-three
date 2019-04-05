DROP DATABASE IF EXISTS friend_zone;
CREATE DATABASE friend_zone;

USE friend_zone;

CREATE TABLE users(
  user_id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  image BLOB NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE results(
  results_id INT NOT NULL AUTO_INCREMENT,
  foreign key (user_id) references users(user_id),
  foreign key (battle_id) references battle(battle_id),
  outcome BIT NOT NULL,
  score INT NOT NULL,
  PRIMARY KEY (id)
);

