import React from 'react' 
import Buttons from '../Buttons/Buttons'

const Storytelling = () => {
  return (
    <div id="storytelling" className="flex flex-row mt-[100px] mb-[113px]">
      <img src="/Rectangle 181.svg" className="relative z-0" alt="A close up of five different fists joining together in a circle." /> 
      <section className="ml-[137px]">
        <p className="text-[18px] mt-[172px] mr-[200px] not-italic">TAKE A STEP FORWARD IN YOUR JOURNEY</p>
        <h3 className="text-[48px] mt-[21px] mr-[100px] not-italic font-normal leading-normal" >Humanity's Greatest Triumph Is Storytelling</h3>
        <p className="mt-[21px] mr-[32px] text-[18px] not-italic font-normal leading-[35px]">Step into the realm of self-discovery and empower yourself. It's time to shift from self-doubt to confidence, from fear to courage, and ultimately from a sense of helplessness to redefining your narrative. Let us redefine how you tell your story and show how unique and incredible you are. </p>
        <Buttons rounded primary className="w-[277px] h=[45px] text-[14px] px-[60px] py-[13px] mt-[30px] relative z-0" >BEGIN ASSESSMENT</Buttons> 
      </section>
      <img src="/Vector 929.svg" className="ml-[-850px] mt-[200px]" alt="A swirly decoration behind the text." />
    </div>
  )
}

export default Storytelling