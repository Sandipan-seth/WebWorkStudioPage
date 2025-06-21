import React from "react";
import logo from "../../../assets/Logo.png";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const LowerFooter = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const submitEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    formData.append("email", email);


    formData.append("access_key", "b3927034-5f44-4ec2-a67f-d1f64f95eb45");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setEmail("");
    } else {
      console.log("Error", data);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white">
      <div className="bg-white text-black px-6 py-10 flex flex-col max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0 mb-6">
          <img src={logo} alt="Logo" className="w-28 h-auto" />
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Links */}
          <div>
            <h3 className="mb-3 text-xl font-bold">Company</h3>
            <ul className="space-y-2 text-md">
              <li
                className="hover:underline cursor-pointer"
                onClick={() => {
                  navigate("/about-us");
                }}
              >
                About Us
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => {
                  navigate("/services");
                }}
              >
                Services
              </li>

              <li
                className="hover:underline cursor-pointer"
                onClick={() => {
                  navigate("/contact-us");
                }}
              >
                Contact
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-3">Legal</h3>
            <ul className="space-y-2 text-md">
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
              <li className="hover:underline cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:underline cursor-pointer">Refund Policy</li>
              <li className="hover:underline cursor-pointer">Cookie Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-3">Contact</h3>
            <p className="text-sm font-medium">Call us:</p>
            <ul className="text-sm space-y-1 mb-3">
              <li>+91 9339388730</li>
              <li>+91 9051819976</li>
              <li>+91 8910647915</li>
              <li>+91 7044924558</li>
            </ul>
            <p className="text-sm font-medium">Email us:</p>
            <p className="text-sm hover:underline">
              webworksstudio986@gmail.com
            </p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-start text-left w-full max-w-xs">
            <h3 className="font-bold text-xl mb-3">Send us email</h3>
            <div className="flex items-center border border-black rounded-full px-3 py-1 w-fit">
              <span className="text-xl mr-2">@</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-transparent outline-none text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-lime-400 text-black font-semibold px-4 py-1 rounded-full ml-2"
                onClick={(e) => {
                  submitEmail(e);
                }}
              >
                {
                  loading ? "Sending..." : "Send"
                }
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-4 border-t flex flex-col md:flex-row justify-between items-center text-sm w-full">
          <p>
            © {new Date().getFullYear()} WebWorksStudio. All rights reserved.
          </p>
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
