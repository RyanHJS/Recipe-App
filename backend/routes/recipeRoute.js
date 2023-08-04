const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipeController');

router.get('/recipes', recipeController.getRecipes); // Get all recipes
router.get('/recipes/:id', recipeController.getRecipeByID); // Get a single recipe
router.post('/recipes', recipeController.createRecipe); // Create a recipe
router.put('/recipes/:id', recipeController.updateRecipe); // Update a recipe
router.delete('/recipes/:id', recipeController.deleteRecipe); // Delete a recipe

module.exports = router;