import React, { useState } from "react";
import "./RotatingCard.css";

const RotatingCard = ({ frontContent, backContent }) => {
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
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-blue-500 text-white rounded-xl shadow-lg backface-hidden">
          <h2 className="text-xl font-bold">{frontContent}</h2>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full flex items-center justify-center bg-gray-800 text-white rounded-xl shadow-lg rotate-y-180 backface-hidden">
          <p className="text-lg">{backContent}.</p>
        </div>
      </div>
    </div>
  );
};

export default RotatingCard;
