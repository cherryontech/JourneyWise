import React from "react";

function ShowArcheType({title, text, img, isActive}) {
  return (

    <figure className={`${
        isActive ? "block" : "hidden"
      } pt-[77px] pb-[20px] pl-[42px] pr-[39px] `}>
      <div className="min-w-[294px] min-h-[566px] bg-white rounded-[22px] flex flex-col items-center ">
        <img  className = "mt-[9px] mb-[33px] ml-[18px] mr-[44px]"src={img} alt="pic" />
        <div className = " flex-1  min-w-[294px] min-h [287px] rounded-[22px] bg-[#F5FF82] text-center">
          <h2 className = "text-[#292929)] font-[DM Serif Text] text-[30px] font-normal leading-normal mt-[20px] mb-[8px] ml-[23px] mr-[29px]">{title}</h2>
        <p className = "text-base text-[#2C2B2B] ffont-sans  text-[16px] font-normal leading-[2.7] ml-[23px] mr-[21px] mb-[27px]">{text}
           </p>
        </div>
      </div>
    </figure>
  );
}

export default ShowArcheType;
