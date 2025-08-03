import React from "react";
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-5xl font-extrabold">
            KRUTI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1dd1a1] via-[#5f27cd] to-[#341f97]">
              KA
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            I am a frontend developer with a keen interest in MERN stack
            development.
          </p>
        </div>

        {/* Right Side: Subscribe */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center bg-[#2b2b3f] px-4 py-3 rounded-full w-full sm:w-auto">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white placeholder-gray-400 w-full sm:w-64"
            />
          </div>
          <button className="bg-gradient-to-r from-[#1dd1a1] via-[#5f27cd] to-[#341f97] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom Footer Links */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Krutika. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white transition">
            Term of Services
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Connect with me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
