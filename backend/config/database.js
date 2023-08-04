const mysql = require('mysql2/promise');

require("dotenv").config();

const devPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'secret',
    database: 'recipe_app',
    port: 3307,
});

module.exports = devPool;