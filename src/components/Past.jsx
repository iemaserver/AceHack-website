import React from "react";
import { FaUsers, FaUniversity, FaEnvelopeOpenText, FaCity } from "react-icons/fa";

// CircleIcon component to render icons inside a circle
const CircleIcon = ({ icon, size = "8rem", bgColor = "bg-blue-500", iconSize = "3rem" }) => {
  return (
    <div
      className={`${bgColor} rounded-full flex justify-center items-center`}
      style={{ width: size, height: size }}
    >
      <div className="text-white" style={{ fontSize: iconSize }}>
        {icon}
      </div>
    </div>
  );
};

const Past = () => {
  return (
    <div
      id="past"
      className="pt-24 text-white z-20 relative bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  w-full py-10 h-fit scroll-smooth text-black"
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold pb-10 flex-wrap text-black">
          <span className="grad-text ">AceHack 4.0</span> Highlights!
        </h1>
        
        <div className="flex sm:flex-row justify-evenly w-full p-10 flex-col text-black">
          <div className="flex flex-col items-center ">
            <CircleIcon icon={<FaEnvelopeOpenText />} iconSize="4rem" bgColor="bg-sky-500" />
            <p className="mt-2 text-3xl">3000+ Applications</p>
          </div>
          
          <div className="flex flex-col items-center">
            <CircleIcon icon={<FaUsers />} iconSize="4rem" bgColor="bg-emerald-500" />
            <p className="mt-2 text-3xl">700+ Participants</p>
          </div>
          
          <div className="flex flex-col items-center">
            <CircleIcon icon={<FaUniversity />} iconSize="4rem" bgColor="bg-sky-500" />
            <p className="mt-2 text-3xl">40+ Universities</p>
          </div>
          
          <div className="flex flex-col items-center">
            <CircleIcon icon={<FaCity />} iconSize="4rem" bgColor="bg-emerald-500" />
            <p className="mt-2 text-3xl">35+ Cities</p>
          </div>
        </div>

        <h1 className="grad-text text-5xl font-bold py-6 text-black">Glimpses of Previous Year</h1>

        <div className="flex flex-wrap justify-center gap-8 my-6">
          {/* Image Gallery */}
          <div className="w-64 h-64 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img src="/images/acehack/pic1.jpg" alt="Gallery 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-64 h-64 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img src="/images/acehack/pic2.jpg" alt="Gallery 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-64 h-64 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img src="/images/acehack/pic3.jpg" alt="Gallery 3" className="w-full h-full object-cover" />
          </div>
          <div className="w-64 h-64 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img src="/images/acehack/pic4.jpg" alt="Gallery 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Past;
