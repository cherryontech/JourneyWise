import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Index from './navigation/Index'
import StartQuestionnaire from './components/ArcheTypes/StartQuestionnaire'
import ResultIndex from './navigation/ResultIndex'

const App = () => {
  return (
    <Router>
     <Routes>
      <Route path = "/" element = { <Index />}/>
      <Route path = "/questionnaire" element = {<StartQuestionnaire/>}/>
      <Route path= "/result" element = {<ResultIndex/>}/>
     </Routes>
    </Router>
  )
}

export default App
