import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is live: http://localhost:${PORT}`)
})
