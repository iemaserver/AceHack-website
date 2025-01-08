import React from "react";
import Member from "../components/Member";

const vc ="/images/faculty/vc.jpeg";
const dipta = "/images/faculty/dipta.jpeg";
// import mrinal from "/assets/images/faculty/mrinal.jpeg";
const uma = "/images/faculty/umadevi.jpg";
const sagarika ="/images/faculty/sagarika1.jpeg";

const Faculty = () => {
  return (
    <div className="relative items-center justify-center bg-gradient-to-r from-[#fbff00] to-[#00f0ff] backdrop-blur-lg w-full z-20 py-10 scroll-smooth">
      <section className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px- py-12">
        <div className="flex flex-row justify-center w-full">
          <h1 className="font-bold text-5xl mb-10 text-black text-center">
            <span className="grad-text">Faculty</span> coordinators
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Member
            image={vc}
            name="Prof. Dr. Biswajoy Chatterjee"
            role="Vice Chancellor, UEM Jaipur"
          />
          {/* <Member
            image={mrinal}
            name="Prof. Mrinal Sarkar"
            role="HOD CSE Dept, UEM Jaipur"
          /> */}
          <Member
            image={uma}
            name="Prof. Dr. G. Uma Devi"
            role="Associate Dean & HOD, Dept. of CSE, UEM Jaipur"
          />
          <Member
            image={dipta}
            name="Prof. Dipta Mukherjee"
            role="Prof. CSE Dept, UEM Jaipur"
          />
          <Member
            image={sagarika}
            name="Prof. Sagarika Ghosh"
            role="Prof. CSE Dept, UEM Jaipur"
          />
        </div>
      </section>
    </div>
  );
};

export default Faculty;
