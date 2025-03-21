import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Camera, Facebook, Instagram, Linkedin } from "lucide-react";
import links from "../assets/Links";

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

  //

  return (
    <nav
      className={`w-full md:w-2/3 rounded-md ${
        isOpen ? "bg-white" : "bg-white/50"
      }
      ${activeSection === "home" ? "md:bg-white/0" : "md:bg-gray-200/50"}
        backdrop-blur-lg shadow-md fixed top-0 md:top-5 left-0 md:left-1/2 md:-translate-x-1/2 z-50`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">WWS.</h1>

        {/* Desktop Menu - Centered on md screens */}
        <ul className="hidden md:flex md:w-full md:justify-center space-x-6 text-gray-700 font-medium">
          {["home", "about", "contact"].map((id) => (
            <li
              key={id}
              className={`cursor-pointer hover:text-blue-500 ${
                activeSection === id ? "text-blue-600 font-bold" : ""
              }
              ${
                activeSection==="home" && activeSection != id
                  ? "text-white "
                  : ""
              }`}
              onClick={() => handleScroll(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center justify-center gap-5">
          <a href={links.linkedin} target="_blank">
            <Linkedin size={24} color="#0088C3" />
          </a>
          <a href={links.instagram} target="_blank">
            <Instagram size={24} color="#B91497" />
          </a>
          <a href={links.facebook} target="_blank">
            <Facebook size={24} color="#0866FF" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#333" />
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}

      <div
        className={`md:hidden absolute w-full bg-white shadow-lg flex flex-col justify-around items-center h-screen left-0 top-16 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className=" p-4 items-center justify-center flex flex-col space-y-4 text-gray-700 text-center">
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
        {/* Social Icons */}
        <div className=" flex justify-center gap-4 mt-4">
          <a href={links.linkedin} target="_blank">
            <Linkedin size={24} color="#0088C3" />
          </a>
          <a href={links.instagram} target="_blank">
            <Instagram size={24} color="#B91497" />
          </a>
          <a href={links.facebook} target="_blank">
            <Facebook size={24} color="#0866FF" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
