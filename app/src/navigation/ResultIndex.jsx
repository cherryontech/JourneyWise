import React from "react";
import ResultHero from "../components/Result/ResultHero";
import Content from "../components/Result/Content";
import Skills from "../components/Result/Skills";
import Characteristics from "../components/Result/Characteristics ";
import EmailResult from "../components/Result/EmailResult";
import Header from "../components/Nav/Header";
import Footer from "../components/Footer/Footer";

function ResultIndex (){

return (

    <>
     <Header/>
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