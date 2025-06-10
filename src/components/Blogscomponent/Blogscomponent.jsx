import React, { useState, useRef, useEffect } from 'react';
import blog1 from "../../assets/BlogsAssets/blog1.png";
import arrow from "../../assets/BlogsAssets/arrow.png";
import faq_blackline1 from "../../assets/HomeAssets/FAQ/faq_blackline1.png";
import faq_blackline2 from "../../assets/HomeAssets/FAQ/faq_blackline2.png";
import faq_blackline3 from "../../assets/HomeAssets/FAQ/faq_blackline3.png";
import faq_greenline1 from "../../assets/HomeAssets/FAQ/faq_greenline1.png";
import faq_greenline2 from "../../assets/HomeAssets/FAQ/faq_greenline2.png";
import faq_greenline3 from "../../assets/HomeAssets/FAQ/faq_greenline3.png";

const Blogscomponent = () => {
    const categories = ['All', 'App Development', 'Web Development', 'Designing'];

    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem('activeBlogTab') || 'All';
    });

    const blogPosts = [
        {
            id: 1,
            title: "Why Your Design is Not Approved by Clients, specially Abroad Clients?",
            excerpt: "We are specialized in designing apps and websites and products for industry purpose and well built and well of a consulting makes things look so in that particular arena.",
            date: "31st October, 2024",
            image: blog1,
            category: "Designing"
        },
        {
            id: 2,
            title: "Why Your Design is Not Approved by Clients, specially Abroad Clients?",
            excerpt: "We are specialized in designing apps and websites and products for industry purpose and well built and well of a consulting makes things look so in that particular arena.",
            date: "28th October, 2024",
            image: blog1,
            category: "App Development"
        },
        {
            id: 3,
            title: "Why Your Design is Not Approved by Clients, specially Abroad Clients?",
            excerpt: "We are specialized in designing apps and websites and products for industry purpose and well built and well of a consulting makes things look so in that particular arena.",
            date: "25th October, 2024",
            image: blog1,
            category: "Web Development"
        },
        {
            id: 4,
            title: "Why Your Design is Not Approved by Clients, specially Abroad Clients?",
            excerpt: "We are specialized in designing apps and websites and products for industry purpose and well built and well of a consulting makes things look so in that particular arena.",
            date: "22nd October, 2024",
            image: blog1,
            category: "Designing"
        }
    ];

    const filteredPosts = activeTab === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeTab);

    const tabRefs = useRef([]);
    const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

    const handleTabClick = (category, index) => {
        const tabEl = tabRefs.current[index];
        if (tabEl) {
            setHighlightStyle({
                left: `${tabEl.offsetLeft}px`,
                width: `${tabEl.offsetWidth}px`,
            });
        }
        setActiveTab(category);
        localStorage.setItem('activeBlogTab', category);
    };

    useEffect(() => {
        const setInitialHighlight = () => {
            const index = categories.indexOf(activeTab);
            const tabEl = tabRefs.current[index];
            if (tabEl) {
                setHighlightStyle({
                    left: `${tabEl.offsetLeft}px`,
                    width: `${tabEl.offsetWidth}px`,
                });
            }
        };
        setInitialHighlight();
        window.addEventListener('resize', setInitialHighlight);
        return () => window.removeEventListener('resize', setInitialHighlight);
    }, [activeTab]);

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="px-4 py-3 md:px-8 md:py-8 mt-16 md:mt-20">
                <div className="relative flex justify-center items-center mt-2">
                    <div className="sm:flex items-center absolute left-[221px] top-[-7px] sm:left-[442px] sm:top-[-1px] gap-1">
                        <img src={faq_blackline1} alt="Black Line 1" className="relative h-3 translate-x-[-115px] translate-y-[-5px] sm:h-6 sm:translate-x-[43px] sm:translate-y-[-24px]" />
                        <img src={faq_blackline2} alt="Black Line 2" className="relative h-3 translate-x-[-128px] translate-y-[-12px] sm:h-6 sm:translate-x-[5px] sm:translate-y-[-16px]" />
                        <img src={faq_blackline3} alt="Black Line 3" className="relative object-contain h-3 w-4 translate-x-[-136px] translate-y-[-13px] sm:translate-y-[0px] sm:w-8 sm:h-6 sm:translate-x-[-34px]" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8">
                        Our <span className="text-[#B9F33F]">Blogs</span>
                    </h1>
                    <div className="sm:flex items-center absolute top-[-10px] right-[212px] sm:top-[5px] sm:right-[535px] gap-1">
                        <img src={faq_greenline1} alt="Green Line 1" className="relative h-4 translate-x-[118px] sm:h-6 sm:translate-x-[123px] sm:translate-y-[-26px]" />
                        <img src={faq_greenline2} alt="Green Line 2" className="relative object-contain h-3 w-4 translate-x-[124px] translate-y-[-9px] sm:w-8 sm:h-5 sm:translate-x-[114px] sm:translate-y-[-18px]" />
                        <img src={faq_greenline3} alt="Green Line 3" className="relative object-contain h-3 w-4 translate-x-[128px] translate-y-[-10px] sm:w-8 sm:h-5 sm:translate-x-[90px] sm:translate-y-[-2px]" />
                    </div>
                </div>

                {/* Mobile Category Filter */}
                <div className="relative bg-[#B9F33F] rounded-full mx-auto mb-3 w-[90%] max-w-[400px] md:hidden px-0 py-1 overflow-hidden">
                    <div className="relative grid grid-cols-4 w-full text-center items-center">
                        <div
                            className="absolute top-[-4px] bottom-[-4px] bg-black rounded-full transition-all duration-300"
                            style={{
                                left: highlightStyle.left,
                                width: highlightStyle.width,
                            }}
                        />
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                ref={(el) => (tabRefs.current[index] = el)}
                                onClick={() => handleTabClick(category, index)}
                                className={`relative z-10 text-[7px] font-poppins font-medium py-1 px-0 truncate transition-all duration-200 ${activeTab === category ? "text-white" : "text-black"}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Desktop Category Filter */}
                <div className="hidden md:flex justify-center mb-2">
                    <div className="bg-[#B9F33F] rounded-full p-1 flex relative">
                        <div
                            className="absolute w-1/4 h-full top-0 bottom-0 bg-black rounded-full transition-all duration-300 ease-in-out"
                            style={{
                                left: `${categories.indexOf(activeTab) * (100 / categories.length)}%`,
                                width: `${100 / categories.length}%`,
                                marginLeft: '0px',
                                marginRight: '0px'
                            }}
                        />
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveTab(category);
                                    localStorage.setItem('activeBlogTab', category);
                                }}
                                className={`px-6 py-2 rounded-full text-md font-bold font-poppins transition-colors duration-300 relative z-10 ${activeTab === category
                                    ? 'text-white'
                                    : 'text-black hover:text-gray-700'
                                    }`}
                                style={{ minWidth: '210px' }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Blog Content Section */}
            <div className="px-5 md:px-6 pb-4">
                {/* Mobile View */}
                <div className="md:hidden space-y-10">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className='relative inline-block w-full'>
                            <div className="absolute top-2 left-2 w-full h-full rounded-2xl bg-[#b9f33f] z-0 border border-gray-400"></div>
                            <div className="relative z-10 bg-white rounded-2xl border border-black overflow-hidden">
                                <div className="p-2">
                                    <div className="w-full h-48 rounded-xl overflow-hidden relative">
                                        <img
                                            src={post.image}
                                            alt="Blog post"
                                            className="w-full h-full object-cover absolute top-0 left-0"
                                        />
                                    </div>
                                    <div className="space-y-2 px-1 mt-2">
                                        <span className="inline-block text-[#B9F33F] text-md font-medium">
                                            {post.category}
                                        </span>
                                        <h2 className="text-sm font-bold text-[#1E1E1E] leading-wide">
                                            {post.title}
                                        </h2>
                                        <p className="text-[#1E1E1E] text-sm font-normal leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-2">
                                            <span className="text-black text-md font-bold mb-2">{post.date}</span>
                                            <button className="bg-[#B9F33F] text-[#172D34] px-2 py-1 rounded-full text-sm font-poppins flex items-center gap-2 mb-2 mr-2">
                                                View More
                                                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center translate-x-[3px]">
                                                    <img src={arrow} alt="Right Arrow" className="w-4 h-4" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View */}
                <div className="hidden md:block max-w-6xl mx-auto">
                    <div className="space-y-10">
                        {filteredPosts.map((post) => (
                            <div key={post.id} className='relative inline-block w-full'>
                                <div className="absolute top-3 left-3 w-full h-full rounded-2xl bg-[#b9f33f] z-0 border border-gray-400"></div>
                                <div className="relative pb-0 z-10 bg-white rounded-2xl border border-black overflow-hidden shadow-sm">
                                    <div className="p-3 flex gap-10">
                                        <div className="flex-shrink-0 aspect-[4/3]">
                                            <img src={post.image} alt="Blog post" className="w-64 h-full object-cover right-2 rounded-xl" />
                                        </div>
                                        <div className="flex-1 space-y-4 ml-2 mt-2">
                                            <span className="inline-block text-[#b9f33f] text-3xl font-poppins font-bold">
                                                {post.category}
                                            </span>
                                            <h2 className="text-4xl text-[#1E1E1E] leading-tight font-poppins font-semibold">
                                                {post.title}
                                            </h2>
                                            <p className="text-3xl text-[#1E1E1E] font-light leading-tight font-poppins">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mr-14">
                                                <span className="text-2xl text-black font-bold mb-2">{post.date}</span>
                                                <button className="bg-[#B9F33F] text-[#172D34] ml-4 px-4 py-2 rounded-full font-poppins text-lg flex items-center gap-4 mb-2">
                                                    View More
                                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center translate-x-[8px]">
                                                        <img src={arrow} alt="Right Arrow" className="w-6 h-6" />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogscomponent;
