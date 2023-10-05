import { Fragment } from "react";
import "./App.css";
import NavbarComponent from "./components/common/NavbarComponent";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import FeaturedSection from "./sections/FeaturedSection";
import TestimonialSection from "./sections/TestimonialSection";
import CTASection from "./sections/CTASection";
import BannerSection from "./sections/BannerSection";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <TestimonialSection />
      <CTASection />
      <div className="py-[150px]">
        <img src="/images/Banner/Tape.png" alt="" className="w-full" />
      </div>
      <FooterSection />
    </Fragment>
  );
}

export default App;
