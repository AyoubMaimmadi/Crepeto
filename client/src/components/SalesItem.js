import { grey500 } from 'material-ui/styles/colors'
import Cancel from 'material-ui/svg-icons/navigation/cancel'
import { IconButton } from 'material-ui'
import Select from 'react-select'

import React from 'react'

export const SalesItem = ({
  index,
  items,
  salesItem,
  handleEditSalesItem,
  handleEditSalesItemQty,
  handleEditSalesItemAmount,
  handleRemoveSalesItem
}) => {

  const style = {
    input: {
      width: '100%',
      height: 36,
      padding: 8,

      borderColor: '#d9d9d9 #ccc #b3b3b3',
      borderRadius: 2,
      border: '1px solid #ccc',
      boxSizing: 'border-box',
    },
    select: {
      borderRadius: 2,
    },
    menuContainerStyle: {
      zIndex: 100
    },
  }

  return (
    <tr key={salesItem.id}>
      <td>{index+1}</td>
      <td style={style.td_select}>
        <Select name="item" style={style.select}
          menuContainerStyle={style.menuContainerStyle}
          clearable={false}
          value={salesItem.item_id}
          onChange={handleEditSalesItem}
          options={items.map(item => ({value: item.id, label: item.name}))}
        />
      </td>
      <td className="numeric">
        <input type="number"
          className="numeric"
          onChange={handleEditSalesItemQty}
          onFocus={(evt) => { evt.target.select() }}
          value={salesItem.qty}
          style={style.input}/>
      </td>
      <td className="numeric">
        {salesItem.price}
      </td>
      <td className="numeric">
        <input type="number"
          className="numeric"
          onChange={handleEditSalesItemAmount}
          onFocus={(evt) => { evt.target.select() }}
          value={salesItem.amount}
          style={style.input}/>
      </td>
      <td className="numeric">
        <IconButton onClick={handleRemoveSalesItem} aria-label="cancel">
          <Cancel color={grey500}/>
        </IconButton>
      </td>
    </tr>
  )
}
