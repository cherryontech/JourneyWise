import React from "react";
import './imageTextCard-custom.css'

const ImageTextCard = ({ img, text, title, alt, isActive }) => {
    return (
        <div id="archetypecontainer" className={`${
            isActive ? "block" : "hidden"
          } imageTextCard-custom`}>
            <div id="subcontainer">
                <figure>
                    <div id="archetypefigure">
                        <img src={img} alt={alt}  />
                        <div id="archetypetext">
                            <h2>{title}</h2>
                            <p>{text}</p>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    );
}

export default ImageTextCard;
