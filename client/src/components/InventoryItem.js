import { ItemSelector } from './ItemSelector'

import React from 'react'

export const InventoryItem = ({
  id,
  name, 
  unitCost, 
  unitPrice, 
  qty, 
  selectedAmount, 
  selected, 
  handleSelectItem
}) => {

  return (
    <tr>
      <td>
        <ItemSelector checked={selected} handleClick={handleSelectItem} />
      </td>
      <td>{name}</td>
      <td className="numeric">{unitCost}</td>
      <td className="numeric">{unitPrice}</td>
      <td className="numeric">{qty}</td>
    </tr>
  )
}
