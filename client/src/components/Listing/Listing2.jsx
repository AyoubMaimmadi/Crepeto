import ListingCard from '../ListingCard/ListingCard'
import Labels from '../Labels/Labels'
import SearchHeader from '../SearchHeader/SearchHeader'

import './Listing.scss'

function Listing({
  dataList,
  pagePath,
  addItemPath,
  addItemValue,
  listingColumn,
  showWarehouseModal,
  showInventoryModal,
}) {
  return (
    <section className="listing">
      <SearchHeader
        addItemPath={addItemPath}
        value={addItemValue}
        pagePath={pagePath}
      />
      <section className="listing__labels-container">
        {listingColumn.map((column, index) => {
          return <Labels key={index} name={column} />
        })}
      </section>
      {dataList.map((item) => {
        return (
          <ListingCard
            key={item.id}
            data={item}
            pagePath={pagePath}
            showWarehouseModal={showWarehouseModal}
            showInventoryModal={showInventoryModal}
          />
        )
      })}
    </section>
  )
}

export default Listing
