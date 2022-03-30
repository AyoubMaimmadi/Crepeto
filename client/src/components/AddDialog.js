import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import React from 'react'

export const AddDialog = ({open, handleToggleDialog, handleAddItem}) => {
  let item = {};

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={handleToggleDialog}
    />,
    <FlatButton
      label="Add"
      primary={true}
      onClick={() => {
        handleAddItem(item.name, item.unitCost, item.unitPrice, item.qty)
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
      title="Add new Item"
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={handleToggleDialog}
    >
      <div style={styles.form}>
        <TextField hintText="name"
          onChange={(evt) => item.name = evt.target.value}
          autoFocus
          hintStyle={styles.hintStyle}
          underlineStyle={styles.underlineStyle} />
        <TextField hintText="unit cost"
          onChange={(evt) => item.unitCost = evt.target.value}
          type="number"
          style={styles.style}
          hintStyle={styles.hintStyle}
          underlineStyle={styles.underlineStyle} />
        <TextField hintText="unit price"
          onChange={(evt) => item.unitPrice = evt.target.value}
          type="number"
          style={styles.style}
          hintStyle={styles.hintStyle}
          underlineStyle={styles.underlineStyle} />
        <TextField hintText="quantity"
          onChange={(evt) => item.qty = evt.target.value}
          type="number"
          style={styles.style}
          hintStyle={styles.hintStyle}
          underlineStyle={styles.underlineStyle} />
      </div>
    </Dialog>
  )
}
