import React from "react";
import Img  from "../../assets/archetypes/perfectionist.svg"
function Content (){


    return (
        <section className = "mt-[17px]">

            <div className = "text-blackCustom text-center font-features font-serifTex font-normal leading-normal">
                <h2 className=" text-[36px] capitalize">Swipe left to see your evolution</h2>
                <h3 className="font-features font-serifText text-[30px] mt-[21px] mb-[40px] ml-[16px] mr[26px] ">We think you're: </h3>
            </div>
            <figure className = "min-w-[295px] min-h-[570px] rounded-[22px] bg-white shadow-lg ">
                <div className = "flex flex-col justify-center items-center">
                    <img src={Img} alt="perfections" />
                <div className = "text-blackCustom text-center font-features font-serifTex font-normal leading-normal min-w-[295px] min-h-[336px] bg-[#F5FF82]">
                    <h3 className = "text-[30px] mt-[84px] mb-[8px]" >The Pioneer</h3>
                    <p className = " leading-[27px] min-w-[250px] min-h-[217px] mr-[21px] ml-[23px] mb-[35px]">  laorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis viverra tempor. 
                        Vivamus laoreet varius tellus, quis dapibus ligula. 
                        ed vitae metus sed tellus finibus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A</p>
                </div>
                </div>
                
            </figure>

            <div>
                <figure>
                    <img src="" alt="" />
                </figure>
            </div>
        </section>

    )
}

export default Content;