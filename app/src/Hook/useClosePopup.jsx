import React from "react";
import { useState } from "react";
import Modal from "../components/Modal/Modal"
import ClosePopup from "../components/Questionnaire/ClosePopup";

const useShowClosePopup = () => {

    const [isClosed, setIsclosed] = useState(false)
    const handleClick = () => {
      setIsclosed(!isClosed)
    }

    const ShowClosePopup = ()=>{
     return(
        <>
        {isClosed && (
        <Modal onClose={handleClick}>{<ClosePopup />}</Modal>
      )}
        </>
     )

    }

    return [handleClick, ShowClosePopup]

    
}

export default useShowClosePopup;