import React, { useEffect } from "react";
import HowItWork from "../components/HomeComponents/HowItWork";
import TakeALook from "../components/HomeComponents/TakeALook";
import Navbar from "../components/Navbar/Navbar";
import Landingpage from "@/components/HomeComponents/Landingpage";
import bg from "../assets/bg.jpg";
import Footer from "@/components/HomeComponents/Footer";
import FAQ from "@/components/HomeComponents/Faq/Faq";
import Testimonial from "@/components/HomeComponents/Testimonial/Testimonial";
import LandingsectionImage from "../components/HomeComponents/LandingsectionImage/LandingsectionImage";
import BrandMarquee from "@/components/HomeComponents/Marquee/Marquee";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bgStyle = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <div className="w-full bg-white relative" style={bgStyle}>
      <Navbar />
      <Landingpage />
      <LandingsectionImage />
      <BrandMarquee />
      <HowItWork />
      <TakeALook />
      <FAQ />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
