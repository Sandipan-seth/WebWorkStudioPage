import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Service from '../components/Service'
import Works from '../components/Works'

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Works />
      <Contact />
    </div>
  )
}

export default MainPage