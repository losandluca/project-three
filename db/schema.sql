DROP DATABASE IF EXISTS friend_zone;
CREATE DATABASE friend_zone;

USE friend_zone;

CREATE TABLE users(
  user_id INT NOT NULL AUTO_INCREMENT,
  full_name VARCHAR (100) NOT NULL,
  user_name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  image BLOB NOT NULL,
  title VARCHAR (25) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE card (
	id INT NOT NULL AUTO_INCREMENT,
	card_name VARCHAR(100) NOT NULL,
  title VARCHAR (25) NOT NULL,
	image BLOB NOT NULL,
    health INT NOT NULL,
    attack INT NOT NULL,
    primary key (id) 
);

CREATE TABLE alliance(
  alliance_id INT NOT NULL AUTO_INCREMENT,
  card_id INT NOT NULL,
  PRIMARY KEY (alliance_id),
  FOREIGN KEY (card_id) REFERENCES card(id)
);

CREATE TABLE battle(
  battle_id INT NOT NULL AUTO_INCREMENT,
  alliance_id INT NOT NULL,
  player_one_id INT NOT NULL,
  player_one_start_points INT NOT NULL,
  player_two_id INT NOT NULL,
  player_two_start_points INT NOT NULL,
  game_status INT NOT NULL,
  player_turn_id INT NOT NULL,
  FOREIGN KEY (alliance_id) references alliance(alliance_id),
  PRIMARY KEY (battle_id)
);

CREATE TABLE results(
  results_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  battle_id INT NOT NULL,
  foreign key (user_id) references users(user_id),
  foreign key (battle_id) references battle(battle_id),
  outcome BIT NOT NULL,
  score INT NOT NULL,
  PRIMARY KEY (results_id)
);
