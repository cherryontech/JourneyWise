import React from 'react' 
import './homepageGuide-custom.css'

const HomepageGuide = () => {
  return (
    <div id="guideContainer" className="homepageGuide-custom">
      <header id="homepageHeader">
        <div id="headerText">
          <p className="text-[18px] mb-[21px]">HERE'S HOW IT WORKS</p>
          <h3>Welcome To An Interactive & Fun Process</h3>
        </div>
        <img id="guideRectangle" src="/Rectangle 304.svg" alt="A laptop with a pair of hands pointing towards the screen." /> 
      </header>
      <section className="pb-[150px]">
        <div id="question-vectors" className="flex flex-row">
          <img id="discover" src="/Ellipse 223.svg" alt="A yellow circle with a black number 1 in the center." /> 
          <p className="text-[22px]">1</p>
          <img src="/Ellipse 223.svg" alt="A yellow circle with a black number 2 in the center." />
          <p className="text-[22px]">2</p>
          <img src="/Ellipse 223.svg" alt="A yellow circle with a black number 3 in the center." /> 
          <p className="text-[22px]">3</p>
        </div>
        <div id="instructions" className="flex flex-row">
          <div id="discover" className="ml-[138px] mt-[48.67px]">
          <h4 className="mr-[100px]">Discover Your Archetype</h4>
          <p className="mt-[13px] mr-[100px]">Are you The Perfectionist, The Expert, or The Soloist? Select the one that reflects your journey best.</p>
          </div>
          <div id="engage" className="mt-[48.67px]" >
            <h4 className="mr-[150px] ml-[50px]" >Engage With Our Assessment</h4>
            <p className="mt-[13px] ml-[50px] mr-[200px]" >Answer a few questions to reflect on your journey. Remember, to be honest as that helps us curate results crafted exclusively for you.</p>
          </div>
          <div id="unlock" className="mt-[48.67px] mr-[144px] ml-[-100px]" >
            <h4 className="mr-[100px]" >Unlock Your Results</h4>
            <p className="mt-[13px]" >That's all there is to it! You are done. Use these results to redefine how you tell your story.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomepageGuide