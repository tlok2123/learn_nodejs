require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
// const path = require('path');
const configViewEngine = require('./config/viewEngine');
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routers/web');
const connection = require('./config/database');


app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app);



app.use('/', webRoutes);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})







