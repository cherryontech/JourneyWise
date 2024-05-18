import React from 'react'

const ProgressBar = ({index}) => {
  const startProgressImage = "/Updated Progress Bar.svg"
  const continuedProgressImage = "/Updated Progress Bar (1).svg"

  console.log(index)

  return (
    <div className="mt-[100px] mb-[50px]">
      <img src={index === 0 ? startProgressImage : continuedProgressImage} alt="Progress Bar" /> 
    </div>
  )
}

export default ProgressBar
