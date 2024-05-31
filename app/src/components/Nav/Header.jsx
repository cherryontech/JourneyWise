import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="flex justify-between py-[21px] px-[21px]">
            <img src="/JourneyWise-Logo-1.svg" /> 
            <Navbar />
        </header>
    );
}

export default Header;
