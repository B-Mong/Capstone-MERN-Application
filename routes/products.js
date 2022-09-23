const express = require('express')
const { getProducts } = require('../controllers/products')
const router = express.Router()
const axios = require('axios')
router.route('/')

router.get('/',(req,res)=>{
  const products = res.json(axios.get('https://dummyjson.com/products'))
  res.send(products)
})

router.get('/:id',(req,res)=>{
  console.log('get /products/id')
  //send query data up from form, insert it into dummyjson url?
})

module.exports = router