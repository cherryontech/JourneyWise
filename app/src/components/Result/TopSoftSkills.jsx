import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import goals from "../../assets/topSkills/goals.svg"
import lightbulb from "../../assets/topSkills/lightbulb.svg"
import gear from "../../assets/topSkills/gear.svg"
import { Check } from 'lucide-react';
<<<<<<< HEAD
function TopSoftSkills(){
   const [active, setActive] = useState("TopSkills")
=======
import './topSoftSkills-custom.css'


const TopSoftSkills = () => {
>>>>>>> b273192 (committing to rebase)
    const location = useLocation();
    const {arcTypeCount:{skills}}= location.state

    const handleClick = (skills)=>{
        setActive(skills)

    }
    

    return(
        <>
        <section id="topContainer"  className = "topSoftSkills-custom">
            <div>
                    <div>
                        <div id="topHeader">
                         <h2>Your Top Soft Skills</h2>
                         <h3 className = "text-[30px] text-black text-center">  
                         Toggle Below to explore your Unique Profile
                         </h3>
                        </div>
                        <div className="mt-[30px] flex justify-center items-center border border-black rounded-[36px]">
                                <button className={`relative min-w-[100px] min-h-[45px] text-center text-[14px] font-bold tracking-wide uppercase ${active === "TopSkills" && "bg-black text-white border rounded-full"}`} onClick = {()=>handleClick("TopSkills")}>
                                    TOP SKILLS
                                </button>
                                <button className={`relative min-w-[100px] min-h-[45px] mx-[16px] text-center text-[14px] font-bold tracking-wide uppercase ${active === "Strengths" &&  "bg-black text-white border rounded-full"}`} onClick = {()=>handleClick("Strengths")}>
                                    STRENGTHS
                                </button>
                                <button className={`relative min-w-[100px] min-h-[45px] text-center text-[14px] font-bold tracking-wide uppercase ${active === "Goals" && "bg-black text-white border rounded-full"}`} onClick = {()=>handleClick("Goals")}>
                                    GOALS
                                </button>
                            
                            </div>
                    </div>
                    {

                    Object.keys(skills).map((el, i)=>(


                    <figure key = {el} className ={ `mt-[56px] w-[295px] h-[472px] mx-[40px] border-29px shadow-[9px_9px_12px_0_rgba(0,0,0,0.15)] rounded ${i=== 0 && "bg-white"} ${i===1 && "bg-[#F5FF82]"} ${i=== 2 && "bg-[#2C2B2B]"}`} >
                    <div>
                       <div>
                    <img  className ={`fill-current text-black ${active === "TopSkills" && i === 2 ? "fill-white" : "fill-black"} ${active ==="Strengths" && i === 2 ? "fill-white" : "fill-black"} ${active ==="goals" && i !== 2 ? "fill-black" :  "fill-white" }`}src={(active ==="TopSkills" && lightbulb) || (active === "Strengths" && gear) || (active === "Goals" && goals)} alt="goals" />
                       </div>
                       <div className ="mt-[51px] ">
                       <div className ="ml-[21px] mr-[150px]">
                        <h3 className ={`${i===2 && "text-white"}`}>
                            My Goal
                        </h3>

                        <h2 className ={`${i===2 && "text-white"}`}>
                        {el}
                        </h2>
                       </div>
                       <div className = "ml-[58px] mr-[21px] mt-[21px] flex flex-col gap-5"> 
                       <div className = "flex gap-5">
                            <span className ="inline-block">{<Check className ={`border rounded-full bg-black text-white ${i===2 && "bg-white text-black"}`}/>}</span>
                            <p className ={`text-[16px] ${i===2 && "text-white"}`}>Lorem ipsum, dolor sit amet consectetur.</p>
                        </div>

                        <div className = "flex gap-5">
                            <span className ="inline-block">{<Check className ={`border rounded-full bg-black text-white ${i===2 && "bg-white text-black"}`}/>}</span>
                            <p className ={`text-[16px] ${i===2 && "text-white"}`}>Lorem ipsum, dolor sit amet consectetur.</p>
                        </div>
                        <div className = "flex gap-5">
                            <span className ="inline-block">{<Check className ={`border rounded-full bg-black text-white ${i===2 && "bg-white text-black"}`}/>}</span>
                            <p className ={`text-[16px] ${i===2 && "text-white"}`}>Lorem ipsum, dolor sit amet consectetur.</p>
                        </div>
                        
                       </div>
                       </div>
                    </div>

                </figure>

                    ))

             
                    }
            </div>
        </section>
        
        </>
    )
}

export default TopSoftSkills