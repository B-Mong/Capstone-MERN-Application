const express = require('express')
const app = express()

app.get('/homepage', (req, res)=>{
  console.log('hit the route')
  res.json({
    message: 'homepage'
  })
})
app.listen(3001, ()=>{
  console.log('listening on port 3001')
})
