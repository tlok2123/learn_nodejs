const express = require('express')
const route = express.Router()
const { getHomepage, getTest, postCreateUser, getCreatePage } = require('../controllers/homeController')



route.get('/', getHomepage);
route.get('/test', getTest);
route.get('/create', getCreatePage)
route.post('/create-user', postCreateUser);



module.exports = route;