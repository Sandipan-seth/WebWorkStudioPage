import { AnimatedShinyTextDemo } from "./Animationtext/AnimationText";

function Landingpage() {
  const content = [
    "Turning Your ideas",
    "into Impactfull",
    "Digital Experiences",
  ];

  const subcontent = [
    "Webworks Studio is a creative Digital Agency specialized",
    "in designing and developing High Impact Websites",
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white text-black px-6 text-center">
      <div className="mb-10">
        <AnimatedShinyTextDemo />
      </div>

      <div className="text-4xl md:text-5xl font-bold space-y-2 leading-tight">
        <h1>{content[0]}</h1>
        <h1>
          into <span style={{ color: "#B9F33F" }}>Impactfull</span>
        </h1>
        <h1>{content[2]}</h1>
      </div>

      <div className="mt-4 text-lg md:text-xl text-gray-700 space-y-1">
        {subcontent.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <div className="bg-black text-white rounded-2xl px-5 py-2 text-base font-medium text-center w-40">
          Book a Call
        </div>
        <div className="bg-[#B9F33F] text-black rounded-2xl px-5 py-2 text-base font-medium text-center w-40">
          Explore Service
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
