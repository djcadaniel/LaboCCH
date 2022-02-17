import React from 'react'
import '../../Css/Layout/modal.css'

const Modal = ({isOpen, isClose, children}) => {

    const handleModalDialogClik = (e) => {
        e.stopPropagation();
    }

  return (
    <div className={`modal ${isOpen && 'modal__open'}`} onClick={isClose}>
        <div className='modal__dialog' onClick={handleModalDialogClik}>
            <button className='modal__buttonClose' onClick={isClose}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            {children}
        </div>
    </div>
  )
}

export {Modal}