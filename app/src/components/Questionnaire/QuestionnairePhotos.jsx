import React from "react";

const QuestionnairePhotos = ({ index, questionData }) => {
    const currentQuestion = questionData.questions[index]
    const imageSrc = currentQuestion.image

    return (
        <div>
            <img src={imageSrc} alt={`Question ${index + 1}`} /> 
        </div>
    );
}

export default QuestionnairePhotos;