import React, { Component } from 'react'
import AnchorTag from '../../components/Anchortag'
import Button from '../Button'
import InputFormGroup from '../input/InputFormGroup'
import SelectFormGroup from '../input/SelectFormGroup'
import SearchDataTable from '../table/SearchDataTable'
import Table from '../table/Table'

class InvoiceForm extends Component {
  constructor(props) {
    super(props)
    this.productCategory = [
      {
        id: 1,
        name: 'Sweets',
      },
      {
        id: 2,
        name: 'Food',
      },
      {
        id: 2,
        name: 'Cakes',
      },
    ]
    this.columnList = ['ID', 'Name', 'Stock', 'Price', 'Action']
    this.tableData = [
      {
        id: 1,
        name: 'Nutella',
        stock: 20,
        price: '38.00',
      },
      {
        id: 2,
        name: 'Chocolate Cake',
        stock: 20,
        price: '20.00',
      },
      {
        id: 3,
        name: 'Vanilla Cake',
        stock: 20,
        price: '18.00',
      },
      {
        id: 4,
        name: 'Something',
        stock: 20,
        price: '69.00',
      },
    ]

    this.invoiceColumnList = ['ID', 'Name', 'Quantity', 'Price', 'Sub total']
    this.invoiceTableData = [
      {
        id: 1,
        name: 'Something',
        quantity: 1,
        price: '28.00',
        subtotal: 2000,
      },
      {
        id: 2,
        name: 'Something',
        quantity: 2,
        price: '98.00',
        subtotal: 2000,
      },
      {
        id: 3,
        name: 'Something',
        quantity: 1,
        price: '35.00',
        subtotal: 2000,
      },
      {
        id: 4,
        name: 'Something',
        quantity: 4,
        price: '19.00',
        subtotal: 2000,
      },
    ]
  }

  render() {
    return (
      <div className="admin-content mx-auto">
        <div className="w-100 mb-5">
          <AnchorTag
            link="/app/shop/invoice/list"
            className="btn btn-sm btn-primary float-right"
            itemValue="Back to Invoice List"
          ></AnchorTag>
          <h4>Create Customer</h4>
        </div>
        <div className="w-75">
          <div className="container-fluid">
            <div className="row mb-5">
              <div className="col-3">
                <div className="form-group">
                  <Button
                    className="btn btn-sm btn-success w-100"
                    text="Add Item"
                    dataToggle="modal"
                    dataTarget="#exampleModalCenter"
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <Button
                    className="btn btn-sm btn-warning w-100"
                    text="Save Customer"
                  />
                </div>
              </div>

              <div className="col-12 mt-4">
                <Table
                  className="table table-striped"
                  allowAction={false}
                  columnList={this.invoiceColumnList}
                  tableData={this.invoiceTableData}
                  actionLinkPrefix=""
                ></Table>
                <table className="table table-striped w-25 float-right mt-4">
                  <tbody>
                    <tr>
                      <td>Total</td>
                      <td>257.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl " role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      Search & Add Product
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-row mb-5 modal-search-box">
                      <div className="col-12">
                        <p>
                          <b>Search Box</b>
                        </p>
                      </div>
                      <div className="col-3">
                        <InputFormGroup
                          labelClassName="sr-only"
                          inputClassName="form-control form-control-sm"
                          placeholder="Order Name"
                        />
                      </div>
                      <div className="col-3">
                        <InputFormGroup
                          labelClassName="sr-only"
                          inputClassName="form-control  form-control-sm"
                          placeholder="Order Code"
                        />
                      </div>
                      <div className="col-3">
                        <SelectFormGroup
                          labelClassName="sr-only"
                          placeholder="Category"
                          selectClassName="custom-select custom-select-sm mr-sm-2"
                          selectData={this.productCategory}
                        />
                      </div>
                      <div className="col-3">
                        <Button
                          className="btn btn-sm btn-warning w-75"
                          text="Search"
                        />
                      </div>
                    </div>
                    <div className="w-100">
                      <SearchDataTable
                        className="table table-sm search-tb-font table-striped"
                        columnList={this.columnList}
                        tableData={this.tableData}
                        actionLinkPrefix=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InvoiceForm
