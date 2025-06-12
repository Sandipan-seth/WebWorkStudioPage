import LowerFooter from "@/components/HomeComponents/FooterComponent/LowerFooter";
import Navbar from "@/components/Navbar/Navbar";
import bg from "../assets/bg.jpg";
import WhoAreWe from "@/components/Whoarewe/WhoAreWe";
import Step1 from "../assets/HomeAssets/HowItWork/Step1.png";
import Step2 from "../assets/HomeAssets/HowItWork/Step2.png";
import { useEffect } from "react";
import AboutComponent from "@/components/AboutComponents/AboutComponent";
const steps = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "We are specialized in designing apps and websites and products for industry purposes with well bed and consuming, making things look ok.",
    stepLabel: "First Step",
    image: Step1,
  },
  {
    id: 2,
    title: "Our Objective",
    description:
      "We are specialized in designing apps and websites and products for industry purposes with well bed and consuming, making things look ok.",
    stepLabel: "Second Step",
    image: Step2,
  },
  {
    id: 3,
    title: "Our Principles",
    description:
      "We are specialized in designing apps and websites and products for industry purposes with well bed and consuming, making things look ok.",
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
      <div
        className="max-w-7xl mx-auto w-full min-h-screen bg-white/50 relative"
      >
        <Navbar />
        <WhoAreWe />
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">
          Our <span className="text-[#b9f33f]">Mission</span>
        </h2>

        <AboutComponent/>

        <LowerFooter />
      </div>
    </div>
  );
}

export default AboutUs;
