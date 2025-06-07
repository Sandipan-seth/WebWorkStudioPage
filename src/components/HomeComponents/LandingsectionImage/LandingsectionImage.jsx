import design1 from '../../../assets/HomeAssets/LandingImages/Design1.png';
import design2 from '../../../assets/HomeAssets/LandingImages/Design2.png';
import design3 from '../../../assets/HomeAssets/LandingImages/Design3.png';
import design4 from '../../../assets/HomeAssets/LandingImages/Design4.png';
import design5 from '../../../assets/HomeAssets/LandingImages/Design5.png';

function LandingsectionImage() {
  const images = [design1, design2, design3, design4, design5];

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden bg-white">
      <div className="hidden md:flex items-center justify-center h-full w-full gap-8 px-36 relative z-10">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className={`h-full rounded-xl object-cover transition-all duration-300 ${
              index === 0 || index === 4 ? 'w-48' : 'w-72'
            }`}
          />
        ))}
      </div>
      <div className="md:hidden flex h-full gap-4 overflow-x-auto px-6 relative z-10 scrollbar-hide">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="h-52 w-40 rounded-xl object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute left-0 top-0 h-full w-20 bg-white/95 blur-[40px] z-30 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-white/95 blur-[40px] z-30 pointer-events-none" />
    </div>
  );
}

export default LandingsectionImage;
