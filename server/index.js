// Server imports and setup
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

const router = require('./router')
const cors = require('cors')

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))
router(app)

const PORT = 3090 || process.env.PORT
const server = http.createServer(app)
server.listen(PORT)
console.log(`Server Live in: http://localhost:${PORT}`)
