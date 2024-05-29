import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import Buttons from '../Buttons/Buttons'
import SecurityCollage from './SecurityCollage'

function SecContent() {
  const [isChecked, setIschecked] = useState(false)
  const navgate = useNavigate();
  const paragraph = classNames(
    'font-normal text-base leading-17 font-normal mb-8 ml-[87px] mr-[128px] text-[18px]'
  )

  const handleChange = (event) => {
    setIschecked(event.target.checked)
  }

  const handleClick = ()=>{
     navgate("./questionnaire")
    
  }
  const renderBtn = isChecked ? (
    <Buttons onClick = {handleClick} primary rounded className="w-[339px] h-[45] px-[60px] py-[13px]">
      LET'S BEGIN ASSESSMENT
    </Buttons>
  ) : (
    <Buttons alternate rounded className="w-[339px] h-[45] px-[60px] py-[13px]">
      LET'S BEGIN ASSESSMENT
    </Buttons>
  )
  return (
    <section
      className="flex flex-col justify-center rounded-lg bg-white text-center md:mx-auto relative z-10]"
    >
      <div className="flex justify-center pt-[250px]">
          <SecurityCollage /> 
      </div>
      <div className="text-container md:mt-[4.8rem]">
        <h3 className="mb-[50px]text-center font-serif text-[48px] font-normal text-black ml-[250px] mr-[250px]">
          We’re Dedicated To Protecting Your Data
        </h3>

        <p className={`${paragraph}`}>
        At JourneyWise, your privacy and security are our top priorities. As such, we want to be transparent about how we handle your information.
        </p>
        <p className="font-bold">Who are we?</p>
        <p className={`${paragraph}`}>
        JourneyWise is a tool developed by the Venus Voyagers tech squad as part of the Cherry on Tech Spring Cohort 2024. Our mission is to support underrepresented genders new to the tech world. JourneyWise operates without a backend, meaning we do not collect or store any personal information from you.
        </p>
        <p className="font-bold">How is your information used?</p>
        <p className={`${paragraph}`}>
        Since no personal data is collected, you can rest assured that your privacy is fully protected. Any information you provide within the tool is used solely to personalize and curate your results, helping you refine your narrative and retell your story. Furthermore, your data is promptly deleted after use to ensure ongoing privacy and security.
        </p>
        <p className={`${paragraph}`}>
        Your trust is important to us, and we're committed to maintaining the highest standards of privacy and data protection. If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
        </p>
      </div>
      <div className="mb-8 mt-[50px]  flex justify-center">
        <input
          type="checkbox"
          id="agree"
          checked={isChecked}
          onChange={handleChange}
        />
        <label htmlFor="agree" className="ml-2">
          I agree to the terms and conditions. 
        </label>
      </div>
      <div id="renderbutton" className="flex justify-center">
      {renderBtn}
      </div>
    </section>
  )
}

export default SecContent
