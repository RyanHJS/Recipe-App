const express = require('express');
const cors = require('cors');
const app = express();

console.log("Starting server...");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const recipeRoute = require('./routes/recipeRoute');

app.use('/api', recipeRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));