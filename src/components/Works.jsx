import React from 'react'

const Works = () => {
  return (
    <div className="mx-auto px-6 py-32 h-screen bg-white" id="work">
      <h1 className="text-4xl md:text-7xl font-bold text-center text-gray-800">
        Our Works
      </h1>
      <p className="text-center md:text-4xl text-gray-600 mt-4 max-w-4xl md:max-w-5xl mx-auto">
        Our Company provides top-notch web services tailored to your business
        needs, ensuring seamless digital solutions.
      </p>

      {/* <div className="flex justify-center flex-col gap-10 md:flex-row md:gap-10 mt-10">
        <Card
          color="#fdc346"
          heading="UI/UX Design"
          description=" We are specialized in designing apps and websites and products for industry purpose and well bell and consulting makes things look do"
        />
        <Card
          color="#9ad3cf"
          heading="Web Development"
          description=" We are specialized in designing apps and websites and products for industry purpose and well bell and consulting makes things look do"
        />
      </div> */}
    </div>
  );
}

export default Works
