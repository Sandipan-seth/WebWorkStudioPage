import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Welcome to the Home Page
        </h1>
      </div>
    </div>
  )
}

export default Home