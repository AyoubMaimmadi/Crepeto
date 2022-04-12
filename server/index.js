const express = require('express')
const cors = require('cors')
const app = express()

//routes goes here
const warehouseRoutes = require('./routes/warehouse')
const inventoryRoutes = require('./routes/inventory')
const employeesRoutes = require('./routes/employees')

//env variables
require('dotenv').config()
const port = process.env.PORT || 8080

//middleware
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

//endoints
app.use('/api', warehouseRoutes)
app.use('/api', inventoryRoutes)
app.use('/api', employeesRoutes)

//listening on port 8080
app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
