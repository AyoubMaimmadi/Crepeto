import { v4 } from 'node-uuid'
import { findById } from './lib/utils'

export const setPage = (page) => ({ type: 'SET_PAGE', page })

export const toggleAddItemDialog = () => ({ type: 'TOGGLE_ADD_ITEM_DIALOG' })

export const toggleEditItemDialog = () => ({ type: 'TOGGLE_EDIT_ITEM_DIALOG' })

export const addItem = (name, unitCost, unitPrice, qty) => ({type: 'ADD_ITEM', id: v4(), name, unitCost, unitPrice, qty}) 

export const toggleSelectItem = (id) => ({ type: 'TOGGLE_SELECT_ITEM', id })

export const removeItem = () => ({ type: 'REMOVE_ITEM' })

export const editItem = (id, name, unitCost, unitPrice, qty) => ({ type: 'EDIT_ITEM', id, name, unitCost, unitPrice, qty })

export const addHistory = (id, name, qty, status, date) => ({ type: 'ADD_HISTORY', id: v4(), name, qty, status, date })

export const addSalesItem = (item_id, qty, price, amount) => ({ type: 'ADD_SALES_ITEM', id: v4(), item_id, qty, price, amount})

export const editSalesItem = (id, item_id) => (dispatch, getState) => {
  const item = findById(item_id, getState().items)
  const qty = 1

  dispatch({ type: 'EDIT_SALES_ITEM', id, item_id })
  dispatch({ type: 'EDIT_SALES_ITEM_QTY', id, qty })
  dispatch({ type: 'EDIT_SALES_ITEM_PRICE', id, price: item.unitPrice})
  dispatch({ type: 'EDIT_SALES_ITEM_AMOUNT', id, amount: item.unitPrice * qty })

  const salesItems = getState().salesItems
  if(!salesItems.length || salesItems.slice(-1)[0].item_id) {
    dispatch(addSalesItem(null, 0, 0, 0))
  }
}

export const editSalesItemQty = (id, qty) => (dispatch, getState) => {
  const salesItem = findById(id, getState().salesItems)

  dispatch({ type: 'EDIT_SALES_ITEM_QTY', id, qty })
  dispatch({ type: 'EDIT_SALES_ITEM_AMOUNT', id, amount: salesItem.price * qty })
}

export const editSalesItemPrice = (id, price) => ({ type: 'EDIT_SALES_ITEM_PRICE', id, price })

export const editSalesItemAmount = (id, amount) => ({ type: 'EDIT_SALES_ITEM_AMOUNT', id, amount })

export const removeSalesItem = (id) => (dispatch, getState) => {
  dispatch({ type: 'REMOVE_SALES_ITEM', id })

  const salesItems = getState().salesItems
  if(!salesItems.length || salesItems.slice(-1)[0].item_id) {
    dispatch(addSalesItem(null, 0, 0, 0))
  }
}

export const editNewInvoice = (paid) => ({ type: 'EDIT_NEW_INVOICE', paid })
export const editNewInvoiceCustomerName = (customerName) => ({ type: 'EDIT_NEW_INVOICE_CUSTOMER_NAME', customerName })
export const editNewInvoiceCustomerPhone = (customerPhone) => ({ type: 'EDIT_NEW_INVOICE_CUSTOMER_PHONE', customerPhone })

export const editNewInvoiceSelectCustomer = (selected) => (dispatch, getState) => {
  dispatch(editNewInvoiceCustomerName(selected.name))
  dispatch(editNewInvoiceCustomerPhone(selected.phone))
}
