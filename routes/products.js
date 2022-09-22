const express = require('express')
const { getProducts } = require('../controllers/products')
const router = express.Router()

router.route('/')

router.get('/',(req,res)=>{
  console.log('get /products')
  const result = res.json({getProducts})
  console.log(result)
})

router.get('/:id',(req,res)=>{
  console.log('get /products/id')
})

//route for individual products

module.exports = router