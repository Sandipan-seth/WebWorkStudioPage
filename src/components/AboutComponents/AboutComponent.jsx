import Step1 from '../../assets/HomeAssets/HowItWork/Step1.png'
import Step2 from '../../assets/HomeAssets/HowItWork/Step2.png'


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
function AboutComponent() {

  return (
    <>
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
    </>
  );
}

export default AboutComponent;
