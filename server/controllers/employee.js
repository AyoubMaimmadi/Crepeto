const pool = require('./pool')

// Get all employees in the database
exports.getEmployees = (req, res) => {
  pool.query(`SELECT * FROM employee ORDER BY employee_id;`, (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
  })
}

// Get a employee's info based on the given id
exports.getEmployee = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(
    `SELECT * FROM employee WHERE employee_id=${id};`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

// Get all addresses from employees and suppliers for logistical purposes
exports.getGeographicInfo = (req, res) => {
  pool.query(
    `SELECT address FROM employee
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

exports.getActiveEmployeesInfo = (req, res) => {
  pool.query(
    `SELECT * FROM employee ORDER BY employee_id;;`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

// Add a new employee to the database
exports.addEmployee = (req, res) => {
  const { name, phone, email, address, salary } = req.body
  pool.query(
    `INSERT INTO employee(name, phone, email, address, salary) 
    VALUES('${name}', '${phone}', '${email}', '${address}', '${salary}')
    RETURNING name, phone, email, address, salary;`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(201).send(results.rows)
    }
  )
}

// Delete an employee based on the given id
exports.deleteEmployee = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(
    `DELETE FROM employee WHERE employee_id=${id} RETURNING employee_id;`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}

// Update an employee based on the given id
exports.updateEmployee = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(
    `UPDATE employee SET name='${req.body.name}', phone='${req.body.phone}', email='${req.body.email}', address='${req.body.address}', salary='${req.body.salary}'
    WHERE employee_id=${id}
    RETURNING employee_id;`,
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    }
  )
}
