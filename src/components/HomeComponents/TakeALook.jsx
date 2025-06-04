import React from "react";
import AV from "../../assets/HomeAssets/LookWebSites/AV.png";
import GP from "../../assets/HomeAssets/LookWebSites/GP.png";
import TF from "../../assets/HomeAssets/LookWebSites/TF.png";
import { ArrowUpRight } from "lucide-react"; // Optional: install lucide-react or replace with any icon

const steps = [
  {
    id: 1,
    title: "AV Design",
    description:
      "We am specialized in designing apps and websites and products for industry purpose and well bell and well of a consulting makes things look do in that particular arena .",
    image: AV,
  },
  {
    id: 2,
    title: "Gram Panchayat",
    description:
      "We am specialized in designing apps and websites and products for industry purpose and well bell and well of a consulting makes things look do in that particular arena .",
    image: GP,
  },
  {
    id: 3,
    title: "TF Cakes",
    description:
      "We am specialized in designing apps and websites and products for industry purpose and well bell and well of a consulting makes things look do in that particular arena .",
    image: TF,
  },
];

export default function TakeALook() {
  return (
    <div className="bg-white py-16 max-w-7xl mx-auto px-4 mt-5 md:mt-10">
      <h2 className="text-5xl md:text-7xl font-bold text-center mb-12">
        Take A Look At Our <span className="text-[#b9f33f]">Websites</span>
      </h2>
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            <div className="absolute top-2 left-2 w-full h-full rounded-xl bg-[#b9f33f] z-0"></div>

            <div
              className={`relative border border-black rounded-xl px-6 py-6 md:h-[40vh] flex flex-col md:flex-row items-center justify-between bg-white z-10
        ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center ">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-1/2 h-full rounded-lg object-cover shadow-xl"
                />
              </div>

              <div className="md:w-1/2 md:px-12 h-full flex flex-col item-center justify-center gap-5">
                <h3 className="text-3xl md:text-5xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-tight text-sm md:text-xl">
                  {step.description}
                </p>
                <button className="bg-[#b9f33f] text-black px-5 py-2 rounded-full font-semibold flex items-center w-fit gap-2 hover:bg-lime-400 transition">
                  View Project <ArrowUpRight size={18} className="inline" />
                </button>
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
