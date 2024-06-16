import React from "react";
import ResultHero from "../components/Result/ResultHero";
import Content from "../components/Result/Content";
import TopSoftSkills from "../components/Result/TopSoftSkills";
import Skills from "../components/Result/Skills";
import Characteristics from "../components/Result/Characteristics ";
import SoftSkillsText from "../components/Result/SoftSkillsText";
import SoftSkills from "../components/Result/SoftSkills";
import EmailMe from "../components/Result/EmailMe";
import Header from "../components/Nav/Header";
import Footer from "../components/Footer/Footer";

const ResultIndex = () => {

return (

    <>
     <Header/>
     <main>
        <div id = "result-container">  
    <ResultHero/>
    <Content/>
    <TopSoftSkills/>
    <SoftSkillsText/>
    <SoftSkills/>
  
    </div>
    <EmailMe/>

    </main>
    <Footer/>
    </>
   
)
}

export default ResultIndex