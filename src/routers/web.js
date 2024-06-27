const express = require('express')
const route = express.Router()
const { getHomepage, getTest, postCreateUser } = require('../controllers/homeController')



route.get('/', getHomepage);
route.get('/test', getTest);
route.post('/create-user', postCreateUser);



module.exports = route;