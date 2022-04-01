import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

const app = express()

app.use(cors())

const PORT = process.env.PORT || 5000
