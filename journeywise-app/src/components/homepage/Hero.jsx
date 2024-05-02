import React from 'react'
import Collage from './Collage'

const Hero = () => {
  return (
    <header id="hero" className="flex flex-row p-0 mt-80 ml-[138px]">
      <section id="heading-subheading">
        <h2 className="text-[62px] font-['DM Serif Text'] w-[558px] h-[170px] not-italic font-normal leading-normal">
          Finding Your Path & Story
        </h2>
        <h6 className="text-[22px]w-[451px] h-[57px] mt-[21px] mr-[104px]">
          During this time of uncertainty, lets redefine how you tell
          your story.
        </h6>
      </section>
      <section id="collage" className="ml-[172.01px] mr-0">
        <Collage />
      </section>
    </header>
  )
}

export default Hero
