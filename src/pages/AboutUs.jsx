import LowerFooter from "@/components/HomeComponents/FooterComponent/LowerFooter";
import Navbar from "@/components/Navbar/Navbar";
import bg from "../assets/bg.jpg";
import WhoAreWe from "@/components/Whoarewe/WhoAreWe";
import Step1 from "../assets/HomeAssets/HowItWork/Step1.png";
import Step2 from "../assets/HomeAssets/HowItWork/Step2.png";
import { useEffect } from "react";
import AboutComponent from "@/components/AboutComponents/AboutComponent";
import Team from "@/components/AboutComponents/Team";
import Footer from "@/components/HomeComponents/Footer";
const steps = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To empower individuals and businesses by crafting intuitive, impactful, and scalable digital solutions that drive growth and innovation.",
    stepLabel: "First Step",
    image: Step1,
  },
  {
    id: 2,
    title: "Our Objective",
    description:
      "To deliver high-quality web and mobile applications tailored to industry needs, focusing on user experience, performance, and reliability.",
    stepLabel: "Second Step",
    image: Step2,
  },
  {
    id: 3,
    title: "Our Principles",
    description:
      "We believe in transparency, user-centric design, and continuous improvement to create solutions that truly matter to our clients and their users.",
    stepLabel: "Third Step",
    image: Step1,
  },
];

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const bgStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <div style={bgStyle}>
      <div className="max-w-7xl mx-auto w-full min-h-screen bg-white/50 relative">
        <Navbar />
        <WhoAreWe />
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">
          Our <span className="text-[#b9f33f]">Mission</span>
        </h2>

        <AboutComponent />
        <Team />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
