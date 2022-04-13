const express = require('express')
const cors = require('cors')
const app = express()

//routes goes here
const employeesRoutes = require('./routes/employees')

const warehouseRoutes = require('./routes/warehouse')
const inventoryRoutes = require('./routes/inventory')

const warehouse1Routes = require('./routes/warehouse1')
const inventory1Routes = require('./routes/inventory1')

//env variables
require('dotenv').config()
const port = process.env.PORT || 8080

//middleware
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

//endoints
app.use('/api', employeesRoutes)

app.use('/api', warehouseRoutes)
app.use('/api', inventoryRoutes)

app.use('/api', warehouse1Routes)
app.use('/api', inventory1Routes)

//listening on port 8080
app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
