import React from 'react'; 
import './sticky-button.css'; 
import useShowSecNotice from '../../Hook/useShowSecNotice';

const StickyButton = () => {
  const [handleSecNotice , ShowSecNotice] = useShowSecNotice();

  return (
    <div id="stickycontainer" className="sticky-button">
      <button id="stickybutton" onClick={handleSecNotice} >BEGIN JOURNEY</button>
      <ShowSecNotice /> 
    </div>
  )
}

export default StickyButton