import React from 'react'
import '../Modal/Modal.scss'
import closeIcon from '../../assets/Icons/close-24px.svg'

const Modal = ({
  currentWarehouse,
  currentInventory,
  hideModal,
  displayModal,
  deleteWarehouse,
  deleteInventory,
}) => {
  if (currentWarehouse === null || !displayModal) {
    return null
  }

  return currentWarehouse ? (
    <>
      <div className="modal display-block">
        <section className="modal__main">
          <div className="modal__container">
            <img
              className="modal__cancel-icon"
              src={closeIcon}
              alt="cancel"
              onClick={hideModal}
            />
            <div className="modal__container-text">
              <h1 className="modal__title">
                Delete {currentWarehouse.name} warehouse?
              </h1>
              <p className="modal__body">
                Please confirm that you'd like to delete the{' '}
                {currentWarehouse.name} from the list of Vendors. You won't be
                able to undo this action.
              </p>
            </div>

            <div className="modal__button-container">
              <button className="cancel__button" onClick={hideModal}>
                Cancel
              </button>
              <button
                className="delete__button"
                onClick={() => deleteWarehouse(currentWarehouse.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  ) : (
    <>
      <div className="modal display-block">
        <section className="modal__main">
          <div className="modal__container">
            <img
              className="modal__cancel-icon"
              src={closeIcon}
              alt="cancel"
              onClick={hideModal}
            />
            <div className="modal__container-text">
              <h1 className="modal__title">
                Delete {currentInventory.itemName} inventory item?
              </h1>
              <p className="modal__body">
                Please confirm that you'd like to delete the{' '}
                {currentInventory.itemName} from the inventory list. You won't
                be able to undo this action.
              </p>
            </div>

            <div className="modal__button-container">
              <button className="cancel__button" onClick={hideModal}>
                Cancel
              </button>
              <button
                className="delete__button"
                onClick={() => deleteInventory(currentInventory.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Modal
