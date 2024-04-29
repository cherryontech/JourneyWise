import React from 'react'
import './App.css'
import Buttons from './components/Buttons/Buttons'

function App() {
  return (
    <>
      <div className="text-center text-xl font-semibold text-yellow-500 ">
        Welcome to JourneyWise by VenusVoyagers
      </div>

      <Buttons primary rounded>
        Button
      </Buttons>
      <Buttons primary className={'text-green-500'}>
        Hello
      </Buttons>
    </>
  )
}

export default App
