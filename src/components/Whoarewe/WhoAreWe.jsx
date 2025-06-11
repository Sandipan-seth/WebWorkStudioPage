import React from 'react';
import officeimg from "../../assets/AboutAssets/image1.png";
import icon1 from '../../assets/AboutAssets/icon1.png';
import icon2 from '../../assets/AboutAssets/icon2.png';
import icon3 from '../../assets/AboutAssets/icon3.png';
import quote_icon from "../../assets/vector.png";
import faq_blackline1 from "../../assets/HomeAssets/FAQ/faq_blackline1.png";
import faq_blackline2 from "../../assets/HomeAssets/FAQ/faq_blackline2.png";
import faq_blackline3 from "../../assets/HomeAssets/FAQ/faq_blackline3.png";
import faq_greenline1 from "../../assets/HomeAssets/FAQ/faq_greenline1.png";
import faq_greenline2 from "../../assets/HomeAssets/FAQ/faq_greenline2.png";
import faq_greenline3 from "../../assets/HomeAssets/FAQ/faq_greenline3.png";
const WhoAreWe = () => {
    return (
        <section className="w-7xl px-4 md:px-2 md:py-24 py-16 md:mt-6 mt-4 text-gray-800 md:space-y-10">
            {/* Title */}
            <div className="relative flex justify-center items-center mt-2">
                <div className="sm:flex items-center absolute left-[193px] top-[-10px] sm:left-[382px] sm:top-[-4px] gap-1">
                    <img src={faq_blackline1} alt="Black Line 1" className="relative h-3 translate-x-[-115px] translate-y-[-5px] sm:h-6 sm:translate-x-[43px] sm:translate-y-[-24px]" />
                    <img src={faq_blackline2} alt="Black Line 2" className="relative h-3 translate-x-[-128px] translate-y-[-12px] sm:h-6 sm:translate-x-[5px] sm:translate-y-[-16px]" />
                    <img src={faq_blackline3} alt="Black Line 3" className="relative object-contain h-3 w-4 translate-x-[-136px] translate-y-[-13px] sm:translate-y-[0px] sm:w-8 sm:h-6 sm:translate-x-[-34px]" />
                </div>
                <h2 className="text-3xl md:text-6xl font-bold font-poppins text-center text-black mb-8">
                    Who We<span className="text-[#b9f33f]"> Are</span>
                </h2>
                <div className="sm:flex items-center absolute top-[-14px] left-[156px] sm:top-[0px] sm:left-[697px] sm:right-[488px] gap-1">
                    <img src={faq_greenline1} alt="Green Line 1" className="relative h-4 translate-x-[118px] sm:h-6 sm:translate-x-[123px] sm:translate-y-[-26px]" />
                    <img src={faq_greenline2} alt="Green Line 2" className="relative object-contain h-3 w-4 translate-x-[124px] translate-y-[-9px] sm:w-8 sm:h-5 sm:translate-x-[114px] sm:translate-y-[-18px]" />
                    <img src={faq_greenline3} alt="Green Line 3" className="relative object-contain h-3 w-4 translate-x-[128px] translate-y-[-10px] sm:w-8 sm:h-5 sm:translate-x-[90px] sm:translate-y-[-2px]" />
                </div>
            </div>


            {/* Hero Image */}
            <div className="flex justify-center mb-10">
                <img src={officeimg} alt="Office Illustration" className="w-full max-w-6xl rounded-lg" />
            </div>

            {/* Description */}
            <div className="w-7xl flex justify-center mb-16">
                <div className="w-full max-w-7xl md:pl-16 md:px-16 px-2">
                    <div className="flex md:justify-start justify-center mb-4">
                        <img src={quote_icon} alt="Quote" className="w-9 sm:w-12 mb-4 mt-2" />
                    </div>
                    <p className="text-sm md:text-[27px] md:leading-snug leading-relaxed md:tracking-wider text-center md:text-left font-poppins italic font-bold">
                        Hello, <br />
                        Welcome to the official webpage of <strong>WebWorks Studio</strong>. WebWorks Studio is a dynamic website building agency specializing in creating innovative, user-friendly, and responsive websites tailored to meet the unique needs of businesses and individuals.
                        With a team of skilled designers, creative developers, and digital strategists, WebWorks Studio combines creative design with cutting-edge technology to deliver websites that not only look stunning but also perform seamlessly across all devices.
                        The agency offers a full range of services, including custom web development, e-commerce solutions, SEO optimization, and content management systems.
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-36 gap-10 text-center md:translate-x-[-22px] md:pt-20 md:mb-4">
                <div className='space-y-2'>
                    <img src={icon1} alt="Websites Built Icon" className="mx-auto md:w-16 w-12 mb-2" />
                    <p className="md:text-3xl text-md font-bold font-poppins text-[#141219]">10+</p>
                    <p className="md:text-lg text-sm text-[#141219] font-semibold font-poppins">Websites <br />Built</p>
                </div>
                <div className='space-y-2'>
                    <img src={icon2} alt="Courses Icon" className="mx-auto md:w-16 w-12 mb-2" />
                    <p className="md:text-3xl text-md font-bold font-poppins text-[#141219]">5K+</p>
                    <p className="md:text-lg text-sm text-[#141219] font-semibold font-poppins">Courses <br />Available</p>
                </div>
                <div className='space-y-2'>
                    <img src={icon3} alt="Clients Icon" className="mx-auto md:w-16 w-12 mb-2" />
                    <p className="md:text-3xl text-md font-poppins font-bold text-[#141219]">2.5K+</p>
                    <p className="md:text-lg text-sm text-[#141219] font-semibold font-poppins">Clients <br />Served</p>
                </div>
            </div>
        </section>
    );
};

export default WhoAreWe;
