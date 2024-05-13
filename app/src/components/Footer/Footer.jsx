import React from "react";
import {Twitter, Facebook, Instagram} from 'lucide-react'
import classNames from "classnames";
function Footer(){
  

    const style = (listStyle, iconStyle )=>{

        return classNames(
        {  "w-[35px] h-[35px] rounded-full bg-[#F5FF82] flex items-center justify-center": listStyle},

        {  "text-black w-[20px] h-[20px]": iconStyle}           
        )
    }
    

return (
    <>
    <footer>
        <div className = "flex  md:justify-between min-w-[375px] min-h-[165px] bg-[#2C2B2B] text-white py-[32px] pr-[25px]">
            <h3>
            © CherryOnTech Venus Voyagers | All Rights Reserved.
            </h3>
             <ul className = "flex gap-[16px] ">
                <li className ={style("listStyle")}><Twitter className ={style("", "iconStyle")} /></li>
                  <li className ={style("listStyle")}><Facebook className ={style("", "iconStyle")}/></li>
                  <li className ={style("listStyle")}><Instagram className = {style("", "iconStyle")}/></li>
             </ul>
        </div>
    </footer>
    </>
)
}

export default Footer