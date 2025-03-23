import React from "react";
import { img } from "../../assets/Links";

const Card = ({ color, heading,description }) => {
  return (
    <div
      className="w-full md:w-1/3 h-fit p-6 rounded-2xl shadow-[10px_10px_5px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 border-2 border-black"
      style={{ backgroundColor: color }}
    >
      <div className="w-10 md:w-16 h-10 md:h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden mb-6 border-2 border-black">
        {img[heading] ? (
          <img
            src={img[heading]}
            alt="logo"
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="text-xs text-gray-500">No Image</span>
        )}
      </div>

      <h1 className="text-xl md:text-3xl font-bold mb-2">{heading}</h1>
      <p className="text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
