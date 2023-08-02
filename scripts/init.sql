/*
docker run --name mysqlDB -e MYSQL_ROOT_PASSWORD=secret -p 3307:3307 -d mysql
docker exec -i mysqlDB mysql -u root -psecret < init.sql
*/

CREATE DATABASE IF NOT EXISTS recipe_app;

USE recipe_app;

CREATE TABLE IF NOT EXISTS recipe (
    recipe_id INT NOT NULL AUTO_INCREMENT,
    recipe_name VARCHAR(255) NOT NULL,
    recipe_ingredients VARCHAR(255) NOT NULL,
    recipe_directions VARCHAR(255) NOT NULL,
    recipe_last_edited TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (recipe_id)
);

-- Generate test data for recipe table
INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions) VALUES ('Pancakes', '1 cup flour, 1 egg, 1 cup milk', 'Mix ingredients and cook on griddle');
INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions) VALUES ('French Toast', '1 egg, 1 slice bread, 1/4 cup milk', 'Mix ingredients and cook on griddle');
INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions) VALUES ('Scrambled Eggs', '2 eggs, 1/4 cup milk', 'Mix ingredients and cook on stove');
INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions) VALUES ('Omelette', '2 eggs, 1/4 cup milk, 1/4 cup cheese, 1/4 cup ham', 'Mix ingredients and cook on stove');
INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions) VALUES ('Bacon', '1 slice bacon', 'Cook on stove');
INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions) VALUES ('Sausage', '1 sausage link', 'Cook on stove');