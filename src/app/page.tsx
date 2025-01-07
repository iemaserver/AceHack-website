// import Navbar from "@/components/Navbar2";
import HeroSection from "../components/Hero";
import AboutAceHack from "@/components/AboutUs";
import Footer from "../components/Footer_01";
import SponsorsSection from "@/components/sponsors";

export default function Home() {
  return (
    <>
      <div></div>
      <div id="home" className="relative h-screen ">
        <HeroSection />
      </div>
      <div id="about" className="relative">
        <AboutAceHack />
      </div>
      <div id="sponsors" className="relative">
        <SponsorsSection />
      </div>
      

      <Footer/>

      
    </>
  );
}
