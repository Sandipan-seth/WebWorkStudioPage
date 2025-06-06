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
                <ul className="flex justify-center gap-3"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="dot w-4 h-4 rounded-full border border-black mt-4"></div>
        )
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-14 text-center">
            {/* Heading */}
            <div className="relative flex justify-center items-center mt-2 mb-2">
                <div className="flex items-center absolute left-[302px] top-[-5px] gap-1">
                    <img src={faq_blackline1} alt="Black Line 1" className="relative h-6 translate-x-[43px] translate-y-[-24px]" />
                    <img src={faq_blackline2} alt="Black Line 2" className="relative h-6 translate-x-[5px] translate-y-[-16px]" />
                    <img src={faq_blackline3} alt="Black Line 3" className="relative object-contain w-8 h-6 translate-x-[-34px]" />
                </div>

                <h2 className="text-6xl font-aeonik font-bold mb-0">
                    Words That <span className="text-lime-400">Inspire</span>
                </h2>

                <div className="flex items-center absolute top-[1px] right-[408px] gap-1">
                    <img src={faq_greenline1} alt="Green Line 1" className="relative h-6 translate-x-[120px] translate-y-[-24px]" />
                    <img src={faq_greenline2} alt="Green Line 2" className="relative object-contain w-8 h-6 translate-x-[114px] translate-y-[-18px]" />
                    <img src={faq_greenline3} alt="Green Line 3" className="relative object-contain w-8 h-6 translate-x-[90px] translate-y-[-2px]" />
                </div>
            </div>

            {/* Quote Icon */}
            <img src={quote_icon} alt="Quote" className="mx-auto w-10 mb-6 mt-12" />

            {/* Testimonial Slider */}
            <Slider {...settings} className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-2">
                        <div className="p-2 flex justify-center">
                            <div className="flex flex-col h-full items-center text-center space-y-4">
                                <img src={testimonial.logo} alt="Logo" className="mx-auto w-28 h-28 mb-4" />
                                <p className=" font-aeonik text-black text-[25px] leading-tight flex-1 px-12">
                                    {testimonial.text}
                                </p>
                                <div>
                                    <h4 className="text-black font-aeonik font-semibold text-3xl mt-6">
                                        {testimonial.name}
                                    </h4>
                                    <p className="font-aeonik text-black text-md">{testimonial.title}</p>
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
            width: 12px;
            height: 12px;
            border-radius: 50%;
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
