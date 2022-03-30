import { connect } from 'react-redux'
import { Link } from './Link'
import { setPage } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.page === state.inventoryPage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setPage(ownProps.page))
  }
}

const PageLink = connect(mapStateToProps, mapDispatchToProps)

export default PageLink(Link)
