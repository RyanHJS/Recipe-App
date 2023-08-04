const db = require('../config/database');

module.exports = class Recipe {
    constructor(recipe_name, recipe_ingredients, recipe_directions) {
        this.recipe_name = recipe_name;
        this.recipe_ingredients = recipe_ingredients;
        this.recipe_directions = recipe_directions;
    }

    /*
    router.get('/recipes', recipeController.getRecipes); // Get all recipes
    router.get('/recipes/:id', recipeController.getRecipeByID); // Get a single recipe
    router.post('/recipes', recipeController.createRecipe); // Create a recipe
    router.put('/recipes/:id', recipeController.updateRecipe); // Update a recipe
    router.delete('/recipes/:id', recipeController.deleteRecipe); // Delete a recipe
    */

    static async getAllRecipes() {
        const [rows] = await db.execute('SELECT recipe_id, recipe_name, recipe_ingredients, recipe_directions, recipe_last_edited FROM recipes');
        console.log(`In recipeModels.js, getAllRecipes(), rows: ${row}`);
        return rows;
    }

    static async getRecipeByID(id) {
        const [rows] = await db.execute(
            "SELECT recipe_id, recipe_name, recipe_ingredients, recipe_directions, recipe_last_edited FROM recipes WHERE recipe_id = ?",
            [id]
        );

        return rows;
    }

    async createRecipe() {
        const [insertInfo] = await db.execute(
            "INSERT into recipes (recipe_name, recipe_ingredients, recipe_directions) VALUES (?, ?, ?)",
            [this.recipe_name, this.recipe_ingredients, this.recipe_directions]
        );

        return insertInfo.insertId;
    }

    static async updateRecipe(id, recipe) {
        const [updateInfo] = await db.execute(
            "UPDATE recipes SET recipe_name = ?, recipe_ingredients = ?, recipe_directions = ? WHERE recipe_id = ?",
            [recipe.recipe_name, recipe.recipe_ingredients, recipe.recipe_directions, id]
        );

        return updateInfo.affectedRows;
    }

    static async deleteRecipe(id) {
        const [deleteInfo] = await db.execute(
            "DELETE FROM recipes WHERE recipe_id = ?",
            [id]
        );

        return deleteInfo.affectedRows;
    }

};