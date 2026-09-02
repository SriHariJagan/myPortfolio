import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";
import HowIShip from "./Pages/HowIShip/HowIShip";
import Skills from "./Pages/Skills/Skills";
import Techstack from "./Pages/Techstack/Techstack";
import Projects from "./Pages/Projects/Projects";
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
        <HowIShip />
        <Skills />
        <Techstack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
