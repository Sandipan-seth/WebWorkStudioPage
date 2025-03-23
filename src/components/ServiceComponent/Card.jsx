import React from "react";

const Card = ({ color, heading,description }) => {
  return (
    <div
      className="w-full md:w-1/3 h-fit p-6 rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-xl font-bold mb-2">{heading}</h1>
      <p className="">{description}</p>
    </div>
  );
};

export default Card;
