import React, { useState } from "react";
import Questionnaire from "../Questionnaire/Questionnaire";
import LearnArchetypes from "../Questionnaire/LearnArchetypes"
import Footer from '../Footer/Footer'

const StartQuestionnaire = () => {
   

    return (
        <div className="h-screen">
        <div className="flex flex-row ml-[655px]">
            <LearnArchetypes />
            <Questionnaire />
        </div>
        <Footer /> 
        </div>
    )
}

export default StartQuestionnaire;
