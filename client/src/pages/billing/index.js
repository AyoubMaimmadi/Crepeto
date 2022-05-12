import React, { useState, useEffect } from 'react'
import PageContainer from '../../components/PageContainer'
import AppTable from '../../components/AppTable'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { getResources } from '../../helpers'

const useStyles = makeStyles({
  dateField: {
    maxWidth: 175,
    margin: '16px 20px 20px 0',
  },
  textField: {
    maxWidth: 175,
    marginRight: '20px',
    marginBottom: '20px',
  },
  button: {
    margin: '0 20px',
  },
  divider: {
    margin: '30px',
  },
  center: {
    textAlign: 'center',
    margin: '30px',
    fontWeight: '750',
    color: 'orangered',
    textTransform: 'uppercase',
  },
  span: {
    color: 'red',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: '1rem',
  },
})

function Billing() {
  const [billing, setBilling] = useState([])
  const [billingId, setBillingId] = useState('')
  const classes = useStyles()

  useEffect(() => {
    getBilling()
  }, [])

  const getBilling = () => {
    getResources(`/billing`, setBilling)
  }

  const getBillingId = (event) => {
    setBillingId(event.target.value)
  }

  const getMonthBilling = () => {
    getResources(`/billing/${billingId}`, setBilling)
  }

  // get monthly expenses
  const getMonthlyExpense = () => {
    getResources(`/billing/${billingId}`, setBilling)
  }

  // get monthly revenue
  const getMonthlyRevenue = () => {
    getResources(`/billing/${billingId}`, setBilling)
  }

  // Get all Employees when the page is rendered
  useEffect(() => {
    fetch('http://localhost:3090/billing')
      .then((response) => response.json())
      .then((data) => {
        setBilling(data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <PageContainer>
      <h2 className={classes.center}>
        Billing <span className={classes.span}>in MAD</span>
      </h2>
      <AppTable tableData={billing} />
      <Divider className={classes.divider} />

      <Grid item container alignItems="center" justify="center">
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getBilling}
        >
          Get All Billings
        </Button>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <TextField
          className={classes.textField}
          label="Month Number"
          onChange={getBillingId}
        />
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getMonthlyExpense}
        >
          Search Month Expense
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getMonthBilling}
        >
          Search Month Revenue
        </Button>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <TextField
          className={classes.textField}
          label="Month Number"
          onChange={getBillingId}
        />
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getMonthBilling}
        >
          More Info
        </Button>
      </Grid>
    </PageContainer>
  )
}
export default Billing
