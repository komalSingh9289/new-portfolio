import React from "react";
import Home from "../components/Home";
import Stack from "../components/Stack";
import About from "../components/About";
import ProjectCarousel from "../components/ProjectCarousel";
import ContactSection from "../components/ContactSection";


const HomePage = () => {
  return (
    <main>
      <Home />
      <section>
        <Stack />
      </section>

      <About />
      <ProjectCarousel />
      <ContactSection />
    </main>
  );
};

export default HomePage;
