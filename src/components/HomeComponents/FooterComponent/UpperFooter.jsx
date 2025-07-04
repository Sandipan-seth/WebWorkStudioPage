import React from "react";
import h from "../../../assets/HomeAssets/Footer/H.png";
import FooterBg from "../../../assets/HomeAssets/Footer/FooterBg.jpg";
import EllipseMob from "../../../assets/HomeAssets/Footer/EllipseMob.jpg";
import { useNavigate } from "react-router-dom";

const UpperFooter = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${FooterBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        className="hidden w-full h-fit md:flex pt-48 px-6 flex-col items-center text-center  md:pt-40 lg:pt-40 xl:pt-60 2xl:pt-60 pb-16 shadow-white shadow-[0_0_100px_250px_rgba(0,0,0,0.1)] "
      >
        <img src={h} alt="Footer Illustration" className="w-28 h-28 mb-6" />
        <h1 className="text-7xl font-bold mb-4  text-gray-900">
          Let’s Start Your <br />
          Company Journey
        </h1>
        <p className="text-gray-600 max-w-xl mb-8 text-md ">
          Start trading with powerful tools, real-time insights, and a secure
          platform for better profits.
        </p>
        <button className="bg-[#b9f33f] text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-400 transition"
          onClick={() => {navigate("/services");}}
        >
          Get Started
        </button>
      </div>

      <div
        style={{
          backgroundImage: `url(${EllipseMob})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        className="md:hidden w-full h-fit flex pt-48 px-6 flex-col items-center text-center  md:pt-40 lg:pt-40 xl:pt-60 2xl:pt-60 pb-16 shadow-white shadow-[0_0_100px_250px_rgba(0,0,0,0.1)]"
      >
        <img src={h} alt="Footer Illustration" className="w-20 h-20 mb-6" />
        <h1 className="text-3xl font-bold mb-4  text-gray-900">
          Let’s Start Your <br />
          Company Journey
        </h1>
        <p className="text-gray-600 max-w-xs mb-8 text-sm ">
          Start trading with powerful tools, real-time insights, and a secure
          platform for better profits.
        </p>
        <button className="bg-[#b9f33f] text-black px-3 py-2 text-sm rounded-full font-semibold hover:bg-lime-400 transition">
          Get Started
        </button>
      </div>
    </>
  );
};

export default UpperFooter;
