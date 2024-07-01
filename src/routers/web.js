const express = require('express')
const route = express.Router()
const { getHomepage, getTest, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser } = require('../controllers/homeController')



route.get('/', getHomepage);
route.get('/test', getTest);
route.get('/create', getCreatePage);
route.post('/create-user', postCreateUser);
route.get('/update/:id', getUpdatePage);
route.post('/update-user', postUpdateUser);





module.exports = route;