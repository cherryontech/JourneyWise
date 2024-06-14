import React from 'react'
import './progressBar-custom.css'

const ProgressBar = ({index}) => {
  const startProgressImage = "/Updated Progress Bar.svg"
  const continuedProgressImage = "/Updated Progress Bar (1).svg"
  const mobileStartProgressImage = "/journeywise-progress-bar-mobile-1.svg"
  const mobileContinuedProgressImage = "/journeywise-progress-bar-mobile-2.svg"

  return (
    <div id="progresscontainer" className="progressBar-custom">
      <img id="desktop" className="" src={index === 0 ? startProgressImage : continuedProgressImage} alt="Progress Bar" /> 
      <img id="mobile" className="" src={index === 0 ? mobileStartProgressImage : mobileContinuedProgressImage} alt="Progress Bar" />
    </div>
  )
}

export default ProgressBar
