const { Pool } = require('pg')

const pool = new Pool({
  //environment variables, connect to a database called cart
  user: PG_USER,
  password: PG_PASSWORD,
  host: 'localhost:3001',
  database: 'cart',
  //default postgres port
  port: 5432
})

module.exports = {
  query:(text,params)=>pool.query(text,params)
}