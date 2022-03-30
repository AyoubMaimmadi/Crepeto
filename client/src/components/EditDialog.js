import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import React from 'react'

export const EditDialog = ({open, handleToggleDialog, handleEditItem, item}) => {

  let editedItem = {...item}

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={handleToggleDialog}
    />,
    <FlatButton
      label="Save"
      primary={true}
      onTouchTap={() => {
        handleEditItem(editedItem.id, editedItem.name, editedItem.unitCost, editedItem.unitPrice, editedItem.qty)
        handleToggleDialog()
      }}
    />
  ]

  const styles = {
    hintStyle: {
      color: 'rgba(0,0,0,0.6)'
    },
    underlineStyle: {
      borderColor: 'rgba(0,0,0,0.4)'
    },
    form: {
      display: 'flex'
    },
    style: {
      marginLeft: 24,
    }
  }

  return (
    <Dialog
      title="Edit Item"
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={handleToggleDialog}
    >

      <div style={styles.form}>
        <TextField hintText="name"
          defaultValue={item.name}
          onChange={(evt) => editedItem.name = evt.target.value }
          autoFocus
          hintStyle={styles.hintStyle}
          underlineStyle={styles.underlineStyle} />

        <TextField hintText="unit cost"
          defaultValue={item.unitCost}
          onChange={(evt) => editedItem.unitCost = evt.target.value}
          type="number"
          style={styles.style}
          hintStyle={styles.hintStyle}
          underlineStyle={styles.underlineStyle} />

        <TextField hintText="unit price"
          defaultValue={item.unitPrice}
          onChange={(evt) => editedItem.unitPrice = evt.target.value}
          type="number"
          style={styles.style}
          hintStyle={styles.hintStyle}
          underlineStyle={styles.underlineStyle} />

        <TextField hintText="quantity"
          defaultValue={item.qty}
          onChange={(evt) => editedItem.qty = evt.target.value}
          type="number"
          style={styles.style}
          hintStyle={styles.hintStyle}
          underlineStyle={styles.underlineStyle} />
      </div>

    </Dialog>
  )
}
