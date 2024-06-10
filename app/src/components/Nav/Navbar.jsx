import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { X, Menu } from "lucide-react";
import Buttons from "../Buttons/Buttons"
import useShowSecNotice from '../../Hook/useShowSecNotice'
import LanguageSelection from "./LanguageSelection";
import './navbar-custom.css'; 

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
        <nav id="navigation" className="navbar-custom">
            <LanguageSelection /> 
            <div className="hidden md:flex">
                    <Buttons onClick= {handleSecNotice} primary rounded className="px-[60px]">BEGIN JOURNEY</Buttons>
                    <ShowSecNotice />
            </div>
            
            {/* Button for toggling mobile menu */}
            <div>
                <button className="md:hidden" onClick={toggleNavbar}>{isOpen ? <X id="navxbutton" /> : <Menu className="mt-[5px]" />}</button>
            </div>
        </nav>

        {/* Render NavLinks in mobile version if isOpen is true */}
        {isOpen && (
            <div id="mobilemenu">
                <ul className="text-center">
                    <NavLinks />
                </ul>
            </div>
        )}
    </>
);
}

export default Navbar;
