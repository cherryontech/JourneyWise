import React from 'react'
import './progressBar-custom.css'

const ProgressBar = ({index}) => {
  const startProgressImage = "/Updated Progress Bar.svg"
  const continuedProgressImage = "/Updated Progress Bar (1).svg"

  return (
    <div id="progresscontainer" className="progressBar-custom">
      <img src={index === 0 ? startProgressImage : continuedProgressImage} alt="Progress Bar" /> 
    </div>
  )
}

export default ProgressBar
