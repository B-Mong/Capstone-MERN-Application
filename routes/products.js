const express = require('express')
const router = express.Router()
const axios = require('axios')
router.route('/')

router.get('/',(req,res)=>{
  //having trouble getting request
  //const query = req.body.query
  //get dummyjson.com/products/search?q={query}
axios.get('https://dummyjson.com/products')
})
`
router.get('/:id',(req,res)=>{
  console.log('get /products/id')
  //const itemId = req.body.itemId
  //get dummyjson.com/products/itemId
  //send query data up from form, insert it into dummyjson url?
})

module.exports = router

//"Since fetch is a web API, you will not be able to use it on server code"