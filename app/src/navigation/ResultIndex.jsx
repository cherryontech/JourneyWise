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
     <main className="container min-w-[375px] mx-auto px-[40px] py-8">
        <div id = "result-container">  
    <ResultHero/>
    <Content/>
    <TopSoftSkills/>
    <SoftSkillsText/>
    <SoftSkills/>
    {/* <Skills/> */}
    {/* <Characteristics/> */}
  
    </div>
    <EmailMe/>

    </main>
    <Footer/>
    </>
   
)
}

export default ResultIndex