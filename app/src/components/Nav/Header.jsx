import React from "react";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="flex justify-between py-[21px] px-[21px]">
            <h1 className="text-black font-jetbrains-mono lg:text-[28px] sm:text-[19px] leading-normal tracking-tight tracking--1.68">
                <span className="font-semibold">Journey</span><span className="text-black font-normal italic lg:text-[28px] sm:text-[19px] leading-normal">Wise</span>
            </h1>
            <Navbar />
        </header>
    );
}

export default Header;
