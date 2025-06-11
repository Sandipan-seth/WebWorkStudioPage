import LowerFooter from "@/components/HomeComponents/FooterComponent/LowerFooter";
import Navbar from "@/components/Navbar/Navbar";
import bg from "../assets/bg.jpg";
const steps = [
  {
    id: 1,
    title: "Understanding The Problem",
    description:
      "We are specialized in designing apps and websites and products for industry purposes with well bed and consuming, making things look ok.",
    stepLabel: "First Step",
    image: Step1,
  },
  {
    id: 2,
    title: "Designing The Solution",
    description:
      "We are specialized in designing apps and websites and products for industry purposes with well bed and consuming, making things look ok.",
    stepLabel: "Second Step",
    image: Step2,
  },
  {
    id: 3,
    title: "Developing The Website",
    description:
      "We are specialized in designing apps and websites and products for industry purposes with well bed and consuming, making things look ok.",
    stepLabel: "Third Step",
    image: Step1,
  },
  {
    id: 4,
    title: "Deploying The Website",
    description:
      "We are specialized in designing apps and websites and products for industry purposes with well bed and consuming, making things look ok.",
    stepLabel: "Fourth Step",
    image: Step2,
  },
];

function AboutUs() {
  const bgStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <>
      <div className="w-full min-h-screen bg-white relative" style={bgStyle}>
        <Navbar />

        <LowerFooter />
      </div>
    </>
  );
}

export default AboutUs;
