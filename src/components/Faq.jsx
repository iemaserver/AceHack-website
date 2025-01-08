"use client";
import React from "react";
import Collapsible from "../components/Collapsible";

const Faq = () => {
  return (
    <div
      id="faq"
      className="relative scroll-smooth bg-[#230440] w-full text-white p-10"
    >
      <div className="my-10 flex flex-col gap-4">
        <h1 className="text-4xl font-bold grad-text pl-1">FAQs</h1>
        <Collapsible
          style="bg-purple-900/50 rounded-md py-1 ml-2"
          label="What is a Hackathon?"
        >
          <p className="faq-ans">
            A hackathon is a design sprint-like event in which computer
            programmers and others involved in software development, including
            graphic designers, interface designers, project managers, domain
            experts, and others, collaborate intensively on software projects. A
            hackathon typically lasts between a day and a week.
          </p>
        </Collapsible>
        <Collapsible
          style="bg-purple-900/50 rounded-md py-1 ml-2"
          label="Do I Need To Pay Any Money To Register ?"
        >
          <p className="faq-ans">
            No, You do not have to pay anything to anyone to register yourself
            for AceHack 4.0
          </p>
        </Collapsible>
        <Collapsible
          style="bg-purple-900/50 rounded-md py-1 ml-2"
          label="Who can apply ?"
        >
          <p className="faq-ans">
            Anyone (must be a college/School student or working professionals) having a knack of solving
            real life problems can apply for the hackathon.
          </p>
        </Collapsible>
        <Collapsible
          style="bg-purple-900/50 rounded-md py-1 ml-2"
          label="What Is The Procedure Of Forming A Team ?"
        >
          <p className="faq-ans">
            Firstly make sure all teammates have registered on DoraHacks. You can
            create your team 
            {/* from the devfolio dashboard. */} on the platform.
          </p>
        </Collapsible>
        <Collapsible
          style="bg-purple-900/50 rounded-md py-1 ml-2"
          label="What will be the problem statements ?"
        >
          <p className="faq-ans">
            We will announce problem statements for each domain you need to
            solve along with your mentors when the hackathon starts.{" "}
          </p>
        </Collapsible>
        <Collapsible
          style="bg-purple-900/50 rounded-md py-1 ml-2"
          label="Will there be goodies and swag ?"
        >
          <p className="faq-ans">
            Yes, we will be providing <i>t-shirt</i>, <i>goodies</i> and <i>swag</i> to all the participants.
          </p>
        </Collapsible>
        <Collapsible
          style="bg-purple-900/50 rounded-md py-1 ml-2"
          label="What Can Be The Size Of The Team ?"
        >
          <p className="faq-ans">A team can consist of 2 to 4 members. However, You can participate solo.</p>
        </Collapsible>
        <Collapsible
          style="bg-purple-900/50 rounded-md py-1 ml-2"
          label="What Is The Criteria For Selection Of A Team?"
        >
          <p className="faq-ans">
            If 75% members of a team have a decent profile, the team will get
            shortlisted. In a rare case where a team is not shortlisted, that
            team can contact us for the re-evaluation of their team.
          </p>
        </Collapsible>
        <Collapsible
          style="bg-purple-900/50 rounded-md py-1 ml-2"
          label="What about the travel ?"
        >
          <p className="faq-ans">
            {/* We will provide a bus to the participants, from Badi chaupar, Chomu
            pulia and others too. */}
            We will provide bus services in Jaipur ( <i>route will be announced later</i> ).
          </p>
        </Collapsible>
      </div>
    </div>
  );
};

export default Faq;
