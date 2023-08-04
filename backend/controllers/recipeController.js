const Recipe = require('../models/recipeModel');

/*
router.get('/recipes', recipeController.getRecipes); // Get all recipes
router.get('/recipes/:id', recipeController.getRecipeByID); // Get a single recipe
router.post('/recipes', recipeController.createRecipe); // Create a recipe
router.put('/recipes/:id', recipeController.updateRecipe); // Update a recipe
router.delete('/recipes/:id', recipeController.deleteRecipe); // Delete a recipe
*/

exports.getRecipes = async (req, res) => {
    try {
        console.log(`In controller, getRecipes... ${req.body}`);
        const allRecipes = await Recipe.getAllRecipes();
        console.log(`In recipeController.js, getRecipes...allRecipes`);
        res.status(200).json(allRecipes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};

exports.getRecipeByID = async (req, res) => {
    try {
        console.log(`In controller, getRecipeByID... ${req.body}`);
        const { id } = req.params;
        const recipe = await Recipe.getRecipeByID(id);
        res.status(200).json(recipe);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};

exports.createRecipe = async (req, res) => {
    try {
        console.log(`In controller, createRecipe... ${req.body}`);
        const { recipe_name, recipe_ingredients, recipe_directions } = req.body;
        const newRecipe = new Recipe(recipe_name, recipe_ingredients, recipe_directions);
        const newRecipeID = await newRecipe.createRecipe();
        console.log(`New recipe ID: ${newRecipeID}`);
        res.send(newRecipe);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};

exports.updateRecipe = async (req, res) => {
    try {
        console.log(`In controller, updateRecipe... ${req.body}`);
        const { id } = req.params;
        const updatedRecipe = req.body;
        const updateRecipeResponse = await Recipe.updateRecipe(id, updatedRecipe);
        if (updateRecipeResponse > 0) {
            res.status(200).send(`Recipe with ID ${id} successfully updated`);
        } else {
            res.status(404).send(`Recipe with ID ${id} not found`);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};

exports.deleteRecipe = async (req, res) => {
    try {
        console.log(`In controller, deleteRecipe... ${req.body}`);
        const { id } = req.params;
        const deleteRecipeResponse = await Recipe.deleteRecipe(id);
        if (deleteRecipeResponse > 0) {
            res.status(200).send(`Recipe with ID ${id} successfully deleted`);
        } else {
            res.status(404).send(`Recipe with ID ${id} not found`);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};