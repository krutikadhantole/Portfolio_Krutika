import React from "react";
import profileImg from "../../assets/krutika_image.jpg";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      className="min-h-screen  pt-28 sm:pt-20 md:pt-10 flex items-center justify-center px-4 sm:px-6 md:px-10 bg-black text-white "
      id="home"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full py-12">
        {/* Profile Image with Gradient Glow */}

        <div className="relative md:w-1/2 flex justify-center items-center">
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#12E6C8] via-purple-400 to-[#12E6C8] opacity-30 blur-2xl z-0 animate-pulse"></div>
          <img
            src={profileImg}
            alt="Krutika Dhantole"
            className="relative z-10 w-72 h-72 rounded-full object-cover border-4 border-[#FCF8E8] shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#1dd1a1] via-[#5f27cd] to-[#341f97] bg-clip-text text-transparent mb-4">
            I'm Krutika Dhantole
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-200">
            Full Stack Web Developer
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            I build responsive, secure, and scalable web applications using the
            MERN stack. I love transforming ideas into beautiful user-friendly
            experiences.
          </p>

          {/* Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="/Krutika Dhantole (FS).pdf"
              download
              className="inline-flex items-center bg-gradient-to-r from-teal-400 to-purple-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Download Resume <FaArrowDown className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
