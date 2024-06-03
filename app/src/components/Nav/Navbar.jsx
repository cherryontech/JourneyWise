import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { X, Menu } from "lucide-react";
import Buttons from "../Buttons/Buttons"
import useShowSecNotice from '../../Hook/useShowSecNotice'
import LanguageSelection from "./LanguageSelection";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [handleSecNotice , ShowSecNotice] = useShowSecNotice();


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
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
        <nav className="flex flex-row">
            <LanguageSelection /> 
            <div className="hidden flex-grow w-full gap-10 md:flex">
                    <Buttons onClick= {handleSecNotice} primary rounded className="px-[60px] ">BEGIN JOURNEY</Buttons>
                    <ShowSecNotice />
            </div>
            
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
