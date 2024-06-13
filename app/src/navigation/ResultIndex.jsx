import React from "react";
import ResultHero from "../components/Result/ResultHero";
import Content from "../components/Result/Content";
import Skills from "../components/Result/Skills";
import Characteristics from "../components/Result/Characteristics ";
import EmailMe from "../components/Result/EmailMe";
import Header from "../components/Nav/Header";
import Footer from "../components/Footer/Footer";

const ResultIndex = () => {

return (

    <>
     <Header/>
     <main className="container min-w-[375px] mx-auto px-[40px] py-8">
        <div id = "result-container">  
    <ResultHero/>
    <Content/>
    <Skills/>
    <Characteristics/>
  
    </div>
    <EmailMe/>

    </main>
    <Footer/>
    </>
   
)
}

export default ResultIndex