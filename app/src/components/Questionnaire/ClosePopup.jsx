import React from "react";
import { useState } from 'react'
import Modal from '../Modal/Modal'
import Buttons from '../Buttons/Buttons'
import ClosePopupContent from "./ClosePopupContent";
import Index from "../../navigation/Index"


const ClosePopup = () => {
  const [isClosed, setIsclosed] = useState(false)

  const handleClick = () => {
    setIsclosed(!isClosed)
  }

  return (
    <div className="flex flex-col w-[808px] h-[520px]">
      {isClosed && (
        <Modal />
      )}
      <img src="/Vector (1).svg" className="w-[51px] h-[68px] mt-[63px] ml-[378px]" /> 
      <h3 className="text-[48px] text-center ml-[100px] mr-[100px] mt-[20px]">Would You Like To Exit Out Of This Quiz?</h3>
      <p className="text-[22px] text-center mt-[30px] ml-[150px] mr-[150px] mb-[42px]">Once you exit this quiz, your answers will not be saved and your progress will be lost.</p>
      <Buttons primary rounded className="w-[200px] px-[60px] py-[13px] ml-[300px]" >
        EXIT QUIZ
      </Buttons>
      </div>
  )
}

export default ClosePopup