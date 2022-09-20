const express = require('express')
const { getProducts } = require('../controllers/products')
const router = express.Router()

router.route('/').get(getProducts) //api/products

//route for individual products

module.exports = router