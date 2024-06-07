import React from "react";
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Buttons from '../Buttons/Buttons'
import './closePopup-custom.css'



const ClosePopup = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/")
  }

  return (
    <div id="closecontainer" className="closePopup-custom">
      <Modal />
      <img src="/Vector (1).svg" className="w-[51px] h-[68px] mt-[63px]" /> 
      <h3>Would You Like To Exit Out Of This Quiz?</h3>
      <p>Once you exit this quiz, your answers will not be saved and your progress will be lost.</p>
      <Buttons primary rounded onClick={handleClose} className="w-[200px] px-[52px] py-[13px]" >
        EXIT QUIZ
      </Buttons>
    </div>
  )
}

export default ClosePopup