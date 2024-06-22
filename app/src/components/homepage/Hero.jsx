import React from 'react'
import Collage from './Collage'
import Buttons from '../Buttons/Buttons'
import useShowSecNotice from '../../Hook/useShowSecNotice'
import './hero-custom.css'
import './collage-custom.css'
import StickyButton from './StickyButton'


const Hero = () => {
  const [handleClick , ShowSecNotice] = useShowSecNotice();
  return (
    <header id="heroheader" className="hero-custom">
      <section id="heading-subheading">
        <div id="heading-container">
          <h2>
          Finding Your Path & Story
          </h2>
        </div>
        <div id="subheading">
        <h6>
          During this time of uncertainty, lets redefine how you tell
          your story.
        </h6>
        </div>
        <Buttons id="lets-begin" rounded primary className="w-[223px] h=[45px] text-[14px] px-[58px] py-[13px] mt-[30px]" onClick= {handleClick}>Begin My Journey</Buttons>
        <ShowSecNotice/>
      </section>
      <section id="collage" className="collage-custom">
        <Collage />
      </section>
      <StickyButton />
    </header>
  )
}

export default Hero
