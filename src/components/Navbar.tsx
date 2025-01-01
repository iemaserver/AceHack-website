"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative title-font  bg-black text-white px-4 md:px-8 lg:px-12 py-3 shadow-lg border-b border-blue-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-500 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
            AceHack 4.0
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Schedule", "Sponsors", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className="relative text-xl font-semibold text-gray-200 hover:text-yellow-300 transition-all duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Register Button */}
        <motion.a
          href="#register"
          whileHover={{ scale: 1.1 }}
          className="hidden md:block px-6 py-2 text-lg font-semibold text-black bg-gradient-to-r from-yellow-300 to-cyan-400 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:text-white"
        >
          Register Now
        </motion.a>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col space-y-4 py-4 md:hidden z-50 border-t border-blue-500">
          {["Home", "About", "Schedule", "Sponsors", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-semibold text-gray-200 px-4 hover:text-yellow-300 transition-all duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#register"
            className="px-6 py-2 mx-4 text-lg font-semibold text-black bg-gradient-to-r from-yellow-300 to-cyan-400 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:text-white"
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
}
