import React from 'react'
import Collage from './Collage'
import Buttons from '../Buttons/Buttons'
import Vectors from './Vectors'
import useShowSecNotice from '../../Hook/useShowSecNotice'
import './hero-custom.css'



const Hero = () => {
  const [handleClick , ShowSecNotice] = useShowSecNotice();
  return (
    <header id="heroheader" className="hero-custom">
      <section id="heading-subheading">
        <div>
          <h2>
          Finding Your Path & Story
          </h2>
          <div>
            <Vectors /> 
          </div>
        </div>
        <div id="subheading">
        <h6>
          During this time of uncertainty, lets redefine how you tell
          your story.
        </h6>
        <img src="/Vector 926.svg" className="ml-[-55px] mt-[25px]" alt="A line decoration behind the button." /> 
        <img src="/Vector 927.svg" className="ml-[40px] mt-[-5px]" alt="A line decoration below the button." /> 
        </div>
        <Buttons id="lets-begin" rounded primary className="w-[223px] h=[45px] text-[14px] px-[60px] py-[13px] mt-[30px]" onClick= {handleClick}>LET'S BEGIN</Buttons>
        <ShowSecNotice/>
      </section>
      <section id="collage">
        <Collage />
      </section>
    </header>
  )
}

export default Hero
