import React, { useState } from "react";
import Questionnaire from "../Questionnaire/Questionnaire";
import LearnArchetypes from "../Questionnaire/LearnArchetypes"
import Footer from '../Footer/Footer'

const StartQuestionnaire = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)

    return (
        <div className="h-screen">
        <div className="flex flex-row ml-[700px]">
            <LearnArchetypes />
            <Questionnaire currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
        </div>
        <Footer /> 
        </div>
    )
}

export default StartQuestionnaire;
