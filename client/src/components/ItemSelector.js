import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Checkbox } from 'material-ui'

import React from 'react'

export const ItemSelector = ({checked, handleClick, disabled}) => {

  return (
    <MuiThemeProvider>
      <Checkbox checked={checked} disabled={disabled} onClick={handleClick}/>
    </MuiThemeProvider>
  )
}
