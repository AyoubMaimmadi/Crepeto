const Pool = require('pg').Pool

// link our app to the database
module.exports = new Pool({
  user: 'dev',
  host: 'localhost',
  database: 'crepeto',
  password: 'password1',
  port: 5432,
})
