import React from "react";
import { Check } from 'lucide-react';


const TopSkillsText = ({texts, index}) => {
    console.log(texts)

    return (
        <>
        {
        texts.map((el, i)=>(
         <div key = {i} className = "flex gap-[5px]">
                                <span className ="inline-block">{<Check className ={`border rounded-full bg-black text-white ${index===2 &&  "bg-white text-[#555]"}`}/>}</span>
                                <p className ={`${index===2 && "text-white"}`}>{el}</p>
                            </div>
))}
        </>
    )
}

export default TopSkillsText;