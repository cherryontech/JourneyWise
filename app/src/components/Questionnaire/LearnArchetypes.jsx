import React, { useState } from "react";
import UseCard from "../UserCard/UserCard";
import Dots from "../Dots/Dots";
import ImageTextCard from "../ImageTextCard/ImageTextCard";
import archData from "../../Data/archetypesData.json";
import Img from "../../assets/archetypes/arcetypebg.png";
import { X } from "lucide-react";

const LearnArcheTypes = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (nextIndex) => {
        setActiveIndex(nextIndex);
    };

    const render = archData.archetype.map((arch, i) => {
        return (
            <ImageTextCard key={arch.id} img={arch.image} title={arch.title} text={arch.text} isActive={activeIndex === i} />
        );
    });

    return (
        <div className="flex flex-row">
            <div>
                <UseCard Img={Img}>
                {render}

                <div>
                    <Dots arch={archData.archetype} handleClick={handleClick} activeIndex={activeIndex} />
                </div>
            
                </UseCard>
                
            </div>
        </div>
    );
}

export default LearnArcheTypes;