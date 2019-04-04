DROP DATABASE IF EXISTS friend_zone;
CREATE DATABASE friend_zone;

USE friend_zone;

CREATE TABLE alliance(
  alliance_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  alliance_member VARCHAR(255) NOT NULL,
  alliance_member_card TEXT NOT NULL, 
  alliance_member_health INT NOT NULL,
  alliance_member_attack INT NOT NULL,
  PRIMARY KEY (alliance_id),
  FOREIGN KEY (user_id) REFERENCES user (user_id)
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
  FOREIGN KEY (alliance_id) references alliance (alliance_id),
  PRIMARY KEY (battle_id)
);