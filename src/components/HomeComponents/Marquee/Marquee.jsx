import Marquee from "react-fast-marquee";
import company from './Group.png';

function BrandMarquee() {
  const brandImages = [
    company,
    company,
    company
  ];
  const repeatedImages = [...brandImages, ...brandImages, ...brandImages];

  return (
    <div className="w-full py-10 px-20 mt-16 flex flex-col gap-16">
      <h2 className="text-5xl md:text-7xl font-semibold text-center mb-8">Our Valued <span className="text-[#B9F33F] font-bold">Clients</span></h2>
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        {repeatedImages.map((img, index) => (
          <div key={index} className="md:mx-12 mx-7 flex items-center">
            <img
              src={img}
              alt={`brand ${index + 1}`}
              className="h-[60px] w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default BrandMarquee;
