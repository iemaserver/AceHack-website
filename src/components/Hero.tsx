"use client"

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background Neon Animation */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="absolute w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 blur-xl"
        />
        <motion.div
          className="absolute w-3/4 h-3/4 top-20 left-20 bg-gradient-to-br from-blue-600 to-pink-600 rounded-full opacity-30 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row justify-around items-center h-full z-10">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start space-y-6 max-w-lg">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-500"
          >
            AceHack 4.0
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-300"
          >
            Where Cyberpunk meets Creativity
          </motion.p>

          {/* Glowing Register Button */}
          <motion.a
            href="#register"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-lg md:text-xl rounded shadow-lg hover:shadow-pink-500/50 hover:from-yellow-400 hover:to-cyan-500 transition-all duration-300"
          >
            Register Now
          </motion.a>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center space-y-6">
          {/* Hero Image */}
          <motion.img
            src="/images/hero.png" // Replace with actual image URL
            alt="Cyberpunk Hero"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-md rounded-lg shadow-lg"
          />

          {/* Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="text-center text-sm md:text-lg text-gray-400"
          >
            Registration closes in: <span className="text-pink-400 font-bold">10d 5h 23m</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
