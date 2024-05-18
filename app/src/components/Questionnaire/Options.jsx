import React from "react"

const Options = ({answerChoices, handleSelected, selectedId}) => {

    const handleChange = (i,id)=>{
        handleSelected(i, id)
    }

    return (
        <div>
            {answerChoices.map((choice, i) => (
        <div  key = {choice.answer} id="question" className="flex flex-col">
        <div className={`border border-[#7A7A7A] rounded-[13px] w-[486px] h-[60px] py-[12px] pl-[14px] mb-[12px] ${selectedId === choice.id ? 'bg-[#F5FF82]' : ''}`}>
          <input 
            type="radio" 
            id={`choice${i}`}
            name="answerChoicee" 
            value={choice}
            className="mr-[20px] w-[20px] h-[20px]" 
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