import { Fragment } from "react";
import "./App.css";
import NavbarComponent from "./components/common/NavbarComponent";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import FeaturedSection from "./sections/FeaturedSection";

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
    </Fragment>
  );
}

export default App;
