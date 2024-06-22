import React from 'react' 
import './homepageGuide-custom.css'

const HomepageGuide = () => {
  return (
    <div id="guideContainer" className="homepageGuide-custom">
      <header id="homepageHeader">
        <div id="headerText">
          <p>HERE'S HOW IT WORKS</p>
          <h3>Welcome To An Interactive & Fun Process</h3>
        </div>
        <img id="guideRectangle" src="/Rectangle 304.svg" alt="A laptop with a pair of hands pointing towards the screen." /> 
      </header>
        <section id="instructions">
          <div id="discover">
            <img id="discover1" src="/journeywise-icon-1.svg" alt="Step 1" />
            <div id="discovertext">
              <h4>Discover Your Archetype</h4>
              <p>Are you The Perfectionist, The Recluse, or The Soloist? Select the one that reflects your journey best.</p>
            </div>
          </div>
          <div id="engage">
            <img id="engage2" src="/journeywise-icon-2.svg" alt="Step 2" />
            <div id="engagetext">
            <h4 >Engage With Our Assessment</h4>
            <p >Answer a few questions to reflect on your journey. Remember, to be honest as that helps us curate results crafted exclusively for you.</p>
            </div>
          </div>
          <div id="unlock">
            <img id="unlock3" src="/journeywise-icon-3.svg" alt="Step 3" /> 
            <div id="unlocktext">
              <h4>Unlock Your Results</h4>
              <p>That's all there is to it! You are done. Use these results to redefine how you tell your story.</p>
            </div>
          </div>
      </section>
    </div>
  )
}

export default HomepageGuide