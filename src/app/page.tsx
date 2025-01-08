// import Navbar from "@/components/Navbar2";
import HeroSection from "../components/Hero";
import AboutAceHack from "@/components/AboutUs";
import Footer from "../components/Footer_01";
import Swag from "../components/Swag"
import Themes from "../components/Themes"
import Why from "../components/Why"
import Prizes from "../components/Prizes"
import Sponsor from "../components/Sponsor"
import Speakers from "../components/Speakers"
import Past from "../components/Past"
import Faculty from "../components/Faculty"


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

      <Swag/>

      <Themes/>

      <Why/>

      <Prizes/>

     
      <Past/>
      <Speakers/>
      <Faculty/>

      
      

      <Footer/>

      
    </>
  );
}
