import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import goals from "../../assets/topSkills/goals.svg"
import lightbulb from "../../assets/topSkills/lightbulb.svg"
import gear from "../../assets/topSkills/gear.svg"
import { Check } from 'lucide-react';
import TopSkillsText from "./TopSoftSkillsText";
import './topSoftSkills-custom.css'
import data from "../../Data/top_softskills.json"
import checkmarkD from "/journeywise-checkmark-icon-dark.svg"; 
import checkmarkL from "/journeywise-checkmark-icon-light.svg"; 
import gearD from "/journeywise-icon-gear-dark.svg"; 
import gearL from "/journeywise-icon-gear-light.svg"; 
import lightbulbD from "/journeywise-icon-lightbulb-dark.svg"; 
import lightbulbL from "/journeywise-icon-lightbulb-light.svg"; 
import targetD from "/journeywise-icon-target-dark.svg";
import targetL from "/journeywise-icon-target-light.svg"; 

const TopSoftSkills = () => {
   
    const location = useLocation();
    console.log(location.state)
    const {arcTypeCount:{skills, archeType}}= location.state
    const [active, setActive] = useState("TopSkills")

    const handleClick = (skills)=>{
        setActive(skills);
    }

    console.log(archeType)

  let newArch
    switch (archeType ) {
        case "The Soloist":
          
          newArch= "The Trailblazer"

          break;
        case "The Perfectionist":
          
          newArch= "The Pioneer"

          break;
        case "The Recluse":
         
          newArch="The Seer"
          break
        default:
          archetypeImage = null;
          break;
      }
      console.log(active)
    console.log(data[newArch][active])

    const getImage = (i, active) => {
        if (i === 2) {
            // For the black card
            switch (active) {
                case "TopSkills":
                    return lightbulbL;
                case "Strengths":
                    return gearL;
                case "Goals":
                    return targetL;
                default:
                    return null;
            }
        } else {
            // For the white and yellow cards
            switch (active) {
                case "TopSkills":
                    return lightbulbD;
                case "Strengths":
                    return gearD;
                case "Goals":
                    return targetD;
                default:
                    return null;
            }
        }
    };

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
                        {data[newArch][active].map((el, i)=>(
                            active === "TopSkills" ?
                            <figure id="skillcards" key = {i} className ={ `shadow-[9px_9px_12px_0_rgba(0,0,0,0.15)] ${i=== 0 && "bg-white"} ${i===1 && "bg-[#F5FF82]"} ${i=== 2 && "bg-[#2C2B2B]"}`} >
                                    <div id="cardimage">
                                        <img src={getImage(i, active)} alt={active} />
                                    </div>
                                    <div id="cardheadings">
                                        <p className ={`${i===2 && "text-white"}`}>{(active ==="TopSkills" && "MY TOP SKILLS")}</p>
                                        <h3 className ={`${i===2 && "text-white"}`}>{el.skill}</h3>
                                    </div>
                                    <div id="bulletpointcontainer"> 
                                    <div className = "flex gap-[5px]">
                                        
                                        <p className ={`${i===2 && "text-white"}`}>{el.description}</p>
                                    </div>
                                  
                                    
                                    </div>

                            </figure>:
                            <figure id="skillcards" key = {i} className ={ `shadow-[9px_9px_12px_0_rgba(0,0,0,0.15)] ${i=== 0 && "bg-white"} ${i===1 && "bg-[#F5FF82]"} ${i=== 2 && "bg-[#2C2B2B]"}`} >
                            <div id="cardimage">
                                <img  className ={`fill-current text-black $ ${active ==="Strengths" && i === 2 ? "fill-white" : "fill-black"} ${active ==="goals" && i !== 2 ? "fill-black" :  "fill-white" }`}src={(active === "Strengths" && gear) || (active === "Goals" && goals)} alt="goals" />
                            </div>
                            <div id="cardheadings">
                                <p className ={`${i===2 && "text-white"}`}>{active ==="Strengths" && "MY STRENGTHS"}{active ==="Goals" && "MY GOALS"}</p>

                                <h3 className ={`${i===2 && "text-white"}`}>{el.skill}</h3>
                            </div>
                            <div id="bulletpointcontainer"> 
                            {active === "TopSkills" ? (
                                    <p className={`${i === 2 && "text-white"}`}>{el.description}</p>
                                ) : (
                                    <TopSkillsText texts={el.details} index={i} />
                                )}
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