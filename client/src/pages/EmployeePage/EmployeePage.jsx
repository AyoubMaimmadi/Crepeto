import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import PageHeader from '../../components/PageHeader/PageHeader'
import Listing from '../../components/Listing/Listing2'
import Footer from '../../components/PageFooter/PageFooter'
import './InventoryPage.scss'
import Modal from '../../components/Modal/Modal'
import InventoryForm from '../../components/InventoryForm/InventoryForm'
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm'
import EmployeeDetail from '../../components/EmployeeDetail/EmployeeDetail'

class EmployeePage extends Component {
  state = {
    employeeList: [],
    displayModal: false,
    currentEmployee: null,
    isUpdated: false,
  }

  deleteEmployee = (id) => {
    axios.delete(`/api/employees/${id}`).then((res) => {
      this.hideModal()
      axios.get(`/api/employees`).then((res) => {
        this.setState({
          employeeList: res.data,
        })
      })
    })
  }

  showEmployeeModal = (employee) => {
    this.setState({
      displayModal: true,
      currentEmployee: employee,
    })
  }

  hideModal = () => {
    this.setState({
      displayModal: false,
      currentEmployee: null,
    })
  }

  componentDidMount() {
    axios
      .get(`/api/employees`)
      .then((res) => this.setState({ employeeList: res.data }))
      .catch((error) => console.log(error))
  }

  updateNewFormData = () => {
    this.setState({
      isUpdated: true,
    })
  }

  componentDidUpdate = () => {
    if (this.state.isUpdated) {
      axios
        .get(`/api/employees`)
        .then((res) =>
          this.setState({
            employeeList: res.data,
            isUpdated: false,
          })
        )
        .catch((error) => console.log(error))
    }
  }

  render() {
    return (
      <>
        <PageHeader path={this.props.match.url} />
        <Modal
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          showEmployeeModal={this.showEmployeeModal}
          currentEmployee={this.state.currentEmployee}
          deleteEmployee={this.deleteEmployee}
        ></Modal>
        <BrowserRouter>
          <section className="inventory-wrapper">
            <Switch>
              <Route
                exact
                path="/employees"
                render={(routeProps) => {
                  return (
                    <Listing
                      showEmployeeModal={this.showEmployeeModal}
                      dataList={this.state.employeeList}
                      pagePath="employees"
                      addItemPath="/employees/add"
                      addItemValue="+ Add New Employee"
                      listingColumn={[
                        'id',
                        'empName',
                        'empCIN',
                        'description',
                        'empSalary',
                        'managerId',
                      ]}
                      {...routeProps}
                    />
                  )
                }}
              />
              <Route
                path="/employees/:employeeId/detail"
                component={EmployeeDetail}
              />
              <Route
                path="/employees/add"
                render={(routeProps) => {
                  return (
                    <Form {...routeProps} updateData={this.updateNewFormData} />
                  )
                }}
              />
              <Route
                path="/employees/:employeeId/edit"
                render={(routeProps) => {
                  return (
                    <EmployeeForm
                      {...routeProps}
                      updateData={this.updateNewFormData}
                    />
                  )
                }}
              />
            </Switch>
          </section>
        </BrowserRouter>
        <Footer />
      </>
    )
  }
}

export default EmployeePage
