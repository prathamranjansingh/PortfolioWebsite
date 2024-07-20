import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/NavBar/Navbar";
import ProjectGallery from "./components/ProjectGallery/ProjectGallery";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { FadeIn } from "./components/FadeIn/FadeIn";
function App() {
  return (
    <div className="App ">
      <Navbar />

      <FadeIn>
        <HeroSection />
      </FadeIn>
      <FadeIn>
        <ProjectGallery />
      </FadeIn>
      <FadeIn>
        <ContactMe />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
