import React, { useState } from "react";
import Questionnaire from "../Questionnaire/Questionnaire";
import LearnArchetypes from "../Questionnaire/LearnArchetypes"
import Footer from '../Footer/Footer'

const StartQuestionnaire = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)

    return (
        <div className="h-screen">
        <div className="flex flex-row ml-[655px]">
            <LearnArchetypes setCurrentQuestion={currentQuestion} />
            <Questionnaire currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
        </div>
        <Footer /> 
        </div>
    )
}

export default StartQuestionnaire;
