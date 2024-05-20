import React, { useState } from "react";
import { X } from "lucide-react"
import useShowClosePopup from "../../Hook/useClosePopup";


const CloseQuestionnaire = () => {
  const [handleClick , ShowClosePopup] = useShowClosePopup();

  return (
    <div className="absolute top-4 right-4">
      <button onClick= {handleClick} className="bg-white rounded-full p-2">
        <X className="text-gray-600" />
        <ShowClosePopup />
      </button>
    </div>
  )
}

export default CloseQuestionnaire