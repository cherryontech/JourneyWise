import React from "react";
import ResultHero from "../components/Result/ResultHero";
import Content from "../components/Result/Content";
import Skills from "../components/Result/Skills";
import Characteristics from "../components/Result/Characteristics ";
import EmailResult from "../components/Result/EmailResult";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";

function ResultIndex (){

return (

    <>
     <Navbar/>
     <main className="container min-w-[375px] mx-auto px-[40px] py-8">
    <ResultHero/>
    <Content/>
    <Skills/>
    <Characteristics/>
    <EmailResult/>

    </main>
    <Footer/>
    </>
   
)
}

export default ResultIndex