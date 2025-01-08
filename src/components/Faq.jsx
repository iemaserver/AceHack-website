"use client";
import React, { useState } from "react";

const Collapsible = ({ label, children, isOpen, onClick, style }) => {
  return (
    <div
      className={`transition-all duration-300 ${style} ${
        isOpen ? "max-h-screen" : "max-h-10 overflow-hidden"
      }`}
      onClick={onClick}
    >
      <div className="px-4 py-2 cursor-pointer text-lg font-semibold">{label}</div>
      {isOpen && <div className="px-4 py-2 text-sm">{children}</div>}
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="relative scroll-smooth bg-black w-full text-white p-10"
    >
      <div className="my-10 flex flex-col gap-4">
        <div className="flex flex-row justify-center mb-6">
        <h1 className="text-5xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]  inline-block px-4 py-2">FAQs</h1>
        </div>
        
        {[
          {
            question: "What is a Hackathon?",
            answer:
              "A hackathon is a design sprint-like event in which programmers and others collaborate intensively on software projects.",
          },,
          {
            question: "Do I Need To Pay Any Money To Register?",
            answer: "No, you do not need to pay...",
          },
          {
            question: "Who can apply?",
            answer: "Anyone having a knack for solving real-life problems...",
          },
          {
            question: "What Is The Procedure Of Forming A Team?",
            answer: "Firstly make sure all teammates have registered...",
          },
          {
            question: "What will be the problem statements?",
            answer: "Problem statements will be announced at the start of the hackathon.",
          },
          {
            question: "Will there be goodies and swag?",
            answer: "Yes, participants will receive t-shirts, goodies, and swag.",
          },
          {
            question: "What Can Be The Size Of The Team?",
            answer: "A team can consist of 2 to 4 members. Solo participation is also allowed.",
          },
          {
            question: "Are there prizes for winners?",
            answer: "Yes, exciting prizes will be awarded to the top-performing teams.",
          },
        ].map((item, index) => (
          <Collapsible
            key={index}
            style={`bg-gradient-to-r from-[#fbff00] to-[#00f0ff] rounded-md  mx-auto w-10/12 text-black `}
            label={item.question}
            isOpen={openIndex === index}
            onClick={() => toggleQuestion(index)}
          >
            <p className="text-black text-xl">{item.answer}</p>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default Faq;
