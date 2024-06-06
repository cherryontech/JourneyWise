import React from "react";
import { useLocation } from 'react-router-dom';
import BlueSquare from "../../assets/result/skill-collage-blue-square.png"
import YellowFlower from "../../assets/result/Skills-Collage-Yellow-Flower.png"
import BlackSemiCircle from "../../assets/result/Skills-Collage-Black-Semi-Circle.png"
import BlackSemiCircleRight from "../../assets/result/Skill-Collage-Semi-Circle-right.png"
import YellowCircle from "../../assets/result/Skills-Collage-Yellow-Circle.png"

const Skills = () => {
    const location = useLocation();
    const {count}= location.state
     const entryArray = Object.entries(count);
     entryArray.sort((a,b)=>
        b[1]-a[1])
     const topSkills= entryArray.slice(0,6)
    const newtopSkills = topSkills.map((skill)=>skill[0])
   
   
    return (
        <section className = "text-left font-features font-serifTex font-normal leading-normal">
                <div>
                <div className= "pt-[29px] md:flex md:gap-[138px] md:pt-[91px] ">

                 <div className = "">
                  <p className = "text-[18px] min-w-[244px] mr-[86px] mb-[15px] md:w-[234px] md:text[18px] md:leading-[0.36px] md:mb-[21px] md:ml-[141px]">
                  YOUR TOP SOFT SKILLS
                  </p>
                  <h3 className = "text-[48px] text-[#2C2B2B] mr-[200px] md:ml-[138px]">
                  Soft Skills All Around
                  </h3>
                  </div>
                  <div className ="min-w-[291px] min-h-[244px]  text-[18px] leading-[35px] md:w-[572px] md:h-[139px]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ultricies felis. Pellentesque ut dapibus leo. Donec 
                id erat nunc. Nunc pulvinar, dui ut blandit rutrum, turpis ante lobortis nisl, non varius sem tellus ut purus.</p>
                  </div>
                </div>
                <figure className = "min-w-[331px] min-h-[1452px] bg-white mt-[51px] mb-[58px] md:w-[1164px]  md:min-h-[722px] md: grid  md:grid-cols-3 md:grid-rows-3">
                    <div className = "relative">
                        <img src={BlueSquare} alt=" blue square" className = "min-w-[268px] min-h-[242px] pt-[33px] pl-[33px] pr-[30px] md:pr-[0] md:pl-[51px] md:pt-[54px]"/>
                        <div className="absolute inset-0 flex items-center justify-center min-w-[266px] min-h-[67px]">
                            <h3 className="tex-[30px]">{newtopSkills[0]}</h3>
                        </div>
                    </div>

                    <div className = "relative">
                        <img src={YellowFlower} alt="yellow flower" className = "min-w-[268px] min-h-[225px] pl-[33px] pr-[30px] md:pt-[54px] md:pl-[0] md:pr-[0] "/>
                        <div className="absolute inset-0 flex items-center justify-center min-w-[266px] min-h-[67px] mt-[0]">
                            <h3 className="tex-[33px] capitalize">{newtopSkills[1]}</h3>
                        </div>
                    </div>

                    <div className = "relative">
                        <img src={BlackSemiCircle} alt="Black Semi Circle" className = "min-w-[268px] min-h-[225px] pl-[33px] pr-[30px] md:pt-[54px] md:pl-[0] md:pr-[49px]"/>
                        <div className="absolute inset-0 flex items-center justify-center min-w-[266px] min-h-[67px] mt-[0]">
                            <h3 className="tex-[32px] text-white capitalize">{newtopSkills[2]}</h3>
                        </div>
                    </div>

                    <div className = "relative">
                        <img src={BlackSemiCircleRight} alt="Black Semi Circle " className = "min-w-[268px] min-h-[225px] pl-[33px] pr-[30px] md:pr-[0] md:pl-[49px]"/>
                        <div className="absolute inset-0 flex items-center justify-center min-w-[266px] min-h-[67px] mt-[0]">
                            <h3 className="tex-[32px] text-white capitalize">{newtopSkills[3]}</h3>
                        </div>
                    </div>

                    <div className = "relative">
                        <img src={YellowCircle} alt="yellow flower" className = "min-w-[268px] min-h-[225px] pl-[33px] pr-[30px] md:pl-[0] md:pr-[0]"/>
                        <div className="absolute inset-0 flex items-center justify-center min-w-[187px] min-h-[28px] mt-[0]">
                            <h3 className="tex-[32px] capitalize">{newtopSkills[4]}</h3>
                        </div>
                    </div>

                    <div className = "relative mb-[33px]">
                        <img src={BlueSquare} alt="Blue square" className = "min-w-[268px] min-h-[225px] pl-[33px] pr-[30px] md:pl-[0]"/>
                        <div className="absolute inset-0 flex items-center justify-center min-w-[187px] min-h-[28px] mt-[0]">
                            <h3 className="tex-[32px] capitalize">{newtopSkills[5]}</h3>
                        </div>
                    </div>

                </figure>

            </div>
        

        </section>
        
    )
}


      
export default Skills 