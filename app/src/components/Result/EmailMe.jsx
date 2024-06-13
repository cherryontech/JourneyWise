import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";
import Modal from "../Modal/Modal";
import EmailResult from "./EmailResult";

function EmailMe() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center">
      <Buttons primary rounded className="mt-[50px] text-center px-[20px]" onClick={handleClick}>
        Email Me
      </Buttons>
      {isOpen && (
        <Modal onClose={handleClose}>
          <EmailResult onClose={handleClose} />
        </Modal>
      )}
    </div>
  );
}

export default EmailMe;
