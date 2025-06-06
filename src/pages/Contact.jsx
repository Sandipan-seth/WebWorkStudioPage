import LowerFooter from '@/components/HomeComponents/FooterComponent/LowerFooter'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import bg from '../assets/bg.jpg'
import Form from '@/components/ContactComponents/Form'

const Contact = () => {
  const bgStyle = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <div className="w-full min-h-screen bg-white relative" style={bgStyle}>
      <Navbar />
      <Form />
      <LowerFooter />
    </div>
  );
}

export default Contact
