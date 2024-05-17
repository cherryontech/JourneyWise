import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons/Buttons'
import Options from './Options'
import ProgressBar from './ProgressBar'
import { questionData } from '../../Data/questionData'


const Questionnaire = () => {
  const [questions , setQuestions] = useState( questionData )
  
  const [index , setIndex ]= useState(0)
  const [selected, setSelected] = useState(null);
  const [selectedId , setSelectedId ]= useState(null)
  const [count, setCount] = useState({})

  useEffect(() => {
    if (selected !== null) {
      const selectedOption = questions.questions[index].options[selected];
      const newCount = { ...count };
      selectedOption.softSkills.forEach(skill => {
        newCount[skill] = (newCount[skill] || 0) + 1;
      });
      setCount(newCount);
    }
  }, [selected, index]);

  
   
  const numberQuestion = index+1 

  const handleNext = () => {
    if (index < questions.questions.length - 1) {
      setIndex(index + 1);
      setSelected(null)
      setSelectedId(null)
    }
  }
  const handleBack = ()=>{
    if (index > 0 ) {
      setIndex(index -1);
    }
  }

  const handleSelected = (i, id)=>{
    setSelected(i)
    setSelectedId(id)
  } 

  return (
    <div className="bg-[#E5F0F7] lg:w-[779px] px-[25px]">
      <ProgressBar />
      <header>
        <p className="text-[18px]">QUESTION{ numberQuestion}/{questions.questions.length}</p>
        <h3 className="mt-[21px] mb-[56px] text-[48px]">{(questions.questions[index].question)}</h3>
      </header>
      <Options answerChoices={questions.questions[index].options} handleSelected = {handleSelected}/>
      <div className="ml-[200px] pb-[0px] mt-[103px]">
        <Buttons  onClick = {handleBack}primary rounded  alternate={index === 0} className="mr-[50px] px-[33px] py-[17px]" >BACK</Buttons>
        <Buttons onClick = {handleNext} alternate = {selectedId === null} primary = {selectedId !=null}rounded  className="px-[33px] py-[17px]" >NEXT</Buttons>
      </div>
    </div>
  )
}

export default Questionnaire
