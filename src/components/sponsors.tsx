"use client";

import { motion } from "framer-motion";
const sponsor = "/images/Acehack 4.0 Sponsorship Deck new.png";
export default function Sponsors() {
  const currentSponsors = [
    { id: 1, logo: "/images/dorahacks.png", name: "Dorahacks", desc: "Platform partner" },
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
      <br></br>
      <br></br>
      <br></br>
      <div className="relative flex flex-wrap justify-center">
      <a href="https://drive.google.com/file/d/1zVtDsVrGbpHjZi5UXx9TMRDuGnDGHFw3/view?usp=sharing" target="blank">
          <button
            className="text-xl md:text-2xl font-bold px-4 py-4 rounded-lg bg-gradient-to-r from-[#fbff00] to-[#00f0ff] text-black transition-transform transform hover:scale-105 hover:from-[#00f0ff] hover:to-[#fbff00] focus:ring-4 focus:ring-[#00f0ff]/50"
          >
            Sponsor Us
          </button>
          </a>
      </div>
      

      {/* Divider */}
      <div className="relative my-12 flex flex-col items-center">
        <div className="absolute inset-0 z-10 h-1 w-full bg-gradient-to-r from-[#fbff00] via-transparent to-[#00f0ff] animate-flicker"></div>

        <br></br>
        <br></br>
        <h3 className="relative z-20 text-4xl mt-6 px-4 inline-block mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]">
          Previous Sponsors
        </h3>
      </div>

      {/* Previous Sponsors Carousel */}
      <div className="relative flex justify-center items-center overflow-x-auto no-scrollbar gap-6 py-2 px-4">
      <img
            src={sponsor}
            alt="Sponsors Collage"
            className="max-w-[99%] max-h-[60vh] rounded-lg shadow-lg object-contain"
          />
        
      </div>
      <div className="absolute inset-0 z-10 h-1 w-full bg-gradient-to-r from-[#fbff00] via-transparent to-[#00f0ff] animate-flicker"></div>
      
    </section>
  );
}



// {previousSponsors.map((logo, index) => (
//   <motion.div
//     key={index}
//     className="relative min-w-[150px] bg-black border-2 border-[#00f0ff] rounded-lg shadow-lg flex items-center justify-center p-4 group"
//     whileHover={{ scale: 1.1 }}
//     transition={{ duration: 0.3 }}
//   >
//     {/* Neon Glow */}
//     <div className="absolute inset-0 rounded-lg blur-lg opacity-40 bg-gradient-to-br from-[#00f0ff] via-[#fbff00] to-[#00f0ff] group-hover:animate-pulse"></div>
//     <img
//       src={logo}
//       alt={`Previous Sponsor ${index + 1}`}
//       className="w-24 z-10 object-contain"
//     />
//   </motion.div>
// ))}