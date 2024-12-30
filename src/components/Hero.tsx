"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative h-screen mt-10 bg-gradient-to-t from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Electric Blue Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#fbff00] blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Neon Grid */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-20 mix-blend-overlay"></div>
        {/* Rotating Neon Circle */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-[#00f0ff] to-[#fbff00] rounded-full opacity-40 blur-2xl top-1/4 left-10"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row justify-around items-center h-full z-10 ">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center  space-y-6 max-w-lg">
          {/* Title */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold title-font text-center leading-tight text-black drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          >
            AceHack 4.0
          </motion.h1>

          {/* Subheading */}
          {/* <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl font-medium text-gray-200"
          >
            Where Innovation Meets Cyberpunk Creativity
          </motion.h2> */}

          {/* Essence Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-xl text-black antialiased"
          >
            Build futuristic projects, redefine possibilities, and compete with the brightest minds. The future awaits. Are you ready?
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.a
            href="#register"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="px-8 py-3 bg-gradient-to-r from-[#fbff00] to-[#00f0ff] text-black font-bold text-lg md:text-xl rounded-lg title-font tracking-widest shadow-lg hover:shadow-[#00f0ff]/0 hover:scale-105 transition-transform duration-300"
          >
            Register Now
          </motion.a>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center space-y-4">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-md"
          >
            <img
              src="/images/hero.png" // Replace with actual image path
              alt="Cyberpunk Hero"
              className="rounded-lg shadow-lg"
            />
            {/* Electric Glow Effect */}
            <div className="absolute inset-0 rounded-lg border-4 border-transparent bg-gradient-to-r from-[#00f0ff] to-[#fbff00] opacity-20 blur-md"></div>
          </motion.div>

          {/* Timer Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="text-center text-sm md:text-lg text-gray-300"
          >
            <span className="block text-lg md:text-xl font-bold text-[#fbff00]">
              Registration Ends In:
            </span>
            <span className="text-[#00f0ff] text-2xl md:text-3xl font-extrabold">
              10d 5h 23m
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
