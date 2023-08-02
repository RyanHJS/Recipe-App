const db = require('../config/db');

const recipeModel = require('../models/recipeModel');

exports.getRecipes = async (req, res) => {
    try {
        const [allRecipes] = await recipeModel.getAllRecipes();
        res.status(200).json(allRecipes);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};