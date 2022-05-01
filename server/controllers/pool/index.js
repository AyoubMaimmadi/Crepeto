const Pool = require('pg').Pool

// link our app to the database
// module.exports = new Pool({
//   user: 'dev',
//   host: 'localhost',
//   database: 'crepeto',
//   password: 'password1',
//   port: 5432,
// })

module.exports = new Pool({
  user: 'kfogwdldefhmpj',
  host: `ec2-3-224-125-117.compute-1.amazonaws.com`,
  database: 'd1cafg9qdvma7l',
  password: '15c2e450c43c85f40b86d14e2e80eaa9dec874b45165cc191f698fc0b1c5c794',
  port: 5432,
  connection: process.env.DATABASE_URL,
})
