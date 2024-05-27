import React from "react";
import Img  from "../../assets/archetypes/perfectionist.svg"


const Content = () => {


    return (
        <section className = "mt-[17px]">

            <div className = "text-blackCustom text-center font-features font-serifTex font-normal leading-normal">
                <h2 className=" text-[36px] capitalize">Swipe left to see your evolution</h2>
                <h3 className="font-features font-serifText text-[30px] mt-[21px] mb-[40px] ml-[16px] mr[26px] ">We think you're: </h3>
            </div>
            <figure className = "min-w-[295px] min-h-[570px] rounded-[22px] bg-white shadow-lg md:max-w-[1142px] md:min-h-[518px] md:rounded-[29px] md:shadow-[9px_9px_12px_0px_rgba(0,0,0,0.15)] md:mx-[149px]">
                <div className = "flex flex-col justify-center items-center md:flex-row md:justify-between">
                <div className="flex justify-center items-center md:flex-1">
                        <img className="min-w-[233px] min-h-[239px] pt-[9px] pb-[32px] pl-[18px] pr-[43px] md:min-w[340px] md:min-h-[308px]" src={Img} alt="pioneer" />
                    </div>
                
                <div className = "text-blackCustom text-center font-features font-serifTex font-normal leading-normal min-w-[295px] min-h-[336px] bg-[#F5FF82] md:min-w-[574px] md:min-h-[519px] flex:1">
                    <h3 className = "text-[30px] mt-[84px] mb-[8px] md:min-w-[402px] md:text-[48px] md:mt[126px] md:ml-[59px] md:mr-[112px] md:mb-[27px]" >The Pioneer</h3>
                    <p className = " leading-[27px] min-w-[250px] min-h-[217px] mr-[21px] ml-[23px] mb-[35px] md:w-[432px]">  laorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis viverra tempor. 
                        Vivamus laoreet varius tellus, quis dapibus ligula. 
                        ed vitae metus sed tellus finibus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A</p>
                </div>
                </div>
            </figure>

            <button className="w-[204px] h-[45px] flex-shrink-0 rounded-[55px] border border-black mt-5 mx-auto flex items-center justify-center space-x-2">
                <span className="w-[112px] h-[37px] flex-shrink-0 rounded-[55px] border border-black bg-black text-white flex items-center justify-center">
                    I am
                </span>
                <span className="w-[87px] text-black text-center font-dmSans text-[14px] font-bold leading-normal tracking-[2px] uppercase">
                    I was
                </span>
            </button>
        </section>

    )
}

export default Content;