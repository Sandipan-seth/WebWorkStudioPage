import React from "react";
import AV from "../../assets/HomeAssets/LookWebSites/AV.png";
import GP from "../../assets/HomeAssets/LookWebSites/GP.png";
import TF from "../../assets/HomeAssets/LookWebSites/TF.png";
import arrow from "../../assets/BlogsAssets/arrow.png";
import faq_blackline1 from "../../assets/HomeAssets/FAQ/faq_blackline1.png";
import faq_blackline2 from "../../assets/HomeAssets/FAQ/faq_blackline2.png";
import faq_blackline3 from "../../assets/HomeAssets/FAQ/faq_blackline3.png";
import faq_greenline1 from "../../assets/HomeAssets/FAQ/faq_greenline1.png";
import faq_greenline2 from "../../assets/HomeAssets/FAQ/faq_greenline2.png";
import faq_greenline3 from "../../assets/HomeAssets/FAQ/faq_greenline3.png";
const projects = [
  {
    id: 1,
    title: "AV Design",
    description:
      "A modern portfolio website tailored for a visual design studio, featuring elegant UI, project showcases, and seamless user interactions to highlight creative works.",
    date: "May 2024",
    image: AV,
    category: "Design Studio",
    link: "https://www.av-design.in/",
  },
  {
    id: 2,
    title: "Manpasand",
    description:
      "An intuitive website developed for a local food brand, offering a visually engaging interface to explore and learn more about the brand’s unique offerings.",
    date: "March 2024",
    image: TF,
    category: "Food Brand",
    link: "https://manpasand.us/",
  },
  {
    id: 3,
    title: "Gram Panchayat",
    description:
      "A community-focused portal built for local governance, enabling villagers to access schemes, submit grievances, and stay updated on Gram Panchayat activities.",
    date: "January 2024",
    image: GP,
    category: "Civic Project",
    link: "https://yourdomain.com/gram-panchayat",
  },
];

const TakeALook = () => {
  return (
    <div className="min-h-screen bg-white/50 py-6 px-8 md:px-10">
      <div className="relative flex justify-center items-center mt-2 mb-16">
        <div className="flex items-center absolute left-[-41px] top-[-4px] sm:left-[130px] sm:top-[-9px] gap-1">
          <img
            src={faq_blackline1}
            alt="Black Line 1"
            className="relative h-4 sm:h-6 translate-x-[59px] translate-y-[-17px] sm:translate-x-[43px] sm:translate-y-[-24px]"
          />
          <img
            src={faq_blackline2}
            alt="Black Line 2"
            className="relative h-4 sm:h-6 translate-x-[33px] translate-y-[-10px] sm:translate-x-[5px] sm:translate-y-[-16px]"
          />
          <img
            src={faq_blackline3}
            alt="Black Line 3"
            className="relative object-contain h-4 w-5 sm:w-8 sm:h-6 translate-x-[5px] translate-y-[2px] sm:translate-x-[-35px]"
          />
        </div>
        <h2 className="text-3xl md:text-6xl font-bold text-center">
          Take A Look At Our <span className="text-[#b9f33f]">Websites</span>
        </h2>
        <div className="flex items-center absolute top-[-4px] right-12 sm:-top-0 sm:right-[229px] gap-1">
          <img
            src={faq_greenline1}
            alt="Green Line 1"
            className="relative h-4 translate-x-[84px] translate-y-[-14px] sm:h-6 sm:translate-x-[120px] sm:translate-y-[-24px]"
          />
          <img
            src={faq_greenline2}
            alt="Green Line 2"
            className="relative h-3 translate-x-[78px] translate-y-[-8px] sm:h-5 sm:translate-x-[114px] sm:translate-y-[-18px]"
          />
          <img
            src={faq_greenline3}
            alt="Green Line 3"
            className="relative object-contain h-4 w-5 translate-x-[60px] translate-y-[5px] sm:w-8 sm:h-6 sm:translate-x-[90px] sm:translate-y-[-2px]"
          />
        </div>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="relative inline-block w-full">
            <div className="absolute top-3 left-3 w-full h-full rounded-2xl bg-[#b9f33f] z-0 border border-gray-400"></div>
            <div className="relative z-10 bg-white rounded-2xl border border-black overflow-hidden shadow-md">
              <div className="p-4 md:p-4 flex flex-col md:flex-row md:gap-6 gap-2 items-start md:items-center md:min-h-[320px] min-h-[220px]">
                {/* Image Section */}
                <div className="w-full md:w-[280px] h-[220px] md:h-[320px] flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Text Section */}
                <div className="flex-1 md:space-y-6 space-y-3 mt-0 md:mt-0">
                  <span className="text-[#b9f33f] md:text-3xl text-xl font-bold">{project.category}</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#1E1E1E]">{project.title}</h3>
                  <p className="text-md md:text-3xl text-[#1E1E1E] font-light md:leading-tight leading-snug">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="md:text-2xl text-lg text-black font-bold">{project.date}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#B9F33F] text-[#172D34] md:px-5 px-3 py-2 rounded-full text-xs md:text-base font-poppins flex items-center md:gap-3 gap-2 md:translate-x-[-12px] translate-x-[-4px]"
                    >
                      View Project
                      <div className="md:w-6 md:h-6 h-4 w-4 rounded-full bg-black flex items-center justify-center md:translate-x-[8px] translate-x-[4px]">
                        <img src={arrow} alt="Right Arrow" className="md:w-4 md:h-4 h-3 w-3" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center mt-14">
        <button className="bg-[#b9f33f] text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-400 transition">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default TakeALook;
