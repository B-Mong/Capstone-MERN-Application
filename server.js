const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const db = require('./models')
const methodOverride = require('method-override');

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(path.resolve(__dirname, './client/build')));

//test data
let testData = [{id:7, title:"Samsung Galaxy Book", description:"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", price:1499, discountPercentage:4.15, rating:4.25, stock:50,brand:"Samsung",category:"laptops",thumbnail:"https://dummyjson.com/image/i/products/7/thumbnail.jpg",images:["https://dummyjson.com/image/i/products/7/1.jpg","https://dummyjson.com/image/i/products/7/2.jpg","https://dummyjson.com/image/i/products/7/3.jpg","https://dummyjson.com/image/i/products/7/thumbnail.jpg"]},
{id:8,title:"Microsoft Surface Laptop 4",description:"Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",price:1499, discountPercentage:10.23,rating:4.43,stock:68,brand:"Microsoft Surface",category:"laptops",thumbnail:"https://dummyjson.com/image/i/products/8/thumbnail.jpg",images:["https://dummyjson.com/image/i/products/8/1.jpg","https://dummyjson.com/image/i/products/8/2.jpg","https://dummyjson.com/image/i/products/8/3.jpg","https://dummyjson.com/image/i/products/8/4.jpg","https://dummyjson.com/image/i/products/8/thumbnail.jpg"]},
{id :10, title: "HP Pavilion 15-DK1056WM", description:"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10", price:1099, discountPercentage:6.18,rating:4.43,stock:89,brand:"HP Pavilion",category:"laptops",thumbnail:"https://dummyjson.com/image/i/products/10/thumbnail.jpeg",images:["https://dummyjson.com/image/i/products/10/1.jpg","https://dummyjson.com/image/i/products/10/2.jpg","https://dummyjson.com/image/i/products/10/3.jpg","https://dummyjson.com/image/i/products/10/thumbnail.jpeg"]}]


app.get('/api/products',(req,res) => {
  fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(json => res.json(json))

})
app.get ('/api/cart',(req,res) => {
  db.Item.find().then( items => {
    Promise.all(items.map(i => {
      return fetch(`https://dummyjson.com/products/${i.id}`)
      .then(response => response.json())
      .then(json => {return json})
    }))
    .then(data => res.json(data))
  })
})
app.post('/api/additem', (req, res)=>{
    db.Item.findOne({id: req.body.id}).then(item => {
      if(item == null){
        db.Item.create({id: req.body.id, quantity: 1 })
        .then(() => {
          console.log(req.body)
          res.redirect('/')
        })
      }
      else{
        db.Item.findOneAndUpdate({id: req.body.id}, {$inc : {'quantity' : 1}})
        .then(() => {
          console.log(req.body)
          res.redirect('/')
        })
      }
    })
    
    
})

app.delete('/api/removeitem', (req, res)=>{
  db.Item.findOneAndDelete({id: req.body.id})
  .then(() => res.redirect('/cart') )
})

app.get('/api/products/:id', (req, res)=>{
  fetch(`https://dummyjson.com/products/${req.params.id}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    res.json(json)
  })
})

app.get('/api/cart/count/:id', (req, res)=>{
  db.Item.findOne({id: req.params.id})
  .then(item => {
    if(item == null){
      res.json('0')
    }
    else{
      res.json(item.quantity)
    }
  })
})

app.put('/api/cart/count/:id', (req, res)=>{
  console.log('running'+req.body.count)
  db.Item.findOneAndUpdate({id: req.params.id}, {quantity: req.body.count})
  .then(() => res.redirect('/cart') )
})

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})
app.listen(3001, ()=>{
  console.log('listening on port 3001')
})