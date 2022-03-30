import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Edit from 'material-ui/svg-icons/image/edit'
import { grey500 } from 'material-ui/styles/colors'
import { IconButton } from 'material-ui'

import { EditDialog } from './EditDialog'
import { editItem, toggleEditItemDialog } from '../actions'

import React from 'react'
import { connect } from 'react-redux'

export const ItemEditor = ({item, editItemDialog, handleToggleDialog, handleEditItem}) => {
  return (
    <MuiThemeProvider>
      <div>
        <IconButton aria-label="edit" tooltip="edit" onTouchTap={handleToggleDialog}>
          <Edit color={grey500}/>
        </IconButton>
        <EditDialog open={editItemDialog} 
          handleToggleDialog={handleToggleDialog}
          handleEditItem={handleEditItem}
          item={item}
        />
      </div>
    </MuiThemeProvider>
  )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleDialog: () => dispatch(toggleEditItemDialog()),
    handleEditItem: (id, name, unitCost, unitPrice, qty) => dispatch(editItem(id, name, unitCost, unitPrice, qty)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemEditor)
