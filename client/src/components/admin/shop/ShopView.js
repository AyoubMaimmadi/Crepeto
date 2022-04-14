import React, { Component } from 'react'
import '../../../style/admin.css'
import AnchorTag from '../../../components/Anchortag'

class ShopView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="admin-content mx-auto">
        <div className="w-100 mb-5">
          <AnchorTag
            link="/admin/shop/shop-list"
            className="btn btn-primary float-right"
            itemValue="Back to Shop List"
          ></AnchorTag>
          <h4>Restaurant Details</h4>
        </div>
        <div className="w-75">
          <form>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <p>
                    <b>Restaurant Owner Information</b>
                  </p>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="mb-2">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Ayoub"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="mb-2">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Maimmadi"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="mb-2">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value="ayoubmaimmadi@gmail.com"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="mb-2">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Active"
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-12">
                  <p>
                    <b>Restaurant Information</b>
                  </p>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="mb-2">Restaurant Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Crepeto"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="mb-2">Total Employee</label>
                    <input
                      type="text"
                      className="form-control"
                      value="3"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="mb-2">Total Products</label>
                    <input
                      type="text"
                      className="form-control"
                      value="145"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="mb-2">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Active"
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="form-group">
                    <AnchorTag
                      className="btn btn-warning"
                      itemValue="Back"
                      link="/admin/shop/shop-list"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ShopView
