import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Add from 'material-ui/svg-icons/content/add'
import { grey500 } from 'material-ui/styles/colors'
import { IconButton } from 'material-ui'

import { AddDialog } from './AddDialog'
import { toggleAddItemDialog, addItem } from '../actions'

import React from 'react'
import { connect } from 'react-redux'

let ItemAdder = ({addItemDialog, handleToggleDialog, handleAddItem}) => {
  return (
    <MuiThemeProvider>
      <div>
        <IconButton aria-label="add" tooltip="add" onTouchTap={handleToggleDialog}>
          <Add color={grey500}/>
        </IconButton>
        <AddDialog open={addItemDialog} 
          handleToggleDialog={handleToggleDialog}
          handleAddItem={handleAddItem}
        />
      </div>
    </MuiThemeProvider>
  )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleDialog: () => dispatch(toggleAddItemDialog()),
    handleAddItem: (name, unitCost, unitPrice, qty) => dispatch(addItem(name, unitCost, unitPrice, qty)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemAdder)
