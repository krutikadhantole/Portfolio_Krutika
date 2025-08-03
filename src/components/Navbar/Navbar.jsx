import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "aboutme" },
    { name: "My Work", id: "mywork" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-md py-2" : "bg-black py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-gradient-to-r from-teal-400 to-purple-500 text-4xl font-bold tracking-wide px-2 pb-4 text-white">
          K
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(item.id)}
              className="text-white text-lg font-medium hover:text-cyan-400 transition"
            >
              {item.name}
            </button>
          ))}

          <a
            href="#contact"
            className="ml-4 bg-gradient-to-r from-teal-400 to-purple-500 text-black px-5 py-2 rounded-full text-base font-medium hover:scale-105 transition-transform shadow-md"
          >
            Connect with me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 pt-4 pb-6 space-y-4 shadow-lg">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(item.id)}
              className="block text-lg hover:text-cyan-400 transition"
            >
              {item.name}
            </button>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full mt-2 block text-center bg-gradient-to-r from-teal-400 to-purple-500 text-black py-2 rounded-full hover:scale-105 transition-transform"
          >
            Connect with me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
