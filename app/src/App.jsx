import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Index from './navigation/Index'
import Header from './components/Nav/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <Header/>
      <Index />
      <Footer/>
    </>
  )
}

export default App
