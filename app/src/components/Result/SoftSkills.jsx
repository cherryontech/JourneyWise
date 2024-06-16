import React from "react";
import { useLocation } from "react-router-dom";
import './softSkills-custom.css'

const SoftSkills = () => {
    const location = useLocation();
    const {count}= location.state
     const entryArray = Object.entries(count);
     entryArray.sort((a,b)=>
        b[1]-a[1])
     const topSkills= entryArray.slice(0,6)
     console.log(topSkills)

    return (
        
        <section id="softskillscontainer" className="softSkills-custom">
            <div id="skillsheading">
                <h3>Soft Skills Assesment</h3>
                <h4>Your Unique And Amazing Skills Set</h4>
            </div>
            <div id="softskillscards">
                {topSkills.map((skill, i)=>(
                    <figure id="individualcards"  key = {i} className = {`shadow-[9px_9px_12px_0_rgba(0,0,0,0.15)] ${i=== 0 && "bg-[#F5FF82]"} 
                     ${i===1 && "bg-[#2C2B2B] text-white"}   ${i===2 && "bg-white"}  ${i===3 && "bg-[#F5FF82]"} 
                     ${i===4 && "bg-[#2C2B2B] text-white"}   ${i===5 && "bg-white"} ` }>
                    <div id="cardtext">
                        <h4>{skill[0]}</h4>
                        <p className = "text-center"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ultricies 
                            felis. Pellentesque ut dapibus leo. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </div>
                    
                </figure>

                ))

                
                  }
                     </div>

        </section>
    )
}

export default SoftSkills