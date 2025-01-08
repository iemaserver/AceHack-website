import React from "react";
const meeting = "/images/why/mentors-icon.png";
const briefcase = "/images/why/briefcase-icon.png";
const food ="/images/why/food-box-icon.png";
const people = "/images/why/people-icon.png";
const project = "/images/why/project-development-icon.png";
// import tshirt = "/assets/images/why/tshirt.png";
const giftBox = "/images/why/giftBox.png";

const Why = () => {
  return (
    <div className="py-12 w-full bg-gradient-to-r from-[#00f0ff] to-[#fbff00] relative z-20 text-black scroll-smooth">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center">
          <h1 className="px-2  text-center text-5xl font-bold my-4">
            Why should you attend
            <span className="grad-text"> AceHack 4.0?</span>
          </h1>
        </div>
        <div className="flex flex-row w-[70%] flex-wrap justify-evenly text-black-100/90 font-bold">
          <div className="text-center w-80 flex flex-col items-center">
            <img src={meeting} alt="meeting" className="h-48 mt-10 mb-3" />
            <h1 className="text-xl font-semibold">
              Meet India’s biggest Tech Giants
            </h1>
          </div>
          <div className="text-center w-80 flex flex-col items-center">
            <img src={people} alt="meeting" className="h-48 mt-10 mb-3" />
            <h1 className="text-xl font-semibold">
              Connect with like-minded people
            </h1>
          </div>
          <div className="text-center w-80 flex flex-col items-center">
            <img src={project} alt="meeting" className="h-48 mt-10 mb-3" />
            <h1 className="text-xl font-semibold">
              Opportunities to work on a real life problem statement
            </h1>
          </div>
          <div className="text-center w-80 flex flex-col items-center">
            <img src={briefcase} alt="meeting" className="h-48 mt-10 mb-3" />
            <h1 className="text-xl font-semibold">Job Opportunities</h1>
          </div>
          <div className="text-center w-80 flex flex-col items-center">
            <img src={food} alt="meeting" className="h-48 mt-10 mb-3" />
            <h1 className="text-xl font-semibold">
              Get free food & fun environment
            </h1>
          </div>
          <div className="text-center w-80 flex flex-col items-center">
            <img src={giftBox} alt="meeting" className="h-48 mt-10 mb-3" />
            <h1 className="text-xl font-semibold">
              Chance to win exciting swags and goodies.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
