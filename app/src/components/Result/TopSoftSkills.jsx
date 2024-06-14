import React from "react";
import { useLocation } from "react-router-dom";
import goals from "../../assets/topSkills/goals.svg"
import { Check } from 'lucide-react';
function TopSoftSkills(){
    const location = useLocation();
    const {arcTypeCount:{skills}}= location.state
    console.log(Object.keys(skills))

    return(
        <>
        <section  className = "mt-[49px]">
            <div className= "bg-[#E5F0F7] min-w-[375px]">
                    <div>
                        <div>
                        <h2 className =" text-[36px] 
                        capitalize text-center text-black mt-[56px] mx-[40px]">Your  Top Soft  Skills </h2>
                        <h3 className = "text-[30px] text-black text-center">  
                        Toggle Below to explore your Unique Profile
                        </h3>
                        </div>
                        <div className="mt-[30px] flex justify-center items-center border border-black rounded-[36px]">
                                <button className="relative min-w-[100px] min-h-[45px] text-center text-[14px] font-bold tracking-wide uppercase">
                                    TOP SKILLS
                                </button>
                                <button className="relative min-w-[100px] min-h-[45px] mx-[16px] text-center text-[14px] font-bold tracking-wide uppercase">
                                    STRENGTHS
                                </button>
                                <button className="relative min-w-[100px] min-h-[45px] text-center text-[14px] font-bold tracking-wide uppercase bg-black text-white border rounded-full ">
                                    GOALS
                                </button>
                            
                            </div>
                    </div>
                    {

                    Object.keys(skills).map((el, i)=>(


                    <figure key = {skills} className ={ `mt-[56px] w-[295px] h-[472px] mx-[40px] border-29px shadow-[9px_9px_12px_0_rgba(0,0,0,0.15)] rounded ${i=== 0 && "bg-white"} ${i===1 && "bg-[#F5FF82]"} ${i=== 2 && "bg-[#2C2B2B]"}`} >
                    <div>
                       <div>
                    <img  className ="fill-current text-black"src={goals} alt="goals" />
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