"use client";

import { motion } from "framer-motion";
const sponsor = "/images/Acehack 4.0 Sponsorship Deck new.png";
export default function Sponsors() {
  const currentSponsors = [
    {
      id: 1,
      logo: "/images/dorahacks.png",
      name: "DoraHacks",
      desc: "Platform partner",
      url: "https://dorahacks.io/",
    },
  ];

  const ecosystemPartner = [
    {
      name: "TechSoc",
      logo: "https://i.ibb.co/4sF3TTW/Techsoc-logo.jpg",
      url:"https://tech-soc.vercel.app/",
    },
  ];

  const inKindSponseor = [
  
    {
      name: "Reskilll",
      logo: "https://reskilll.com/newui/img/blacklogo.png",
      url: "https://reskilll.com/",
    },
    {
      name: "Microsoft Azure",
      // logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
      logo: "./images/sponsors/newMicrosoft-azure.png",
      url: "https://azure.microsoft.com/en-us/",
    },
    {
      name: "Azure Dev Community",
      logo: "./images/sponsors/newMicrosoft-community.png",
      url: "https://azdev.reskilll.com/",
    },
    {
      name: "Commudle",
      logo: "https://commudle.com/assets/images/commudle-logo192.png",
      url: "https://www.commudle.com/",
    },
    {
      name: "InterviewBuddy",
      logo: "https://interviewbuddy.net/assests/logos/IBlogo_light.svg",
      url: "https://interviewbuddy.net/",
    },
    {
      name: "Appwrite",
      logo: "https://marketplace-assets.digitalocean.com/logos/appwrite-20-04.svg",
      url: "https://appwrite.io/",
    },
    {
      name: "Zsecurity",
      logo: "https://zsecurity.org/wp-content/uploads/2018/09/zs-top-left.png",
      url: "https://zsecurity.org/",
    },
    {
      name: "Flatlogic",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYvR__2a_QgIN-6Fnv3D7ktpznczuGe9QQQ&s",
      url: "https://flatlogic.com/",
    },
    {
      name: "CodeCrafters",
      logo: "https://codecrafters.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e38048e3.png&w=48&q=75",
      url: "https://codecrafters.io/",
    },
    
    {
      name: "Sybgen",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_7g3mUgwgp1rgCUwbvAdfPZbeeZzSAXeOw&s",
      url: "https://sybgen.com/",
    },
    {
      name: "Interview Cake",
      logo: "https://cdn.prod.website-files.com/66bc0319fce51f7e5568a809/66cccfa71415c8fe1322665f_63da686f8720100e177b4f40_Interview%2520Cake%2520main.webp",
      url: "https://www.interviewcake.com/",
    },
    {
      name: "AoPS Online",
      logo: "https://artofproblemsolving.com/assets/images/logos/aops-online.svg",
      url: "https://artofproblemsolving.com/",
    },
    {
      name: "Balsamiq",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjlMXiSjQu1YRDJsZp-jfMTEOFYlBh-mf_Q&s",
      url: "https://balsamiq.com/",
    },
    {
      name: "XYZ Domains", 

      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/1280px-.xyz_logo.svg.png",
      url: "https://gen.xyz/",
    },
  ];

  const web3Sponsor = [
    {
      name: "Devdock",
      logo: "https://devdock.ai/images/logo.png",
      url: "https://devdock.ai/",
    },
  ];

  const bronze = [
    {
      name: "Jonathan Chiang",
      logo: "images/jonathan.jpg",
      url: "https://www.instagram.com/jonny.chang.ceo/",
    },
  ];

  const mediaPartner = [
    {
      name: "The Global Hues",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJGUYsI48OexKz0ELLcYLyfddhqQxBF9VGw&s",
      url: "https://theglobalhues.com/",
    },
  ];

  const uem = "/images/uem.png";

  // import acm from "/assets/images/acm.jpeg";
  // import acm from "/assets/images/acmlogo.png";
  const acm = "/images/acm-blu.png";
  const iic = "/images/iic.jfif";

  const organizer = [
    {
      name: "UEM Jaipur",
      logo: uem,
    },
    {
      name: "ACM",
      logo: acm,
    },

    {
      name: "IIC",
      logo: iic,
    },
  ];

  return (
    <section className="relative py-1 bg-black text-white">
      {/* Current Sponsors */}

      <a>
        <section className="py-12 ">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">
              Organized By
            </h1>
            <br></br>
            <div className="relative flex flex-wrap justify-center gap-12 px-4 md:px-16">
              {organizer.map((partner) => (
                <a key={partner.name} target="blank">
                  <motion.div
                    className="relative w- h-52 bg-gradient-to-br from-[#fbff00]/20 to-[#00f0ff]/20 rounded-lg shadow-lg p-3 flex items-center justify-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-lg blur-lg opacity-30 bg-gradient-to-br from-[#fbff00] to-[#00f0ff] group-hover:animate-pulse"></div>
                    {/* Card Content */}

                    <div className="w-32 h-32 mb-6 rounded-full bg-white flex items-center justify-center shadow-md">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-28 h-28 rounded-full object-contain z-10"
                      />
                    </div>

                    <div className="absolute bottom-2 mt-2 text-center z-10 text-2xl text-[#fbff00] opacity-90">
                      {partner.name}
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* platform sponser */}

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">
            Platform Sponsor
          </h2>
        </div>
        <div className="relative flex flex-wrap justify-center gap-12 px-4 md:px-16">
          {currentSponsors.map((sponsor) => (
            <a key={sponsor.id} href={sponsor.url} target="blank">
              <motion.div
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
            </a>
          ))}
        </div>
      </a>
      <br></br>
      <br></br>
      {/* platform sponser */}

      {/* Web3 Track Sponsor */}

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">
          Web3 Track Sponsor
        </h2>
      </div>
      <div className="relative flex flex-wrap justify-center gap-12 px-4 md:px-16">
        {web3Sponsor.map((sponsor) => (
          <a key={sponsor.name} href={sponsor.url} target="blank">
            <motion.div
              className="relative w- h-52 bg-gradient-to-br from-[#fbff00]/20 to-[#00f0ff]/20 rounded-lg shadow-lg p-3 flex items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg blur-lg opacity-30 bg-gradient-to-br from-[#fbff00] to-[#00f0ff] group-hover:animate-pulse"></div>
              {/* Card Content */}

              <div className="w-32 h-32 mb-6 rounded-full bg-black flex items-center justify-center shadow-md">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-28 h-28 rounded-full object-contain z-10"
                />
              </div>

              <div className="absolute bottom-2 mt-2 text-center z-10 text-2xl text-[#fbff00] opacity-90">
                {sponsor.name}
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      {/* Web3 Track Sponsor */}

      <br></br>
      <br></br>

      {/* Bronze */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">
          Bronze
        </h2>
      </div>
      <div className="relative flex flex-wrap justify-center gap-12 px-4 md:px-16">
        {bronze.map((sponsor) => (
          <a key={sponsor.name} href={sponsor.url} target="blank">
            <motion.div
              className="relative w- h-52 bg-gradient-to-br from-[#fbff00]/20 to-[#00f0ff]/20 rounded-lg shadow-lg p-3 flex items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg blur-lg opacity-30 bg-gradient-to-br from-[#fbff00] to-[#00f0ff] group-hover:animate-pulse"></div>
              {/* Card Content */}

              <div className="w-32 h-32 mb-6 rounded-full bg-black flex items-center justify-center shadow-md">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-28 h-28 rounded-full object-contain z-10"
                />
              </div>

              <div className="absolute bottom-2 mt-2 text-center z-10 text-2xl text-[#fbff00] opacity-90">
                {sponsor.name}
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      {/* Bronze */}
      <br></br>
      <br></br>

      {/* In-Kind Sponsor */}
      {/* In-Kind Sponsor */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff] inline-block px-4 py-2">
          In-Kind Sponsor
        </h2>
      </div>

      {/* Responsive Grid Layout for 2 cards on mobile, 5 on large screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 px-4 md:px-16 max-w-screen-lg mx-auto">
        {inKindSponseor.map((sponsor) => (
          <a key={sponsor.name} href={sponsor.url} target="_blank">
            <motion.div
              className="relative w-[150px] h-60 bg-gradient-to-br from-[#fbff00]/20 to-[#00f0ff]/20 rounded-lg shadow-lg p-3 flex flex-col items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg blur-lg opacity-30 bg-gradient-to-br from-[#fbff00] to-[#00f0ff] group-hover:animate-pulse"></div>

              {/* Card Content */}
              <div className="w-32 h-32 mb-6 rounded-full bg-white flex items-center justify-center shadow-md">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-28 h-28 rounded-full object-contain z-10"
                />
              </div>

              {/* Sponsor Name */}
              <div className="absolute bottom-2 mt-2 text-center z-10 text-2xl text-[#fbff00] opacity-90">
                {sponsor.name}
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      {/* in kind sponsor */}

      <br></br>

      <br></br>

      {/* Media perner */}

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">
          Media Partners
        </h2>
      </div>
      <div className="relative flex flex-wrap justify-center gap-12 px-4 md:px-16">
        {mediaPartner.map((sponsor) => (
          <a key={sponsor.name} href={sponsor.url} target="blank">
            <motion.div
              className="relative w- h-52 bg-gradient-to-br from-[#fbff00]/20 to-[#00f0ff]/20 rounded-lg shadow-lg p-3 flex items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg blur-lg opacity-30 bg-gradient-to-br from-[#fbff00] to-[#00f0ff] group-hover:animate-pulse"></div>
              {/* Card Content */}

              <div className="w-32 h-32 mb-6 rounded-full bg-black flex items-center justify-center shadow-md">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-28 h-28 rounded-full object-contain z-10"
                />
              </div>

              <div className="absolute bottom-2 mt-2 text-center z-10 text-2xl text-[#fbff00] opacity-90">
                {sponsor.name}
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      {/* Media partner */}

      <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold pt-10 text-center">
        Become a{" "}
        <span className="underline-offset-8 underline decoration-yellow-400">
          sponsor
        </span>{" "}
        of{" "}
        <b className="text-2xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">
          {" "}
          AceHack 4.0
        </b>
      </p>

      <br></br>

      <div className="relative flex flex-wrap justify-center">
        <a
          href="https://drive.google.com/file/d/1zVtDsVrGbpHjZi5UXx9TMRDuGnDGHFw3/view?usp=sharing"
          target="blank"
        >
          <button className="text-xl md:text-2xl font-bold px-4 py-4 rounded-lg bg-gradient-to-r from-[#fbff00] to-[#00f0ff] text-black transition-transform transform hover:scale-105 hover:from-[#00f0ff] hover:to-[#fbff00] focus:ring-4 focus:ring-[#00f0ff]/50">
            Sponsor Us
          </button>
        </a>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">
          Ecosystem Partner
        </h2>
      </div>

      <div className="relative flex flex-wrap justify-center gap-12 px-4 md:px-16">
        {ecosystemPartner.map((partner) => (
          <a key={partner.name} href={partner.url} target="blank">
            <motion.div
              className="relative w- h-52 bg-gradient-to-br from-[#fbff00]/20 to-[#00f0ff]/20 rounded-lg shadow-lg p-3 flex items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg blur-lg opacity-30 bg-gradient-to-br from-[#fbff00] to-[#00f0ff] group-hover:animate-pulse"></div>
              {/* Card Content */}

              <img
                src={partner.logo}
                alt={partner.name}
                className="w-32 mb-8 z-10 rounded-full shadow-md object-contain"
              />

              <div className="absolute bottom-2 mt-2 text-center z-10 text-2xl text-[#fbff00] opacity-90">
                {partner.name}
              </div>
            </motion.div>
          </a>
        ))}
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
