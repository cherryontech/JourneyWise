import React from 'react' 

const HomepageGuide = () => {
  return (
    <div className="mt-[100px] bg-[#E5F0F7]">
      <header className="ml-[138px] pt-[113px]">
        <p className="text-[18px]">HERE'S HOW IT WORKS</p>
        <h3 className="text-[48px]">Welcome To An Interactive & Fun Process</h3>
      </header>
      <section>
        <div id="question-vectors" className="flex flex-row mt-[169.97px]">
          <img src="/Vector.svg" className="ml-[138px]" /> 
          <img src="/Vector.svg" className="ml-[422.67px]" />
          <img src="/Vector.svg" className="ml-[329.67px]" /> 
        </div>
        <div className="flex flex-row">
          <div className="ml-[138px] mt-[48.67px]">
          <h4 className="text-[32px]">Discover Your Archetype</h4>
          <p className="mt-[13px]">Are you The Perfectionist, The Expert, or The Soloist? Select the one that reflects your journey best.</p>
          </div>
          <div>
            <h4></h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomepageGuide