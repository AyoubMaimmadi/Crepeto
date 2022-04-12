import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import axios from "axios"
import PageHeader from '../../components/PageHeader/PageHeader'
import Listing from "../../components/Listing/Listing"
import Footer from '../../components/PageFooter/PageFooter'
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm'
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails.jsx';
import "./WarehousePage.scss"
import Modal from "../../components/Modal/Modal"
import InventoryDetail from "../../components/InventoryDetail/InventoryDetail"
import InventoryForm from "../../components/InventoryForm/InventoryForm"
import { getWarehouses } from '../../utils/api';


class WarehouseMainDisplay extends Component {

    state = {
        warehouseList: [],
        displayModal: false,
        currentWarehouse: null,
        isUpdated: false,
    }

    deleteWarehouse = (id) => {
        axios
            .delete(`/api/warehouses/${id}`)
            .then(res => {
                this.hideModal()
                getWarehouses()
                .then(res=> { console.log(res)
                    this.setState({
                        warehouseList: res.data,
                        isUpdated: false
                    })
                })
            })
    }

    
        
    showWarehouseModal = (warehouse) => {
        this.setState({ 
            displayModal: true,
            currentWarehouse: warehouse
        })
    }

    hideModal = () =>{
        this.setState({ displayModal: false })
    }

    componentDidMount() {
        axios
            .get(`/api/warehouses`)
            .then(res => res.data)
            .then(data => {
                this.setState({
                    warehouseList: data,
                    isUpdate: false
                });
            })
            .catch(error => console.log(error))
    }

    updateNewFormData = () => {
        this.setState({
            isUpdated: true
        })
    }

    componentDidUpdate = () => {
        if(this.state.isUpdated) {
            axios
                .get(`/api/warehouses`)
                .then(res => res.data)
                .then(data => {
                    this.setState({
                        warehouseList: data,
                        isUpdated: false
                    });
                })
                .catch(error => console.log(error))
        }
    }

    render() {
      
        return (
            <>
                <PageHeader path={this.props.match.url}/> 
                <Modal 
                    displayModal={this.state.displayModal} 
                    hideModal={this.hideModal}
                    showWarehouseModal={this.showWarehouseModal} 
                    currentWarehouse={this.state.currentWarehouse} 
                    deleteWarehouse={this.deleteWarehouse}>
                </Modal>
                <BrowserRouter>
                    <section className="warehouse-wrapper">
                        <Switch>

                            <Route exact path="/" render={routeProps => {
                                return <Listing
                                    showWarehouseModal={this.showWarehouseModal} 
                                    dataList={this.state.warehouseList}
                                    pagePath="warehouse"
                                    addItemPath="/warehouses/add"
                                    addItemValue="+ Add New Warehouse"
                                    listingColumn={["WAREHOUSE", "ADDRESS", "CONTACT NAME", "CONTACT INFORMATION", "ACTIONS"]}
                                    {...routeProps} />
                            }} />
                            <Route path="/warehouses/add" render={routeProps => {
                                return <WarehouseForm updateData={() => this.updateNewFormData()}  {...routeProps}/>
                            }}/>
                            <Route path="/warehouses/:warehouseId/detail" render={routeProps => {
                                return <WarehouseDetails
                                            display={this.state.displayModal} hide={this.hideModal}
                                            showWarehouseModal={this.showWarehouseModal}  
                                            listingColumn={["INVENTORY", "CATEGORY", "STATUS", "QTY", "ACTIONS"]}
                                            {...routeProps}/>
                            }} />
                            <Route path="/warehouses/:warehousesId/edit" render={routeProps => {
                                return <WarehouseForm updateData={() => this.updateNewFormData()} {...routeProps}/>
                            }}/>
                            <Route path="/inventory/:inventoryId/detail" component={InventoryDetail} />
                            <Route path="/inventory/:inventoryId/edit" component={InventoryForm} />


                        </Switch>
                    </section>
                </BrowserRouter>
                <Footer />
            </>
        )
    }
}

export default WarehouseMainDisplay
