import React from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Index from './navigation/Index'
import ArcheTypes from './components/ArcheType/ArcheTypes'


function App() {
  return (
  <Router>
    <Routes>
      <Route path= "/" element= {<Index/>}/>
      <Route path = "/archetypes" element = {<ArcheTypes/>}/> 
      </Routes>
      </Router>
  )
}

export default App
