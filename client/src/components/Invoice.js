import { SalesItem } from './SalesItem'
import { partial } from '../lib/utils'
import { 
  addSalesItem,
  editSalesItem,
  editSalesItemQty,
  editSalesItemAmount,
  removeSalesItem,
  editNewInvoice,
  editNewInvoiceCustomerName,
  editNewInvoiceCustomerPhone,
  editNewInvoiceSelectCustomer
} from '../actions'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { RaisedButton, TextField } from 'material-ui'
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import 'react-select/dist/react-select.css';

import React from 'react'
import { connect } from 'react-redux'

let Invoice = ({
  items,
  salesItems,
  newInvoice,
  handleAddSalesItem,
  handleEditSalesItem,
  handleEditSalesItemQty,
  handleEditSalesItemAmount,
  handleRemoveSalesItem,
  handleEditNewInvoice,
  handleEditNewInvoiceCustomerName,
  handleEditNewInvoiceCustomerPhone,
  handleSelectCustomer
}) => {
  const style = {
    td_number: {
      width: '5%'
    },
    td_select: {
      width: '50%'
    },
    td_input: {
      width: '10%'
    },
    table: {
      tableLayout: 'fixed'
    },
    add: {
      marginTop: 36
    },
    floatingLabel: {
      color: '#212121'
    },
    textfield: {
      marginRight: 24
    },
    customerInfo: {
      display: 'flex',
      marginBottom: 24
    },
    temp: {
      fontSize: 14,
      marginTop: 36,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr 100px' ,
      gridAutoRows: 32,
      gridColumnGap: '10%',
      alignItems: 'center',
      textAlign: 'right',
      fontWeight: 600,
      color: 'rgba(1,1,1,0.8)'
    },
    input: {
      width: '100%',
      height: 36,
      padding: 8,
      borderColor: '#d9d9d9 #ccc #b3b3b3',
      borderRadius: 2,
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      textAlign: 'right',
      fontSize: 14,
      fontWeight: 600,
      color: 'rgba(1,1,1,0.8)'
    },
    save: {
      gridRow: 'span 3',
      alignSelf: 'start'
    }
  }

  const names = [
    {
      name: 'cali cabdullahi axmed',
      phone: '616308976',
      value: (
        <MenuItem
          primaryText="cali cabdullahi axmed"
          secondaryText="616308976"
        />
      ),
    },
    {
      name: 'maxamed ilyaas saalax',
      phone: '614783491',
      value: (
        <MenuItem
          primaryText="maxamed ilyaas saalax"
          secondaryText="614783491"
        />
      ),
    },
    {
      name: 'yuusuf xusen axmed',
      phone: '615223344',
      value: (
        <MenuItem
          primaryText="yuusuf xusen axmed"
          secondaryText="615223344"
        />
      ),
    },
  ]

  const total = salesItems.map(salesItem => salesItem.amount)
    .reduce((a, b) => a + b, 0)

  return (
    <MuiThemeProvider>
      <div>

        <div style={style.customerInfo}>
          <AutoComplete
            searchText={newInvoice.customerName}
            onUpdateInput={handleEditNewInvoiceCustomerName}
            onNewRequest={handleSelectCustomer}
            openOnFocus={true}
            floatingLabelText="Customer Name"
            style={style.textfield}
            fullWidth={true}
            floatingLabelStyle={style.floatingLabel}
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={names} 
            dataSourceConfig={{text: 'name', value: 'value'}}
          />
          <TextField
            value={newInvoice.customerPhone}
            onChange={handleEditNewInvoiceCustomerPhone}
            fullWidth={true}
            floatingLabelStyle={style.floatingLabel}
            hintText=""
            floatingLabelText="Customer Phone" />
        </div>

        <div className="card">

          <table style={style.table}>
            <thead>
              <tr>
                <th style={style.td_number}>#</th>
                <th style={style.td_select}>Product</th>
                <th className="numeric" >qty</th>
                <th className="numeric" >price</th>
                <th className="numeric" >amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {salesItems.map((salesItem, index) =>

                <SalesItem key={salesItem.id}
                  index={index}
                  salesItem={salesItem}
                  items={items}
                  handleEditSalesItem={partial(handleEditSalesItem, salesItem.id)}
                  handleEditSalesItemQty={partial(handleEditSalesItemQty, salesItem.id)}
                  handleEditSalesItemAmount={partial(handleEditSalesItemAmount, salesItem.id)}
                  handleRemoveSalesItem={partial(handleRemoveSalesItem, salesItem.id)}
                />
              )}
            </tbody>
          </table>
        </div>

        <div style={style.temp}>

          <RaisedButton
            label="Save"
            primary={true}
            style={style.save}
          />

          <span>TOTAL</span>
          <span>${(total).toFixed(2)}</span>

          <span>PAID</span>
          <span>
            <input type="number"
              onChange={(evt) => handleEditNewInvoice(evt.target.value)}
              className="numeric"
              style={style.input}/>
          </span>

          <span>REMAINING</span>
          <span>${(total - newInvoice.paid).toFixed(2)}</span>
        </div>

      </div>
    </MuiThemeProvider>
  )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddSalesItem: () => dispatch(addSalesItem(null, 0, 0, 0)),

    handleEditSalesItem: (id, selectedValue) => dispatch(editSalesItem(id, selectedValue.value)),
    handleEditSalesItemQty: (id, evt) => dispatch(editSalesItemQty(id, evt.target.value)),
    handleEditSalesItemAmount: (id, evt) => dispatch(editSalesItemAmount(id, evt.target.value)),

    handleRemoveSalesItem: (id) => dispatch(removeSalesItem(id)),

    handleEditNewInvoice: (paid) => dispatch(editNewInvoice(paid)),
    handleEditNewInvoiceCustomerName: (customerName) => dispatch(editNewInvoiceCustomerName(customerName)),
    handleEditNewInvoiceCustomerPhone: (evt) => dispatch(editNewInvoiceCustomerPhone(evt.target.value)),
    handleSelectCustomer: (selected) => dispatch(editNewInvoiceSelectCustomer(selected))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Invoice)
