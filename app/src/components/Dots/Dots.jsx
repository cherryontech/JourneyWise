import React from "react";

function Dots({ arch, handleClick, activeIndex,selectedArchetype }) {
    if(selectedArchetype) {
        return null;
    }
    const handleDotClick = (nextIndex) => {
        handleClick(nextIndex);
    };

    return (
        <div className="flex justify-center mt-[30px]">
            {arch.map((el, index) => (
                <button
                    key={el.id}
                    className={`mx-1 mb-2 w-3 h-3 rounded-full border-[1px] border-white ${activeIndex === index ? " bg-white":"bg-transparent" } cursor-pointer`}
                    onClick={() => handleDotClick(index)}
                ></button>
            ))}
        </div>
    );
}

export default Dots;
