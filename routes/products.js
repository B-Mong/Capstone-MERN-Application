const express = require('express')
const { getProducts } = require('../controllers/products')
const router = express.Router()
const Axios = require('axios')
router.route('/')

router.get('/',(req,res)=>{
  //having trouble getting request
  //const query = req.body.query
  //get dummyjson.com/products/search?q={query}
  const products = res.json(Axios.get('https://dummyjson.com/products'))
  res.send(products)
})

router.get('/:id',(req,res)=>{
  console.log('get /products/id')
  //const itemId = req.body.itemId
  //get dummyjson.com/products/itemId
  //send query data up from form, insert it into dummyjson url?
})

module.exports = router