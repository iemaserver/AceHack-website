"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-03-08T00:00:00"); // Set the event start date
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen bg-cover bg-center text-black overflow-hidden"
      style={{ backgroundImage: "url('https://i.ibb.co/BwCCPdp/website-bg-1.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black opacity-90"></div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-8">
        {/* Logo in Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-28 md:-top-0 inset-0 -z-10 flex items-center justify-center opacity-10"
        >
          <img src="/images/logo.png" alt="AceHack Logo" className="h-auto w-[40rem]" />
        </motion.div>

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 "
        >
          <h2 className="text-[5rem] md:text-[8rem] antialiased font-extrabold leading-none text-black drop-shadow-lg">
            AceHack 4.0
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium antialiased text-center sm:text-left">
  24-Hour In-Person Hackathon | Venue: Jaipur, Rajasthan
</p>

        </motion.div>

        {/* Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-black/70 px-8 sm:px-10 py-4 sm:py-6 rounded-md shadow-md"
        >
          <h3 className="text-lg md:text-3xl font-bold text-gray-300">Hackathon Starts In</h3>
          <div className="flex justify-center space-x-4 text-[#fbff00] text-5xl font-extrabold">
            <div>
              {timeLeft.days}
              <span className="block text-sm text-gray-300">Days</span>
            </div>
            <div>
              {timeLeft.hours}
              <span className="block text-sm text-gray-300">Hours</span>
            </div>
            <div>
              {timeLeft.minutes}
              <span className="block text-sm text-gray-300">Minutes</span>
            </div>
            <div>
              {timeLeft.seconds}
              <span className="block text-sm text-gray-300">Seconds</span>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center space-x-6"
        >
          <a

         
            href="https://dorahacks.io/hackathon/acehack4/detail"
            className="px-6 py-3 bg-gradient-to-r from-[#fbff00] to-[#00f0ff] text-black font-bold text-lg rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Register Now
          </a>
          <a

            href="https://linktr.ee/acehack4"
            className="px-6 py-3 border-2 border-[#fbff00] text-[#fbff00] hover:text-black font-bold text-lg rounded-md hover:bg-[#fbff00]/90 hover:scale-105 transition-transform duration-300"
          >
            Join our community
          </a>
        </motion.div>
      </div>
    </div>
  );
}
