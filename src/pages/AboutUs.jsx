import LowerFooter from "@/components/HomeComponents/FooterComponent/LowerFooter";
import Navbar from "@/components/Navbar/Navbar";
import bg from "../assets/bg.jpg";
import WhoAreWe from "@/components/Whoarewe/WhoAreWe";
import Step1 from "../assets/HomeAssets/HowItWork/Step1.png";
import Step2 from "../assets/HomeAssets/HowItWork/Step2.png";
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
];

function AboutUs() {
  const bgStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <>
      <div className="w-full min-h-screen bg-white relative" style={bgStyle}>
        <Navbar />
        <WhoAreWe/>
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">
          How It <span className="text-[#b9f33f]">Works</span>
        </h2>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`mb-12 flex flex-col justify-center md:flex-row items-stretch py-5 md:py-10 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`md:w-1/3 mb-6 md:mb-0 flex justify-center 
            ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}
           items-center`}
            >
              <div className="relative inline-block w-2/3">
                <div className="absolute top-2 left-2 w-full h-full rounded-lg bg-[#b9f33f] z-0 border border-gray-400"></div>

                <img
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className={`relative z-10 max-w-xs w-full h-auto rounded-lg border border-black`}
                />
              </div>
            </div>

            <div className="md:w-1/2 md:px-8 text-center md:text-left flex flex-col justify-center md:gap-10 items-center md:items-start">
              <span className="inline-block w-fit bg-[#b9f33f] text-black px-5 py-2 md:px-10 md:py-3 rounded-full text-md font-semibold mb-2 ">
                {step.stepLabel}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-tight text-sm md:text-xl">
                {step.description}
              </p>
            </div>
          </div>
        ))}
        
        <LowerFooter />
      </div>
    </>
  );
}

export default AboutUs;
