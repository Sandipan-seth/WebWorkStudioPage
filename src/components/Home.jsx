import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className=" z-[-99] fixed top-0 w-screen h-screen items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div
        className="relative w-screen h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        id="home"
        // style={{ backgroundImage: `url(${background})` }}
      >
        {/* Blur & Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Your Trusted <span className="text-blue-400">Freelance Agency</span>
          </h1>
          <p className="text-lg text-gray-200 mt-4">
            We specialize in app and web design for industry professionals.
          </p>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 w-full">
            <button
              className="relative w-full md:w-1/4 bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:bg-blue-900 hover:border-blue-600 hover:text-white"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10">🚀 Get Started</span>
            </button>
            <button
              className="relative w-full md:w-1/4 bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:bg-blue-900 hover:border-blue-600 hover:text-white"
              onClick={() => navigate("/meetup")}
            >
              <span className="relative z-10">📞 Book a Call</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
