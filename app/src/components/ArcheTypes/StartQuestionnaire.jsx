import React, { useState } from "react";
import Questionnaire from "../Questionnaire/Questionnaire";
import LearnArchetypes from "../Questionnaire/LearnArchetypes"
import QuestionnairePhotos from "../Questionnaire/QuestionnairePhotos";
import Footer from '../Footer/Footer'
import { questionData } from "../../Data/questionData";
import CloseQuestionnaire from "../Questionnaire/CloseQuestionnaire";
import './start-custom.css'

const StartQuestionnaire = () => {
    const [index, setIndex] = useState(0)
   
    return (
        <div id="startdiv" className="start-custom">
            <CloseQuestionnaire /> 
            <div id="startcontainer">
                {index === 0 ? <LearnArchetypes /> : <QuestionnairePhotos index={index} questionData={questionData} />}
                <Questionnaire index={index} setIndex={setIndex} />
            </div>
            <Footer /> 
        </div>
    )
}

export default StartQuestionnaire;
