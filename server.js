const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const db = require('./db')//i think this is just used in cart router, i haven't found a reason to use in product router
const productRoutes = require('./routes/products')
const cartRoutes = require('./routes/cart')
require('dotenv').config()


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/', (req, res)=>{
  res.send('hit home route')
})

app.use('/api/products', productRoutes)
app.use('/incart', cartRoutes)



app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(process.env.PORT, ()=>{
  console.log('listening on ' + process.env.PORT)
})
