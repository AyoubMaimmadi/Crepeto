import { Component } from 'react'
import axios from 'axios'
import MainHeader from '../MainHeader/MainHeader'
import errorIcon from '../../assets/Icons/error-24px.svg'
import { addWarehouse } from '../../utils/api'
import './WarehouseForm.scss'

class WarehouseForm extends Component {
  state = {
    data: null,
    form: {
      name: false,
      address: false,
      city: false,
      country: false,
      contactName: false,
      position: false,
      phone: false,
      email: false,
    },
  }

  componentDidMount() {
    if (this.props.match.params.warehousesId) {
      axios
        .get(`/api/warehouses/${this.props.match.params.warehousesId}`)
        .then((res) => {
          this.setState({
            data: {
              name: res.data.name,
              address: res.data.address,
              city: res.data.city,
              country: res.data.country,
              contactName: res.data.contact.name,
              position: res.data.contact.position,
              phone: res.data.contact.phone,
              email: res.data.contact.email,
            },
          })
          this.setState({
            form: {
              name: true,
              address: true,
              city: true,
              country: true,
              contactName: true,
              position: true,
              phone: true,
              email: true,
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
    if (e.target.value === '') {
      this.setState({
        form: { ...this.state.form, [e.target.name]: false },
      })
    } else {
      this.setState({
        form: { ...this.state.form, [e.target.name]: true },
      })
    }
  }

  handleAdd = (e) => {
    e.preventDefault()
    const {
      name,
      address,
      city,
      country,
      contactName,
      position,
      phone,
      email,
    } = this.state.form
    if (email && this.ifEmailValid(this.state.data.email)) {
      if (phone && this.ifNumbervalid(this.state.data.phone)) {
        if (
          name &&
          address &&
          city &&
          country &&
          contactName &&
          position &&
          phone &&
          email
        ) {
          const data = {
            name: this.state.data.name,
            address: this.state.data.address,
            city: this.state.data.city,
            country: this.state.data.country,
            contact: {
              name: this.state.data.contactName,
              position: this.state.data.position,
              phone: this.state.data.phone,
              email: this.state.data.email,
            },
          }
          addWarehouse(data)
            .then((res) => {
              alert('Warehouse Added!')
              this.props.history.push('/')
              this.props.updateData()
            })
            .catch((err) => console.log(err))
        } else {
          alert("field can't be empty!")
        }
      }
    }
  }

  handleEdit = (e) => {
    e.preventDefault()
    const {
      name,
      address,
      city,
      country,
      contactName,
      position,
      phone,
      email,
    } = this.state.form
    if (email && this.ifEmailValid(this.state.data.email)) {
      if (phone && this.ifNumbervalid(this.state.data.phone)) {
        if (
          name &&
          address &&
          city &&
          country &&
          contactName &&
          position &&
          phone &&
          email
        ) {
          axios
            .put(`/api/warehouses/${this.props.match.params.warehousesId}`, {
              name: this.state.data.name,
              address: this.state.data.address,
              city: this.state.data.city,
              country: this.state.data.country,
              contact: {
                name: this.state.data.contactName,
                position: this.state.data.position,
                phone: this.state.data.phone,
                email: this.state.data.email,
              },
            })
            .then((res) => {
              alert('Warehouse edited!')
              this.props.history.push('/')
              this.props.updateData()
            })
            .catch((err) => console.log(err))
        } else {
          alert("field can't be empty!")
        }
      }
    }
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.props.history.push('/')
  }

  ifEmailValid = (email) => {
    if (email.includes('@instock.com')) {
      return true
    } else {
      return alert('Invalid email')
    }
  }

  ifNumbervalid = (phone) => {
    let format = new RegExp(
      /^[+]?[1]?[ ]?[(]?[0-9]{3}[)]?[ ]?([0-9]{3})[- ]?([0-9]{4})$/
    )
    if (phone.match(format)) {
      return true
    } else {
      return alert('Phone number format need to be +1(area code) 000-0000')
    }
  }

  render() {
    return (
      <form
        className="warehouseform"
        onSubmit={
          this.props.match.params.warehousesId
            ? this.handleEdit
            : this.handleAdd
        }
      >
        <MainHeader
          navigate={this.props}
          headerName={
            this.props.match.params.warehousesId ? 'Edit Form' : 'Add Warehouse'
          }
        />
        <div className="warehouseform__wrapper">
          <div className="warehouseform__left">
            <h2 className="warehouseform__title">Warehouse Details</h2>
            <label htmlFor="name" className="warehouseform__label">
              WarehouseName
            </label>
            <input
              placeholder="Warehouse Name"
              name="name"
              className={
                this.state.form.name
                  ? 'warehouseform__input'
                  : 'warehouseform__input warehouseform__input--error'
              }
              value={this.state.data ? this.state.data.name : ''}
              onChange={this.handleChange}
            />
            <div
              className={
                this.state.form.name
                  ? 'warehouseform__warning--valid'
                  : 'warehouseform__warning'
              }
            >
              <img
                className="warehouseform__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="warehouseform__warning-text">
                This field is required
              </p>
            </div>
            <label htmlFor="address" className="warehouseform__label">
              Street Address
            </label>
            <input
              placeholder="Street Address"
              name="address"
              className={
                this.state.form.address
                  ? 'warehouseform__input'
                  : 'warehouseform__input warehouseform__input--error'
              }
              value={this.state.data ? this.state.data.address : ''}
              onChange={this.handleChange}
            />
            <div
              className={
                this.state.form.address
                  ? 'warehouseform__warning--valid'
                  : 'warehouseform__warning'
              }
            >
              <img
                className="warehouseform__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="warehouseform__warning-text">
                This field is required
              </p>
            </div>
            <label htmlFor="city" className="warehouseform__label">
              City
            </label>
            <input
              placeholder="City"
              name="city"
              className={
                this.state.form.city
                  ? 'warehouseform__input'
                  : 'warehouseform__input warehouseform__input--error'
              }
              value={this.state.data ? this.state.data.city : ''}
              onChange={this.handleChange}
            />
            <div
              className={
                this.state.form.city
                  ? 'warehouseform__warning--valid'
                  : 'warehouseform__warning'
              }
            >
              <img
                className="warehouseform__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="warehouseform__warning-text">
                This field is required
              </p>
            </div>
            <label htmlFor="country" className="warehouseform__label">
              Country
            </label>
            <input
              placeholder="Country"
              name="country"
              className={
                this.state.form.country
                  ? 'warehouseform__input'
                  : 'warehouseform__input warehouseform__input--error'
              }
              value={this.state.data ? this.state.data.country : ''}
              onChange={this.handleChange}
            />
            <div
              className={
                this.state.form.country
                  ? 'warehouseform__warning--valid'
                  : 'warehouseform__warning'
              }
            >
              <img
                className="warehouseform__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="warehouseform__warning-text">
                This field is required
              </p>
            </div>
          </div>
          <div className="warehouseform__right">
            <h2 className="warehouseform__title">Contact Details</h2>
            <label htmlFor="contactName" className="warehouseform__label">
              Contact Name
            </label>
            <input
              placeholder="Contact Name"
              name="contactName"
              className={
                this.state.form.contactName
                  ? 'warehouseform__input'
                  : 'warehouseform__input warehouseform__input--error'
              }
              value={this.state.data ? this.state.data.contactName : ''}
              onChange={this.handleChange}
            />
            <div
              className={
                this.state.form.contactName
                  ? 'warehouseform__warning--valid'
                  : 'warehouseform__warning'
              }
            >
              <img
                className="warehouseform__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="warehouseform__warning-text">
                This field is required
              </p>
            </div>
            <label htmlFor="position" className="warehouseform__label">
              Position
            </label>
            <input
              placeholder="Position"
              name="position"
              className={
                this.state.form.position
                  ? 'warehouseform__input'
                  : 'warehouseform__input warehouseform__input--error'
              }
              value={this.state.data ? this.state.data.position : ''}
              onChange={this.handleChange}
            />
            <div
              className={
                this.state.form.position
                  ? 'warehouseform__warning--valid'
                  : 'warehouseform__warning'
              }
            >
              <img
                className="warehouseform__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="warehouseform__warning-text">
                This field is required
              </p>
            </div>
            <label htmlFor="number" className="warehouseform__label">
              Phone Number
            </label>
            <input
              placeholder="Phone Number"
              name="phone"
              className={
                this.state.form.phone
                  ? 'warehouseform__input'
                  : 'warehouseform__input warehouseform__input--error'
              }
              value={this.state.data ? this.state.data.phone : ''}
              onChange={this.handleChange}
            />
            <div
              className={
                this.state.form.phone
                  ? 'warehouseform__warning--valid'
                  : 'warehouseform__warning'
              }
            >
              <img
                className="warehouseform__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="warehouseform__warning-text">
                This field is required
              </p>
            </div>
            <label htmlFor="email" className="warehouseform__label">
              Email
            </label>
            <input
              placeholder="Email"
              name="email"
              className={
                this.state.form.email
                  ? 'warehouseform__input'
                  : 'warehouseform__input warehouseform__input--error'
              }
              value={this.state.data ? this.state.data.email : ''}
              onChange={this.handleChange}
            />
            <div
              className={
                this.state.form.email
                  ? 'warehouseform__warning--valid'
                  : 'warehouseform__warning'
              }
            >
              <img
                className="warehouseform__warning-icon"
                src={errorIcon}
                alt="error icon"
              />
              <p className="warehouseform__warning-text">
                This field is required
              </p>
            </div>
          </div>
        </div>
        <div className="warehouseform__action">
          <button className="warehouseform__cancel" onClick={this.handleCancel}>
            Cancel
          </button>
          <button type="submit" className="warehouseform__submit">
            {this.props.match.params.warehousesId ? 'Save' : '+ Add Warehouse'}
          </button>
        </div>
      </form>
    )
  }
}

export default WarehouseForm
