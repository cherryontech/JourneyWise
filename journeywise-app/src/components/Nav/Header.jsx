import React from "react";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="flex flex-wrap justify-between items-center px-16 py-10 md:py-16">
            <h1 className="text-black font-jetbrains-mono text-28 leading-normal tracking-tight tracking--1.68">
                <span className="font-semibold">Journey</span><span className="text-black font-normal italic font-lora text-28 leading-normal">Wise</span>
            </h1>
            <Navbar />
        </header>
    );
}

export default Header;
