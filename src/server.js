require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routers/web');
const mysql = require('mysql2');
//config template engine
configViewEngine(app);

app.use('/', webRoutes);

//connect db
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //df: 3306
    user: 'root',
    password: '123456', //df empty
    database: 'hoidanit'
})

connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function (err, results, fields) {
        console.log(results);
        console.log(fields);
    }
)





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})







