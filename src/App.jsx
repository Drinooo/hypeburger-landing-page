import { Fragment } from "react";
import "./App.css";
import NavbarComponent from "./components/common/NavbarComponent";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import FeaturedSection from "./sections/FeaturedSection";
import TestimonialSection from "./sections/TestimonialSection";

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <TestimonialSection />
    </Fragment>
  );
}

export default App;
