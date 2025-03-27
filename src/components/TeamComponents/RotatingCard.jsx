import React, { useState } from "react";
import "./RotatingCard.css";
import { dp, links, profileLinks } from "../../assets/Links";
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
          className="absolute w-full h-full flex flex-col items-center justify-center text-black rounded-xl shadow-lg border-2 border-black transition-transform duration-300 p-5"
          style={{ backgroundColor: color }}
        >
          <div className="flex flex-col items-center">
            <img
              src={dp[name.split(" ")[0]]}
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            />
            <h2 className="text-2xl font-bold mt-3">{name}</h2>
          </div>

          <div className="hidden md:flex items-center justify-center gap-4 mt-4">
            <a
              href={profileLinks[name.split(" ")[0]].linkedin}
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Linkedin size={28} className="text-[#0077B5]" />
            </a>
            <a
              href={profileLinks[name.split(" ")[0]].instagram}
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Instagram size={28} className="text-[#C13584]" />
            </a>
            <a
              href={profileLinks[name.split(" ")[0]].facebook}
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Facebook size={28} className="text-[#1877F2]" />
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
