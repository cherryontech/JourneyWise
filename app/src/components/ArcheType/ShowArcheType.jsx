import React from "react";
import SVGdata from "../../assets/archetype.svg";

function ShowArcheType() {
  return (
    <figure className= "pt-[77px] pb-[89px] pl-[42px] pr-[39px] ">
      <div className="min-w-[294px] min-h-[566px] bg-white rounded-[22px] flex flex-col items-center ">
        <img  className = "mt-[9px] mb-[32px] ml-[18px] mr-[44px]"src={SVGdata} alt="pic" />
        <div>
          <h2>Title</h2>
        </div>
      </div>
    </figure>
  );
}

export default ShowArcheType;
