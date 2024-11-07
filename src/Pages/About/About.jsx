import React from "react";
import styles from "./About.module.css";
import { Fade } from "react-awesome-reveal";

const About = ({ scrollToSection, contactRef }) => {
  const developerImg =
    "https://cdn.sanity.io/images/soweeiig/production/bd5cbf6bbdc10e8243467595a6ee6f6e44ceb5fd-1600x1200.jpg";
  const problemsolverImg =
    "https://cdn.sanity.io/images/soweeiig/production/3dfa9ab583dffbb72fdffb5c74b06b6649f2a99b-626x626.png";
  const visionaryImage =
    "https://cdn.sanity.io/images/soweeiig/production/ba733a6ba601770990755990c72b052a62f57cbc-626x626.jpg";

  return (
    <div className={styles.aboutContainer}>
      <p className={styles.title}>
        <h3>
          I know that <span>Good Design</span>
        </h3>
        <h3>
          means <span>Good Business</span>
        </h3>
      </p>

      <div className={styles.aboutMe}>
        <h3>About Me</h3>
        <div className={styles.aboutmeContent}>
          <p>
            Hi there, I'm <span>Jagan</span> – a full stack web developer (
            <span>MERN</span> stack) with <span>a full interest in React</span>,
            focused on creating{" "}
            <span>efficient, user-centered applications</span>. I graduated in{" "}
            <span>2023</span> with a <span>B.Tech in Computer Science</span>,
            and I'm passionate about building{" "}
            <span>impactful web applications</span> that prioritize both{" "}
            <span>impactful web applications</span>. I'm a{" "}
            <span>quick learner</span>, always eager to expand my skills and
            take on new challenges.
          </p>
          <p>
            I'm open to <span>Job opportunities</span> where I can{" "}
            <span>contribute, learn and grow.</span> If you have a good
            opportunity that matches my skills then don't hesitate to{" "}
            <a
              href="#contact"
              className={styles.contact}
              onClick={() => scrollToSection(contactRef)}
            >
              contact me.
            </a>
          </p>
        </div>
      </div>

      <div className={styles.intrests}>
      <Fade direction="up">
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src={developerImg} alt="developer" />
          </div>
          <div className={styles.cardDiscription}>
            <h3>Fullstack Developer</h3>
            <p>
              MERN stack, well skilled with React, Node.js, MongoDB, RESTful
              APIs etc..
            </p>
          </div>
        </div>
        </Fade>

        <Fade direction="up">
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src={problemsolverImg} alt="developer" />
          </div>
          <div className={styles.cardDiscription}>
            <h3>Problem Solver</h3>
            <p>
              Equipped with good analytical and problem solving skills. Creative
              thinker and love to take up any challenges or puzzles.
            </p>
          </div>
        </div>
        </Fade>
        <Fade direction="up">
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src={visionaryImage} alt="developer" />
          </div>
          <div className={styles.cardDiscription}>
            <h3>Visionary</h3>
            <p>
              A visionary with commendable leadership qualities. Aiming to reach
              new heights. Tend to recover quickly from setbacks and learn from
              failures.
            </p>
          </div>
        </div>
        </Fade>

      </div>
    </div>
  );
};

export default About;
