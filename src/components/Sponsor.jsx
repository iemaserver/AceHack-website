import React from "react";
import FancyButton from "../components/FancyButton";
import Icon from "../components/Icon";

const uem = "/images/uem.png";
// import acm from "/assets/images/acm.jpeg";
// import acm from "/assets/images/acmlogo.png";
const acm  ="images/acm-blu.png";
const iic  ="images/iic.jfif";
const eduhub = "images/eduhub.png";
// /workspaces/Acehack3/public/assets/images/eduhub.png

const echo3D= "/images/sponsors/echo3D.png";
const sticker_mule = "/images/sponsors/sticker_mule.png";
const wolfram = "/images/sponsors/Wolfram.jpg";
const devfolio ="/images/newSponsors/devfolio.svg";
const ctf = "/images/newSponsors/YCF-1.png";
const rj = "/images/newSponsors/rj.png";
// import devfolio from "/assets/images/sponsors/devfolio.png";
const replit = "/images/sponsors/replit.png";

const nordek = "/images/newSponsors/Nordek.svg";
const polygon = "/images/newSponsors/polygon-logo.svg";
const archway = "/images/newSponsors/archway.png";
const aptos = "/images/newSponsors/aptos.svg";
const stellar = "/images/newSponsors/stellar.svg";
const risein = "/images/newSponsors/resein.svg";
const nordekgenesis = "/images/newSponsors/NordekGenesis.png";
// const polygon = "/images/sponsors/polygon.png";

const taskade = "/images/newSponsors/taskade.svg";
const bobbleai = "/images/newSponsors/bobble-ai.png";
const iba = "/images/newSponsors/iba.png";
const quillaudit = "/images/newSponsors/quillaudit.png";
// const quillaudit = "/images/newSponsors/QuillAudit.webp";

const orkes = "/images/newSponsors/orkes.svg";
const hackquest = "/images/newSponsors/hackquest.webp";
const jumbo = "/images/newSponsors/jumbo.svg";
// const hackquest = "/images/newSponsors/hackquest.webp";

const solana = "/images/sponsors/solana.svg";
const filecoin = "/images/sponsors/filecoin.png";
const balsamiq = "/images/sponsors/balsamiq.png";
const dapps = "/images/sponsors/dapps.jpeg";
const beeseptor = "/images/sponsors/beeseptor.svg";
const postman = "/images/sponsors/postman.svg";
const rpLogo = "/images/sponsors/rpLogo.jpg";

const codesquad = "/images/community/codesquad.jpg";
const devStation = "/images/community/dev_station.png";
const devorld = "/images/community/devorld.png";
const zetapass = "/images/community/zetapass.png";
const gfg_rtu = "/images/community/gfg_rtu.png";
const hussky = "/images/community/hussky.jpg";
const vmace = "/images/community/vmace.jpg";
const skit = "/images/community/skit.jpeg";
const cbs = "/images/community/cbs.jpeg";
const poornima = "/images/community/poornima.jpeg";


const Sponsor = () => {
  return (
    <div
      id="sponsor"
      className="py-16 text-white z-20 relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 w-full scroll-smooth"
    >
      
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold pb-10">
          <span className="grad-text">Organized </span>By
        </h1>
        {/* <h1 className="text-5xl font-bold pb-10">
          Our <span className="grad-text">Associate </span>Partners
        </h1> */}
        <div className="flex flex-row flex-wrap justify-center w-4/5">
          {/* <Icon icon={rpLogo} height="h-28" /> */}
          {/* <Icon icon={uem} height="h-28" /> */}

          <a href="https://uem.edu.in/uem-jaipur/" target={"_blank"}>
            <Icon icon={uem} height="h-28 bg-white px-3 py-1" />
          </a>
          <a href="https://acm-jaipur.uem.edu.in/" target={"_blank"}>
            <Icon icon={acm} height="h-28 bg-white px-2" />
          </a>
          {/* <Icon icon={acm} height="h-28" /> */}
          <Icon icon={iic} height="h-28 p-2 bg-white" />
          {/* <Icon icon={eduhub} height="h-28" /> */}
          <a href="https://eduhubcommunity.tech/" target={"_blank"}>
            <Icon icon={eduhub} height="h-28 bg-white px-2" />
          </a>
          {/* <Icon icon={iba} height="h-28 bg-white" /> */}
          <a href="https://indiablockchainalliance.org/" target={"_blank"}>
            <Icon icon={iba} height="h-28 bg-white" />
          </a>
          <a href="https://indiablockchainalliance.org/" target={"_blank"}>
            <Icon icon={rj} height="h-28 p-2 bg-white" />
          </a>
        </div>

        {/*Powered by Nordek */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Powered</span> By
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://www.nordek.io/" target={"_blank"}>
            <Icon icon={nordek} height="h-28 py-5 px-8" />
          </a>
        </div>

        {/* Platinum Sponsors */}
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Platinum</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://orkes.io/" target={"_blank"}>
            <Icon icon={orkes} height="h-28 px-10 py-4 bg-white" />
          </a>
          {/* <a href="https://nsb.dev/polygon-bounty" target={"_blank"}>
            <Icon icon={polygon} height="h-28 px-4 py-6" />
          </a> */}
          {/* <a href="https://nsb.dev/polygon-bounty" target={"_blank"}>
            <Icon icon={polygon} height="h-28 px-4 py-6" />
          </a> */}
        </div>

        {/* Gold Sponsors */}
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Gold</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://bobble.ai/en/home" target={"_blank"}>
            <Icon icon={bobbleai} height="h-28 px-10 py-4 bg-white" />
          </a>
          <a href="https://www.hackquest.io/" target={"_blank"}>
            <Icon icon={hackquest} height="h-28 px-6 py-10 bg-black " />
          </a>
          {/* <a href="https://nsb.dev/polygon-bounty" target={"_blank"}>
            <Icon icon={polygon} height="h-28 px-4 py-6" />
          </a> */}
        </div>

        {/* Silver Sponsors */}
        
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Silver</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          {/* <a href="https://nsb.dev/solana-bounty" target={"_blank"}>
            <Icon icon={solana} height="h-24 px-4 py-6" />
          </a> */}
          <a href="https://nsb.dev/replit-bounty" target={"_blank"}>
            <Icon icon={replit} height="h-28 px-10 py-6" />
          </a>
          <a href="https://jumbochain.org/" target={"_blank"}>
            <Icon icon={jumbo} height="h-28 px-4 py-6" data="Jumbo Blockchain"/>
          </a>
          {/* <a href="https://maqtoob-testnet.dapps.co/" target={"_blank"}>
            <Icon icon={dapps} height="h-28 px-4 py-6 bg-white" />
          </a> */}
          <a href="https://www.taskade.com/" target={"_blank"}>
            <Icon icon={taskade} height="h-28 px-6 py-6" />
          </a>
          {/* <a href="https://www.postman.com/" target={"_blank"}>
            <Icon icon={postman} height="h-28 px-4 py-6" />
          </a> */}
        </div>

        {/* Bronze Sponsors */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Bronze</span> Sponsors
        </h1>
        <p>...Coming Soon</p>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          {/* <a href="https://beeceptor.com/" target={"_blank"}>
            <Icon icon={beeseptor} height="h-28 px-4 py-6" />
          </a> */}
        </div>

        {/* Inkind sponsors */}

        {/* <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">In-Kind</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://www.echo3d.com/" target={"_blank"}>
            <Icon icon={echo3D} height="h-28" />
          </a>
          <a href="https://www.wolfram.com/language" target={"_blank"}>
            <Icon icon={wolfram} height="h-24 " />
          </a>
          <a href="https://mule.to/p3tf" target={"_blank"}>
            <Icon icon={sticker_mule} height="h-28" />
          </a>
          <a href="https://balsamiq.cloud/" target={"_blank"}>
            <Icon icon={balsamiq} height="h-28" />
          </a>
        </div> */}

        {/* Web3 Security Partner */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Web3</span> Security Partner
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://www.quillaudits.com/" target={"_blank"}>
            <Icon icon={quillaudit} height="h-28" />
          </a>
        </div>
        {/* Web3 Education Partner */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Web3</span> Education Partner
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://www.risein.com/" target={"_blank"}>
            <Icon icon={risein} height="h-28 bg-white px-8 py-2" />
          </a>
        </div>

        {/*Platform Sponsor */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Platform</span> Sponsor
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://devfolio.co/discover" target={"_blank"}>
            <Icon icon={devfolio} height="h-28 p-5" />
          </a>
        </div>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://ycfteam.in/" target={"_blank"}>
            <Icon icon={ctf} height="h-28 p-3" />
          </a>
        </div>

                    {/* Web3 Track Sponsor */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Web3</span> Track Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://polygon.technology/" target={"_blank"}>
            <Icon icon={polygon} height="h-28 bg-bl py-2 px-8" />
          </a>
          <a href="https://archway.io/" target={"_blank"}>
            <Icon icon={archway} height="h-28" />
          </a>
          <a href="https://aptosfoundation.org/" target={"_blank"}>
            <Icon icon={aptos} height="h-28 bg-white px-5" />
          </a>
          <a href="https://stellar.org/" target={"_blank"}>
            <Icon icon={stellar} height="h-28 bg-white px-5 py-5" />
          </a>
          <a href="https://www.nordek.io/nordek-genesis" target={"_blank"}>
            <Icon icon={nordekgenesis} height="h-28 bg-black" />
          </a>
        </div>

        {/* Community Partners */}
        {/* <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Community</span> Partners
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center gap-4">
          <Icon icon={devStation} height="h-32" />
          <Icon icon={devorld} height="h-32" />
          <Icon icon={skit} height="h-32" />
          <Icon icon={gfg_rtu} height="h-32" />
          <Icon icon={hussky} height="h-32" />
          <Icon icon={codesquad} height="h-32" />
          <Icon icon={vmace} height="h-32" />
          <Icon icon={zetapass} height="h-32" />
          <Icon icon={cbs} height="h-32" />
          <Icon icon={poornima} height="h-32" />
        </div> */}

        <p className="text-4xl font-extrabold pt-10">
          Become a{" "}
          <span className="underline-offset-8 underline decoration-violet-400">
            sponsor
          </span>{" "}
          of <b className="grad-text"> AceHack 3.0</b>{" "}
        </p>
        <a
          href="https://drive.google.com/file/d/1cADr4eSoVO1U_LuxpLPtPBiwggaeDLcG/view?usp=sharing"
          target={"_blank"}
          className="mt-10 text-black"
        >
          <FancyButton data="Sponsor Us" />
        </a>
      </div>
    </div>
  );
};

export default Sponsor;
