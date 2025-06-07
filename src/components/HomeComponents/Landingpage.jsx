import { AnimatedShinyTextDemo } from "./Animationtext/AnimationText";

function Landingpage() {
  const content = [
    "Turning Your ideas",
    "into Impactful",
    "Digital Experiences",
  ];

  const subcontent = [
    "Webworks Studio is a creative Digital Agency specialized",
    "in designing and developing High Impact Websites",
  ];

  return (
    <div className="flex flex-col mx-auto max-w-7xl justify-center items-center min-h-screen bg-white/60 text-black px-4 sm:px-6 text-center pt-12 pb-16">
      <div className="mb-5">
        <AnimatedShinyTextDemo />
      </div>

      <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold space-y-1 sm:space-y-2">
        <h1>{content[0]}</h1>
        <h1>
          into <span className="text-[#B9F33F]">Impactful</span>
        </h1>
        <h1>{content[2]}</h1>
      </div>

      <div className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 space-y-1">
        {subcontent.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center items-center">
        <div className="bg-black text-white rounded-2xl px-6 py-3 text-sm sm:text-base font-medium text-center w-60 sm:w-40">
          Book a Call
        </div>
        <div className="bg-[#B9F33F] text-black rounded-2xl px-6 py-3 text-sm sm:text-base font-medium text-center w-60 sm:w-40">
          Explore Service
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
