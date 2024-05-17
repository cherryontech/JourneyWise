import React, { useState } from 'react'
import Buttons from '../Buttons/Buttons'
import Options from './Options'
import ProgressBar from './ProgressBar'
import { questionData } from '../../Data/questionData'


const Questionnaire = () => {
  const [questions , setQuestions] = useState( questionData )
  
  const [index , setIndex ]= useState(0)
  const [selected, setSelected] = useState(null);

  console.log(selected)
   
  const numberQuestion = index+1 

  const handleNext = () => {
    if (index < questions.questions.length - 1) {
      setIndex(index + 1);
      setSelected(null)
    }
  }
  const handleBack = ()=>{
    if (index > 0 ) {
      setIndex(index -1);
    }
  }

  const handleSelected = (i)=>{
    setSelected(i)
  } 

  return (
    <div className="bg-[#E5F0F7] lg:w-[779px] px-[25px]">
      <ProgressBar />
      <header>
        <p className="text-[18px]">QUESTION{ numberQuestion}/{questions.questions.length}</p>
        <h3 className="mt-[21px] mb-[56px] text-[48px]">{questions.questions[index].question}</h3>
      </header>
      <Options answerChoices={questions.questions[index].answerChoices} handleSelected = {handleSelected}/>
      <div className="ml-[200px] pb-[0px] mt-[103px]">
        <Buttons  onClick = {handleBack}primary rounded  alternate={index === 0} className="mr-[50px] px-[33px] py-[17px]" >BACK</Buttons>
        <Buttons onClick = {handleNext} alternate = {selected === null} primary = {selected !=null}rounded  className="px-[33px] py-[17px]" >NEXT</Buttons>
      </div>
    </div>
  )
}

export default Questionnaire
