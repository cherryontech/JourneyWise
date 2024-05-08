import React from 'react' 

const HomepageGuide = () => {
  return (
    <div className="mt-[100px] bg-[#E5F0F7]">
      <header className="flex flex-row">
        <div className="ml-[138px] pt-[179px]">
          <p className="text-[18px] mb-[21px]">HERE'S HOW IT WORKS</p>
          <h3 className="text-[48px] mr-[500px]">Welcome To An Interactive & Fun Process</h3>
        </div>
        <img src="/Rectangle 304.svg" className="pt-[-160px] ml-[-400px]" alt="A laptop with a pair of hands pointing towards the screen." /> 
      </header>
      <section className="pb-[150px]">
        <div id="question-vectors" className="flex flex-row mt-[69px]">
          <img src="/Ellipse 223.svg" className="ml-[138px]" alt="A yellow circle with a black number 1 in the center." /> 
          <p className="text-[22px] ml-[-28px] mt-[5px]">1</p>
          <img src="/Ellipse 223.svg" className="ml-[410px]" alt="A yellow circle with a black number 2 in the center." />
          <p className="text-[22px] ml-[-28px] mt-[5px]">2</p>
          <img src="/Ellipse 223.svg" className="ml-[395px]" alt="A yellow circle with a black number 3 in the center." /> 
          <p className="text-[22px] ml-[-28px] mt-[5px]">3</p>
        </div>
        <div id="instructions" className="flex flex-row">
          <div id="discover" className="ml-[138px] mt-[48.67px]">
          <h4 className="text-[32px] mr-[100px]">Discover Your Archetype</h4>
          <p className="mt-[13px] mr-[100px]">Are you The Perfectionist, The Expert, or The Soloist? Select the one that reflects your journey best.</p>
          </div>
          <div id="engage" className="mt-[48.67px]" >
            <h4 className="text-[32px] mr-[150px] ml-[50px]" >Engage With Our Assessment</h4>
            <p className="mt-[13px] ml-[50px] mr-[200px]" >Answer a few questions to reflect on your journey. Remember, to be honest as that helps us curate results crafted exclusively for you.</p>
          </div>
          <div id="unlock" className="mt-[48.67px] mr-[144px] ml-[-100px]" >
            <h4 className="text-[32px] mr-[100px]" >Unlock Your Results</h4>
            <p className="mt-[13px]" >That's all there is to it! You are done. Use these results to redefine how you tell your story.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomepageGuide