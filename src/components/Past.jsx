"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  FaUsers,
  FaUniversity,
  FaEnvelopeOpenText,
  FaCity,
} from "react-icons/fa";

// CircleIcon component to render icons inside a circle
const CircleIcon = ({
  icon,
  size = "8rem",
  bgColor = "bg-blue-500",
  iconSize = "3rem",
}) => {
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
  const images = [
    "/images/acehack/pic8.jpg",
    "/images/acehack/pic7.jpg",
    
    "/images/acehack/pic5.jpg",
   
   
    "/images/acehack/pic1.jpg",
    "/images/acehack/pic2.jpg",
    "/images/acehack/pic3.jpg",
    "/images/acehack/pic4.jpg",
  ];

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % images.length);
    }, 3000); // Adjust for a slower transition

    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  return (
    <div
      id="past"
      className="pt-24 text-white z-20 relative bg-gradient-to-r from-[#fbff00] to-[#00f0ff] w-full py-10 h-fit scroll-smooth text-black"
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold pb-10 flex-wrap text-black">
          <span className="grad-text">AceHack 3.0</span> Highlights!
        </h1>

        <div className="flex sm:flex-row justify-evenly w-full p-10 flex-col text-black">
          <div className="flex flex-col items-center ">
            <CircleIcon
              icon={<FaEnvelopeOpenText />}
              iconSize="4rem"
              bgColor="bg-sky-500"
            />
            <p className="mt-2 text-3xl">3000+ Applications</p>
          </div>

          <div className="flex flex-col items-center">
            <CircleIcon
              icon={<FaUsers />}
              iconSize="4rem"
              bgColor="bg-emerald-500"
            />
            <p className="mt-2 text-3xl">700+ Participants</p>
          </div>

          <div className="flex flex-col items-center">
            <CircleIcon
              icon={<FaUniversity />}
              iconSize="4rem"
              bgColor="bg-sky-500"
            />
            <p className="mt-2 text-3xl">40+ Universities</p>
          </div>

          <div className="flex flex-col items-center">
            <CircleIcon
              icon={<FaCity />}
              iconSize="4rem"
              bgColor="bg-emerald-500"
            />
            <p className="mt-2 text-3xl">35+ Cities</p>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-10 flex-wrap text-black">
          Glimpses of Previous Year
        </h1>

        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
  {/* Slider Container */}
  <div
    className="flex transition-transform duration-1000 ease-linear"
    style={{ transform: `translateX(-${offset * (100 / 1)}%)` }}
  >
    {/* Duplicate images for seamless effect */}
    {[...images, ...images].map((src, index) => (
      <div
        key={index}
        className="w-full sm:w-1/3 px-2 flex-shrink-0 transform transition-transform hover:scale-105"
      >
        <img
          src={src}
          alt={`Gallery ${index + 1}`}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>
    ))}
  </div>
</div>

        <br></br>

        {/* Add Video Section */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-10 flex-wrap text-black">
          Experience AceHack in Action!
        </h1>
        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-72 md:h-96"
            src="https://www.youtube.com/embed/TiZbmEgvVdM
"
            title="AceHack Event Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Past;
