import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Customers from '../pages/customers'
import Home from '../pages/home'
import Employees from '../pages/employees'
import Orders from '../pages/orders'
import Products from '../pages/products'
import Suppliers from '../pages/suppliers'
import Billing from '../pages/billing'

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/customers" component={Customers} />
      <Route path="/employees" component={Employees} />
      <Route path="/orders" component={Orders} />
      <Route path="/products" component={Products} />
      <Route path="/suppliers" component={Suppliers} />
      <Route path="/billing" component={Billing} />
    </Switch>
  )
}

export default AppRouter
