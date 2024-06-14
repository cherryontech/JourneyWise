import React from "react";
import { useLocation } from "react-router-dom";

function SoftSkills (){
    const location = useLocation();
    const {count}= location.state
     const entryArray = Object.entries(count);
     entryArray.sort((a,b)=>
        b[1]-a[1])
     const topSkills= entryArray.slice(0,6)
     console.log(topSkills)

    return (
        
        <section className = "bg-[#E5F0F7]">
            <div >

                <div className = "mt-[56px] mx-[40px]">
                    <h2>
                    soft Skills Assesment
                    </h2>
                    <h3>
                    Your unique and amazing skills set
                    </h3>
                </div>
                <div className = "flex flex-col gap-5 mt-[20px]">

             

                {

                topSkills.map((skill, i)=>(
                    <figure  key = {i} className = {`w-[295px] h-[344px] border-29px shadow-[9px_9px_12px_0_rgba(0,0,0,0.15)] ${i=== 0 && "bg-[#F5FF82]"} 
                     ${i===1 && "bg-[#2C2B2B] text-white"}   ${i===2 && "bg-white"}  ${i===3 && "bg-[#F5FF82]"} 
                     ${i===4 && "bg-[#2C2B2B] text-white"}   ${i===5 && "bg-white"} ` }>
                    <div className ="flex flex-col justify-center items-center">
                        <h2>
                            {skill[0]}
                        </h2>
                        <div className ="flex justify-center items-center">
                            <p className = "text-center"> 
                            orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ultricies 
                            felis. Pellentesque ut dapibus leo. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
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

export default SoftSkills