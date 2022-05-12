const pool = require('./pool')

// get the mothly billing from /billing/:id
exports.getMonthlyBilling = (req, res) => {
  pool.query(
    `SELECT * FROM billing ORDER BY MonthyBilling_id`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

// get mothly expenses from /billing/:id
exports.getMonthlyExpense = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(
    `SELECT expense FROM billing WHERE MonthyBilling_id=${id}`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

// get mothly revenue from /billing/:id
exports.getMonthlyRevenue = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(
    `SELECT revenue FROM billing WHERE MonthyBilling_id=${id}`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

//get profit from /billing/:id
exports.getMonthlyProfit = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(
    `SELECT profit FROM billing WHERE MonthyBilling_id=${id}`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}
