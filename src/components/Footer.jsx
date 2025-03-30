import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { links } from "../assets/Links";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 shadow-md">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
        {/* Logo & Navigation Links */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-blue-600">WWS.</h1>
          <nav className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            {["Home", "About", "Services", "Work", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-500 transition font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright Text */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} WWS. All rights reserved.
        </div>

        {/* Social Media Icons */}
        <div className="flex md:flex-col md:items-center md:justify-center space-x-6 md:space-x-0 md:space-y-5">
          <a href={links.linkedin} target="_blank">
            <Linkedin
              size={24}
              className="text-blue-600 hover:text-blue-800 transition"
            />
          </a>
          <a href={links.instagram} target="_blank">
            <Instagram
              size={24}
              className="text-pink-600 hover:text-pink-800 transition"
            />
          </a>
          <a href={links.facebook} target="_blank">
            <Facebook
              size={24}
              className="text-blue-500 hover:text-blue-700 transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
