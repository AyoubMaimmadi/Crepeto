const express = require('express')
const router = express.Router()
const warehouses = require('../data/warehouses1.json')
const inventories = require('../data/inventories.json')
const { v4: uuidv4 } = require('uuid')

const fs = require('fs')
const { json } = require('express')

//get all warehouses
router.get('/warehouses1', (req, res) => {
  res.status(200).json(warehouses)
})

//get one warehouse
router.get('/warehouses1/:warehouse1Id', (req, res) => {
  let { warehouseId } = req.params
  const warehouseInfo = warehouses.find(
    (warehouse) => warehouse.id === warehouseId
  )
  if (!warehouseInfo) {
    res.status(400).send(`There is no warehouse with id of ${warehouseId}`)
  }
  res.status(200).json(warehouseInfo)
})

//edit warehouse detail
router.put('/warehouses1/:warehouse1Id', (req, res) => {
  let { warehouseId } = req.params
  const newWarehouseInfo = {
    id: warehouseId,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    contact: {
      name: req.body.contact.name,
      position: req.body.contact.position,
      phone: req.body.contact.phone,
      email: req.body.contact.email,
    },
  }
  const newWarehouseDataSet = warehouses.map((warehouse) => {
    if (warehouse.id === warehouseId) {
      return (warehouse = newWarehouseInfo)
    } else {
      return (warehouse = warehouse)
    }
  })

  const newInventoryDataSet = inventories.map((inventory) => {
    if (inventory.warehouseID === warehouseId) {
      return { ...inventory, warehouseName: req.body.name }
    } else {
      return (inventory = inventory)
    }
  })

  fs.writeFile(
    __dirname + '/../data/warehouses1.json',
    JSON.stringify(newWarehouseDataSet, null, 2),
    (err1) => {
      fs.writeFile(
        __dirname + '/../data/inventories1.json',
        JSON.stringify(newInventoryDataSet, null, 2),
        (err2) => {
          if (err1 || err2) {
            console.log(err1 || err2)
          } else {
            res.status(200).json('warehouse info updated')
          }
        }
      )
    }
  )
})

//get inventories in one warehouse
router.get('/warehouses1/:warehouse1Id/inventory1', (req, res) => {
  let { warehouseId } = req.params
  const data = inventories.filter(
    (inventory) => inventory.warehouseID === warehouseId
  )
  if (!data) {
    res.status(400).send(`There is no inventory under the ${warehouseId}`)
  }
  res.status(200).json(data)
})

//post endpoint for adding a new warehouse
router.post('/warehouses1/add', (req, res) => {
  const newWarehouseInfo = {
    id: uuidv4(),
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    contact: {
      name: req.body.contact.name,
      position: req.body.contact.position,
      phone: req.body.contact.phone,
      email: req.body.contact.email,
    },
  }
  const newWarehouseDataSet = warehouses
  newWarehouseDataSet.push(newWarehouseInfo)

  fs.writeFile(
    __dirname + '/../data/warehouses1.json',
    JSON.stringify(newWarehouseDataSet, null, 2),
    (err) => {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json('warehouse Added')
      }
    }
  )
})

//delete warehouse info

router.delete(`/warehouses1/:warehouse1Id`, (req, res) => {
  const { warehouseId } = req.params
  const selectedWarehouse = warehouses.findIndex(
    (warehouse) => warehouse.id === warehouseId
  )
  const warehouse = warehouses[selectedWarehouse]
  warehouses.splice(selectedWarehouse, 1)

  const newInventoryDataSet = inventories.filter((inventory) => {
    if (inventory.warehouseID !== warehouseId) {
      return inventory
    }
  })

  const dataObject = JSON.stringify(warehouses, null, 2)
  const newInventory = JSON.stringify(newInventoryDataSet, null, 2)
  fs.writeFile(__dirname + '/../data/warehouses1.json', dataObject, (err) => {
    console.log(err)

    fs.writeFile(
      __dirname + '/../data/inventories1.json',
      newInventory,
      (err) => {
        console.log(err)
      }
    )
  })
  res.status(200).json(newInventory)
})

module.exports = router
