import React from "react";
import Card from "./ServiceComponent/Card";

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

      <div className="flex justify-center flex-col gap-10 md:flex-row md:gap-10 mt-10">
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
        {/* <Card color="#86fbad" heading="AI" /> */}
      </div>
    </div>
  );
};

export default Service;
