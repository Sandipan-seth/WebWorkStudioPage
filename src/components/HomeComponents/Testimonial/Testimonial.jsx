import React, { useState } from "react";
import Slider from "react-slick";
import quote_icon from "../../../assets/Vector.png"; // green quote image
import brand_logo from "../../../assets/brand_logo.png"; // the 'av design' logo
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import faq_blackline1 from "../../../assets/HomeAssets/FAQ/faq_blackline1.png";
import faq_blackline2 from "../../../assets/HomeAssets/FAQ/faq_blackline2.png";
import faq_blackline3 from "../../../assets/HomeAssets/FAQ/faq_blackline3.png";
import faq_greenline1 from "../../../assets/HomeAssets/FAQ/faq_greenline1.png";
import faq_greenline2 from "../../../assets/HomeAssets/FAQ/faq_greenline2.png";
import faq_greenline3 from "../../../assets/HomeAssets/FAQ/faq_greenline3.png";

const testimonials = [
    {
        text: `I am extremely pleased with the website developed by Web Work Studios. They delivered a design that was not only visually appealing but also aligned perfectly with my brand. The entire process—from concept to execution—was handled efficiently by their team. As a business owner with limited time, I truly valued their end-to-end support. Their service was professional, timely, and exceeded all my expectations. I would highly recommend them to anyone looking for quality website development at a very fair price.`,
        name: "Avani Goyal",
        title: "CEO, AV DESIGN",
        logo: brand_logo,
    },
    {
        text: `I am extremely pleased with the website developed by Web Work Studios. They delivered a design that was not only visually appealing but also aligned perfectly with my brand. The entire process—from concept to execution—was handled efficiently by their team. As a business owner with limited time, I truly valued their end-to-end support. Their service was professional, timely, and exceeded all my expectations. I would highly recommend them to anyone looking for quality website development at a very fair price.`,
        name: "John Smith",
        title: "CTO, TechCorp",
        logo: brand_logo,
    },
    {
        text: `I am extremely pleased with the website developed by Web Work Studios. They delivered a design that was not only visually appealing but also aligned perfectly with my brand. The entire process—from concept to execution—was handled efficiently by their team. As a business owner with limited time, I truly valued their end-to-end support. Their service was professional, timely, and exceeded all my expectations. I would highly recommend them to anyone looking for quality website development at a very fair price.`,
        name: "Neha Patel",
        title: "Founder, GreenMarket",
        logo: brand_logo,
    },
];

// Imports remain unchanged

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        appendDots: dots => (
            <div className="mt-2 mb-2">
                <ul className="flex justify-center gap-2 sm:gap-3"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="dot w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-black mt-4"></div>
        )
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-14 text-center bg-white/50">
            {/* Heading */}
            <div className="relative flex justify-center items-center mt-2 mb-2">
                <div className="sm:flex items-center absolute left-[160px] top-[-11px] sm:left-[302px] sm:top-[-5px] gap-1">
                    <img src={faq_blackline1} alt="Black Line 1" className="relative h-3 translate-x-[-115px] translate-y-[-5px] sm:h-6 sm:translate-x-[43px] sm:translate-y-[-24px]" />
                    <img src={faq_blackline2} alt="Black Line 2" className="relative h-3 translate-x-[-128px] translate-y-[-12px] sm:h-6 sm:translate-x-[5px] sm:translate-y-[-16px]" />
                    <img src={faq_blackline3} alt="Black Line 3" className="relative object-contain h-3 w-4 translate-x-[-136px] translate-y-[-13px] sm:translate-y-[0px] sm:w-8 sm:h-6 sm:translate-x-[-34px]" />
                </div>

                <h2 className="text-3xl sm:text-6xl font-aeonik font-bold mb-0">
                    Words That <span className="text-[#B9F33F]">Inspire</span>
                </h2>

                <div className="sm:flex items-center absolute top-[-15px] right-[156px] sm:top-[1px] sm:right-[408px] gap-1">
                    <img src={faq_greenline1} alt="Green Line 1" className="relative h-4 translate-x-[118px] sm:h-7 sm:translate-x-[120px] sm:translate-y-[-24px]" />
                    <img src={faq_greenline2} alt="Green Line 2" className="relative object-contain h-3 w-4 translate-x-[124px] translate-y-[-9px] sm:w-8 sm:h-6 sm:translate-x-[114px] sm:translate-y-[-18px]" />
                    <img src={faq_greenline3} alt="Green Line 3" className="relative object-contain h-3 w-4 translate-x-[128px] translate-y-[-10px] sm:w-8 sm:h-6 sm:translate-x-[90px] sm:translate-y-[-2px]" />
                </div>
            </div>

            {/* Quote Icon */}
            <img src={quote_icon} alt="Quote" className="mx-auto w-9 sm:w-10 mb-6 mt-10" />

            {/* Testimonial Slider */}
            <Slider {...settings} className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-2">
                        <div className="p-2 flex justify-center">
                            <div className="flex flex-col h-full items-center text-center space-y-4">
                                <img src={testimonial.logo} alt="Logo" className="mx-auto w-20 h-20 sm:w-28 sm:h-28 mb-4" />
                                <p className="font-aeonik text-black text-sm sm:text-[25px] leading-normal sm:leading-tight px-4 sm:px-12">
                                    {testimonial.text}
                                </p>
                                <div>
                                    <h4 className="text-black font-aeonik font-semibold text-lg sm:text-3xl mt-4">
                                        {testimonial.name}
                                    </h4>
                                    <p className="font-aeonik text-black text-sm sm:text-md">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Custom Dot Styling */}
            <style>
                {`
          .testimonial-slider .slick-dots li .dot {
            background: white;
            border: 1px solid black;
          }

          .testimonial-slider .slick-dots li.slick-active .dot {
            background: black;
          }
        `}
            </style>
        </div>
    );
};
export default Testimonial;
