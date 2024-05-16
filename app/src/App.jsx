import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Index from './navigation/Index'
import StartQuestionnaire from './components/ArcheTypes/StartQuestionnaire'

const App = () => {
  return (
    <Router>
     <Routes>
      <Route path = "/" element = { <Index />}/>
      <Route path = "/questionnaire" element = {<StartQuestionnaire/>}/>
     </Routes>
    </Router>
  )
}

export default App
