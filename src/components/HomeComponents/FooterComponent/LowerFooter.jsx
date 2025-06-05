import React from "react";
import logo from "../../../assets/Logo.png";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const LowerFooter = () => {
  return (
    <div className="bg-white">
      <div className="bg-white text-black px-6 py-10 flex flex-col max-w-7xl mx-auto">
        {/* logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-22 h-auto mb-4 md:mb-0" />
        </div>

        <div className="flex flex-row flex-wrap md:flex-row md:justify-between md:items-start max-w-7xl mx-auto w-full gap-10">
          {/* Practice */}
          <div className="flex flex-col">
            <h3 className="mb-2 text-xl font-bold">Practice</h3>
            <ul className="space-y-2 text-md">
              <li>AI Interview Bot</li>
              <li>Versant Test</li>
              <li>Aptitude Test</li>
              <li>Technical Test</li>
              <li>Typing Test</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">Tools</h3>
            <ul className="space-y-2 text-md">
              <li>Resume Scorer</li>
              <li>Articleship Scorer</li>
              <li>Salary Estimator</li>
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">Links</h3>
            <ul className="space-y-2 text-md">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Refund Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 w-full justify-center items-center md:w-auto">
            <div>
              <h3 className="font-bold text-xl mb-5">Newsletter</h3>
              <div className="flex items-center border border-black rounded-full px-3 py-1">
                <span className="text-xl mr-2">@</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-transparent outline-none text-sm"
                />
                <button className="bg-lime-400 text-black font-semibold px-4 py-1 rounded-full ml-2">
                  Join
                </button>
              </div>
            </div>

            <div className="flex gap-10 mt-5">
              <div>
                <strong className="text-xl">Call us</strong>
                <br />
                <a
                  href="tel:+919022720882"
                  className="hover:underline text-sm "
                >
                  +91 9022720882
                </a>
              </div>

              <div>
                <strong className="text-xl">Email us</strong>
                <br />
                <a
                  href="mailto:support@camonk.com"
                  className="hover:underline text-sm"
                >
                  support@camonk.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-4 border-t flex flex-col md:flex-row justify-between items-center text-sm w-full mx-auto">
          <p>Copyright © CA MONK. All rights reserved</p>
          <div className="flex space-x-4 mt-2 md:mt-0 text-base cursor-pointer">
            <FaXTwitter size={24} />
            <FaFacebookF size={24} />
            <FaInstagram size={24} />
            <FaLinkedinIn size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
