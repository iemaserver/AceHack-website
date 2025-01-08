"use client";

import { motion } from "framer-motion";

export default function Sponsors() {
  const currentSponsors = [
    { id: 1, logo: "/images/dorahacks.png", name: "Dorahacks", desc: "Platform partner" },
  ];

  const previousSponsors = [
    "/images/logo.png",
    "/images/logo.png",
    "/images/logo.png",
    "/images/logo.png",
  ];

  return (
    <section className="relative py-16 bg-black text-white">
      {/* Current Sponsors */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]">
          Our Sponsors
        </h2>
      </div>

      <div className="relative flex flex-wrap justify-center gap-12 px-4 md:px-16">
        {currentSponsors.map((sponsor) => (
          <motion.div
            key={sponsor.id}
            className="relative w- h-52 bg-gradient-to-br from-[#fbff00]/20 to-[#00f0ff]/20 rounded-lg shadow-lg p-3 flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-lg blur-lg opacity-30 bg-gradient-to-br from-[#fbff00] to-[#00f0ff] group-hover:animate-pulse"></div>
            {/* Card Content */}
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-32 mb-8 z-10 rounded-full shadow-md object-contain"
            />
            <div className="absolute bottom-2 mt-2 text-center z-10 text-2xl text-[#fbff00] opacity-90">
              {sponsor.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="relative my-12 flex flex-col items-center">
        <div className="absolute inset-0 z-10 h-1 w-full bg-gradient-to-r from-[#fbff00] via-transparent to-[#00f0ff] animate-flicker"></div>
        <h3 className="relative z-20 text-3xl mt-6 px-4 inline-block mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]">
          Previous Sponsors
        </h3>
      </div>

      {/* Previous Sponsors Carousel */}
      <div className="relative flex justify-center items-center overflow-x-auto no-scrollbar gap-6 py-6 px-4">
        {previousSponsors.map((logo, index) => (
          <motion.div
            key={index}
            className="relative min-w-[150px] bg-black border-2 border-[#00f0ff] rounded-lg shadow-lg flex items-center justify-center p-4 group"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Neon Glow */}
            <div className="absolute inset-0 rounded-lg blur-lg opacity-40 bg-gradient-to-br from-[#00f0ff] via-[#fbff00] to-[#00f0ff] group-hover:animate-pulse"></div>
            <img
              src={logo}
              alt={`Previous Sponsor ${index + 1}`}
              className="w-24 z-10 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
