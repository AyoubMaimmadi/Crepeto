import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { items, inventoryPage, addItemDialog, editItemDialog, historys, salesItems, newInvoice } from './reducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const reducer = combineReducers({
  items, inventoryPage, addItemDialog, editItemDialog, historys, salesItems, newInvoice
})

const persistedState = loadState()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

store.subscribe(throttle(() => {
  saveState({
    items: store.getState().items,
    historys: store.getState().historys
  })
}, 1000))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);
