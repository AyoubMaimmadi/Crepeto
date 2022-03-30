import { AppBar } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PageLink from './PageLink'

import React from 'react'
import { connect } from 'react-redux'

let AppHeader = ({inventoryPage}) => {

  const color = (inventoryPage) => {
    return "#607D8B"
  }

  const style = {
    title : {
      marginLeft: 36,
    },
    bar : {
      background: color(inventoryPage),
      paddingRight: 60
    }
  }

  return (
    <MuiThemeProvider>
      <AppBar title="Inventory Management System"
        showMenuIconButton={false}
        titleStyle={style.title}
        style={style.bar}>
        <PageLink page="INVENTORY_PAGE">Inventory</PageLink>
        <PageLink page="HISTORY_PAGE">History</PageLink>
        <PageLink page="INVOICE_PAGE">Invoice</PageLink>
      </AppBar>
    </MuiThemeProvider>
  )
}

export default connect(state => state, null)(AppHeader)
