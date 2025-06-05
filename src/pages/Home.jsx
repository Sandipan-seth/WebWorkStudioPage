import React from 'react'
import HowItWork from '../components/HomeComponents/HowItWork'
import TakeALook from '../components/HomeComponents/TakeALook'
import Navbar from '@/components/Navbar/Navbar'


const Home = () => {
  return (
    <div className='min-w-screen bg-white relative'>
      <Navbar/>
      <HowItWork />
      <TakeALook />
    </div>
  )
}

export default Home