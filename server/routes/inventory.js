const express = require('express')
const router = express.Router()
const warehouses = require('../data/warehouses.json')
const inventories = require('../data/inventories.json')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

//get all inventory
router.get('/inventory', (_req, res) => {
  res.status(200).json(inventories)
})

//get single inventory info
router.get('/inventory/:inventoryId', (req, res) => {
  const id = req.params.inventoryId
  const selectedInventory = inventories.filter(
    (inventory) => inventory.id === id
  )

  if (selectedInventory) {
    res.status(200).send(selectedInventory)
  } else {
    res.status(400).json(`Inventory with id: ${id} does not exist`)
  }
})

router.post('/inventory/add', (req, res) => {
  const {
    warehouseID,
    status,
    warehouseName,
    itemName,
    description,
    category,
    quantity,
  } = req.body

  if (
    warehouseID &&
    status &&
    warehouseName &&
    itemName &&
    description &&
    category &&
    quantity
  ) {
    inventories.push({
      id: uuidv4(),
      warehouseName,
      itemName,
      description,
      warehouseID,
      category,
      status,
      quantity: Number(quantity),
    })
  } else {
    res.status(400).send('Incomplete Application')
  }

  fs.writeFile(
    __dirname + '/../data/inventories.json',
    JSON.stringify(inventories, null, 2),
    (err) => {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json('Inventory Added')
      }
    }
  )
})

//delete inventory info

router.delete('/inventory/:inventoryId', (req, res) => {
  const { inventoryId } = req.params
  const selectedInventory = inventories.findIndex(
    (inventory) => inventory.id === inventoryId
  )
  const inventory = inventories[selectedInventory]
  inventories.splice(selectedInventory, 1)
  const dataObject = JSON.stringify(inventories, null, 2)
  fs.writeFile(__dirname + '/../data/inventories.json', dataObject, (err) => {
    console.log(err)
  })
  res.status(200).json(inventory)
})

// router to update inventory item
router.put('/inventory/:inventoryId/edit', (req, res) => {
  let inventoryId = req.params.inventoryId

  //remember to send warehouseId from front-end
  const {
    warehouseID,
    warehouseName,
    itemName,
    description,
    category,
    status,
    quantity,
  } = req.body

  if (
    (warehouseID,
    warehouseName && itemName && description && category && status && quantity)
  ) {
    const newInventoryInfo = {
      id: inventoryId,
      warehouseID,
      warehouseName,
      itemName,
      description,
      category,
      status,
      quantity: Number(quantity),
    }
    const newInventoryData = inventories.map((inventory) => {
      if (inventory.id === inventoryId) {
        return (inventory = newInventoryInfo)
      } else {
        return (inventory = inventory)
      }
    })

    fs.writeFile(
      __dirname + '/../data/inventories.json',
      JSON.stringify(newInventoryData, null, 2),
      (err) => {
        if (err) {
          console.log(err)
        } else {
          res.status(200).json('Inventory info updated')
        }
      }
    )
  }
})

module.exports = router
