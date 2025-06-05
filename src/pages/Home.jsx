import React from "react";
import HowItWork from "../components/HomeComponents/HowItWork";
import TakeALook from "../components/HomeComponents/TakeALook";
import Navbar from "@/components/Navbar/Navbar";
import Landingpage from "@/components/HomeComponents/Landingpage";
import bg from "../assets/bg.jpg"
import Footer from "@/components/HomeComponents/Footer";

const Home = () => {
 
  const bgStyle = {
    backgroundImage: `url(${bg})`,
    
  };

  return (
    <div className="min-w-screen bg-white relative" style={bgStyle}>
      <Navbar />
      <Landingpage />
      <HowItWork />
      <TakeALook />
      <Footer />
    </div>
  );
};

export default Home;
