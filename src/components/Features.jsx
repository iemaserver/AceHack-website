import React from "react";

const Features = (props) => {
  if (props.color === "sky") {
    return (
      <div className="flex flex-col items-center">
        <div className="rounded-[50%] bg-purple-400/80 p-4 m-3 ring-[6px] ring-purple-700 hover:bg-purple-300">
          <svg className="h-32 w-32 scale-75 hover:transition duration-200 hover:scale-[80%]">
            {props.icon}
          </svg>
        </div>
        <p className="my-2 font-bold text-4xl text-purple-400">{props.count}+</p>
        <p className="font-semibold text-purple-400 text-xl">{props.text}</p>
      </div>
    );
  } else if (props.color === "emerald") {
    return (
      <div className="flex flex-col items-center">
        <div className="rounded-[50%] bg-fuchsia-400/80 p-4 m-3 ring-[6px] ring-fuchsia-600 hover:bg-fuchsia-300">
          <svg className="h-32 w-32 scale-75 hover:transition duration-200 hover:scale-[80%]">
            {props.icon}
          </svg>
        </div>
        <p className="my-2 font-bold text-4xl text-fuchsia-300">
          {props.count}+
        </p>
        <p className="font-semibold text-fuchsia-300 text-xl">{props.text}</p>
      </div>
    );
  }
};

export default Features;
