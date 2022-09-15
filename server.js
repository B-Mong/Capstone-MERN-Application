const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  console.log('hit the route')
  res.json({
    message: 'homepage',
    data: data
  })
})
app.listen(3001, ()=>{
  console.log('listening on port 3001')
})
