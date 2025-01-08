"use client";

import { motion } from "framer-motion";

export default function AboutAceHack() {
  return (
    <section
      id="about"
      className="relative  py-16 pb-32 px-6 md:px-12 lg:px-20 bg-black text-white"
    >
      {/* Floating Neon Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bg-[#fbff00] rounded-full blur-2xl opacity-20"
          style={{
            width: "200px",
            height: "200px",
            top: "5%",
            left: "10%",
          }}
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute bg-[#00f0ff] rounded-full blur-2xl opacity-20"
          style={{
            width: "180px",
            height: "180px",
            bottom: "10%",
            right: "10%",
          }}
          animate={{
            x: [0, 15, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>
        <div className="absolute -top-[48rem] sm:-top-[25rem] inset-0 flex justify-center items-center">
            <h1 className="text-8xl sm:text-[9rem] font-extrabold text-white opacity-10">About Us</h1>
        </div>
        <div className="relative z-10 text-center mb-12">
            <h2 className="text-5xl md:text-8xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">
                What is AceHack 4.0 ?
            </h2>
        </div>
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left - Overlapping Angled Images */}
        <motion.div
          className="w-full md:w-1/2   flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Image 1 */}
          <div className="absolute transform rotate-[-5deg] -top-5 -left-5 w-64 h-40 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition border-2 border-[#fbff00] duration-300 z-20">
            <img
              src="/images/website-bg.jpg"
              alt="AceHack Innovation"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-[#fbff00]/20 mix-blend-multiply"></div>
          </div>

          {/* Image 2 */}
          <div className="absolute transform rotate-[10deg] top-10 left-28 sm:left-40 w-64 h-40 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition border-2 border-[#fbff00] duration-300 z-10">
            <img
              src="/images/website-bg.jpg"
              alt="AceHack Collaboration"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-[#00f0ff]/20 mix-blend-multiply"></div>
          </div>

          {/* Image 3 */}
          <div className="absolute transform rotate-[5deg] top-32 left-4 w-64 h-40 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition border-2 border-[#fbff00] duration-300 z-0">
            <img
              src="/images/website-bg.jpg"
              alt="AceHack 4.0 Tech"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-[#fbff00]/20 mix-blend-multiply"></div>
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          className="w-full mt-72 sm:mt-0 md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          
          <p className="text-lg leading-relaxed text-gray-300">
          AceHack 4.0 is Rajasthan’s biggest student-run hackathon, designed to bring together students, innovators, and tech enthusiasts from across the country. It’s a 24-hour event where participants collaborate, create, and solve real-world challenges through technology.

This hackathon is more than just coding—it’s a space to explore ideas, learn new skills, and connect with a like-minded community. Whether you’re a beginner or an experienced hacker, AceHack 4.0 provides the perfect platform to showcase your talent and grow.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Join us as we redefine the future of technology and bring your
            boldest ideas to life!
          </p>
          <a
            href="https://linktr.ee/acehack4"
            className="inline-block text-lg font-semibold text-black bg-gradient-to-r from-[#00f0ff] to-[#fbff00] px-6 py-3 rounded-md shadow-lg hover:scale-105 transform transition duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
