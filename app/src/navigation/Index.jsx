import React from 'react'
import Hero from '../components/homepage/Hero'
import OurVision from '../components/homepage/OurVision'
import HomepageGuide from '../components/homepage/HomepageGuide'
import Storytelling from '../components/homepage/Storytelling'
import Header from '../components/Nav/Header'

const Index = () => {
  return (
    <>
      <Header/>
      <Hero />
      <OurVision />
      <HomepageGuide />
      <Storytelling /> 
    </>
  )
}

export default Index
