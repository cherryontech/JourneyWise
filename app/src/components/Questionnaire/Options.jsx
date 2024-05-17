import React from "react"
function Options ({answerChoices, handleSelected}){
    const handleChange = (i,id)=>{
        handleSelected(i, id)
    }

    return (
        <div>
            {answerChoices.map((choice, i) => (
        <div  key = {choice.answer} id="question" className="flex flex-col">
        <div className="border border-[#7A7A7A] rounded-[13px] w-[486px] h-[60px] py-[12px] pl-[14px] mb-[12px]">
          <input type="radio" id="perfectionist" name="archetype" value="The Perfectionist" className="mr-[20px] w-[20px] h-[20px]"onChange = {()=>handleChange(i, choice.id)} />
          <label>{choice.answer}</label>
        </div>
        </div>
      ))
}
        </div>
    )
}

export default Options