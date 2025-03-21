import React from 'react'
import Card from './ServiceComponent/Card';

const Service = () => {
  return (
    <div className="container mx-auto px-6 py-32 h-screen" id="service">
      <h1 className="text-4xl md:text-7xl font-bold text-center text-gray-800">
        Our Services
      </h1>
      <p className="text-center md:text-4xl text-gray-600 mt-4 max-w-4xl md:max-w-5xl mx-auto">
        We provide the best services in this with the most minimal cost and data
        usage.
      </p>

      <div>
        <Card className="bg-[#fdc346]" />
        <Card className="bg-[#9ad3cf]" />
        <Card className="bg-[#86fbad]" />
      </div>
    </div>
  );
}

export default Service
