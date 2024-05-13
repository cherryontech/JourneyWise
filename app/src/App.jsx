import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Index from './navigation/Index'
import Header from './components/Nav/Header'


function App() {
  return (
    
    <Router>
     <Routes>
      <Route path = "/" element = { <Index />}/>
     </Routes>

    </Router>
   
     
  
  )
}

export default App
