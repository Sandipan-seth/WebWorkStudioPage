import React from "react";
import AV from "../../assets/HomeAssets/LookWebSites/AV.png";
import GP from "../../assets/HomeAssets/LookWebSites/GP.png";
import TF from "../../assets/HomeAssets/LookWebSites/TF.png";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "AV Design",
    description:
      "A modern portfolio website tailored for a visual design studio, featuring elegant UI, project showcases, and seamless user interactions to highlight creative works.",
    image: AV,
    link: "https://www.av-design.in/",
  },
  {
    id: 2,
    title: "Manpasand",
    description:
      "An intuitive website developed for a local food brand, offering a visually engaging interface to explore and learn more about the brand’s unique offerings.",
    image: TF,
    link: "https://manpasand.us/",
  },
  {
    id: 3,
    title: "Gram Panchayat",
    description:
      "A community-focused portal built for local governance, enabling villagers to access schemes, submit grievances, and stay updated on Gram Panchayat activities.",
    image: GP,
    link: "https://yourdomain.com/gram-panchayat",
  },
];

export default function TakeALook() {
  return (
    <div className="bg-white/50 py-16 max-w-7xl mx-auto px-4 mt-5 md:mt-10">
      <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">
        Take A Look At Our <span className="text-[#b9f33f]">Websites</span>
      </h2>
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative items-center flex justify-center md:hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full md:w-[80%] relative">
              <div className="absolute top-2 md:top-4 left-2 md:left-4 mx-auto w-full h-full rounded-xl bg-[#b9f33f] z-0"></div>

              <div
                className={`relative border mx-auto border-black rounded-xl w-full py-6 px-4 md:min-h-[40vh] flex flex-col md:flex-row items-center justify-between bg-white z-10 
                ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/3 flex justify-center items-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-[70%] max-w-sm md:max-w-sm h-auto rounded-xl object-cover shadow-xl"
                  />
                </div>

                <div className="w-full md:w-2/3 px-5 md:px-6 mt-6 md:mt-0 flex flex-col items-start justify-center gap-5">
                  <h3 className="text-3xl md:text-5xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-tight text-base md:text-xl">
                    {step.description}
                  </p>
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#b9f33f] text-black px-5 py-2 rounded-full font-semibold flex items-center w-fit gap-2 hover:bg-lime-400 transition"
                  >
                    View Project <ArrowUpRight size={18} className="inline" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-[#b9f33f] text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-400 transition">
          View All Projects
        </button>
      </div>
    </div>
  );
}
