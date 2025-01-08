"use client";

import React from "react";
const first = "/images/prizes/first.png";
const second = "/images/prizes/second.png";
const third = "/images/prizes/third.png";
const ctf = "/images/prizes/ctf-winner.png";
const box = "/images/prizes/mystery-box.png";

const Prizes = () => {
  return (
    <div className="py-12 w-full bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-10">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">Last Year Prize Pull</h1>
      <br></br>
      <br></br>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white   inline-block px-4 py-2">30,00,000+ INR</h2>
        <br></br>
        <br></br>
        <p className="text-2xl md:text-3xl font-semibold">
          Worth of Prize Pool
        </p>
      </div>
      <br></br>

      {/* Prize Cards */}
      <div className="flex flex-wrap justify-center  gap-24 px-4 margin-20p " >
        {/* 1st Prize */}
        <div className="relative bg-black/50 border border-4 border-green-300 rounded-lg text-center p-8 w-80 h-80  shadow-gradient">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-32 h-32 flex items-center justify-center rounded-full">
            <div className="text-4xl text-yellow-400 w-24 h-24  absolute"><img
                
                src={first}
                alt="prize"
              /></div>
          </div>
          <br></br>
          <br></br>
          
          <h2 className="text-3xl font-semibold mt-16 mb-4">1st Prize</h2>
          <p className="text-4xl font-bold text-green-400">₹ 30,000</p>
        </div>

        {/* 2nd Prize */}
        <div className="relative bg-black/50 border-4 border-green-300 rounded-lg text-center p-8 w-80 h-80 shadow-gradient">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-32 h-32 flex items-center justify-center rounded-full">
            <div className="text-4xl text-yellow-400 w-24 h-24  absolute"><img
                
                src={second}
                alt="prize"
              /></div>
          </div>
          <br></br>
          <br></br>
          <h2 className="text-3xl font-semibold mt-16 mb-4">2nd Prize</h2>
          <p className="text-4xl font-bold text-green-400">₹ 20,000</p>
        </div>

        {/* 3rd Prize */}
        <div className="relative bg-black/50 border-4 border-green-300 rounded-lg text-center p-8 w-80 h-80  shadow-gradient">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-32 h-32 flex items-center justify-center rounded-full">
            <div className="text-4xl text-yellow-400 w-24 h-24  absolute"><img
                
                src={third}
                alt="prize"
              /></div>
          </div>
          <br></br>
          <br></br>
          <h2 className="text-3xl font-semibold mt-16 mb-4">3rd Prize</h2>
          <p className="text-4xl font-bold text-green-400">₹ 15,000</p>
        </div>
       

        {/* 4th-10th Prize */}
        <div className="relative bg-black/50 border-4 border-green-300 rounded-lg text-center p-8 w-80 h-80  shadow-gradient">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-32 h-32 flex items-center justify-center rounded-full">
            <div className="text-4xl text-yellow-400 w-24 h-24  absolute"><img
                
                src={box}
                alt="prize"
                style={{borderRadius:"50%"}}
              /></div>
          </div>
          <br></br>
          <br></br>
          <h2 className="text-3xl font-semibold mt-16 mb-4">4th-10th Prize</h2>
          <p className="text-4xl font-bold">Swag Box</p>
        </div>
        

       
      </div>
      
      
    </div>
  );
};

export default Prizes;
