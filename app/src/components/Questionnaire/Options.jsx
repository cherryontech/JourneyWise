import React from "react"
import './radio-custom.css'


const Options = ({answerChoices, handleSelected, selectedId}) => {

    const handleChange = (i,id)=>{
        handleSelected(i, id)
    }

    return (
        <div>
            {answerChoices.map((choice, i) => (
        <div  key = {choice.answer} id="question" className="flex flex-col">
        <div className={`border border-[#7A7A7A] flex flex-row rounded-[13px] w-[486px] h-[65px] py-[15px] pl-[14px] mb-[15px] content-center text-pretty ${selectedId === choice.id ? 'bg-[#F5FF82]' : ''}`}>
          <input 
            type="radio" 
            id={`choice${i}`}
            name="answerChoicee" 
            value={choice}
            className="mr-[20px] w-[20px] h-[20px] custom-radio"
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