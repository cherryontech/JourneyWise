import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Buttons from '../Buttons/Buttons'
import Options from './Options'
import ProgressBar from './ProgressBar'
import { questionData } from '../../Data/questionData'
import './questionnaire-custom.css'



const archeTypeData = {"Attention to detail": 3,
  "Strong work ethic": 3,
  "Organized": 2,
  "Reliable": 6,
  "Self-motivated": 2,
  "Analytical thinking": 2,
  "Problem-solving ability": 2,
  "Autonomy": 4,
  "Time management": 4,
  "Initiative": 3

  }
  const softSkillsData = {"Adaptability": 3,
  "Passionate": 3,
  "Empathy": 6,
  "Emotional intelligence": 4,
  "Goal setting": 5,
  "Patience": 3,
  "Flexibility": 2,
  "Communication": 6,
  "Collaboration": 6,
  "Resilience": 2,
  "Independence": 5,
  "Integrity": 2,
  "Self-reflection": 3,
  "Critical thinking": 4,
  "Decision-making": 1,
  "Delegation": 1,
  "Creativity": 3}

const Questionnaire = ({index, setIndex}) => {
  const [questions , setQuestions] = useState( questionData )
  const [selected, setSelected] = useState(null);
  const [selectedId , setSelectedId ]= useState(null)
  const [count, setCount] = useState({})
  const [arcTypeCount , setArcTypeCount]= useState({})
  const navigate = useNavigate()

  
  useEffect(() => {
    if (selected !== null) {
      const selectedOption = questions.questions[index].options[selected];
      const newSoftSkillCount = { };
      const newArchTypeCount = {}
      
      selectedOption.softSkills.forEach((skill, i) => {
        if( index === 0){

         newArchTypeCount[skill]= archeTypeData[skill] 
         newArchTypeCount["archeType"]=questions.questions[index].options[selected].answer
        }else{
          
          newSoftSkillCount[skill] = softSkillsData[skill] + 1;

        }
       
      });
      if (index === 0) {
        setArcTypeCount(newArchTypeCount,
        );
      }
  
      setCount(prevCount => ({
        ...prevCount,
        ...newSoftSkillCount,
      }));
      
    }
    
  }, [selected, index]);

  
  const numberQuestion = index + 1 

  const handleNext = () => {
    if (index < questions.questions.length - 1) {
      setIndex(index + 1);
      setSelected(null)
      setSelectedId(null)
    }else{
    navigate("/result", {state:{count,arcTypeCount}})

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
    <div id="quizdiv" className="questionnaire-custom">
      <ProgressBar index={index} />
      <div id="quizheader" >
      <header>
        <p>QUESTION { numberQuestion}/{questions.questions.length}</p>
        <h3>{(questions.questions[index].question)}</h3>
        <p>While you may not fit perfectly into a single archetype, choosing one helps us understand your experiences and preferences better. This helps us give you a personalized experience. Let's begin!
        </p>
      </header>
      </div>
      <Options answerChoices={questions.questions[index].options} handleSelected = {handleSelected} selectedId={selectedId} />
      <div id="backnext">
        <Buttons id="back" onClick = {handleBack}primary rounded  alternate={index === 0} >BACK</Buttons>
        <Buttons id="next" onClick = {handleNext} alternate = {selectedId === null} primary = {selectedId !=null}rounded >NEXT</Buttons>
      </div>
    </div>
  )
}

export default Questionnaire
