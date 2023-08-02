import mysql from 'mysql2';

const devPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'secret',
    database: 'recipe_app',
    port: 3307,
    connectionLimit: process.env.DB_CONNECTION_LIMIT
});

module.exports = devPool.promise();