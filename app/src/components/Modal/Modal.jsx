import React from 'react'
import ReactDOM from 'react-dom'
import { X } from 'lucide-react'
import './modal-custom.css'

const Modal = ({ children, onClose, ...res }) => {


  return ReactDOM.createPortal(
    <div id="shadow" className="modal-custom bg-black bg-opacity-50">
      <div id="popup">
        <button
          id="xbutton"
          onClick={onClose}
        >
          <X id="x" alt="X to close this popup" /> 
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
