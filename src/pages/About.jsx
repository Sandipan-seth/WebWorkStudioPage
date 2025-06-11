import React from 'react'
import Footer from '@/components/HomeComponents/Footer'
import Navbar from '@/components/Navbar/Navbar'
import bg from '../assets/bg.jpg';
import WhoAreWe from '@/components/Whoarewe/WhoAreWe';
const About = () => {
     const bgStyle = {
            backgroundImage: `url(${bg})`,
        };
  return (
    <div style={bgStyle}>
      <Navbar/>
      <WhoAreWe/>
      <Footer/>
    </div>
  )
}

export default About
