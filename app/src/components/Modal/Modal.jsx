import React from 'react'
import ReactDOM from 'react-dom'

function Modal({ children, onClose, ...res }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
      <div className="mb-2 ml-2 mr-2 mt-4 rounded-lg bg-white p-4 shadow-lg ">
        <button
          onClick={onClose}
          className="absolute right-0 top-0 p-2"
        >
          <svg
            className="h-6 w-6 fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6.71 6.71a.996.996 0 0 0 0 1.41L11.3 12l-4.59 4.59a.996.996 0 1 0 1.41 1.41L12 13.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L13.41 12l4.59-4.59a.996.996 0 1 0-1.41-1.41L12 10.59 7.41 6.71a.996.996 0 0 0-1.41 0z" />
          </svg>
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
