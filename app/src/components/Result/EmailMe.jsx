import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";
import Modal from "../Modal/Modal";
import EmailResult from "./EmailResult";
import './emailMe-custom.css'

const EmailMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div id="emailMeContainer" className="emailMe-custom">
      <img src="/mdi_email-plus.svg" alt="An envelope with a plus sign in the bottom right corner." /> 
      <h3>Want To Save Your Results?</h3>
      <p>Input your email below and we’ll email you a printable PDF of your results.</p>
      <EmailResult /> 
    </div>
  );
}

export default EmailMe;
