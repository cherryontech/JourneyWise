import React from "react";
import { useState } from "react";
import Modal from "../components/Modal/Modal"
import SecContent from "../components/SecNotice/SecContent"

function useShowSecNotice(){

    const [isClosed, setIsclosed] = useState(false)
    const handleClick = () => {
      setIsclosed(!isClosed)
    }

    const ShowSecNotice = ()=>{
     return(
        <>
        {isClosed && (
        <Modal onClose={handleClick}>{<SecContent />}</Modal>
      )}
        </>
     )

    }

    return [handleClick, ShowSecNotice]

    
}

export default useShowSecNotice;