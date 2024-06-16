import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import goals from "../../assets/topSkills/goals.svg"
import lightbulb from "../../assets/topSkills/lightbulb.svg"
import gear from "../../assets/topSkills/gear.svg"
import { Check } from 'lucide-react';
import './topSoftSkills-custom.css'

const TopSoftSkills = () => {
   
    const location = useLocation();
    const {arcTypeCount:{skills}}= location.state
    const [active, setActive] = useState("TopSkills")

    const handleClick = (skills)=>{
        setActive(skills)

    }
    

    return(
        <section id="topContainer"  className = "topSoftSkills-custom">
            <div>
                    <div>
                        <div id="topHeader">
                         <h3>Your Top Soft Skills</h3>
                         <h4>Toggle Below To Explore Your Unique Profile</h4>
                        </div>
                        <div id="togglebutton">
                                <button id="skills" className={`${active === "TopSkills" && "bg-black text-white"}`} onClick = {()=>handleClick("TopSkills")}>
                                    TOP SKILLS
                                </button>
                                <button id="strengths" className={`${active === "Strengths" &&  "bg-black text-white"}`} onClick = {()=>handleClick("Strengths")}>
                                    STRENGTHS
                                </button>
                                <button id="goals" className={`${active === "Goals" && "bg-black text-white"}`} onClick = {()=>handleClick("Goals")}>
                                    GOALS
                                </button>
                            
                        </div>
                    </div>
                    <div id="cardcontainer">
                        {Object.keys(skills).map((el, i)=>(
                            <figure id="skillcards" key = {el} className ={ `shadow-[9px_9px_12px_0_rgba(0,0,0,0.15)] ${i=== 0 && "bg-white"} ${i===1 && "bg-[#F5FF82]"} ${i=== 2 && "bg-[#2C2B2B]"}`} >
                                    <div id="cardimage">
                                        <img  className ={`fill-current text-black ${active === "TopSkills" && i === 2 ? "fill-white" : "fill-black"} ${active ==="Strengths" && i === 2 ? "fill-white" : "fill-black"} ${active ==="goals" && i !== 2 ? "fill-black" :  "fill-white" }`}src={(active ==="TopSkills" && lightbulb) || (active === "Strengths" && gear) || (active === "Goals" && goals)} alt="goals" />
                                    </div>
                                    <div id="cardheadings">
                                        <p className ={`${i===2 && "text-white"}`}>MY GOALS</p>
                                        <h3 className ={`${i===2 && "text-white"}`}>{el}</h3>
                                    </div>
                                    <div id="bulletpointcontainer"> 
                                    <div className = "flex gap-[5px]">
                                        <span className ="inline-block">{<Check className ={`border rounded-full bg-black text-white ${i===2 && "bg-white text-black"}`}/>}</span>
                                        <p className ={`${i===2 && "text-white"}`}>Lorem ipsum, dolor sit amet consectetur.</p>
                                    </div>
                                    <div className = "flex gap-[5px]">
                                    <span className ="inline-block">{<Check className ={`border rounded-full bg-black text-white ${i===2 && "bg-white text-black"}`}/>}</span>
                                    <p className ={`${i===2 && "text-white"}`}>Lorem ipsum, dolor sit amet consectetur.</p>
                                    </div>
                                    <div className = "flex gap-[5px]">
                                    <span className ="inline-block">{<Check className ={`border rounded-full bg-black text-white ${i===2 && "bg-white text-black"}`}/>}</span>
                                    <p className ={`${i===2 && "text-white"}`}>Lorem ipsum, dolor sit amet consectetur.</p>
                                    </div>
                                    </div>

                            </figure>

                    ))
                    }
                    </div>
            </div>
        </section>
    )
}

export default TopSoftSkills