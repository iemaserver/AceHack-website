import React from "react";

const Pictures = ({ imgSrc }) => {
  return (
    <div className="shrink-0 md:my-0 my-8 md:px-10 md:py-10 py-2 ">
      <img
        src={imgSrc}
        className="rounded-lg shadow-2xl hover:shadow-violet-700 max-h-64"
      />
    </div>
  );
};

export default Pictures;
