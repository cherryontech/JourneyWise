import React, { useState } from "react";
import classNames from "classnames";
import './language-custom.css'

const LanguageSelection = () => {
  const [active, setIsActive] = useState("English");  

  const handleClick = (language) => {
    setIsActive(language);
    };

  const btnStyle = (language) => {
    return classNames(
      "tracking-2 lg:px-[3px]",
      { 'bg-black text-white rounded-3xl m-[3px] py-[8px] px-[3px]': active === language }
      );
    };

  return (
    <ul className="language-custom">
      <ul className="p-2 items-center border border-black rounded-full md:flex">
        <button id="english" className={btnStyle("English")} onClick={() => handleClick("English")}>
          <span className="block md:hidden">EN</span>
          <span className="hidden md:block">ENGLISH</span>
        </button>
        <button id="spanish" className={btnStyle("Spanish")} onClick={() => handleClick("Spanish")}>
          <span className="block md:hidden">ES</span>
          <span className="hidden md:block">ESPAÑOL</span>
        </button>
        <button id="french" className={btnStyle("French")} onClick={() => handleClick("French")}>
          <span className="block md:hidden">FR</span>
          <span className="hidden md:block">FRANÇAIS</span>
        </button>
      </ul>    
    </ul>
  )
}

export default LanguageSelection