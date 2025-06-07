import React from 'react'
import Step1 from "../../assets/ServiceAssets/Step1.png";
import { ArrowUpRight } from 'lucide-react';

const ServiceBody = () => {

    const steps = [
      {
        id: 1,
        title: "UI/UX Designing",
        description:
          "We are specialized in designing apps and websites and products for industry purposes with well bed and consuming, making things look ok.",
        label: "Designing",
        image: Step1,
        price: "Starting at ₹2999"
      },
      {
        id: 2,
        title: "Website building",
        description:
          "We are specialized in designing apps and websites and products for industry purposes with well bed and consuming, making things look ok.",
        label: "Development",
        image: Step1,
        price: "Starting at ₹7999"
      },
      {
        id: 3,
        title: "Maintenance & Deployment",
        description:
          "We are specialized in designing apps and websites and products for industry purposes with well bed and consuming, making things look ok.",
        label: "Maintenance",
        image: Step1,
        price: "Starting at ₹1999"
      },
      {
        id: 4,
        title: "Search Engine Optimization",
        description:
          "We are specialized in designing apps and websites and products for industry purposes with well bed and consuming, making things look ok.",
        label: "SEO",
        image: Step1,
        price: "Starting at ₹7999"
      }
    ];
  return (
    <div className="min-h-screen flex items-center justify-center bg-white/50 py-16 max-w-7xl mx-auto px-4 mt-5 md:mt-10">
      <div className="w-full">
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-5 md:mb-20">
          What We Have <span className="text-lime-500 font-bold">Got</span> For{" "}
          <span className="text-lime-500 font-bold">You</span>
        </h2>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`mb-3 flex flex-col justify-center md:flex-row items-stretch py-5 md:py-10 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`md:w-1/3 mb-6 md:mb-0 flex justify-center 
            ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}
           items-center`}
            >
              <div className="relative inline-block">
                <div className="absolute top-2 left-2 w-full h-full rounded-lg bg-[#b9f33f] z-0 border border-gray-400"></div>

                <img
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className={`relative z-10 max-w-xs w-full h-auto rounded-lg border border-black`}
                />
              </div>
            </div>

            <div className="md:w-1/2 md:px-8 text-center md:text-left flex flex-col justify-center md:gap-10 items-center md:items-start">
              <span className="inline-block w-fit bg-[#b9f33f] text-black px-5 py-2 md:px-10 md:py-3 rounded-full text-md font-semibold mb-2 ">
                {step.label}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-tight text-sm md:text-xl">
                {step.description}
              </p>
              <button className="bg-[#b9f33f] text-black px-5 md:px-10 py-2 md:py-3 rounded-full font-semibold flex md:text-lg items-center w-fit gap-2 hover:bg-lime-400 transition mt-10">
                {step.price} <ArrowUpRight size={18} className="inline" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceBody
