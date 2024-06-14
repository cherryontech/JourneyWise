import React, { useState } from "react";
import { X } from "lucide-react"
import useShowClosePopup from "../../Hook/useClosePopup";
import './closeQuestionnaire-custom.css'


const CloseQuestionnaire = () => {
  const [handleClick , ShowClosePopup] = useShowClosePopup();

  return (
    <div id="closecomponent" className="closeQuestionnaire-custom">
      <button onClick= {handleClick}>
        <X className="text-gray-600" />
        <ShowClosePopup />
      </button>
    </div>
  )
}

export default CloseQuestionnaire