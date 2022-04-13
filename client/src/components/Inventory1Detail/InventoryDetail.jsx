import axios from 'axios'
import { Component } from 'react'
import './InventoryDetail.scss'
import { URL } from '../../utils/api'
import MainHeader from '../MainHeader/MainHeader'

class InventoryDetail extends Component {
  state = {
    inventoryItem: null,
  }
  componentDidMount = () => {
    axios
      .get(`${URL}/inventory/${this.props.match.params.inventoryId}`)
      .then((res) => this.setState({ inventoryItem: res.data[0] }))
      .catch((err) => console.log(err))
  }

  render() {
    return this.state.inventoryItem === null ? (
      <p>Loading...</p>
    ) : (
      <div className="inventoryDetail">
        <MainHeader
          headerName={this.state.inventoryItem.itemName}
          editInventoryId={this.state.inventoryItem.id}
          navigate={this.props}
        />
        <div className="inventoryDetail__wrapper">
          <div className="inventoryDetail__left">
            <section className="inventoryDetail__left-section">
              <h4 className="inventoryDetail__left-title">ITEM DESCRIPTION</h4>
              <p className="inventoryDetail__text">
                {this.state.inventoryItem.description}
              </p>

              <h4 className="inventoryDetail__left-title">CATEGORY</h4>
              <p className="inventoryDetail__text">
                {this.state.inventoryItem.category}
              </p>
            </section>
          </div>
          <div className="inventoryDetail__right">
            <section className="inventoryDetail__right-section">
              <h4 className="inventoryDetail__right-title">STATUS</h4>
              <h4
                className={`inventoryDetail__text--status inventoryDetail__text ${
                  this.state.inventoryItem.status === 'In Stock'
                    ? 'inventoryDetail__text--stock'
                    : 'inventoryDetail__text--nostock'
                }`}
              >
                {this.state.inventoryItem.status}
              </h4>
              <h4 className="inventoryDetail__right-title">WAREHOUSE</h4>
              <p className="inventoryDetail__text">
                {this.state.inventoryItem.warehouseName}
              </p>
            </section>
            <section className="inventoryDetail__right-section">
              <h4 className="inventoryDetail__right-title">QUANTITY</h4>
              <p className="inventoryDetail__text">
                {this.state.inventoryItem.quantity}
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default InventoryDetail
