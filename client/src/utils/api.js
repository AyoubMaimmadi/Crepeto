import axios from 'axios'

export const URL = 'http://localhost:8080/api'

export const getWarehouses = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${URL}/warehouses`)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const addWarehouse = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${URL}/warehouses/add`, data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const addInventory = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${URL}/inventory/add`, data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(`${err}, Something Wrong`)
      })
  })
}

export const addEmployee = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${URL}/employees/add`, data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(`${err}, Something Wrong`)
      })
  })
}
