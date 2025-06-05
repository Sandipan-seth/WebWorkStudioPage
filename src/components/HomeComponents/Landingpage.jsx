import { AnimatedShinyTextDemo } from "./Animationtext/AnimationText";

function Landingpage() {
  const content = [
    "Turning Your ideas",
    "into Impactfull",
    "Digital Experiences"
  ];

  const subcontent = [
    "Webworks Studio is a creative Digital Agency specialized",
    "in designing and developing High Impact Websites"
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
    </div>
  );
}

export default Landingpage;
