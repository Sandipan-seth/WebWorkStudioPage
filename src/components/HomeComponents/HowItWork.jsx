import React from "react";
import Step1 from "../../assets/HomeAssets/HowItWork/Step1.png";
import Step2 from "../../assets/HomeAssets/HowItWork/Step2.png";
import faq_blackline1 from "../../assets/HomeAssets/FAQ/faq_blackline1.png";
import faq_blackline2 from "../../assets/HomeAssets/FAQ/faq_blackline2.png";
import faq_blackline3 from "../../assets/HomeAssets/FAQ/faq_blackline3.png";
import faq_greenline1 from "../../assets/HomeAssets/FAQ/faq_greenline1.png";
import faq_greenline2 from "../../assets/HomeAssets/FAQ/faq_greenline2.png";
import faq_greenline3 from "../../assets/HomeAssets/FAQ/faq_greenline3.png";
const steps = [
  {
    id: 1,
    title: "Understanding The Problem",
    description:
      "We start by deeply analyzing the client's needs, industry trends, and user challenges to define a clear and actionable problem statement.",
    stepLabel: "First Step",
    image: Step1,
  },
  {
    id: 2,
    title: "Designing The Solution",
    description:
      "Our design team crafts intuitive user experiences and modern interfaces that align with the brand’s identity and target audience expectations.",
    stepLabel: "Second Step",
    image: Step2,
  },
  {
    id: 3,
    title: "Developing The Website",
    description:
      "Using the latest technologies, our developers turn wireframes into high-performance, scalable, and secure applications ready for real-world use.",
    stepLabel: "Third Step",
    image: Step1,
  },
  {
    id: 4,
    title: "Deploying The Website",
    description:
      "After thorough testing, we launch the product to production servers, ensuring everything runs smoothly with ongoing monitoring and support.",
    stepLabel: "Fourth Step",
    image: Step2,
  },
];


export default function HowItWork() {
  return (
    <div className="bg-white/50 py-16 max-w-7xl mx-auto px-4 ">
      <div className="relative flex justify-center items-center mt-2 mb-10">
        <div className="flex items-center absolute left-[-1px] top-[-4px] sm:left-[328px] sm:top-[-10px] gap-0">
          <img
            src={faq_blackline1}
            alt="Black Line 1"
            className="relative h-4 sm:h-7 translate-x-[57px] translate-y-[-15px] sm:translate-x-[43px] sm:translate-y-[-24px]"
          />
          <img
            src={faq_blackline2}
            alt="Black Line 2"
            className="relative h-4 sm:h-7 translate-x-[33px] translate-y-[-10px] sm:translate-x-[5px] sm:translate-y-[-16px]"
          />
          <img
            src={faq_blackline3}
            alt="Black Line 3"
            className="relative object-contain h-4 w-5 sm:w-8 sm:h-7 translate-x-[8px] translate-y-[2px] sm:translate-x-[-35px] sm:translate-y-[3px]"
          />
        </div>
        <h2 className="text-4xl md:text-7xl font-bold text-center mb-20">
          How It <span className="text-[#b9f33f]">Works</span>
        </h2>
        <div className="flex items-center absolute top-[-4px] right-[94px] sm:top-0 sm:right-[424px] gap-1">
          <img
            src={faq_greenline1}
            alt="Green Line 1"
            className="relative h-4 translate-x-[83px] translate-y-[-14px] sm:h-7 sm:translate-x-[120px] sm:translate-y-[-24px]"
          />
          <img
            src={faq_greenline2}
            alt="Green Line 2"
            className="relative h-3 translate-x-[78px] translate-y-[-8px] sm:h-6 sm:translate-x-[113px] sm:translate-y-[-18px]"
          />
          <img
            src={faq_greenline3}
            alt="Green Line 3"
            className="relative object-contain h-4 w-5 translate-x-[59px] translate-y-[5px] sm:w-8 sm:h-7 sm:translate-x-[86px] sm:translate-y-[-1px]"
          />
        </div>
      </div>


      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`mb-12 flex flex-col justify-center md:flex-row items-stretch py-5 md:py-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
        >
          <div className={`md:w-1/3 mb-6 md:mb-0 flex justify-center 
            ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}
           items-center`}>
            <div className="relative inline-block w-2/3">
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
              {step.stepLabel}
            </span>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-tight text-sm md:text-xl">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
