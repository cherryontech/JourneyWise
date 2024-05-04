import React from 'react'
import { useState } from 'react'
import classNames from 'classnames'
import Buttons from '../Buttons/Buttons'
import SecurityCollage from './SecurityCollage'

function SecContent() {
  const [isChecked, setIschecked] = useState(false)
  const paragraph = classNames(
    'font-normal text-base leading-17 font-normal'
  )

  const handleChange = (event) => {
    setIschecked(event.target.checked)
  }
  const renderBtn = isChecked ? (
    <Buttons primary rounded>
      Let's Begin Assessment
    </Buttons>
  ) : (
    <Buttons alternate rounded>
      Let's Begin Assessment
    </Buttons>
  )
  return (
    <section
      className="md:-w-[33.3rem] md:m-15 md:-h-[14.37rem] 
    m-4 flex flex-col justify-center overflow-y-auto rounded-lg bg-white p-6 text-center md:mx-auto"
    >
      <div className="mb-6 flex justify-center">
        <div className=" max-w-80vw mt-[20rem]">
          <SecurityCollage /> 
        </div>
      </div>
      <div className="w-295 h-146 text-container mt-4 md:mt-[4.8rem]">
        <h1 className="mb-4 text-center font-serif text-3xl font-normal uppercase text-black">
          We’re Dedicated to protecting your data
        </h1>

        <p className={`mb-8 ${paragraph}`}>
          Nulla consequat massa quis enim. Donec pede justo, fringilla
          vel, aliquet nec, vulputate eget, arcu. In enim justo,
          rhoncus ut, imperdiet a, venenatis vitae. .
        </p>
        <p className={`mb-8 ${paragraph}`}>
          Nulla consequat massa quis enim. Donec pede justo, fringilla
          vel, aliquet nec, vulputate eget, arcu. In enim justo,
          rhoncus ut, imperdiet a, venenatis vitae.
        </p>
      </div>
      <div className="mb-8 mt-4  flex items-center">
        <input
          type="checkbox"
          id="agree"
          checked={isChecked}
          onChange={handleChange}
        />
        <label htmlFor="agree" className="ml-2">
          I agree to the terms and conditions
        </label>
      </div>
      {renderBtn}
    </section>
  )
}

export default SecContent
