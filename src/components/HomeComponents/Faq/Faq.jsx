import React, { useState, useRef } from "react";
import right_arrow from "../../../assets/HomeAssets/FAQ/right_arrow.png";
import faq_blackline1 from "../../../assets/HomeAssets/FAQ/faq_blackline1.png";
import faq_blackline2 from "../../../assets/HomeAssets/FAQ/faq_blackline2.png";
import faq_blackline3 from "../../../assets/HomeAssets/FAQ/faq_blackline3.png";
import faq_greenline1 from "../../../assets/HomeAssets/FAQ/faq_greenline1.png";
import faq_greenline2 from "../../../assets/HomeAssets/FAQ/faq_greenline2.png";
import faq_greenline3 from "../../../assets/HomeAssets/FAQ/faq_greenline3.png";

const tabs = ["Design", "Development", "Deployment", "Maintenance"];

const faqData = [
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use advanced encryption and security protocols to ensure your data is safe at all times.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade your plan anytime from your account dashboard without any downtime.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major UPIs, PayPal, and bank transfers for your convenience.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, a refund is available before the confirmation of the design. However, once the development (coding) phase begins, no refund is applicable.",
  },

  {
    question: "How do I contact support?",
    answer:
      "You can reach out to our support team 24/7 via email, phone, or live chat on our website.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees! We are transparent with our pricing and any costs will be clearly communicated upfront.",
  },
];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(-1);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-16">
      <div className="flex justify-center items-center gap-2 mb-6 sm:mb-10">
        <div className="relative flex justify-center items-center mt-2 mb-10">
          <div className="flex items-center absolute left-[-71px] top-[-4px] sm:left-[-68px] sm:top-[-2px] gap-1">
            <img
              src={faq_blackline1}
              alt="Black Line 1"
              className="relative h-4 sm:h-6 translate-x-[57px] translate-y-[-17px] sm:translate-x-[43px] sm:translate-y-[-24px]"
            />
            <img
              src={faq_blackline2}
              alt="Black Line 2"
              className="relative h-4 sm:h-6 translate-x-[33px] translate-y-[-10px] sm:translate-x-[5px] sm:translate-y-[-16px]"
            />
            <img
              src={faq_blackline3}
              alt="Black Line 3"
              className="relative object-contain h-4 w-5 sm:w-8 sm:h-6 translate-x-[5px] sm:translate-x-[-34px]"
            />
          </div>
          <h2 className="sm:text-5xl text-xl font-poppins font-bold text-center">
            Frequently Asked <span className="text-lime-400">Question</span>
          </h2>
          <div className="flex items-center absolute top-[-6px] right-7 sm:top-1 sm:right-6 gap-1">
            <img
              src={faq_greenline1}
              alt="Green Line 1"
              className="relative h-4 translate-x-[84px] translate-y-[-14px] sm:h-6 sm:translate-x-[120px] sm:translate-y-[-24px]"
            />
            <img
              src={faq_greenline2}
              alt="Green Line 2"
              className="relative h-3 translate-x-[78px] translate-y-[-8px] sm:h-6 sm:translate-x-[114px] sm:translate-y-[-18px]"
            />
            <img
              src={faq_greenline3}
              alt="Green Line 3"
              className="relative object-contain h-4 w-5 translate-x-[60px] translate-y-[5px] sm:w-8 sm:h-6 sm:translate-x-[90px] sm:translate-y-[-2px]"
            />
          </div>
        </div>
      </div>

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
              className={`text-center py-2 px-0 sm:px-4 rounded-full font-poppins font-semibold text-[10px] sm:text-lg transition-all duration-200 sm:w-full ${
                activeTab === index ? "text-white" : "text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6 sm:space-y-6">
        {faqData.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          const height = answerRefs.current[index]?.scrollHeight ?? 0;
          return (
            <div key={index} className="w-full">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center px-4 py-3 bg-white rounded-md shadow-sm sm:shadow-none sm:px-2 sm:py-0 w-full text-left"
              >
                <span className="text-xs sm:text-xl font-poppins font-semibold">
                  {question}
                </span>
                <div
                  className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#B9F33F] flex items-center justify-center ml-4 sm:mr-0 mr-2 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <img
                    src={right_arrow}
                    alt="Right Arrow"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                </div>
              </button>
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="overflow-hidden transition-max-height duration-300 ease-in-out mx-4 sm:mx-0"
                style={{
                  maxHeight: isOpen ? `${height}px` : "0px",
                }}
              >
                <p className="text-sm sm:text-base font-poppins text-gray-700 mt-2 sm:mt-4">
                  {answer}
                </p>
              </div>
              <div className="border-b border-black mt-4 sm:mt-8 mx-4 sm:mx-0"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
