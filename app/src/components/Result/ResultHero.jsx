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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ultricies felis. Pellentesque ut dapibus leo. Donec id erat nunc. Nunc pulvinar, dui ut blandit rutrum, turpis ante lobortis nisl, non varius sem tellus ut purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ultricies felis. Pellentesque ut dapibus leo. Donec id erat nunc. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ResultHero