import React from 'react'
import classNames from 'classnames'

function Buttons({ children, primary, rounded, alternate , ...res }) {
  const classes = classNames(
    res.className,
    ' border cursor-pointer',
    {
      'border-[1px] border-black bg-[#F5FF82]  text-black  hover:bg-[#F6FF99] tracking-[2px]':
        primary,
      'rounded-full': rounded,

      
    },

    {
      'border-[1px] border-black bg-[##7A7A7A) bg-gray-300 text-gray-500  cursor-not-allowed opacity-50 tracking-[2px]':
        alternate,
      'rounded-full': rounded,
    },
    
  )

  return (
    <>
      <button {...res} className={classes}>
        {children}
      </button>
    </>
  )
}

Buttons.propTypes = {
  checkValues: ({ primary, secondary, tenary, alternate }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!tenary) +
      Number(!!alternate)
    if (count > 1) {
      return new Error(
        'Can not have primary, secondary , tenary buttons, choose one'
      )
    }
  },
}

export default Buttons
