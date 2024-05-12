import React from "react";
import { useState } from "react";
import { X } from "lucide-react";
import Img from "../../assets/ArchetypeBg.png";
import ShowArcheType from "./ShowArcheType";
import data from "../../../Data/data.json"

function ArcheTypes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (nextIndex) => {
    setActiveIndex((currentIndex)=>{
      if(currentIndex=== nextIndex){
        return 0;
      }
      else{
        return nextIndex
      }
    });
  };
  const render = data.archetype.map((el, index)=>{
    return (
      <ShowArcheType className="flex"  key = {el.id}  title = {el.title}text= {el.text} img= {el.image} 
      isActive={index ===activeIndex} />
    )
  })

  

  const renderDotSection = () => {
    return (
      <div className="flex justify-center mt-4">
        {data.archetype.map((el, index) => (
          <button
            key={index}
            className={`mx-1 mb-[200px] w-3 h-3 rounded-full bg-black cursor-pointer ${
              activeIndex === index ? "bg-white" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    );
  };
  

  return (
    <section>
      <div
        className="bg-cover bg-center h-full  w-fullbg-no-repeat relative"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <div className="absolute top-4 right-4">
          <button className="bg-white rounded-full p-2"><X className="text-gray-600" /></button>
        </div>
      <div>
      <div className = "flex ">
       {render}
       </div>
       {renderDotSection()}
       </div>
      
      </div>
    </section>
  );
}

export default ArcheTypes;
