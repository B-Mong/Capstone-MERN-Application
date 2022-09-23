const express = require('express')
const router = express.Router()
const db = require('../db')//importing Pool
const axios = require('axios')

router.route('/').get((req,res)=>{
  const results = db.query('SELECT * FROM cart')
  res.json(results)
  //select everything from cart and put it in a json
})

router.get('/count/:id',(req,res)=>{
  //redirect to /api/products/:id
})

router.put('/count/:id',(req,res)=>{
  //add item to db
})

router.delete('/count/:id',(req,res)=>{
  //delete item from db
})

module.exports = router