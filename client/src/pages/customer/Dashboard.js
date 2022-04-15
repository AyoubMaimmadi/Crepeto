import React, { Component } from 'react'
import PageHeader from '../../components/PageHeader'

class DashboardPage extends Component {
  constructor(props) {
    super(props)
    this.userRole = 'owner'
  }

  render() {
    return (
      <div className="admin-content mx-auto">
        <h1>Crepeto's Management System</h1>
        <br />
        <PageHeader headerText="Welcome to the Dashboard" />
        <div className="w-75">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <div className="dash-summary-cell">
                  <p>
                    <b>Total Orders</b>
                  </p>
                  <p>120</p>
                </div>
              </div>
              <div className="col-4">
                <div className="dash-summary-cell">
                  <p>
                    <b>Total Products</b>
                  </p>
                  <p>240</p>
                </div>
              </div>
              <div className="col-4">
                <div className="dash-summary-cell">
                  <p>
                    <b>Total Profit</b>
                  </p>
                  <p>MAD 2923.87 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardPage
