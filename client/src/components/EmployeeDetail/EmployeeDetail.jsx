import axios from 'axios'
import { Component } from 'react'
import './EmployeeDetail.scss.scss'
import { URL } from '../../utils/api'
import MainHeader from '../MainHeader/MainHeader'

class EmployeeDetail extends Component {
  state = {
    employeeItem: null,
  }
  componentDidMount = () => {
    axios
      .get(`${URL}/employees/${this.props.match.params.employeeId}`)
      .then((res) => this.setState({ employeeItem: res.data[0] }))
      .catch((err) => console.log(err))
  }

  render() {
    return this.state.employeeItem === null ? (
      <p>Loading...</p>
    ) : (
      <div className="inventoryDetail">
        <MainHeader
          headerName={this.state.employeeItem.itemName}
          editInventoryId={this.state.employeeItem.id}
          navigate={this.props}
        />

        <div className="inventoryDetail__wrapper">
          <div className="inventoryDetail__left">
            <section className="inventoryDetail__left-section">
              <h4 className="inventoryDetail__left-title">
                Employee DESCRIPTION
              </h4>
              <p className="inventoryDetail__text">
                {this.state.employeeItem.description}
              </p>

              <h4 className="inventoryDetail__left-title">CATEGORY</h4>
              <p className="inventoryDetail__text">
                {this.state.employeeItem.category}
              </p>
            </section>
          </div>
          <div className="inventoryDetail__right">
            <section className="inventoryDetail__right-section">
              <h4 className="inventoryDetail__right-title">STATUS</h4>
              <h4
                className={`inventoryDetail__text--status inventoryDetail__text ${
                  this.state.employeeItem.status === 'In Stock'
                    ? 'inventoryDetail__text--stock'
                    : 'inventoryDetail__text--nostock'
                }`}
              >
                {this.state.employeeItem.status}
              </h4>
              <h4 className="inventoryDetail__right-title">WAREHOUSE</h4>
              <p className="inventoryDetail__text">
                {this.state.employeeItem.warehouseName}
              </p>
            </section>
            <section className="inventoryDetail__right-section">
              <h4 className="inventoryDetail__right-title">QUANTITY</h4>
              <p className="inventoryDetail__text">
                {this.state.employeeItem.quantity}
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default EmployeeDetail
