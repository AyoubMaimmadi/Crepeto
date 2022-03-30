import { InventoryItem } from './InventoryItem'
import { partial } from '../lib/utils'
import { toggleSelectItem } from '../actions'


import ItemAdder  from './ItemAdder'
import ItemRemover from './ItemRemover'
import ItemEditor from './ItemEditor'
import { ItemSelector } from './ItemSelector'

import React from 'react'
import { connect } from 'react-redux'

const getSelectedItem = (items) => items.find(t => t.selected)

let InventoryList = ({items, handleInputChange, handleSelectItem}) => {
  const style = {
    flex: 2
  }
  return (
    <div style={style}>
      <div className="card">
        <div className="card-header">
          <h1>Inventory</h1>
          <span>
            <ItemAdder />
            {getSelectedItem(items) && <ItemEditor item={getSelectedItem(items)}/>}
            <ItemRemover />
          </span>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <ItemSelector disabled={true} />
              </th>
              <th>Item</th>
              <th className="numeric">Unit Cost</th>
              <th className="numeric">Unit Price</th>
              <th className="numeric">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => <InventoryItem key={item.id} {...item}
              handleSelectItem={ partial(handleSelectItem, item.id) }
            />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectItem: (id) => dispatch(toggleSelectItem(id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InventoryList)
