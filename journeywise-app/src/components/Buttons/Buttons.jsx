import React from 'react'
import classNames from 'classnames'

function Buttons({ children, primary, rounded, ...res }) {
  const classes = classNames(
    res.className,
    ' border cursor-pointer',
    {
      'border-2 border-black bg-[#F5FF82] btn-lg py-4 px-60 text-black text-2xl hover:bg-[#F6FF99]':
        primary,
      'rounded-full': rounded,
    }
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
  checkValues: ({ primary, secondary, tenary }) => {
    const count =
      Number(!!primary) + Number(!!secondary) + Number(!!tenary)
    if (count > 1) {
      return new Error(
        'Can not have primary, secondary , tenary buttons, choose one'
      )
    }
  },
}

export default Buttons
