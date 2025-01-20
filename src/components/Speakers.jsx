"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

// Data for mentors and judges
const organizersData = [
  { name: "Abdal Lalit", image: "/images/mentors3/abdal lalit.jpeg", linkedin: "https://linkedin.com/in/abdal-lalit/" },
  { name: "Abhinav Rai", image: "/images/mentors3/abhinav rai.jpeg", linkedin: "https://linkedin.com/in/abhinav-rai-6a7119154/" },
  { name: "Abhinav", image: "/images/mentors3/Abhinav.jpeg", linkedin: "https://linkedin.com/in/abhinavsharma0/" },
  { name: "Ayon Roy", image: "/images/mentors3/ayon roy.jpeg", linkedin: "https://linkedin.com/in/ayon-roy/" },
  { name: "Chhavi", image: "/images/mentors3/chhavi.jpeg", linkedin: "https://linkedin.com/in/chhaviGG/" },
  { name: "Chinmay", image: "/images/mentors3/chinmay.jpeg", linkedin: "https://linkedin.com/in/chinmaypant/" },
  { name: "Devendra", image: "/images/mentors3/devendra.jpeg", linkedin: "https://linkedin.com/in/devendra-parihar/" },
  { name: "Gurkirat", image: "/images/mentors3/gurkirat.jpeg", linkedin: "https://linkedin.com/in/gurkirat-singh-87901a169/" },
  { name: "Jaskaran", image: "/images/mentors3/jaskaran.jpeg", linkedin: "https://linkedin.com/in/jaskaran-singh-9b3937169/" },
  { name: "Manav", image: "/images/mentors3/manav.jpeg", linkedin: "https://linkedin.com/in/--manav-gupta--/" },
  { name: "Himani", image: "/images/mentors3/himani.jpeg", linkedin: "https://linkedin.com/in/himani-popli-2391b4146/" },
  { name: "Pankaj", image: "/images/mentors3/pankaj.jpeg", linkedin: "https://linkedin.com/in/pankaj-prajapati-668982163/" },
  { name: "Pranav", image: "/images/mentors3/pranav.jpeg", linkedin: "https://linkedin.com/in/candidatepstx-95adfsdk23/" },
  { name: "Rishabh", image: "/images/mentors3/rishabh.jpeg", linkedin: "https://linkedin.com/in/therishabhsh/" },
  { name: "Rishika", image: "/images/mentors3/Rishika.jpeg", linkedin: "https://linkedin.com/in/rishikagupta-rg/" },
  { name: "Rohan", image: "/images/mentors3/rohan.jpeg", linkedin: "https://linkedin.com/in/rohan-kumar-a65a87175/" },
  { name: "Shivam", image: "/images/mentors3/shivam.jpeg", linkedin: "https://linkedin.com/in/shivamgoyall/" },
  { name: "Srishti", image: "/images/mentors3/srishti.jpg", linkedin: "https://linkedin.com/in/srishti23/" },
  { name: "Anchal", image: "/images/mentors3/anchal.jpeg", linkedin: "https://linkedin.com/in/anchal-sharma-57a08714a/" },
  { name: "Shyamal", image: "/images/mentors3/shyamal.jpeg", linkedin: "#" },
  { name: "Maninder", image: "/images/mentors3/Maninder.jpeg", linkedin: "https://linkedin.com/in/manindersinghh/" },
  { name: "Abhimanyu", image: "/images/mentors3/abhimanyu.jpeg", linkedin: "https://linkedin.com/in/abhimanyu-shekhawat-886896168/" },
  { name: "Sounak", image: "/images/mentors3/sounak.jpeg", linkedin: "https://linkedin.com/in/sounak-ghosh/" },
  { name: "Chanpreet", image: "/images/mentors3/chanpreet.jpeg", linkedin: "https://linkedin.com/in/chanpreet-singh-chugh-8004ab141/" },
  { name: "Piyush", image: "/images/mentors3/piyush.jpeg", linkedin: "https://linkedin.com/in/piyush-sharma-a5801813b/" },
  { name: "Nitesh", image: "/images/mentors3/nitesh.jpg", linkedin: "#" },
];

const Speakers = () => {
  return (
    <div className="relative items-center justify-center bg-gray-900/30 backdrop-blur-lg w-full z-20 py-10 scroll-smooth">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="flex flex-row justify-center w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">Previous Mentors & Judges</h1>
        </div>
        <br></br>
        <br></br>
        {/* Display mentors in a grid with 6 per row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-4 md:px-16">
          {organizersData.map((mentor) => (
            <motion.div
              key={mentor.name}
              className="relative w-40 h-56 bg-gradient-to-br from-[#fbff00]/20 to-[#00f0ff]/20 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg blur-lg opacity-30 bg-gradient-to-br from-[#fbff00] to-[#00f0ff] group-hover:animate-pulse"></div>

              {/* Card Content */}
              <div className="w-24 h-24 mb-6 rounded-full bg-white flex items-center justify-center shadow-md">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-20 h-20 rounded-full object-contain z-10"
                />
              </div>

              <div className="text-xl font-bold text-[#fbff00] mb-2">{mentor.name}</div>
              {/* Removed LinkedIn Icon */}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Speakers;
