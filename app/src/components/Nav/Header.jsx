import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import './navbar-custom.css'


const Header = () => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate("/")
      }

    return (
        <header id="navheader" className="navbar-custom">
            <button onClick={handleClick}>
                <img src="/JourneyWise-Logo-1.svg" alt="JourneyWise logo" /> 
            </button>
            <Navbar />
        </header>
    );
}

export default Header;
