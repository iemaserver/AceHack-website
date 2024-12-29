"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-black text-white px-4 md:px-8 lg:px-12 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img
            src="/logo.png" // Replace with actual logo path
            alt="AceHack Logo"
            className="w-10 h-10"
          /> */}
          <h1 className="text-3xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-500">
            AceHack 4.0
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Schedule', 'Sponsors', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl text-gray-300 hover:text-pink-500 transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Register Button */}
        <motion.a
          href="#register"
          whileHover={{ scale: 1.1 }}
          className="hidden md:block px-6 py-2 text-white font-semibold text-xl bg-gradient-to-r from-pink-500 to-purple-600 rounded shadow-lg hover:shadow-pink-500/50 hover:from-yellow-400 hover:to-cyan-500 transition-all duration-300"
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
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col space-y-4 py-4 md:hidden z-50">
          {['Home', 'About', 'Schedule', 'Sponsors', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg text-gray-300 px-4 hover:text-pink-500 transition-all duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#register"
            className="px-6 py-2 mx-4 text-white font-semibold text-lg bg-gradient-to-r from-pink-500 to-purple-600 rounded shadow-lg hover:shadow-pink-500/50 hover:from-yellow-400 hover:to-cyan-500 transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
}
