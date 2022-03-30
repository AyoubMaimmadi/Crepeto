export const salesItem = (state, action) => {
  switch(action.type) {
    case 'ADD_SALES_ITEM':
      return {
        id: action.id,
        item_id: action.item_id,
        qty: action.qty,
        price: action.price,
        amount: action.amount
      }
    case 'EDIT_SALES_ITEM':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        item_id: action.item_id,
      }
    case 'EDIT_SALES_ITEM_AMOUNT':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        amount: parseFloat(action.amount, 10)
      }
    case 'EDIT_SALES_ITEM_PRICE':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        price: parseFloat(action.price, 10),
      }
    case 'EDIT_SALES_ITEM_QTY':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        qty: parseInt(action.qty, 10),
      }
    default:
      return state
  }
}

const initialSalesItemsState = { id: 'aa099a631f628', item_id: null, qty: 0, price: 0, amount: 0 }

export const salesItems = (state = [initialSalesItemsState], action) => {
  switch(action.type) {
    case 'ADD_SALES_ITEM':
      return [
        ...state,
        salesItem(undefined, action)
      ]
    case 'EDIT_SALES_ITEM':
    case 'EDIT_SALES_ITEM_QTY':
    case 'EDIT_SALES_ITEM_PRICE':
    case 'EDIT_SALES_ITEM_AMOUNT':
      return state.map(t => salesItem(t, action))
    case 'REMOVE_SALES_ITEM':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

const initialNewInvoiceState = { paid: 0, customerName: '', customerPhone: '' }

export const newInvoice = (state = initialNewInvoiceState, action) => {
  switch(action.type) {
    case 'EDIT_NEW_INVOICE':
      return {
        ...state,
        paid: parseFloat(action.paid, 10),
      }
    case 'EDIT_NEW_INVOICE_CUSTOMER_NAME':
      return {
        ...state,
        customerName: action.customerName
      }
    case 'EDIT_NEW_INVOICE_CUSTOMER_PHONE':
      return {
        ...state,
        customerPhone: action.customerPhone
      }
    default:
      return state
  }
}

export const customers = (state = [], action) => {

}
