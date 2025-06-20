import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Changed FaTwitter to FaInstagram
import Rupam from "../../assets/Team/Rupam.jpg";
import Sandipan from "../../assets/Team/Sandipan.png";

function Team() {
  const team = [
    {
      name: "Rupam Mondal",
      role: "Full Stack Developer",
      description:
        "Full stack developer passionate about building seamless, fast, and responsive web applications. Always exploring the latest in tech.",
      image: Rupam,
      socials: {
        linkedin: "https://www.linkedin.com/in/rupam-mondal",
        github: "https://github.com/rupammondal",
        instagram: "https://www.instagram.com/studiowebworks/?hl=en", // unified link
      },
    },
    {
      name: "Sandipan Seth",
      role: "Full Stack Developer",
      description:
        "Versatile developer skilled in both frontend and backend. Focuses on performance, scalability, and clean code architecture.",
      image: "https://avatars.githubusercontent.com/Sandipan-seth",
      socials: {
        linkedin: "https://www.linkedin.com/in/sandiopan-seth",
        github: "https://github.com/Sandipan-seth",
        instagram: "https://www.instagram.com/studiowebworks/?hl=en",
      },
    },
    {
      name: "Sohom Das",
      role: "UI/UX Designer",
      description:
        "Creative designer passionate about intuitive interfaces and user-first design. Loves turning complex ideas into clean, usable designs.",
      image: Rupam,
      socials: {
        linkedin: "https://www.linkedin.com/in/sohom-das",
        github: "https://github.com/sohomdas",
        instagram: "https://www.instagram.com/studiowebworks/?hl=en",
      },
    },
    {
      name: "Debdeep Guha",
      role: "Frontend Developer",
      description:
        "Frontend wizard with a knack for pixel-perfect designs and smooth user experiences. Obsessed with performance and UI polish.",
      image: Sandipan,
      socials: {
        linkedin: "https://www.linkedin.com/in/debdeep-guga",
        github: "https://github.com/debdeepguga",
        instagram: "https://www.instagram.com/studiowebworks/?hl=en",
      },
    },
  ];

  return (
    <div className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-black mb-12">
        Meet Our <span className="text-[#b9f33f]">Team</span>
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="group cursor-pointer bg-white border rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 text-[#111] flex flex-col justify-between flex-grow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-black font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-700">{member.description}</p>
              </div>
              <div className="flex gap-4 mt-auto text-black">
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
