import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { X, Menu } from "lucide-react";
import classNames from "classnames";

function Navbar() {

    const [active, setIsActive] = useState("English");
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (language) => {
        setIsActive(language === active ? "English" : language);
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const btnStyle = (language) => {
        return classNames(
            "font-dm-sans text-base tracking-2 font-semibold uppercase px-2",
            { 'bg-black text-white rounded': active === language }
        );
    };

   const NavLinks = () => {
    return (
        <>
            <li>
                <NavLink className="font-dm-sans text-base tracking-2 font-normal leading-35" to="/About Us">About Us</NavLink>
            </li>
            <li>
                <NavLink className="font-dm-sans text-base tracking-2 font-normal leading-35" to="/">Begin Journey</NavLink>
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
                    <button className={btnStyle("English")} onClick={() => handleClick("English")}>English</button>
                    <button className={btnStyle("Spanish")} onClick={() => handleClick("Spanish")}>Spanish</button>
                    <button className={btnStyle("French")} onClick={() => handleClick("French")}>French</button>
                </ul>
                {/* Hidden on mobile, visible on larger screens */}
                <div className="hidden flex-grow w-full gap-10 md:flex">
                    <NavLinks />
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
