import React, { Component } from 'react'
import '../../../style/admin.css'
import AnchorTag from '../../../components/Anchortag'
import Table from '../../../components/table/Table'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.columnList = ['ID', 'Name', 'Email', 'Role', 'Status', 'Action']
    this.tableData = [
      {
        id: 1,
        name: 'Ayoub Maimmadi',
        email: 'ayoubmaimmadi@gmail.com',
        role: 'Manager',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Ayoub Maimmadi',
        email: 'ayoubmaimmadi@gmail.com',
        role: 'Waiter',
        status: 'Active',
      },
      {
        id: 3,
        name: 'Hiba Akhadar',
        email: 'HibaAkhada987@gmail.com',
        role: 'Chef',
        status: 'Active',
      },
    ]
  }

  render() {
    return (
      <div className="admin-content mx-auto">
        <div className="w-100 mb-5">
          <AnchorTag
            link="/admin/settings/user-create"
            className="btn btn-warning float-right"
            itemValue="Create User"
          ></AnchorTag>
          <h4>System User</h4>
        </div>
        <Table
          className="table table-striped"
          columnList={this.columnList}
          tableData={this.tableData}
          actionLinkPrefix="user/"
        ></Table>
      </div>
    )
  }
}

export default UserList
