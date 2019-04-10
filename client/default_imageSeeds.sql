DROP DATABASE IF EXISTS friend_zone;
CREATE DATABASE friend_zone;

USE friend_zone;

CREATE TABLE default_image(
  default_image_id INT NOT NULL AUTO_INCREMENT,
  default_image VARCHAR (255),
  PRIMARY KEY (default_image_id)
);

INSERT INTO default_image (default_image)
VALUES 
("https://i.redd.it/bl4ga7mxpaq21.jpg"),
("https://i.redd.it/5ie9gmr2ief11.jpg"),
("https://i.redd.it/9uhjgte5a5u11.jpg"),
("https://i.redd.it/fh3nlnts28p11.jpg"),
("https://i.redd.it/s4yj2ur03u411.jpg"),
("https://i.redd.it/bcfnivrxktc01.jpg"),
("https://i.redd.it/6568nrcwt9201.jpg"),
("https://i.redd.it/cfghaquzxkuz.jpg"),
("https://i.redd.it/afuxrbog63vz.jpg"),
("https://i.redd.it/n9l1k7a50gpz.jpg"),
("https://i.redd.it/4i95xxv4exoz.jpg"),
("https://i.redd.it/mgom6lluv3kz.jpg"),
("https://i.redd.it/44kg9tg9klmy.jpg"),
("https://i.redd.it/g03wne592tly.jpg"),
("https://i.redd.it/7mmzqvrbopgz.jpg"),
("https://i.redd.it/ckt6ijmy8vcy.jpg"),
("https://i.redd.it/otdz7ibxf7q21.jpg"),
("https://i.redd.it/a98h259f99q21.jpg"),
("https://i.redd.it/ig8pzort5ol21.jpg");

