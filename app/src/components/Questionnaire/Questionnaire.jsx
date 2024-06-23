import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Buttons from '../Buttons/Buttons'
import Options from './Options'
import ProgressBar from './ProgressBar'
import { questionData } from '../../Data/questionData'
import './questionnaire-custom.css'



const archeTypeData = {"Attention To Detail": 3,
  "Strong Work Ethic": 3,
  "Organized": 2,
  "Reliable": 6,
  "Self-Motivated": 2,
  "Analytical Thinking": 2,
  "Problem-Solving Ability": 2,
  "Autonomy": 4,
  "Time Management": 4,
  "Initiative": 3

  }
  const softSkillsData = {"Adaptability": 3,
  "Passionate": 3,
  "Empathy": 6,
  "Emotional Intelligence": 4,
  "Goal Setting": 5,
  "Patience": 3,
  "Flexibility": 2,
  "Communication": 6,
  "Collaboration": 6,
  "Resilience": 2,
  "Independence": 5,
  "Integrity": 2,
  "Self-Reflection": 3,
  "Critical Thinking": 4,
  "Decision-Making": 1,
  "Delegation": 1,
  "Creativity": 3}

const Questionnaire = ({index, setIndex, arch, setArch}) => {
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
      const newArchTypeCount = {skills:{}}
      
      selectedOption.softSkills.forEach((skill, i) => {
        if( index === 0){

         newArchTypeCount.skills[skill]= archeTypeData[skill] 
         newArchTypeCount["archeType"]=questions.questions[index].options[selected].answer
         newArchTypeCount["id"] = questions.questions[index].options[selected].id;
        }else{
          
          newSoftSkillCount[skill] = softSkillsData[skill] + 1;

        }
       
      });
      if (index === 0) {
        setArcTypeCount(newArchTypeCount,
        );
        setArch(newArchTypeCount)
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
  // const handleBack = ()=>{
  //   if (index > 0 ) {
  //     setIndex(index -1);
  //   }
  // }

  const handleSelected = (i, id)=>{
    setSelected(i)
    setSelectedId(id)
  } 

  return (
    <div id="quizdiv" className="questionnaire-custom">
      <ProgressBar index={index} />
      <div id="quizheader" >
      <header>
        <p id="questionnumber">QUESTION { numberQuestion}/{questions.questions.length}</p>
        <h3>{(questions.questions[index].question)}</h3>
      </header>
      </div>
      <Options answerChoices={questions.questions[index].options} handleSelected = {handleSelected} selectedId={selectedId} />
      <div id="backnext">
        {/* <Buttons id="back" onClick = {handleBack}primary rounded  alternate={index === 0} >BACK</Buttons> */}
        <Buttons id="next" onClick = {handleNext} alternate = {selectedId === null} primary = {selectedId !=null} rounded disabled={selectedId === null} >NEXT</Buttons>
      </div>
    </div>
  )
}

export default Questionnaire
