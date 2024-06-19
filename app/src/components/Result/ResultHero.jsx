import React from "react"
import './resultHero-custom.css'


const ResultHero = () =>    {
    return (
        <section>
            <div className = "grid-cols-1 md:grid md:grid-cols-[1fr_2fr] gap-4 md:gap-[138px] ml-[138px]">
                <div className = "min-w-[295px]">
                    <p className="font-dm-sans text-base not-italic leading-normal mt-[61px] mb-[21px]">YOUR RESULTS </p>
                    <h3 className= "font-dm-serif-text text-[48px] font-normal capitalize mb-[28px]">See Your Value & Change Your Perspective</h3>
                </div>
                <div className="md:min-w-[572px] md:min-h-[244px] md:mt-[55px] md:font-family-[DM Sans] md:text-base
                md:font-normal md:font-style-normal md:font-weight-400 md:line-height-[35px] md:mr[138px]">

                    <p className="font-dm-sans text-[18px] font-normal leading-7 text-gray-700 mb-[101px] mr-[159px] mt-[20px]">
                    After a thorough analysis of your quiz assessment, we've uncovered a crucial insight: your self-perception may not fully reflect your true essence. Below, you will find a detailed profile that not only highlights your evolution but also delves deep into your capabilities. Explore your key skills, strengths, and goals, and identify the archetype that genuinely represents your journey. Embrace this chance to see yourself in a new light and step confidently toward your future career path.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ResultHero