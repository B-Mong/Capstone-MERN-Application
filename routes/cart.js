const express = require('express')
const router = express.Router()
const db = require('../db')//importing Pool
const axios = require('axios')

router.route('/').get((req,res)=>{
  const results = db.query('SELECT * FROM cart')
  res.json(results)
  //const cartList = [req.body.resultsId or something]
  //return cartList to views
  //select everything from cart and put it in a json
})

router.get('/count/:id',(req,res)=>{
  //redirect to /api/products/:id
  //const itemId = req.body.Id
  //redirect to cartview with id
})

router.put('/count/:id',(req,res)=>{
  //add item to db
  //const itemId = req.body.itemId
  //add itemId to db
})

router.delete('/count/:id',(req,res)=>{
  //delete item from db
  //const itemId = req.body.itemId
  //remove itemId from db
})

module.exports = router