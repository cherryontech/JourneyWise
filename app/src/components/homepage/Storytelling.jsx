import React from 'react' 
import Buttons from '../Buttons/Buttons'
import useShowSecNotice from '../../Hook/useShowSecNotice';
import './storytelling-custom.css'

const Storytelling = () => {
  const [handleClick , ShowSecNotice] = useShowSecNotice();
  return (
    <div id="storytelling" className="storytelling-custom">
      <img id="storytellingRectangle" src="/Rectangle 181.svg" alt="A close up of five different fists joining together in a circle." /> 
      <section id="storysection">
        <p id="storypjourney">TAKE A STEP FORWARD IN YOUR JOURNEY</p>
        <h3 id="storyh3" >Humanity's Greatest Triumph Is Storytelling</h3>
        <p id="storyptext">Step into the realm of self-discovery and empower yourself. It's time to shift from self-doubt to confidence, from fear to courage, and ultimately from a sense of helplessness to redefining your narrative. Let us redefine how you tell your story and show how unique and incredible you are. </p>
        <Buttons rounded primary className="w-[277px] h=[45px] text-[14px] px-[60px] py-[13px] mt-[30px] relative z-0"  onClick = {handleClick}>Begin My Journey</Buttons> 
        <ShowSecNotice/>
      </section>
    </div>
  )
}

export default Storytelling