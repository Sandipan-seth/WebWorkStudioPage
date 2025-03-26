import React from "react";
import RotatingCard from "./TeamComponents/RotatingCard";

const About = () => {
  return (
    <div
      className="container mx-auto px-6 py-32 h-fit flex flex-col items-center"
      id="about"
    >
      <h1 className="text-4xl md:text-7xl font-bold text-center text-gray-800 mb-10">
        Our Team
      </h1>

      <div className="w-full flex flex-wrap md:flex-row items-center justify-center gap-8">
        <RotatingCard
          name="Rupam Mondal"
          backContent="Backend Developer"
          color="#9ad3cf"
        />
        <RotatingCard
          name="Debdeep Guha"
          backContent="Developer"
          color="#fdc346"
        />
        <RotatingCard
          name="Sandipan Seth"
          backContent="Frontend Developer"
          color="#88fcac"
        />
        <RotatingCard
          name="Sohom Das"
          backContent="UI/UX Designer"
          color="#38f9fc"
        />
      </div>
    </div>
  );
};

export default About;
