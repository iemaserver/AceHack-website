import React from "react";
import FancyButton from "./FancyButton";

const PrizeItem = (props) => {
  return (
    <div
      className={`flex flex-col ${props.space} gradient-border`}
      id={`box`}
      style={{ borderWidth: "8px", borderColor: "transparent" }}
    >
      {props.image}
      <h2 className="text-2xl font-bold ">{props.title0}</h2>
      <h2 className="text-xl font-bold px-4 pb-2">{props.title}</h2>

      {/* <FancyButton data="Register" id="CTF" /> */}
      <p
        className={`text-4xl ${props.color} text- font-semibold pt-3 pb-10 px-4`}
      >
        {props.prize}
      </p>
    </div>
  );
};

export default PrizeItem;
