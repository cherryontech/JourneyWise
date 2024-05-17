import React from 'react'
import Buttons from '../Buttons/Buttons'
import ProgressBar from './ProgressBar'
import { questionData } from '../../Data/questionData'


const Questionnaire = ({currentQuestion, setCurrentQuestion}) => {

  const { questions } = questionData 
  const { number, question, answerChoices } = questions[currentQuestion]

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1; 
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); 
    }
  }

  return (
    <div className="bg-[#E5F0F7] lg:w-[779px] px-[25px]">
      <ProgressBar />
      <header>
        <p className="text-[18px]">QUESTION {number}/8</p>
        <h3 className="mt-[21px] mb-[56px] text-[48px]">{question}</h3>
      </header>
      {answerChoices.map((choice, index) => (
        <div id="question" className="flex flex-col">
        <div key={index} className="border border-[#7A7A7A] rounded-[13px] w-[486px] h-[60px] py-[12px] pl-[14px] mb-[12px]">
          <input type="radio" id="perfectionist" name="archetype" value="The Perfectionist" className="mr-[20px] w-[20px] h-[20px]" />
          <label>{choice}</label>
        </div>
        </div>
      ))
}
      <div className="ml-[200px] pb-[0px] mt-[103px]">
        <Buttons primary rounded className="mr-[50px] px-[33px] py-[17px]" >BACK</Buttons>
        <Buttons onClick={handleNextQuestion} alternate rounded className="px-[33px] py-[17px]" >NEXT</Buttons>
      </div>
    </div>
  )
}

export default Questionnaire
