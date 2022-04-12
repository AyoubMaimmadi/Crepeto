import { Link } from 'react-router-dom'
import './SearchHeader.scss'

const SearchHeader = ({ addItemPath, value, pagePath }) => {
  return (
    <section className="search-header">
      <h1 className="search-header__title">
        {pagePath === 'warehouse' ? 'Vendors' : 'Inventory'}
      </h1>
      <form className="search-header__form">
        <input
          className="search-header__form-input"
          type="text"
          name="search"
          placeholder="Search..."
        />
        <Link className="search-header__form-link" to={addItemPath}>
          <input
            className="search-header__form-submit"
            type="submit"
            name="addWarehouse"
            value={value}
          />
        </Link>
      </form>
    </section>
  )
}

export default SearchHeader
