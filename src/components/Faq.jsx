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
        className="px-4 py-3 cursor-pointer text-sm sm:text-base md:text-lg font-semibold flex justify-between items-center"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick();
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
        <div className="px-4 py-2 text-xs sm:text-sm md:text-base">
          {children}
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const faqData = [
    {
      question: "What is AceHack 4.0?",
      answer: "AceHack 4.0 is one of Rajasthan's most exciting and inclusive hackathons. Itʼs a 24-hour in-person event where participants gather to learn, innovate, and create amazing projects."
    },
    {
      question: "Where is AceHack 4.0 being held?",
      answer: "The event will be hosted at UEM Jaipur, Rajasthan."
    },
    {
      question: "When is AceHack 4.0 taking place?",
      answer: "AceHack 4.0 is a 24-hour hackathon scheduled for March 8-9, 2025."
    },
    {
      question: "What is the allowed team size?",
      answer: "Teams can consist of 2 to 4 members. Solo participation is also permitted."
    },
    {
      question: "Do I need specific qualifications to participate in AceHack 4.0?",
      answer: "No specific qualifications are required! If you have a passion for technology, coding, and innovation, youʼre eligible. Participants under age 18 are welcome but must provide parental consent to attend."
    },
    {
      question: "I am a newbie. Can I participate?",
      answer: "Absolutely! AceHack 4.0 welcomes participants of all experience levels, from beginners to experts. Mentors and volunteers will be there to guide you throughout the event."
    },
    {
      question: "Is there any registration fee for participation?",
      answer: "No, AceHack 4.0 is completely free to join. In fact, participants will receive goodies and swags to make the experience even more memorable."
    },
    {
      question: "Can I start working on my project before the event?",
      answer: "No, pre-work is not allowed. All project development must begin when the hackathon starts. However, you can familiarize yourself with tools and technologies in advance."
    },
    {
      question: "Are there predefined themes or tracks for the hackathon?",
      answer: "Yes, there are specific tracks, but participants also have the freedom to work under the Open Innovation category, provided their projects align with the hackathonʼs spirit."
    },
    {
      question: "Are there predefined problem statements for the hackathon?",
      answer: "Yes, the hackathon will feature predefined problem statements from various tracks, allowing participants to select one that matches their interests. One of the best aspects of solving predefined problems is that sponsors often offer bounties or goodies as rewards for utilizing their technology or presenting innovative solutions. Even if you don’t secure a top position, you are still eligible to receive bounties and goodies from the sponsors. However, participants also have the flexibility to choose the Open Innovation track, where they can work on unique ideas outside the predefined problem statements."
    },
    {
      question: "When will the problem statements for the hackathon be revealed?",
      answer: "The problem statements will be revealed at the start of the hackathon on the event day and will not be shared beforehand. They will be provided the day after the inauguration of the hackathon."
    },
    {
      question: "How do we register for AceHack 4.0?",
      answer: "The team leader must visit the official website and click the 'Register now' button. After registering as a hacker on the DoraHacks website, they will be redirected to the Team Registration form where they can fill in all details for themselves and team members."
    },
    {
      question: "Do my team members need to register separately?",
      answer: "No, team members do not need to register individually. The team leader will fill out their details in the registration form."
    },
    {
      question: "What is the shortlisting procedure?",
      answer: "Teams will be shortlisted based on the information and social links submitted in the team registration forms filled by the team leader."
    },
    {
      question: "I am new to Jaipur. How do I reach the venue?",
      answer: "You can reach UEM Jaipur using the map directions provided below or use the bus service offered by Team AceHack on March 8. We'll provide buses from major transit points like the railway station and bus stand to the venue. The specific bus stops and routes will be announced soon. On March 9, return buses will be available to these same locations. Please note that this service operates on a first-come, first-served basis and may not be available for all participants, as we're expecting around 700 hackers this year.\n\n**Google Map Location:** GURUKUL, 6 kms from Chomu on Sikar Road (NH-11), Udaipuria Mod, Jaipur-303807, Rajasthan [View on Google Maps](https://maps.app.goo.gl/Fe6eS1qxAx2Di5FN9)"
    },
    {
      question: "I have to book a return ticket. By what time will the hackathon end so that I can get back to the station?",
      answer: "The hackathon and ceremony are expected to end between 7-8 PM on 9th March. It will take around 1.5 hours to reach the station, bus stand, or airport. We recommend booking return tickets after 10:30 PM to avoid any risk."
    },
    {
      question: "Will food be provided during the hackathon?",
      answer: "Yes, the organizers will provide free meals for all participants during the hackathon to keep you energized and focused on your projects!"
    },
    {
      question: "Will accommodation be provided to participants?",
      answer: "Yes, shared accommodation will be provided for all participants, with separate arrangements for female participants. Private rooms are not available."
    },
    {
      question: "Can we leave the venue during the hackathon?",
      answer: "No, participants are required to stay at the venue throughout the event. Leaving will result in disqualification."
    },
    {
      question: "Can we stay at the venue before or after the hackathon?",
      answer: "Participants can stay at the venue starting from the afternoon of 7th March until the morning of 10th March. Participants are required to vacate the venue by the morning of 10th March."
    },
    {
      question: "Is there a resource to help me prepare for the hackathon, including tips, tricks, and guidance?",
      answer: "Yes! AceHack offers multiple resources to help you prepare effectively. We have a **Daily Blog Series** that covers tips, tricks, dos and don’ts, methods for ideation and execution, coding best practices, and much more. Additionally, we have the **HackerTV Podcast Series**, where industry and tech experts share insights, discuss the latest tech news, and answer your doubts related to the tech industry and hackathon world. Be sure to check out these resources to stay motivated, informed, and ready for the event:\n\n**Blog Series:** https://lnk.at/acehackblog\n\n**HackerTv Podcast Playlist:** https://yt.openinapp.co/Hackertv---season-2"
    },
    {
      question: "I have an issue not listed here. How can I get help?",
      answer: "For any additional queries, feel free to email us at [acehack@uem.edu.in](mailto:acehack@uem.edu.in). Alternatively, join our Discord server at https://discord.openinapp.co/acehack4 and raise a ticket to connect directly with the organizers. We’re here to help!"
    }
  ];
  

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 6); // Show limited FAQs initially

  return (
    <div
      id="faq"
      className="relative bg-black w-full text-white p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <div className="my-8 flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#fbff00] to-[#00f0ff]">
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
            <p className="text-black">{item.answer}</p>
          </Collapsible>
        ))}

        <div className="flex justify-center mt-6">
          <button
            onClick={toggleShowAll}
            className="text-sm sm:text-base bg-gradient-to-r from-[#fbff00] to-[#00f0ff] text-black font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:brightness-90"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
