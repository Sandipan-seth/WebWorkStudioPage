import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default MainPage