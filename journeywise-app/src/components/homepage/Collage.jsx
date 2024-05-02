import React from 'react'

const Collage = () => {
  return (
    <div
      id="collage-container"
      className="grid grid-cols-3 grid-rows-3 gap-0 border mt-[-126px]"
    >
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        pic 1
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        <img src=".collage/Union.svg" />
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        pic 3
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        pic 4
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        pic 5
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        pic 6
      </div>
      <div
        id="grid-item"
        className="shrink-0 w-[234.886px] h-[251.828px]"
      >
        pic 7
      </div>
      <div
        id="grid-item"
        className="shrink-0 w-[234.886px] h-[251.828px]"
      >
        pic 8
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        pic 9
      </div>
    </div>
  )
}

export default Collage
