const express = require('express')
const route = express.Router()
const { getHomepage, getTest } = require('../controllers/homeController')



route.get('/', getHomepage);
route.get('/test', getTest);




module.exports = route;