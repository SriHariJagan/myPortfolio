import React from "react";
import styles from "./Home.module.css";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const Home = ({scrollToSection, projectsRef}) => {
  // const skills = [
  //   { text: 'Developer', color: '#FF5733' },
  //   { text: 'Designer', color: '#335BFF' },
  //   { text: 'Freelancer', color: '#33FF57' },
  //   { text: 'Engineer', color: '#FF33B5' },
  // ];

  const skills = ["Developer", "Designer", "Freelancer", "Engineer"];

  return (
    <div className={styles.homeContainer}>
      <div className={styles.details}>
        <h3>
          Hi👋,&nbsp; I'm <span id={styles.name}> <Fade>SRI HARI JAGAN </Fade></span>
        </h3>
        <h4>
          I'm a &nbsp;
          <span>
            <Typewriter
              words={skills}
              loop="infinitely"
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={120}
              delaySpeed={1200}
            />
          </span>
        </h4>

        <p>
          A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
        </p>

        <a href="#projects" class={styles.projectBtn} onClick={() => scrollToSection(projectsRef)}>Projects ↓</a> 

      </div>
    
    </div>
  );
};

export default Home;
