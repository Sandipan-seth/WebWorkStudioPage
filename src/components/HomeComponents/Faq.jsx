import React, { useState } from "react";
import right_arrow from "../../assets/HomeAssets/FAQ/right_arrow.png";
import faq_blackline1 from "../../assets/HomeAssets/FAQ/faq_blackline1.png";
import faq_blackline2 from "../../assets/HomeAssets/FAQ/faq_blackline2.png";
import faq_blackline3 from "../../assets/HomeAssets/FAQ/faq_blackline3.png";
import faq_greenline1 from "../../assets/HomeAssets/FAQ/faq_greenline1.png";
import faq_greenline2 from "../../assets/HomeAssets/FAQ/faq_greenline2.png";
import faq_greenline3 from "../../assets/HomeAssets/FAQ/faq_greenline3.png";
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
        <div className="w-full max-w-7xl mx-auto py-16 px-16">
            {/* Heading */}
            <div className="flex justify-center items-center gap-2 mb-10">
                {/* Heading */}
                <div className="relative flex justify-center items-center mt-2 mb-10">
                    <div className="flex items-center absolute left-[-68px] top-[-2px] gap-1">
                        <img src={faq_blackline1} alt="Black Line 1" className="relative h-6 translate-x-[43px] translate-y-[-24px]" />
                        <img src={faq_blackline2} alt="Black Line 2" className="relative h-6 translate-x-[5px] translate-y-[-16px]" />
                        <img src={faq_blackline3} alt="Black Line 3" className="relative object-contain w-8 h-6 translate-x-[-34px]" />
                    </div>

                    <h2 className="text-5xl font-poppins font-bold text-center">
                        Frequently Asked <span className="text-lime-400">Question</span>
                    </h2>

                    <div className="flex items-center absolute top-1 right-6 gap-1">
                        <img src={faq_greenline1} alt="Green Line 1" className="relative h-6 translate-x-[120px] translate-y-[-24px]" />
                        <img src={faq_greenline2} alt="Green Line 2" className="realtive h-6 translate-x-[114px] translate-y-[-18px]" />
                        <img src={faq_greenline3} alt="Green Line 3" className="relative object-contain w-8 h-6 translate-x-[90px] translate-y-[-2px]" />
                    </div>
                </div>

            </div>

            {/* Tab Selector */}
            <div className="relative bg-[#B9F33F] rounded-full mx-auto p-1 mb-20 overflow-hidden" style={{ width: "968px" }}>
                <div
                    className="absolute top-0 left-0 h-full w-1/4 bg-black rounded-full transition-transform duration-300"
                    style={{ transform: `translateX(${activeTab * 100}%)` }}
                ></div>
                <div className="relative z-10 grid grid-cols-4">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`text-center py-2 px-4 rounded-full font-poppins font-semibold text-md transition-all duration-200 w-full ${activeTab === index ? "text-white" : "text-black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-6">
                {data.map((question, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-poppins font-semibold">
                                {question}
                            </span>
                            <div className="w-10 h-10 rounded-full bg-[#B9F33F] flex items-center justify-center mr-4">
                                <img
                                    src={right_arrow}
                                    alt="Right Arrow"
                                    className="w-6 h-6"
                                />
                            </div>
                        </div>
                        <div className="border-b border-black mt-8"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;