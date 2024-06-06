import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Buttons from '../Buttons/Buttons'
import SecurityCollage from './SecurityCollage'
import './checkbox-custom.css'
import './securityContent-custom.css'

const SecContent = () => {
  const [isChecked, setIschecked] = useState(false)
  const navgate = useNavigate();
  

  const handleChange = (event) => {
    setIschecked(event.target.checked)
  }

  const handleClick = ()=>{
     navgate("./questionnaire")
    
  }
  const renderBtn = isChecked ? (
    <Buttons onClick = {handleClick} primary rounded id="buttongroup">
      LET'S BEGIN ASSESSMENT
    </Buttons>
  ) : (
    <Buttons alternate rounded id="buttongroup">
      LET'S BEGIN ASSESSMENT
    </Buttons>
  )
  return (
    <section id="securitycontainer" className="securityContent-custom"> 
      <div className="flex justify-center">
          <SecurityCollage id="collage" /> 
      </div>
      <div id="securitytext">
        <h3>
          We’re Dedicated To Protecting Your Data
        </h3>

        <p id="intro">
        At JourneyWise, your privacy and security are our top priorities. As such, we want to be transparent about how we handle your information.
        </p>
        <p className="font-bold mb-[20px]">Who are we?</p>
        <p>
        JourneyWise is a tool developed by the Venus Voyagers tech squad as part of the Cherry on Tech Spring Cohort 2024. Our mission is to support underrepresented genders new to the tech world. JourneyWise operates without a backend, meaning we do not collect or store any personal information from you.
        </p>
        <p className="font-bold mb-[20px] mt-[20px]">How is your information used?</p>
        <p>
        Since no personal data is collected, you can rest assured that your privacy is fully protected. Any information you provide within the tool is used solely to personalize and curate your results, helping you refine your narrative and retell your story. Furthermore, your data is promptly deleted after use to ensure ongoing privacy and security.
        </p>
        <p className="mt-[50px]">
        Your trust is important to us, and we're committed to maintaining the highest standards of privacy and data protection. If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
        </p>
      </div>
      <div className="mb-8 mt-[50px]  flex justify-center">
        <input
          type="checkbox"
          id="agree"
          checked={isChecked}
          onChange={handleChange}
          className="custom-checkbox"
        />
        <label htmlFor="agree" className="ml-2">
        Yes, I acknowledge and agree to these terms. 
        </label>
      </div>
      <div id="renderbutton" className="flex justify-center">
      {renderBtn}
      </div>
    </section>
  )
}

export default SecContent
