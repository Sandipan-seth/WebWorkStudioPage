import React, { useState, useRef, useEffect } from "react";
import right_arrow from "../../../assets/HomeAssets/FAQ/right_arrow.png";
import faq_blackline1 from "../../../assets/HomeAssets/FAQ/faq_blackline1.png";
import faq_blackline2 from "../../../assets/HomeAssets/FAQ/faq_blackline2.png";
import faq_blackline3 from "../../../assets/HomeAssets/FAQ/faq_blackline3.png";
import faq_greenline1 from "../../../assets/HomeAssets/FAQ/faq_greenline1.png";
import faq_greenline2 from "../../../assets/HomeAssets/FAQ/faq_greenline2.png";
import faq_greenline3 from "../../../assets/HomeAssets/FAQ/faq_greenline3.png";

const tabs = ["Design", "Development", "Deployment", "Maintenance"];

const data = [
    "Is my data secure with Chainex?",
    "What are the earning options available?",
    "How do I reset my password?",
    "Can I upgrade my plan later?",
    "What payment methods are accepted?",
    "Is there a refund policy?",
    "How do I contact support?",
    "Are there any hidden fees?"
];

const FAQ = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-16">
            {/* Heading */}
            <div className="flex justify-center items-center gap-2 mb-6 sm:mb-10">
                {/* Heading */}
                <div className="relative flex justify-center items-center mt-2 mb-10">
                    <div className="flex items-center absolute left-[-71px] top-[-4px] sm:left-[-68px] sm:top-[-2px] gap-1">
                        <img src={faq_blackline1} alt="Black Line 1" className="relative h-4 sm:h-6 translate-x-[57px] translate-y-[-17px] sm:translate-x-[43px] sm:translate-y-[-24px]" />
                        <img src={faq_blackline2} alt="Black Line 2" className="relative h-4 sm:h-6 translate-x-[33px] translate-y-[-10px] sm:translate-x-[5px] sm:translate-y-[-16px]" />
                        <img src={faq_blackline3} alt="Black Line 3" className="relative object-contain h-4 w-5 sm:w-8 sm:h-6 translate-x-[5px] sm:translate-x-[-34px]" />
                    </div>

                    <h2 className="sm:text-5xl text-xl font-poppins font-bold text-center">
                        Frequently Asked <span className="text-lime-400">Question</span>
                    </h2>

                    <div className="flex items-center absolute top-[-6px] right-7 sm:top-1 sm:right-6 gap-1">
                        <img src={faq_greenline1} alt="Green Line 1" className="relative h-4 translate-x-[84px] translate-y-[-14px] sm:h-6 sm:translate-x-[120px] sm:translate-y-[-24px]" />
                        <img src={faq_greenline2} alt="Green Line 2" className="relative h-3 translate-x-[78px] translate-y-[-8px] sm:h-6 sm:translate-x-[114px] sm:translate-y-[-18px]" />
                        <img src={faq_greenline3} alt="Green Line 3" className="relative object-contain h-4 w-5 translate-x-[60px] translate-y-[5px] sm:w-8 sm:h-6 sm:translate-x-[90px] sm:translate-y-[-2px]" />
                    </div>
                </div>

            </div>

            
            {/* Tab Selector */}
            <div className="relative bg-[#B9F33F] rounded-full mx-auto p-0 sm:p-1 mb-16 sm:mb-20 overflow-hidden w-[90%] max-w-[400px] sm:w-full sm:max-w-[968px] px-2 sm:px-0">
                <div
                    className="absolute top-0 left-0 h-full w-1/4 bg-black rounded-full transition-transform duration-300"
                    style={{ transform: `translateX(${activeTab * 100}%)` }}
                ></div>
                <div className="relative z-10 grid grid-cols-4 sm:gap-0 gap-3">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`text-center py-2 px-0 sm:px-4 rounded-full font-poppins font-semibold text-[10px] sm:text-lg transition-all duration-200 sm:w-full ${activeTab === index ? "text-white" : "text-black"}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>



            {/* FAQ List */}
            <div className="space-y-6 sm:space-y-6">
                {data.map((question, index) => (
                    <div key={index} className="w-full">
                        <div className="flex justify-between items-center px-4 py-3 bg-white rounded-md shadow-sm sm:shadow-none sm:px-2 sm:py-0">
                            <span className="text-xs sm:text-xl font-poppins font-semibold text-left">
                                {question}
                            </span>
                            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#B9F33F] flex items-center justify-center ml-4 sm:mr-0 mr-2 shrink-0">
                                <img
                                    src={right_arrow}
                                    alt="Right Arrow"
                                    className="w-4 h-4 sm:w-6 sm:h-6"
                                />
                            </div>
                        </div>
                        <div className="border-b border-black mt-4 sm:mt-8 mx-4 sm:mx-0"></div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FAQ;