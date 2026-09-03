import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";
import Projects from "./Pages/Projects/Projects";
import BackendEngineering from "./Pages/BackendEngineering/BackendEngineering";
import Skills from "./Pages/Skills/Skills";
import Techstack from "./Pages/Techstack/Techstack";
import HowIShip from "./Pages/HowIShip/HowIShip";
import Currently from "./Pages/Currently/Currently";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <BackendEngineering />
        <Skills />
        <Techstack />
        <HowIShip />
        <Currently />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
