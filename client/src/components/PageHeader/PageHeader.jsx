import { Link } from 'react-router-dom'
import './PageHeader.scss'

const PageHeader = ({ path }) => {
  return (
    <nav className="page-header">
      <div className="page-header__logo-wrapper">
        {/* <img className="page-header__logo-img" src={logo} alt="instock logo"/> */}
        <h1 className="page-header__logo-img">Crepeto</h1>
      </div>
      <div className="page-header__wrapper">
        <Link
          className={
            path === '/'
              ? 'page-header__link page-header__link--active'
              : 'page-header__link'
          }
          to="/"
        >
          Vendors
        </Link>
        <Link
          className={
            path === '/inventory'
              ? 'page-header__link  page-header__link--active'
              : 'page-header__link'
          }
          to="/inventory"
        >
          Inventory
        </Link>
        <Link
          className={
            path === '/employees'
              ? 'page-header__link  page-header__link--active'
              : 'page-header__link'
          }
          to="/"
        >
          Employees
        </Link>
        <Link
          className={
            path === '/sdsf'
              ? 'page-header__link page-header__link--active'
              : 'page-header__link'
          }
          to="/"
        >
          Customer
        </Link>
        <Link
          className={
            path === '/qdqd'
              ? 'page-header__link  page-header__link--active'
              : 'page-header__link'
          }
          to="/"
        >
          Order
        </Link>
      </div>
    </nav>
  )
}

export default PageHeader
