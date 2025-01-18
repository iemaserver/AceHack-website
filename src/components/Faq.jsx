"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import Font Awesome Chevron Down icon

const Collapsible = ({ label, children, isOpen, onClick, style }) => {
  return (
    <div
      className={`transition-all duration-300 ${style} ${
        isOpen ? "max-h-screen" : "max-h-14 overflow-hidden"
      }`}
    >
      <div
        className="px-4 py-3 cursor-pointer text-base sm:text-lg md:text-xl font-semibold flex justify-between items-center"
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior
          e.stopPropagation(); // Stop event propagation
          onClick(); // Trigger the toggle logic
        }}
      >
        <span>{label}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {isOpen && (
        <div className="px-4 py-2 text-sm sm:text-base md:text-lg">{children}</div>
      )}
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false); // State to toggle the "See More" button

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle logic
  };

  const toggleShowAll = () => {
    setShowAll(!showAll); // Toggle visibility of extra questions
  };

  const faqData = [
    {
      question: "What is AceHack 4.0?",
      answer:
        "AceHack 4.0 is one of Rajasthan's most exciting and inclusive hackathons. It’s a 24-hour in-person event where participants gather to learn, innovate, and create amazing projects.",
    },
    {
      question: "Where is AceHack 4.0 being held?",
      answer: "The event will be hosted at UEM Jaipur, Rajasthan.",
    },
    {
      question: "When is AceHack 4.0 taking place?",
      answer: "AceHack 4.0 is a 24-hour hackathon scheduled for March 8-9, 2025.",
    },
    {
      question: "What is the allowed team size?",
      answer:
        "Teams can consist of 2 to 4 members. Solo participation is also permitted.",
    },
    {
      question: "Do I need specific qualifications to participate in AceHack 4.0?",
      answer:
        "No specific qualifications are required! If you have a passion for technology, coding, and innovation, you’re eligible. Participants under 18 are welcome but must provide parental consent to attend.",
    },
    {
      question: "I am a newbie. Can I participate?",
      answer:
        "Absolutely! AceHack 4.0 welcomes participants of all experience levels, from beginners to experts. Mentors and volunteers will be there to guide you throughout the event.",
    },
    {
      question: "Is there any registration fee for participation?",
      answer: "No, AceHack 4.0 is completely free to join.",
    },
    {
      question: "Can I start working on my project before the event?",
      answer:
        "No pre-work is allowed. All project development must begin when the hackathon starts. However, you can familiarize yourself with tools and technologies in advance.",
    },
    {
      question: "Are there predefined themes or tracks for the hackathon?",
      answer:
        "Yes, there are specific tracks, but participants also have the freedom to work under the Open Innovation category, provided their projects align with the hackathon’s spirit.",
    },
    {
      question: "Are there predefined problem statements for the hackathon?",
      answer:
        "Yes, the hackathon will feature problem statements from various tracks, allowing participants to select one that matches their interests. Participants also have the flexibility to choose the Open Innovation track, where they can work on unique ideas.",
    },
    {
      question: "When will the problem statements for the hackathon be revealed?",
      answer:
        "The problem statements will be revealed at the start of the hackathon on the event day and will not be shared beforehand.",
    },
    {
      question: "How do we register for AceHack 4.0?",
      answer:
        'The team leader must visit the official website and click the "Register now" button. After registering as a hacker on the DoraHacks website, they will be redirected to the Team Registration form where they can fill in all details for themselves and team members.',
    },
    {
      question: "Do my team members need to register separately?",
      answer:
        "No, team members do not need to register individually. The team leader will fill out their details in the registration form.",
    },
  ];

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 6); // Show limited FAQs initially

  return (
    <div
      id="faq"
      className="relative scroll-smooth bg-black w-full text-white p-5 sm:p-8 md:p-10"
    >
      <div className="my-10 flex flex-col gap-6">
        <div className="flex flex-row justify-center mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff] px-4 py-2">
            FAQs
          </h1>
        </div>

        {visibleFaqs.map((item, index) => (
          <Collapsible
            key={index}
            style={`bg-gradient-to-r from-[#fbff00] to-[#00f0ff] rounded-md mx-auto w-full sm:w-11/12 lg:w-9/12 text-black`}
            label={item.question}
            isOpen={openIndex === index}
            onClick={() => toggleQuestion(index)}
          >
            <p className="text-black text-sm sm:text-base md:text-lg">
              {item.answer}
            </p>
          </Collapsible>
        ))}

        {/* See More / See Less Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleShowAll}
            className="bg-gradient-to-r from-[#fbff00] to-[#00f0ff] text-black font-700-bold py-4 px-8 rounded-lg transition-all duration-300 hover:brightness-90"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
