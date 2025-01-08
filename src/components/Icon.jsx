import React from "react";

const Icon = ({ icon, height, data }) => {
    
    
    return (
        <div className="flex items-center mx-4 my-5 bg-gray-900">
            <img src={icon} className={height} />
            <p className="text-3xl">{data}</p>
        </div>
    );
};

export default Icon;