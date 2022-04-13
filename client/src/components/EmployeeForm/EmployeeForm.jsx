import { Component } from 'react'
import axios from 'axios'
import MainHeader from '../MainHeader/MainHeader'
import errorIcon from '../../assets/Icons/error-24px.svg'
import { URL } from '../../utils/api.js'
import { addEmployee } from '../../utils/api'

import './InventoryForm.scss'

// let warehouseData = []
let categories = []

class EmployeeForm extends Component {
  state = {
    data: {},
    form: {
      id: false,
      empName: false,
      description: false,
      empSalary: false,
      managerId: false,
    },
  }

  componentDidMount() {
    // getWarehouses()
    //   .then((res) => {
    //     warehouseData = res.data.map((warehouse) => {
    //       return { name: warehouse.name, id: warehouse.id }
    //     })
    //   })
    //   .catch((err) => console.log(err))
    // axios.get(`/api/inventory`).then((res) => {
    //   res.data.map((item) => categories.push(item.category))
    // })

    if (this.props.match.params.employeeId) {
      axios
        .get(`/api/employees/${this.props.match.params.employeeId}`)
        .then((res) => {
          const { id, empName, empCIN, description, empSalary, managerId } =
            res.data[0]
          this.setState({
            data: {
              id,
              empName,
              empCIN,
              description,
              empSalary,
              managerId,
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
    const { id, empName, empCIN, description, empSalary, managerId } =
      this.state.data
    let warehouseId = warehouseData.find(
      (warehouse) => warehouse.name === warehouseName
    )

    if (id && empName && empCIN && description && empSalary && managerId) {
      const data = {
        id,
        empName,
        empCIN,
        description,
        empSalary,
        managerId,
      }

      addEmployee(data)
        .then((res) => {
          alert('Employee Added')
          this.props.history.push('/employees')
          this.props.updateData()
        })
        .catch((err) => console.log(err))
    } else {
      alert("field can't be empty!")
    }
  }

  handleSave = (e) => {
    e.preventDefault()
    const {
      _id = id,
      empName,
      empCIN,
      description,
      empSalary,
      managerId,
    } = this.state.data
    const id = this.props.match.params.employeeId
    if (_id && empName && empCIN && description && empSalary && managerId) {
      axios
        .put(`${URL}/inventory/${id}/edit`, {
          id: _id,
          empName: empName,
          empCIN: empCIN,
          description: description,
          empSalary: empSalary,
          managerId: managerId,
        })
        .then((res) => {
          alert('Employee Edited')
          this.props.history.push('/employees')
          this.props.updateData()
        })
        .catch((err) => console.log(err))
    } else {
      alert("field can't be empty!")
    }
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.props.history.push('/employees')
  }

  render() {
    let uniqueCategories = categories.filter(
      (category, index, array) => array.indexOf(category) === index
    )

    return this.props.match.params.employeeId && this.state.data === 0 ? (
      <p> Loading ... </p>
    ) : (
      <form
        className="inventoryForm"
        onSubmit={
          this.props.match.params.employeeId ? this.handleSave : this.handleAdd
        }
      >
        <MainHeader
          navigate={this.props}
          headerName={
            this.props.match.params.employeeId
              ? 'Edit Employee'
              : 'Add a New Emloyee'
          }
        />
        <div className="inventoryForm__wrapper">
          <div className="inventoryForm__left">
            <h2 className="inventoryForm__title">Employee Details</h2>
            <label htmlFor="itemName" className="inventoryForm__label">
              Employee Name
            </label>
            <input
              placeholder="Item Name"
              name="itemName"
              className={
                this.state.data.empName
                  ? 'inventoryForm__input'
                  : 'inventoryForm__input inventoryForm__input--error'
              }
              value={this.state.data ? this.state.data.empName : ''}
              onChange={this.handleChange}
            />

            <div
              className={
                this.state.data.empName
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
                this.state.data.empSalary
                  ? 'inventoryForm__input inventoryForm__input--select'
                  : 'inventoryForm__input inventoryForm__input--error inventoryForm__input--select'
              }
              onChange={this.handleChange}
            >
              <option
                value={
                  this.state.data ? this.state.data.empSalary : 'Please Select'
                }
                disabled
              >
                {this.props.match.params.employeeId
                  ? this.state.data.empSalary
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
                this.state.data.empSalary
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
            <h2 className="inventoryForm__title">Employee Position</h2>
            <label htmlFor="status" className="inventoryForm__label">
              Status
            </label>
            <div className="inventoryForm__status">
              <div
                className={
                  this.state.data.managerId === 'In Stock'
                    ? ''
                    : 'inventoryForm__status-slate'
                }
              >
                <input
                  type="radio"
                  name="status"
                  checked={
                    this.state.data && this.state.data.managerId === 'In Stock'
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
                  this.state.data.managerId === 'Out of Stock'
                    ? ''
                    : 'inventoryForm__status-slate'
                }
              >
                <input
                  type="radio"
                  name="status"
                  checked={
                    this.state.data &&
                    this.state.data.managerId === 'Out of Stock'
                      ? 'checked'
                      : ''
                  }
                  value="Out of Stock"
                  onChange={this.handleChange}
                />
                <label htmlFor="status" className="inventoryForm__status-label">
                  Not manager
                </label>
              </div>
            </div>

            <label
              htmlFor="quantity"
              className={
                this.state.data.empName === 'Out of Stock'
                  ? 'inventoryForm__label-hide'
                  : 'inventoryForm__label'
              }
            >
              Name
            </label>
            <input
              placeholder="0"
              name="quantity"
              className={
                this.state.data.empName === 'Out of Stock'
                  ? 'inventoryForm__label-hide'
                  : this.state.data.empName
                  ? 'inventoryForm__input'
                  : 'inventoryForm__input inventoryForm__input--error'
              }
              value={
                this.state.data.empName === 'Out of stock'
                  ? '0'
                  : this.state.data.empName
              }
              onChange={this.handleChange}
            />

            <div
              className={
                this.state.data.empName !== 'In Stock'
                  ? 'inventoryForm__warning'
                  : 'inventoryForm__warning--valid'
              }
            >
              <img
                className={
                  this.state.data.empName === 'Out of Stock'
                    ? 'hide'
                    : 'inventoryForm__warning-icon'
                }
                src={errorIcon}
                alt="error icon"
              />
              <p
                className={
                  this.state.data.empName === 'Out of Stock'
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
                this.state.data.empName
                  ? 'inventoryForm__input inventoryForm__input--select'
                  : 'inventoryForm__input inventoryForm__input--error inventoryForm__input--select'
              }
              onChange={this.handleChange}
            >
              <option
                value={
                  this.state.data ? this.state.data.empName : 'Please Select'
                }
                disabled
              >
                {this.props.match.params.employeeId
                  ? this.state.data.empName
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
            {this.props.match.params.employeeId ? 'Save' : '+ Add Employee'}
          </button>
        </div>
      </form>
    )
  }
}

export default EmployeeForm
