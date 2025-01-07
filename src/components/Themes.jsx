import React from "react";
import Item from "../components/Item";


const doctor ="/images/themes/doctor.png";
const vr = "/images/themes/vr.png";
const development = "/images/themes/development.png";
const cloud ="/images/themes/cloud.png";
const server = "/images/themes/server.png";
const iot = "/images/themes/iot.png";
const blockchain = "/images/themes/blockchain.png";
const ml = "/images/themes/ml.png";

const Themes = () => {
  return (
    <div id="themes" className="py-24 text-white z-20 relative bg-[black] w-full scroll-smooth">
          
      <div className="flex justify-center my-2">
        <h1 className="text-2xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">Previous Tracks</h1>
      </div>
      <div className="flex flex-col items-center mx-6">
        <div className="flex flex-row flex-wrap justify-evenly items-center w-full max-h lg:w-4/5">
          <Item img={blockchain} text="Blockchain & Crypto" />
          <Item img={ml} text="Data & Gen-AI" />
          <Item img={server} text="CTF & Cyber Security" />
          <Item img={iot} text="Internet of Things" />
          <Item img={vr} text="AR / VR" />
          <Item img={cloud} text="Cloud & DevOps" />
          {/* <Item img={doctor} text="Healthcare" /> */}
          <Item img={doctor} text="Web & Mobile Development" />
          <Item img={development} text="Open Innovation" />
          {/* <Item img={book} text="Education" /> */}
        </div>
      </div>
    </div>
  );
};

export default Themes;
