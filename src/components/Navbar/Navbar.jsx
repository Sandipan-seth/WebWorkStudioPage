import { useState } from "react";
import Logo from "../../assets/Logo.png";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const details = ["Home", "About us", "Services", "Blogs", "Contact us"];
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b px-6 py-1 lg:py-3 flex items-center justify-between">
        <div>
          <img className="h-12 cursor-pointer" src={Logo} alt="Logo" />
        </div>

        <div className="hidden lg:flex gap-14">
          {details.map((item, i) => (
            <div
              key={i}
              className="text-black text-xl font-semibold cursor-pointer hover:underline transition"
              onClick={() => {
                if (item.toLowerCase() === "home") {
                  navigate("/");
                } else {
                  navigate(`/${item.toLowerCase().replace(/\s/g, "-")}`);
                }
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex gap-6 text-black text-3xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-gray-700 transition" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-gray-700 transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-gray-700 transition" />
          </a>
        </div>

        <button
          className="lg:hidden text-black text-3xl focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </nav>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col p-6`}
      >
        <button
          className="self-end mb-8 text-black text-3xl focus:outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <nav className="flex flex-col gap-6">
          {details.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              className={`text-black text-lg font-semibold hover:underline transition transform opacity-0 ${
                menuOpen ? "animate-fadeSlideIn" : ""
              }`}
              style={{
                animationDelay: `${i * 100 + 200}ms`,
                animationFillMode: "forwards",
              }}
              onClick={() => {
                if (item.toLowerCase() === "home") {
                  navigate("/");
                } else {
                  navigate(`/${item.toLowerCase().replace(/\s/g, "-")}`);
                }
                setMenuOpen(false);
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex gap-6 text-black text-3xl">
          {[FaLinkedin, FaGithub, FaTwitter].map((Icon, i) => (
            <a
              key={i}
              href={
                i === 0
                  ? "https://linkedin.com"
                  : i === 1
                  ? "https://github.com"
                  : "https://twitter.com"
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={i === 0 ? "LinkedIn" : i === 1 ? "GitHub" : "Twitter"}
              className={`opacity-0 transform ${
                menuOpen ? "animate-fadeSlideIn" : ""
              }`}
              style={{
                animationDelay: `${(details.length + i) * 100 + 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <Icon className="hover:text-gray-700 transition" />
            </a>
          ))}
        </div>
      </aside>

      <style jsx>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeSlideIn {
          animation-name: fadeSlideIn;
          animation-duration: 300ms;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </>
  );
}
