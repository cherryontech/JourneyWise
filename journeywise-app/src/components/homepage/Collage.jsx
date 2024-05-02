import React from 'react'

const Collage = () => {
  return (
    <div
      id="collage-container"
      className="grid grid-cols-3 grid-rows-3 gap-0"
    >
      <div
        id="grid-item"
        className="shrink-0 w-[234.886px] h-[251.828px]"
      >
        <svg
          width="235"
          height="253"
          viewBox="0 0 235 253"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        />
      </div>
      <div id="grid-item">
        <img src="./assets/homepage/collage/Union.svg" />
      </div>
      <div id="grid-item"></div>
      <div id="grid-item"></div>
      <div id="grid-item"></div>
      <div id="grid-item"></div>
      <div id="grid-item"></div>
      <div id="grid-item"></div>
      <div id="grid-item"></div>
    </div>
  )
}

export default Collage
