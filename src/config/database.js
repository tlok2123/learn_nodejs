const mysql = require('mysql2');
require('dotenv').config();

//connect db
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT, //df: 3306
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD, //df empty
//     database: process.env.DB_NAME
// })

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, //df: 3306
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, //df empty
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4'

})
module.exports = connection;