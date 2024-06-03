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
      " lg:text-[14px] tracking-2 font-semibold uppercase lg:px-[3px]",
      { 'bg-black text-white rounded-3xl m-[5px]': active === language }
      );
    };

  return (
    <ul className="language-custom">
      <ul className="p-2items-center border border-black rounded-full md:flex">
        <button className={btnStyle("English")} onClick={() => handleClick("English")}>
          <span className="block md:hidden">En</span>
          <span className="hidden md:block">English</span>
        </button>
        <button className={btnStyle("Spanish")} onClick={() => handleClick("Spanish")}>
          <span className="block md:hidden">Es</span>
          <span className="hidden md:block">Español</span>
        </button>
        <button className={btnStyle("French")} onClick={() => handleClick("French")}>
          <span className="block md:hidden">Fr</span>
          <span className="hidden md:block">Français</span>
        </button>
      </ul>    
    </ul>
  )
}

export default LanguageSelection