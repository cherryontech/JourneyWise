import React from "react";
import ResultHero from "../components/Result/ResultHero";
import Content from "../components/Result/Content";
import Navbar from "../components/Nav/Navbar";

function ResultIndex (){

return (

    <>
     <Navbar/>
     <main className="container min-w-[375px] mx-auto px-[40px] py-8">
    <ResultHero/>
    <Content/>
    </main>
    </>
   
)
}

export default ResultIndex