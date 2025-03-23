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
        <RotatingCard frontContent="Rupam Mondal" backContent="Backend Developer" />
        <RotatingCard frontContent="Debdeep Guha" backContent="Developer" />
        <RotatingCard frontContent="Sandipan Seth" backContent="Frontend Developer" />
        <RotatingCard frontContent="Sohom Das" backContent="UI/UX Designer" />
      </div>
    </div>
  );
};

export default About;
