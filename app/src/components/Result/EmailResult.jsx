import React from "react";
import Buttons from "../Buttons/Buttons";

function EmailResult(){

    return (
        <>
        <section className="flex justify-center items-center mb-[63px] mt-[108px] md:mb[69px]">
           <div >
            <h3 className = "min-w-375px  text-center font-serif text-[36px] capitalize mb-[30px] md:min-w-[1115px] md:ml-[151px] md:mr-[154px] md:mb-[40px]">
            Want to Save this?
            </h3>
            <Buttons primary  className= "inline-flex px-[60px] py-[13px] text-center gap-10 rounded-full border border-black bg-accent md:ml-[582px] md:mr-[579px]">Email Me Result</Buttons>
           </div>
        </section>
        </>
    )
 
}

export default EmailResult