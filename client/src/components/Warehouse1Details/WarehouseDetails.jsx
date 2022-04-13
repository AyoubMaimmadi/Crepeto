import { Component } from 'react';
import axios from 'axios';
import Labels from '../Labels/Labels';
import ListingCard from "../../components/ListingCard/ListingCard"
import MainHeader from '../MainHeader/MainHeader'
import "../WarehouseDetails/WarehouseDetails.scss"
import Modal from "../Modal/Modal"



class WarehouseDetails extends Component{
    state={
        warehouse: null,
        inventoryList:null,
        displayModal: false,
        currentInventory: null,
    }

    deleteInventory = (id) => {
        const warehouseId = this.props.match.params.warehouseId
        axios
            .delete(`/api/inventory/${id}`)
            .then(res => {
                this.hideModal()
                axios
                    .get(`/api/warehouses/${warehouseId}/inventory`)
                    .then(res => this.setState({inventoryList: res.data}) 
                )
            })
    }
    
    showInventoryModal = (inventory) => {
        this.setState({ 
            displayModal: true,
            currentInventory: inventory
        })
    }

    hideModal = () =>{
        this.setState({ 
            displayModal: false, 
            currentInventory: null 
        })
    }
    
    componentDidMount() {
    const { warehouseId } = this.props.match.params
        axios
            .get(`/api/warehouses/${warehouseId}`)
            .then(res =>{
                this.setState({warehouse:res.data})
                return axios.get(`/api/warehouses/${warehouseId}/inventory`)
            })
            .then(res => this.setState({inventoryList :res.data}))
            .catch(error=> console.log(error))
    }

    render(){

        const { warehouse, inventoryList } = this.state
        
        return (
            this.state.warehouse && this.state.inventoryList?
                <section className="warehouseDetail">
                    <MainHeader 
                        navigate={this.props} 
                        headerName={warehouse.name} 
                        editWarehouseId={ warehouse.id}/>
                <article className="warehouseDetail__wrapper">
                    <div className="warehouseDetail__detail-container warehouseDetail__detail-container--primary">
                        <h4 className="warehouseDetail__title">WAREHOUSE ADDRESS: </h4>
                        <p className="warehouseDetail__text">{warehouse.address}</p>
                        <p className="warehouseDetail__text">{warehouse.city}, {warehouse.country}</p>  
                    </div>
                    <div className="warehouseDetail__detail-container">
                        <h4 className="warehouseDetail__title">CONTACT NAME:</h4>
                        <p className="warehouseDetail__text">{warehouse.contact.name}</p>
                        <p className="warehouseDetail__text">{warehouse.contact.position}</p>
                        
                    </div>
                    <div className="warehouseDetail__detail-container">
                        <h4 className="warehouseDetail__title">CONTACT INFORMATION: </h4>
                        <p className="warehouseDetail__text">{warehouse.contact.phone}</p>
                        <p className="warehouseDetail__text">{warehouse.contact.email}</p>
                    </div>
                </article>

                <section className="listing__labels-container">
                    {this.props.listingColumn.map((column, index) => {
                        return <Labels key={index} name={column} />
                    })}
                </section>

                {inventoryList.map(item => {
                    return (
                        <ListingCard 
                            key={item.id} 
                            data={item} 
                            pagePath="warehouse/inventory" 
                            showInventoryModal={this.showInventoryModal}/>
                    )
                })}
                 <Modal 
                    displayModal={this.state.displayModal} 
                    hideModal={this.hideModal}
                    showInventoryModal={this.showInventoryModal} 
                    currentInventory={this.state.currentInventory} 
                    deleteInventory={this.deleteInventory}/>
            </section>
            
            :
            <p>Please wait...</p>
            
        )}
}

export default WarehouseDetails
