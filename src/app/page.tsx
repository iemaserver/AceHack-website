// import Navbar from "@/components/Navbar2";
import HeroSection from "../components/Hero";
import AboutAceHack from "@/components/AboutUs";

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
    </>
  );
}
