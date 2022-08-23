 
const { Pool, Client } = require('pg')


const client = new Client({
  user: 'user',
  host: 'localhost',
  database: 'userdb',
  password: 'aaa123456@',
  port: 5433,
})


module.exports = client;