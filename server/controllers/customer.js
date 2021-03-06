const pool = require('./pool')

// Get all customers in the database
exports.getCustomers = (req, res) => {
  pool.query(`SELECT * FROM customer ORDER BY customer_id;`, (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
  })
}

// Get a customer's info based on the given id
exports.getCustomer = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(
    `SELECT * FROM customer WHERE customer_id=${id};`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

//Get all addresses from customers and suppliers for logistical purposes
exports.getGeographicInfo = (req, res) => {
  pool.query(
    `SELECT address FROM customer
    UNION
    SELECT address FROM supplier;`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

//Get the name, phone number, and email of all customers who have an active order
exports.getActiveCustomersInfo = (req, res) => {
  pool.query(
    `SELECT DISTINCT name, phone, email FROM customer
    JOIN order_details ON customer.customer_id=order_details.customer_id;`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

// Get the name, phone number, and email of all customers who ordered something in October
exports.getOctoberCustomers = (req, res) => {
  pool.query(
    `SELECT DISTINCT name, phone, email FROM customer
    JOIN order_details ON customer.customer_id=order_details.customer_id
    WHERE order_details.order_date >= '2020-10-01' AND order_details.order_date <= '2020-10-31';`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

// Add a new customer
exports.addCustomer = (req, res) => {
  const { name, phone, email, address } = req.body
  pool.query(
    `INSERT INTO customer(name, phone, email, address) 
    VALUES('${name}', '${phone}', '${email}', '${address}')
    RETURNING name, phone, email, address;`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(201).send(results.rows)
    }
  )
}

// Delete a customer based on the given id
exports.deleteCustomer = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(
    `DELETE FROM customer WHERE customer_id=${id}
    RETURNING customer_id;`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

// Update a customer based on the given id
exports.updateCustomer = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(
    `UPDATE customer SET name='${req.body.name}', phone='${req.body.phone}', email='${req.body.email}', address='${req.body.address}'
    WHERE customer_id=${id}
    RETURNING customer_id;`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}
