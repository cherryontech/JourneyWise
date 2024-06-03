import React, { useState } from "react";
import classNames from "classnames";
import './language-custom.css'
import { getBtnText } from '../../util/getBtnText'

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
        <button className={btnStyle("English")} onClick={() => handleClick("English")}>{getBtnText("English")}</button>
        <button className={btnStyle("Spanish")} onClick={() => handleClick("Spanish")}>{getBtnText("Español")}</button>
        <button className={btnStyle("French")} onClick={() => handleClick("French")}>{getBtnText("Français")}</button>
      </ul>    
    </ul>
  )
}

export default LanguageSelection