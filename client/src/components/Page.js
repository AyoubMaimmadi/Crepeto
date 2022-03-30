import React from 'react'
import { connect } from 'react-redux'

let Page = ({children, path, active}) => {

  const style = {
    display: (active ? '' : 'none')
  }  
  return (
    <div style={style}>{children}</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.path === state.inventoryPage
  }
}

export default connect(mapStateToProps, null)(Page)
