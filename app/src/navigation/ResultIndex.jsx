import React from "react";
import ResultHero from "../components/Result/ResultHero";
import Navbar from "../components/Nav/Navbar";

function ResultIndex (){

return (

    <>
     <Navbar/>
     <section className="container min-w-[375px] mx-auto px-[40px] lg-w-[1440px] py-8">
    <ResultHero/>
    </section>
    </>
   
)
}

export default ResultIndex