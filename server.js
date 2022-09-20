const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
//process.env.PORT = 3001

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, './client/build')));

//add routes

//Products controller
const productRoutes = require('./routes/products')



// app.get('/products',(req,res) => {
//   res.json({testData})
// })
// app.post('/additem', (req, res)=>{
//   console.log(req.body)
//   res.redirect('/')
// })
// app.get('/*', (req, res)=>{
//   res.sendFile(path.join(__dirname, './client/build/index.html'))
// })

app.use('/api/products', productRoutes)

app.listen(process.env.PORT, ()=>{
  console.log('listening on port 3001')
})
