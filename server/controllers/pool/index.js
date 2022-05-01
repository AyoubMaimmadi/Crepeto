const Pool = require('pg').Pool

// link our app to the database
module.exports = new Pool({
  user: 'dev',
  host: 'localhost',
  database: 'crepeto',
  password: 'password1',
  port: 5432,
})

// Production table in Heroku
// module.exports = new Pool({
//   user: process.env.USER,
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   connection: process.env.DATABASE_URL,
//   password: process.env.PASSWORD,
//   port: 5432,
// })
