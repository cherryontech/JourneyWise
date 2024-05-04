import React from 'react'

const Collage = () => {
  return (
    <div
      id="collage-container"
      className="grid grid-cols-3 grid-rows-3 gap-0 mt-[-220px] mr-0"
    >
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        <img src="/Union.svg" />
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        <img id="rectangle" src="/Rectangle 261.svg" />
        <img id="image2" src="/Group 912.svg" className="mt-[-250px]"/>
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        <img src="/Union (1).svg" />
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        <img src="/Union (2).svg" />
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        <img id="rectangle" src="/Rectangle 162.svg" />
        <img id="characterlogo" src="/Group 906 (1) 1.svg" className="mt-[-215px]" />
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        <img id="rectangle" src="/Rectangle 260.svg" />
        <img src="/Subtract.svg" className="mt-[-250px]" />
      </div>
      <div
        id="grid-item"
        className="shrink-0 w-[237px] h-[254px]"
      >
        <img src="/Rectangle 154.svg" />
        <img src="/Subtract (1).svg" className="mt-[-250px]" />
      </div>
      <div
        id="grid-item"
        className="shrink-0 w-[237px] h-[254px]"
      >
        <img src="/Union (3).svg" />
      </div>
      <div id="grid-item" className="shrink-0 w-[237px] h-[254px]">
        <img src="/pen-2.svg" />
        <img src="/Group 910.svg" className="mt-[-250px]" />
      </div>
    </div>
  )
}

export default Collage
