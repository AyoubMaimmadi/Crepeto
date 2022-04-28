import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import HomeIcon from '@material-ui/icons/Home'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import { Link, useLocation } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#95f7ba',
  },
  tabs: {
    backgroundColor: '#2ce4e8',
  },
  icon: {
    color: '#564946',
  },
  text: {
    color: '#564946',
    fontWeight: '700',
  },
})

function Navbar() {
  const classes = useStyles()
  const location = useLocation()
  const [value, setValue] = useState(location.pathname)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Paper square className={classes.root}>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab
          icon={<HomeIcon className={classes.icon} />}
          className={classes.text}
          component={Link}
          to={'/'}
          value="/"
          label="HOME"
        />
        <Tab
          icon={<ShoppingCartIcon className={classes.icon} />}
          className={classes.text}
          component={Link}
          to={'/products'}
          value="/products"
          label="PRODUCTS"
        />
        <Tab
          icon={<PeopleIcon className={classes.icon} />}
          className={classes.text}
          component={Link}
          to={'/customers'}
          value="/customers"
          label="CUSTOMERS"
        />
        <Tab
          icon={<MenuBookIcon className={classes.icon} />}
          className={classes.text}
          component={Link}
          to={'/orders'}
          value="/orders"
          label="ORDERS"
        />
        <Tab
          icon={<LocalShippingIcon className={classes.icon} />}
          className={classes.text}
          component={Link}
          to={'/suppliers'}
          value="/suppliers"
          label="SUPPLIERS"
        />
        <Tab
          icon={<PeopleIcon className={classes.icon} />}
          className={classes.text}
          component={Link}
          to={'/employees'}
          value="/employees"
          label="Employees"
        />{' '}
        <Tab
          icon={<LocationCityIcon className={classes.icon} />}
          className={classes.text}
          component={Link}
          to={'/billing'}
          value="/billing"
          label="Billing"
        />
      </Tabs>
    </Paper>
  )
}

export default Navbar
