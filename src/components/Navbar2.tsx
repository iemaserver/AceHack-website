"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for dynamic background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants
  const mobileMenuVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
  };

  const linkHoverEffect = {
    whileHover: {
      scale: 1.1,
      color: "#000",
      backgroundColor: "#FFED4A",
      transition: { duration: 0.2 },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/10 backdrop-blur-[1px] py-0 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-6 py-3 ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {scrolled ? (
            <img src="/images/logo.png" alt="AceHack Logo" className="h-12" />
          ) : (
            <img src="/images/logo-dark.png" alt="AceHack Logo" className="h-12" />
          )}
          {/* <h1 className="text-5xl title-font text-black antialiased font-extrabold">AceHack 4.0</h1> */}
          {/* <img src="/images/logo-dark.png" alt="AceHack Logo" className="h-16" /> */}
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex bg-black/60"
          style={{
            backdropFilter: "blur(10px)",
            clipPath:
              "polygon(16px 0, 100% 0, 100% 30px, calc(100% - 18px) 48px, calc(100% - 18px) 2000%, 0 2000%, 0 16px)",
          }}
        >
          {["Home", "About", "Swags", "Sponsors", "FAQs", "Contact"].map(
            (item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl tracking-wide font-medium py-2 px-4 text-white"
                {...linkHoverEffect}
              >
                {item}
              </motion.a>
            )
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden flex flex-col items-center justify-center space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            className={`h-1 w-8 bg-yellow-400 transition-transform origin-center ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <motion.div
            className={`h-1 w-8 bg-yellow-400 transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <motion.div
            className={`h-1 w-8 bg-yellow-400 transition-transform origin-center ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="md:hidden bg-black/90 text-center"
      >
        {["Home", "About", "Digital_Swags", "Sponsors", "FAQs", "Contact"].map(
          (item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-4 text-lg font-medium text-gray-300 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
              {...linkHoverEffect}
            >
              {item}
            </motion.a>
          )
        )}
      </motion.div>
    </header>
  );
}
