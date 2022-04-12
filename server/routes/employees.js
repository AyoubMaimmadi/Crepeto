const express = require('express')
const router = express.Router()
const warehouses = require('../data/warehouses.json')
const inventories = require('../data/inventories.json')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

router.get('/employees', (_req, res) => {
  res.status(200).json(employees)
})

router.get('/employees/:employeeId', (req, res) => {
  const id = req.params.employeeId
  const selectedEmployee = employees.filter((employee) => employee.id === id)

  if (selectedEmployee) {
    res.status(200).send(selectedEmployee)
  } else {
    res.status(400).json(`Employee with id: ${id} does not exist`)
  }
})

router.post('/inventory/add', (req, res) => {
  const { id, empName, empCIN, description, empSalary, managerId } = req.body

  if (id && empName && empCIN && description && empSalary && managerId) {
    employees.push({
      id: uuidv4(),
      empName,
      empCIN,
      description,
      empSalary,
      managerId,
    })
  } else {
    res.status(400).send('Incomplete Application')
  }

  fs.writeFile(
    __dirname + '/../data/employees.json',
    JSON.stringify(employees, null, 2),
    (err) => {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json('Employee Added')
      }
    }
  )
})

module.exports = router
