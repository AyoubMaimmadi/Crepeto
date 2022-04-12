import logo from '../../assets/logo/inStock-logo.png'
import {Link} from 'react-router-dom'
import './PageHeader.scss'

const PageHeader = ({path}) => {
    return (
        <nav className="page-header">
            <div className="page-header__logo-wrapper">
                <img className="page-header__logo-img" src={logo} alt="instock logo"/>
            </div>
            <div className="page-header__wrapper">
                <Link 
                    className={path === "/" ? "page-header__link page-header__link--active" : "page-header__link"} 
                    to="/">
                        Warehouses
                </Link>
                <Link 
                    className={path === "/inventory" ? "page-header__link  page-header__link--active" : "page-header__link"} 
                    to="/inventory">
                        Inventory
                </Link>
            </div>
        </nav>
    )
}

export default PageHeader