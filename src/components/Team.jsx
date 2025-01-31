import React from "react";

const Team = () => {
  return (
    <section className="py-16 bg-[#0a0a0a] text-white text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff] inline-block px-4 py-2">
        Meet Our Team
      </h2>

      {/* Team Image Container */}
      <div className="mt-10 flex justify-center px-2 md:px-0">
        <div className="relative w-full max-w-6xl sm:max-w-5xl md:max-w-4xl lg:max-w-3xl overflow-hidden rounded-lg shadow-lg md:shadow-xl transition-all duration-300 hover:shadow-2xl mx-2 md:mx-0">
          <img
            src="/images/team3.0.jpg" // Replace with actual team image path
            alt="AceHack Team"
            className="w-full h-auto max-h-[500px] md:max-h-[600px] object-cover transition-all duration-300 transform hover:scale-95"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
