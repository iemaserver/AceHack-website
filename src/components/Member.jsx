import React from "react";

const Member = (props) => {
  return (
    <div className=" w-72 m-6 bg-gray-900 group hover:bg-gradient-to-br from-yellow-700/30 to-gray-900 rounded-xl shadow-lg p-12 flex flex-col justify-center items-center z-30">
      <div className="mb-10">
        <img
          className="object-center object-cover rounded-full h-36 w-36 group-hover:ring-8 ring-yellow-600 ring-8 sm:ring-0"
          src={props.image}
          alt="photo"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="text-xl text-white font-bold mb-6">{props.name}</p>
        {props.social}
        <p className="text-base sm:opacity-0 text-gray-400 font-normal md:group-hover:animate-fadeIn opacity-1">
          {props.role}
        </p>
      </div>
    </div>
  );
};

export default Member;
