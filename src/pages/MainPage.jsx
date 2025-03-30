import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Service from '../components/Service'
import Works from '../components/Works'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Works />
      <Contact />

      <Footer />
    </div>
  )
}

export default MainPage