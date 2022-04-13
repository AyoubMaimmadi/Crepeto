import { Component } from 'react'
import axios from 'axios'
import MainHeader from '../MainHeader/MainHeader'
import errorIcon from '../../assets/Icons/error-24px.svg'
import { URL } from '../../utils/api.js'
import { getWarehouses, addInventory } from '../../utils/api'

import './InventoryForm.scss'

let warehouseData = []
let categories = []

class InventoryForm extends Component {
  state = {
    data: {},
    form: {
      category: false,
      description: false,
      itemName: false,
      quantity: false,
      warehouseName: false,
    },
  }

  componentDidMount() {
    getWarehouses()
      .then((res) => {
        warehouseData = res.data.map((warehouse) => {
          return { name: warehouse.name, id: warehouse.id }
        })
      })
      .catch((err) => console.log(err))
    axios.get(`/api/inventory1`).then((res) => {
      res.data.map((item) => categories.push(item.category))
    })

    if (this.props.match.params.inventoryId) {
      axios
        .get(`/api/inventory1/${this.props.match.params.inventoryId}`)
        .then((res) => {
          const {
            category,
            description,
            itemName,
            status,
            id,
            quantity,
            warehouseName,
          } = res.data[0]
          this.setState({
            data: {
              category,
              description,
              id,
              itemName,
              quantity,
              status,
              warehouseName,
            },
          })
        })
        .catch((err) => console.log(err))
    }
  }

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleAdd = (e) => {
    e.preventDefault()
    const { category, description, itemName, quantity, warehouseName, status } =
      this.state.data
    let warehouseId = warehouseData.find(
      (warehouse) => warehouse.name === warehouseName
    )

    if (category && description && itemName && quantity && warehouseName) {
      const data = {
        category,
        description,
        itemName,
        quantity: status === 'Out of Stock' ? '0' : quantity,
        status,
        warehouseID: warehouseId.id,
        warehouseName,
      }

      addInventory(data)
        .then((res) => {
          alert('Inventory Item Added')
          this.props.history.push('/inventory1')
          this.props.updateData()
        })
        .catch((err) => console.log(err))
    } else {
      alert("field can't be empty!")
    }
  }

  handleSave = (e) => {
    e.preventDefault()
    const { category, description, itemName, status, quantity, warehouseName } =
      this.state.data
    const id = this.props.match.params.inventoryId
    if (category && description && itemName && warehouseName) {
      let warehouseId = warehouseData.find(
        (warehouse) => warehouse.name === warehouseName
      )

      axios
        .put(`${URL}/inventory1/${id}/edit`, {
          id: id,
          category: category,
          description: description,
          itemName: itemName,
          quantity: status === 'Out of Stock' ? '0' : quantity,
          status: status,
          warehouseID: warehouseId.id,
          warehouseName: warehouseName,
        })
        .then((res) => {
          alert('Inventory Item Edited')
          this.props.history.push('/inventory1')
          this.props.updateData()
        })
        .catch((err) => console.log(err))
    } else {
      alert("field can't be empty!")
    }
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.props.history.push('/inventory1')
  }

  render() {
    let uniqueCategories = categories.filter(
      (category, index, array) => array.indexOf(category) === index
    )

    return this.props.match.params.inventoryId && this.state.data === 0 ? (
      <p> Loading ... </p>
    ) : (
      <form
        className="inventoryForm"
        onSubmit={
          this.props.match.params.inventoryId ? this.handleSave : this.handleAdd
        }
      >
        <MainHeader
          navigate={this.props}
          headerName={
            this.props.match.params.inventoryId
              ? 'Edit Inventory Item'
              : 'Add New Inventory Item'
          }
        />
        <div className="inventoryForm__wrapper">
          <div className="inventoryForm__left">
            <h2 className="inventoryForm__title">Item Details</h2>
            <label htmlFor="itemName" className="inventoryForm__label">
              Item Name
            </label>
            <input
              placeholder="Item Name"
              name="itemName"
              className={
                this.state.data.itemName
                  ? 'inventoryForm__input'
                  : 'inventoryForm__input inventoryForm__input--error'
              }
              value={this.state.data ? this.state.data.itemName : ''}
              onChange={this.handleChange}
            />

            <div
              className={
                this.state.data.itemName
                  ? 'inventoryForm__warning--valid'
                  : 'inventoryForm__warning'
              }
            >
              <img
                className="inventoryForm__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="inventoryForm__warning-text">
                This field is required
              </p>
            </div>

            <label htmlFor="description" className="inventoryForm__label">
              Description
            </label>
            <textarea
              placeholder="Please enter a brief item description"
              name="description"
              className={
                this.state.data.description
                  ? 'inventoryForm__input inventoryForm__input--textarea'
                  : 'inventoryForm__input inventoryForm__input--error inventoryForm__input--textarea'
              }
              value={this.state.data ? this.state.data.description : ''}
              onChange={this.handleChange}
            ></textarea>

            <div
              className={
                this.state.data.description
                  ? 'inventoryForm__warning--valid'
                  : 'inventoryForm__warning'
              }
            >
              <img
                className="inventoryForm__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="inventoryForm__warning-text">
                This field is required
              </p>
            </div>

            <label htmlFor="category" className="inventoryForm__label">
              Category
            </label>
            <select
              name="category"
              className={
                this.state.data.category
                  ? 'inventoryForm__input inventoryForm__input--select'
                  : 'inventoryForm__input inventoryForm__input--error inventoryForm__input--select'
              }
              onChange={this.handleChange}
            >
              <option
                value={
                  this.state.data ? this.state.data.category : 'Please Select'
                }
                disabled
              >
                {this.props.match.params.inventoryId
                  ? this.state.data.category
                  : 'Please Select'}
              </option>
              {uniqueCategories.map((item) => {
                return (
                  <option key={item.id} value={`${item}`}>
                    {`${item} `}{' '}
                  </option>
                )
              })}
            </select>

            <div
              className={
                this.state.data.category
                  ? 'inventoryForm__warning--valid'
                  : 'inventoryForm__warning'
              }
            >
              <img
                className="inventoryForm__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="inventoryForm__warning-text">
                This field is required
              </p>
            </div>
          </div>
          <div className="inventoryForm__right">
            <h2 className="inventoryForm__title">Item Availability</h2>
            <label htmlFor="status" className="inventoryForm__label">
              Status
            </label>
            <div className="inventoryForm__status">
              <div
                className={
                  this.state.data.status === 'In Stock'
                    ? ''
                    : 'inventoryForm__status-slate'
                }
              >
                <input
                  type="radio"
                  name="status"
                  checked={
                    this.state.data && this.state.data.status === 'In Stock'
                      ? 'checked'
                      : ''
                  }
                  value="In Stock"
                  onChange={this.handleChange}
                />
                <label htmlFor="status" className="inventoryForm__status-label">
                  In Stock
                </label>
              </div>
              <div
                className={
                  this.state.data.status === 'Out of Stock'
                    ? ''
                    : 'inventoryForm__status-slate'
                }
              >
                <input
                  type="radio"
                  name="status"
                  checked={
                    this.state.data && this.state.data.status === 'Out of Stock'
                      ? 'checked'
                      : ''
                  }
                  value="Out of Stock"
                  onChange={this.handleChange}
                />
                <label htmlFor="status" className="inventoryForm__status-label">
                  Out of Stock
                </label>
              </div>
            </div>

            <label
              htmlFor="quantity"
              className={
                this.state.data.status === 'Out of Stock'
                  ? 'inventoryForm__label-hide'
                  : 'inventoryForm__label'
              }
            >
              Quantity
            </label>
            <input
              placeholder="0"
              name="quantity"
              className={
                this.state.data.status === 'Out of Stock'
                  ? 'inventoryForm__label-hide'
                  : this.state.data.quantity
                  ? 'inventoryForm__input'
                  : 'inventoryForm__input inventoryForm__input--error'
              }
              value={
                this.state.data.status === 'Out of stock'
                  ? '0'
                  : this.state.data.quantity
              }
              onChange={this.handleChange}
            />

            <div
              className={
                this.state.data.status !== 'In Stock'
                  ? 'inventoryForm__warning'
                  : 'inventoryForm__warning--valid'
              }
            >
              <img
                className={
                  this.state.data.status === 'Out of Stock'
                    ? 'hide'
                    : 'inventoryForm__warning-icon'
                }
                src={errorIcon}
                alt="error icon"
              />
              <p
                className={
                  this.state.data.status === 'Out of Stock'
                    ? 'hide'
                    : 'inventoryForm__warning-text'
                }
              >
                This field is required
              </p>
            </div>
            <label htmlFor="warehouseName" className="inventoryForm__label">
              Warehouse
            </label>

            <select
              name="warehouseName"
              className={
                this.state.data.warehouseName
                  ? 'inventoryForm__input inventoryForm__input--select'
                  : 'inventoryForm__input inventoryForm__input--error inventoryForm__input--select'
              }
              onChange={this.handleChange}
            >
              <option
                value={
                  this.state.data
                    ? this.state.data.warehouseName
                    : 'Please Select'
                }
                disabled
              >
                {this.props.match.params.inventoryId
                  ? this.state.data.warehouseName
                  : 'Please Select'}
              </option>
              {warehouseData.map((item) => {
                return (
                  <option
                    key={item.id}
                    value={`${item.name}`}
                  >{`${item.name} `}</option>
                )
              })}
            </select>
            <div
              className={
                this.state.data.warehouseName
                  ? 'inventoryForm__warning--valid'
                  : 'inventoryForm__warning'
              }
            >
              <img
                className="inventoryForm__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="inventoryForm__warning-text">
                This field is required
              </p>
            </div>
          </div>
        </div>
        <div className="inventoryForm__action">
          <button className="inventoryForm__cancel" onClick={this.handleCancel}>
            Cancel
          </button>
          <button type="submit" className="inventoryForm__submit">
            {this.props.match.params.inventoryId ? 'Save' : '+ Add Item'}
          </button>
        </div>
      </form>
    )
  }
}

export default InventoryForm
