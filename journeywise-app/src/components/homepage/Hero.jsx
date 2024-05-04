import React from 'react'
import Collage from './Collage'
import Buttons from '../Buttons/Buttons'



const Hero = () => {
  return (
    <header id="hero" className="flex flex-row p-0 mt-80 ml-[138px]">
      <section id="heading-subheading">
        <div className="w-[450px] h-[170px]">
        <h2 className="text-[62px] font-['DM Serif Text'] not-italic font-normal leading-normal">
          Finding Your Path & Story
        </h2>
        </div>
        <div className="w-[451px] h-[57px]">
        <h6 className="text-[22px] mt-[21px] mr-[104px]">
          During this time of uncertainty, lets redefine how you tell
          your story.
        </h6>
        </div>
        <Buttons rounded primary className="w-[223px] h=[45px] text-[14px] px-[60px] py-[13px] mt-[30px]">LET'S BEGIN</Buttons>
      </section>
      <section id="collage" className="ml-[172.01px] mr-0">
        <Collage />
      </section>
    </header>
  )
}

export default Hero
