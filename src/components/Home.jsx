import React from "react";
import background from "../assets/background.jpg";

const Home = () => {
  return (
    <div
      className="relative w-screen h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      id="home"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Blur & Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Your Trusted <span className="text-blue-400">Freelance Agency</span>
        </h1>
        <p className="text-lg text-gray-200 mt-4">
          We connect businesses with top-tier freelancers to deliver
          high-quality projects on time. Let us handle your hiring needs
          efficiently.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            className="bg-blue-500 w-1/3 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
          </button>
          {/* <button
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
