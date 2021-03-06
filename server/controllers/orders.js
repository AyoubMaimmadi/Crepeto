const pool = require('./pool')

// Get all orders in the database
exports.getOrders = (req, res) => {
  pool.query(`SELECT * FROM orders ORDER BY order_id;`, (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
  })
}

// Get an order's info based on the given id
exports.getOrder = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(`SELECT * FROM orders WHERE order_id=${id};`, (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
  })
}

// Get the customer name, product name, and product quantity for all orders
exports.getFullOrderInfo = (req, res) => {
  pool.query(
    `SELECT customer.name as customer_name, product.product_name, orders.product_quantity FROM orders
        JOIN customer ON orders.customer_id=customer.customer_id 
        JOIN product ON orders.product_id=product.product_id;`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

// Get the order ID, order dates, and shipping dates for all of a customer's orders
exports.getCustomerOrderDates = (req, res) => {
  const customer_id = parseInt(req.params.id)
  pool.query(
    `SELECT DISTINCT order_id, order_date FROM orders
    JOIN customer ON orders.customer_id=${customer_id}`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

// Get the products from all of a customer's orders
exports.getProductsFromOrders = (req, res) => {
  const customer_id = parseInt(req.params.id)
  pool.query(
    `SELECT product.product_name, product_quantity FROM orders
    JOIN product on product.product_id=orders.product_id
    WHERE customer_id=${customer_id}`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

// Add a new order
exports.addOrder = (req, res) => {
  const { order_name, order_date, product_quantity, customer_id, product_id } =
    req.body
  pool.query(
    `SELECT quantity FROM product WHERE product_id=${product_id}`,
    (err, results) => {
      if (err) {
        throw err
      }
      // Check if the order's quantity can be matched
      if (product_quantity <= results.rows[0].quantity) {
        pool.query(
          `INSERT INTO orders(order_name, order_date, product_quantity, customer_id, product_id) 
          VALUES('${order_name}','${order_date}', ${product_quantity}, ${customer_id}, ${product_id});`,
          (err, results) => {
            if (err) {
              throw err
            }
            // Return newly created order
            res.status(201).json(req.body)
          }
        )
      } else {
        res.status(400).json(`Product quantity exceeded`)
      }
    }
  )
}

// Delete an order based on the given id
exports.deleteOrder = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(`DELETE FROM orders WHERE order_id=${id}`, (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(`Order ${id} deleted`)
  })
}

// Update an order based on the given id
exports.updateOrder = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(
    `UPDATE orders SET order_date='${req.body.order_date}', product_quantity=${req.body.product_quantity}, customer_id=${req.body.customer_id}, product_id=${req.body.product_id} WHERE order_id=${id}`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(`Order ${id} updated`)
    }
  )
}
