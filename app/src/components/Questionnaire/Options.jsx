import React from "react"
import './radio-custom.css'
import './options-custom.css'

const Options = ({answerChoices, handleSelected, selectedId}) => {

    const handleChange = (i,id)=>{
        handleSelected(i, id)
    }

    return (
        <div className="options-custom">
            {answerChoices.map((choice, i) => (
        <div  key = {choice.answer} id="choicecontainer">
        <div id="individualchoice" className={`border border-[#7A7A7A] ${selectedId === choice.id ? 'bg-[#F5FF82]' : ''}`}>
          <input 
            type="radio" 
            id={`choice${i}`}
            name="answerChoicee" 
            value={choice}
            className="custom-radio"
            onChange = {() => handleChange(i, choice.id)} 
            />
          <label htmlFor={`choice${i}`} >{choice.answer}</label>
        </div>
        </div>
      ))
          }
        </div>
    )
}

export default Options