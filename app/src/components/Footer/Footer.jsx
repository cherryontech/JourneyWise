import React from 'react'
import { Twitter, Facebook, Instagram } from 'lucide-react'
import classNames from 'classnames'

const Footer = () => {
  
  const style = (listStyle, iconStyle) => {
    return classNames (
      {"w-[35px] h-[35px] rounded-full bg-[#F5FF82] flex items-center justify-center": listStyle},
      {"text-black w-[20px] h-[20px] ": iconStyle}
    )
  }

  return (
    <>
      <footer>
        <div className = "flex flex-col gap-[37px] items-center lg:flex-row  lg: justify-between bg-[#2C2B2B] text-white py-[32px] pr-[25px]">
          <h3 className= "text-center font-sans lg:text-[18px] text-[16px] leading-[27px] font-normal mt-[22px] mr-[10px ml-[12px]  lg:leading-[35px]lg:mt-[25px] lg:ml-[20px]">CherryOnTech Venus Voyagers | All Rights Reserved.</h3>
          <ul className = "flex gap-[16px]">
            <li className ={style("listStyle")}><Twitter className ={style("", "iconStyle")} /></li>
            <li className ={style("listStyle")}><Facebook className ={style("", "iconStyle")} /></li>
            <li className ={style("listStyle")}><Instagram className ={style("", "iconStyle")} /></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer 