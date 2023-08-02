const db = require('../config/db');

module.exports = class Recipe {
    constructor(recipe_name, recipe_ingredients, recipe_directions) {
        this.recipe_name = recipe_name;
        this.recipe_ingredients = recipe_ingredients;
        this.recipe_directions = recipe_directions;
    }

    static async getAllRecipes() {
        const [rows] = await db.execute('SELECT * FROM recipes');
        return rows;
    }
};

