"use client";
import React from "react";
import ImageSlider from "../components/ImageSlider";
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

     

<ImageSlider/>


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
