import React from 'react'
import Buttons from '../Buttons/Buttons'
import ProgressBar from './ProgressBar'
import { questionData } from '../../Data/questionData'


const Questionnaire = ({currentQuestion, setCurrentQuestion, handleNextQuestion}) => {
  const { questions } = questionData 
  const { number, question, answerChoices, answerValues } = questions[currentQuestion]
  
  return (
    <div className="bg-[#E5F0F7] lg:w-[779px]">
      <ProgressBar />
      <header>
        <p className="text-[18px]">QUESTION {number}/8</p>
        <h3 className="mt-[21px] mb-[56px] text-[48px]">{question}</h3>
      </header>
      {answerChoices.map((choice) => (
        <div id="question" className="flex flex-col">
        <div className="border border-[#7A7A7A] rounded-[13px] w-[486px] h-[60px] py-[12px] pl-[14px] mb-[12px]">
          <input type="radio" id="perfectionist" name="archetype" value="The Perfectionist" className="mr-[20px] w-[20px] h-[20px]" />
          <label>{choice}</label>
        </div>
        </div>
      ))
}
      <div className="ml-[200px] pb-[442px] mt-[103px]">
        <Buttons primary rounded className="mr-[50px] px-[33px] py-[17px]" >BACK</Buttons>
        <Buttons alternate rounded className="px-[33px] py-[17px]" >NEXT</Buttons>
      </div>
    </div>
  )
}

export default Questionnaire
