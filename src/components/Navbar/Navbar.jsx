import Logo from '../../assets/Logo.png'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Navbar() {
  const details = ["Home", "About us", "Services", "Blogs", "Contact us"]

  return (
    <div className="absolute w-full flex py-2 px-8 justify-between border-b items-center bg-white">
      
      <div>
        <img className="h-12 cursor-pointer" src={Logo} alt="Logo" />
      </div>

      
      <div className="flex gap-14">
        {details.map((item, i) => (
          <div
            key={i}
            className="text-black text-xl font-semibold cursor-pointer hover:underline transition"
          >
            {item}
          </div>
        ))}
      </div>

      
      <div className="flex gap-6 text-black text-3xl">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-gray-700 transition" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-700 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-gray-700 transition" />
        </a>
      </div>
    </div>
  )
}
