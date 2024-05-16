import React from "react";

function Dots({ arch, handleClick, activeIndex }) {
    const handleDotClick = (nextIndex) => {
        handleClick(nextIndex);
    };

    return (
        <div className="flex justify-center mt-4">
            {arch.map((el, index) => (
                <button
                    key={el.id}
                    className={`mx-1 mb-2 w-3 h-3 rounded-full ${activeIndex === index ? "bg-black":"bg-white" } cursor-pointer`}
                    onClick={() => handleDotClick(index)}
                ></button>
            ))}
        </div>
    );
}

export default Dots;
