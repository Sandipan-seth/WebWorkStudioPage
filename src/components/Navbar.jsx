import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "about", "contact"];
      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">WWS.</h1>

        {/* Desktop Menu - Centered on md screens */}
        <ul className="hidden md:flex md:w-full md:justify-center space-x-6 text-gray-700 font-medium">
          {["home", "about", "contact"].map((id) => (
            <li
              key={id}
              className={`cursor-pointer hover:text-blue-500 ${
                activeSection === id ? "text-blue-600 font-bold" : ""
              }`}
              onClick={() => handleScroll(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#333" />
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <ul
        className={`md:hidden bg-white shadow-lg p-4 flex flex-col space-y-4 text-gray-700 text-center absolute w-full left-0 top-16 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {["home", "about", "contact"].map((id) => (
          <li
            key={id}
            className={`cursor-pointer hover:text-blue-500 ${
              activeSection === id ? "text-blue-600 font-bold" : ""
            }`}
            onClick={() => handleScroll(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
