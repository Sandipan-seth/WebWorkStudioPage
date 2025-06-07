import React from 'react'
import Footer from '@/components/HomeComponents/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ServiceBody from '@/components/ServicesComponents/ServiceBody'
import bg from '../assets/bg.jpg'

const Service = () => {
    const bgStyle = {
      backgroundImage: `url(${bg})`,
    };
  return (
    <div style={bgStyle}>
        <Navbar />
        <ServiceBody />
        <Footer />
    </div>
  )
}

export default Service
