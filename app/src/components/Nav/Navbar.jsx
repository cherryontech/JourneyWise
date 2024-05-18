import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { X, Menu } from "lucide-react";
import { getBtnText } from "../../util/getBtnText";
import classNames from "classnames";
import Buttons from "../Buttons/Buttons"
import useShowSecNotice from '../../Hook/useShowSecNotice'

const Navbar = () => {

    const [active, setIsActive] = useState("English");
    const [isOpen, setIsOpen] = useState(false);
    const [handleSecNotice , ShowSecNotice] = useShowSecNotice();

    const handleClick = (language) => {
        setIsActive(language === active ? "English" : language);
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    const btnStyle = (language) => {
        return classNames(
            "font-dm-sans lg:text-[14px] tracking-2 font-semibold uppercase lg:px-[3px]",
            { 'bg-black text-white rounded-3xl m-[5px]': active === language }
        );
    };

    const NavLinks = () => {
        return (
            <>
                <li>
                    <NavLink onClick={handleSecNotice} className="font-dm-sans text-base tracking-2 font-normal leading-35" >BEGIN JOURNEY</NavLink>
                    <ShowSecNotice /> 
                </li>
            </>
        );
    };


return (
    <>
        <nav className="flex">
            {/* Buttons for language selection */}
            <ul className="flex gap-10">
                <ul className="gap-10 w-full p-2items-center border border-black rounded-full md:flex">
                    <button className={btnStyle("English")} onClick={() => handleClick("English")}>{getBtnText("English")}</button>
                    <button className={btnStyle("Spanish")} onClick={() => handleClick("Spanish")}>{getBtnText("Español")}</button>
                    <button className={btnStyle("French")} onClick={() => handleClick("French")}>{getBtnText("Français")}</button>
                </ul>
                {/* Hidden on mobile, visible on larger screens */}
                <div className="hidden flex-grow w-full gap-10 md:flex">
                    <Buttons onClick= {handleSecNotice} primary rounded className="px-[60px] ">BEGIN JOURNEY</Buttons>
                    <ShowSecNotice />
                </div>
            </ul>
            {/* Button for toggling mobile menu */}
            <div>
                <button className="md:hidden" onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
            </div>
        </nav>

        {/* Render NavLinks in mobile version if isOpen is true */}
        {isOpen && (
            <div className="flex flex-col items-center">
                <ul className="text-center">
                    <NavLinks /> 
                </ul>
            </div>
        )}
    </>
);
}

export default Navbar;
