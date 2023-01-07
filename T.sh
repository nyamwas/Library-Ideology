!#/bin/bash
mysql -u root
CREATE DATABASE agristores;
USE agristores;
CREATE billing (id INT(20), card VARCHAR(20), date VARCHAR(20), pin VARCHAR(20));
INSERT INTO billing (id, card, date, pin) VALUES ('1', '****-****-****-4277', '05-01-23', '1234');

INSERT INTO billing(id, card, date, pin) VALUES ('2', '****-****-****-8330', '06-01-23', '1738');


