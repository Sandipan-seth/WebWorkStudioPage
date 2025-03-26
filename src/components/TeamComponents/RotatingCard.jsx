import React, { useState } from "react";
import "./RotatingCard.css";
import { dp, links } from "../../assets/Links";
import { Facebook, Instagram, Linkedin } from "lucide-react";

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
          <div>
            <img
              src={dp[name.slice(0, name.indexOf(" "))]}
              alt="profile"
              className="w-32 h-32 rounded-full"
            />
            <h2 className="text-xl font-bold">{name}</h2>
          </div>

          <div className="hidden md:flex items-center justify-center gap-5 ">
            <a href={links.linkedin} target="_blank">
              <Linkedin size={24} color="#0088C3" />
            </a>
            <a href={links.instagram} target="_blank">
              <Instagram size={24} color="#B91497" />
            </a>
            <a href={links.facebook} target="_blank">
              <Facebook size={24} color="#0866FF" />
            </a>
          </div>
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
