import React, { Component } from 'react'
import '../../../style/admin.css'
import AnchorTag from '../../../components/Anchortag'
import Table from '../../../components/table/Table'

class ShopList extends Component {
  constructor(props) {
    super(props)
    this.columnList = ['ID', 'Name', 'Owner', 'Employee', 'Status', 'Action']
    this.tableData = [
      {
        id: 1,
        name: 'Ayoub Maimmadi',
        owner: 'ayoubmaimmadi@gmail.com',
        employee: '50',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Hiba Akhadar',
        owner: 'HibaAkhada987@gmail.com',
        employee: '0',
        status: 'Active',
      },
    ]
  }

  render() {
    return (
      <div className="admin-content mx-auto">
        <div className="w-100 mb-5">
          <AnchorTag
            link="/admin/shop/shop-create"
            className="btn btn-warning float-right"
            itemValue="Create Vendor"
          ></AnchorTag>
          <h4>Vendor List</h4>
        </div>
        <Table
          className="table table-striped"
          columnList={this.columnList}
          tableData={this.tableData}
          actionLinkPrefix=""
        ></Table>
      </div>
    )
  }
}

export default ShopList
