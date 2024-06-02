import React from "react";
import Navbar from "./Navbar";
import './navbar-custom.css'


const Header = () => {
    return (
        <header id="navheader" className="navbar-custom">
            <img src="/JourneyWise-Logo-1.svg" /> 
            <Navbar />
        </header>
    );
}

export default Header;
