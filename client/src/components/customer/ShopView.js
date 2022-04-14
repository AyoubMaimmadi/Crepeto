import React, { Component } from 'react'
import AnchorTag from '../../components/Anchortag'
import InputFormGroup from '../input/InputFormGroup'

class ShopView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="admin-content mx-auto">
        <div className="w-100 mb-5">
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
                  <InputFormGroup
                    inputClassName="form-control"
                    labelClassName="mb-2"
                    isReadOnly={true}
                    value="Ayoub "
                    label="First Name"
                  />
                </div>
                <div className="col-6">
                  <InputFormGroup
                    inputClassName="form-control"
                    labelClassName="mb-2"
                    isReadOnly={true}
                    value="Maimmadi"
                    label="Last Name"
                  />
                </div>
                <div className="col-6">
                  <InputFormGroup
                    inputClassName="form-control"
                    labelClassName="mb-2"
                    isReadOnly={true}
                    value="ayoubmaimmadi@gmail.com"
                    label="Email"
                  />
                </div>
                <div className="col-6">
                  <InputFormGroup
                    inputClassName="form-control"
                    labelClassName="mb-2"
                    isReadOnly={true}
                    value="Active"
                    label="Status"
                  />
                </div>

                <div className="col-12 mt-3">
                  <p>
                    <b>Restaurant Information</b>
                  </p>
                </div>
                <div className="col-6">
                  <InputFormGroup
                    inputClassName="form-control"
                    labelClassName="mb-2"
                    isReadOnly={true}
                    value="Crepeto"
                    label="Restaurant Name"
                  />
                </div>
                <div className="col-6">
                  <InputFormGroup
                    inputClassName="form-control"
                    labelClassName="mb-2"
                    isReadOnly={true}
                    value="3"
                    label="Total Employees"
                  />
                </div>
                <div className="col-6">
                  <InputFormGroup
                    inputClassName="form-control"
                    labelClassName="mb-2"
                    isReadOnly={true}
                    value="145"
                    label="Total Products"
                  />
                </div>
                <div className="col-6">
                  <InputFormGroup
                    inputClassName="form-control"
                    labelClassName="mb-2"
                    isReadOnly={true}
                    value="Active"
                    label="Status"
                  />
                </div>

                <div className="col-12 mt-4">
                  <div className="form-group">
                    <AnchorTag
                      className="btn btn-sm btn-warning"
                      itemValue="Edit Restaurant"
                      link="/app/shop/edit"
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
