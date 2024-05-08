import React from 'react'
import Collage from './Collage'
import Buttons from '../Buttons/Buttons'



const Hero = () => {
  return (
    <header id="hero" className="flex lg:flex-row sm:flex-col-reverse lg:mt-[140px] sm:mt-[50px] lg:ml-[138px]">
      <section id="heading-subheading" className="lg:ml-[138px] sm:my-[50px]">
        <div className="lg:w-[450px] lg:h-[170px] sm:w-[305px] sm:h-[142px]">
        <h2 className="text-[64px] font-['DM Serif Text'] not-italic font-normal leading-normal relative">
          Finding Your Path & Story
        </h2>
        <img src="/Vector 921.svg" className="lg:ml-[-150px] lg:mt-[-250px] sm:mt-[-200px]" alt="A swirly decoration behind the text." /> 
        <img src="/Vector 922.svg" className="ml-[345px] mt-[-295px]" alt="A line decoration next to the text." />
        <img src="/Vector 923.svg" className="ml-[380px] mt-[-30px]" alt="A line decoration next to the text." />
        <img src="/Vector 924.svg" className="ml-[400px] mt-[20px]" alt="A line decoration next to the text." />
        </div>
        <div className="w-[451px] h-[57px]">
        <h6 className="text-[22px] mt-[21px] mr-[104px]">
          During this time of uncertainty, lets redefine how you tell
          your story.
        </h6>
        <img src="/Vector 926.svg" className="ml-[-55px] mt-[50px]" alt="A line decoration behind the button." /> 
        <img src="/Vector 927.svg" className="ml-[40px] mt-[-5px]" alt="A line decoration below the button." /> 
        </div>
        <Buttons rounded primary className="w-[223px] h=[45px] text-[14px] px-[60px] py-[13px] mt-[30px]">LET'S BEGIN</Buttons>
      </section>
      <section id="collage" className="sm:mt-[50px] lg:ml-[172.01px] lg:mr-0">
        <Collage />
      </section>
    </header>
  )
}

export default Hero
