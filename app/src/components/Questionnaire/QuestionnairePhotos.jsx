import React from "react";
import './questionnairePhotos-custom.css'

const QuestionnairePhotos = ({ index, questionData }) => {
    const currentQuestion = questionData.questions[index]
    const imageSrc = currentQuestion.image

    return (
        <div id="photoContainer" className="questionnairePhotos-custom">
            <img src={imageSrc} alt={`Question ${index + 1}`} /> 
        </div>
    );
}

export default QuestionnairePhotos;