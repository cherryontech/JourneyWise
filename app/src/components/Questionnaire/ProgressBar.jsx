import React from 'react'

const ProgressBar = ({currentQuestion}) => {
  const startProgressImage = "/Updated Progress Bar.svg"
  const continuedProgressImage = "/Updated Progress Bar (1).svg"

  return (
    <div className="mt-[100px] mb-[50px]">
      <img src={currentQuestion === 0 ? startProgressImage : continuedProgressImage} alt="Progress Bar" /> 
    </div>
  )
}

export default ProgressBar
