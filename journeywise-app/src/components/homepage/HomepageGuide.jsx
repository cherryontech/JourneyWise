import React from 'react' 

const HomepageGuide = () => {
  return (
    <div className="mt-[100px] bg-[#E5F0F7]">
      <header className="ml-[138px] pt-[113px]">
        <p className="text-[18px] mb-[21px]">HERE'S HOW IT WORKS</p>
        <h3 className="text-[48px] mr-[800px]">Welcome To An Interactive & Fun Process</h3>
      </header>
      <section className="pb-[150px]">
        <div id="question-vectors" className="flex flex-row mt-[169.97px]">
          <img src="/Vector.svg" className="ml-[138px]" /> 
          <img src="/Vector.svg" className="ml-[350px]" />
          <img src="/Vector.svg" className="ml-[330px]" /> 
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