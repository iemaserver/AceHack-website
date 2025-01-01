"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#"
            className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-blue-500 hover:to-yellow-400 transition-colors duration-300"
          >
            AceHack 4.0
          </a>
        </motion.div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Schedule", "Sponsors", "FAQs", "Contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-300 hover:text-yellow-400 relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
                {/* Glowing Underline Effect */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {isOpen ? (
              <span className="text-xl">&times;</span> // Close Icon
            ) : (
              <span className="text-xl">&#9776;</span> // Hamburger Icon
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-black bg-opacity-90 text-center py-4"
        >
          {["Home", "About", "Schedule", "Sponsors", "FAQs", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-lg font-medium text-gray-300 hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            )
          )}
        </motion.div>
      )}
    </header>
  );
}
