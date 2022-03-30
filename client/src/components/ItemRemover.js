import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Remove from 'material-ui/svg-icons/action/delete'
import { grey500 } from 'material-ui/styles/colors'
import { IconButton } from 'material-ui'

import { removeItem } from '../actions'

import React from 'react'
import { connect } from 'react-redux'

let ItemRemover = ({dispatch}) => {
  return (
    <MuiThemeProvider>
      <div>
        <IconButton aria-label="remove" tooltip="remove" 
          onTouchTap={ () => dispatch(removeItem()) }>
          <Remove color={grey500}/>
        </IconButton>
      </div>
    </MuiThemeProvider>
  )
}

export default connect()(ItemRemover)
