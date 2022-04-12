import React from 'react'
import "./MainHeader.scss"
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import edit from "../../assets/Icons/edit-white.svg"
import {Link} from "react-router-dom"

function MainHeader({navigate, headerName , editInventoryId, editWarehouseId}) {

    const navigateBack = (e) => {
        navigate.history.goBack()
    }
    
    return (
        <div className="main-header">
            <div className="main-header__left">
                <img
                    onClick = {navigateBack}
                    className="main-header__img"
                    src={backArrow}
                    alt="Arrow Icon to go back a page"/>
                <h1 className="main-header__title">{headerName}</h1>
            </div>
            <div className={editInventoryId || editWarehouseId ? "main-header__right" : "hide"}>
                <Link 
                    className="main-header__link" 
                    to={editInventoryId ? `/inventory/${editInventoryId}/edit` : `/warehouses/${editWarehouseId}/edit`} >
                    <button className="main-header__right-button">
                        <img className="main-header__right-img" src={edit} alt="Edit Icon" />
                        <span className="main-header__right-text">EDIT</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MainHeader
