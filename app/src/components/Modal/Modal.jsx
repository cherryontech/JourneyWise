import React from 'react'
import ReactDOM from 'react-dom'
import { X } from 'lucide-react'

const Modal = ({ children, onClose, ...res }) => {


  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50">
      <div className="ml-[138px] mr-[138px] mt-[99px] mb-[116px] rounded-[15px] bg-white px-[50px] pt-[58px] pb-[116px] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-[230px] top-[20px] p-2"
        >
          <X className="border-[1px] bg-white border-gray-500 rounded-full w-[33px] h-[33px] absolute right-[-35px] top-[100px]" /> 
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
