import React, { useState } from "react";
import "./RotatingCard.css";
import { dp } from "../../assets/Links";

const RotatingCard = ({ name, backContent, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-64 h-80 perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}

        <div
          className="absolute w-full h-full flex flex-col items-center justify-center text-black rounded-xl backface-hidden shadow-[10px_10px_5px_rgba(0,0,0,0.5)] border-2 border-black"
          style={{ backgroundColor: color }}
        >
          <img
            src={dp[name.slice(0, name.indexOf(" "))]}
            alt="profile"
            className="w-32 h-32 rounded-full"
          />
          <h2 className="text-xl font-bold">{name}</h2>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full flex items-center justify-center bg-gray-800 text-white rounded-xl  rotate-y-180 backface-hidden shadow-[10px_10px_5px_rgba(0,0,0,0.5)] border-2 border-white">
          <p className="text-lg">{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default RotatingCard;
