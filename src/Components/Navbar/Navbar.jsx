import React, { useState } from "react";
import styles from "./navbar.module.css";

import homeImg from "../../Assets/Images/NavImages/home.png";
import aboutImg from "../../Assets/Images/NavImages/about.png";
import educationImg from "../../Assets/Images/NavImages/education.png";
import skillsImg from "../../Assets/Images/NavImages/skill.png";
import projectImg from "../../Assets/Images/NavImages/project.png";
import contactImg from "../../Assets/Images/NavImages/contact.png";
import images from "../../images";

const Navbar = ({ scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.navContainer}>
        <div>
          <img
            src={images.myLogo}
            alt="Icon"
            className={styles.logo}
            onClick={() => scrollToSection(refs.navbarRef)}
          />
        </div>
        <ul className={styles.navLinks}>
          <li onClick={() => scrollToSection(refs.homeRef)}>
            <span><img src={homeImg} alt="Home" /></span> Home
          </li>
          <li onClick={() => scrollToSection(refs.aboutRef)}>
            <span><img src={aboutImg} alt="About" /></span> About
          </li>
          <li onClick={() => scrollToSection(refs.educationRef)}>
            <span><img src={educationImg} alt="Education" /></span> Education
          </li>
          <li onClick={() => scrollToSection(refs.skillsRef)}>
            <span><img src={skillsImg} alt="Skills" /></span> Skills
          </li>
          <li onClick={() => scrollToSection(refs.projectsRef)}>
            <span><img src={projectImg} alt="Projects" /></span> Projects
          </li>
          <li onClick={() => scrollToSection(refs.contactRef)}>
            <span><img src={contactImg} alt="Contact" /></span> Contact
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className={styles.smallContainer}>
        <div
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ""}`}
          onClick={handleMenuToggle}
        >
          <i className="fa-solid fa-plus" />
        </div>
        {isMenuOpen && (
          <ul className={styles.showMenu}>
            <li onClick={() => scrollToSection(refs.homeRef)}>
              <img src={homeImg} alt="Home" />
            </li>
            <li onClick={() => scrollToSection(refs.aboutRef)}>
              <img src={aboutImg} alt="About" />
            </li>
            <li onClick={() => scrollToSection(refs.educationRef)}>
              <img src={educationImg} alt="Education" />
            </li>
            <li onClick={() => scrollToSection(refs.skillsRef)}>
              <img src={skillsImg} alt="Skills" />
            </li>
            <li onClick={() => scrollToSection(refs.projectsRef)}>
              <img src={projectImg} alt="Projects" />
            </li>
            <li onClick={() => scrollToSection(refs.contactRef)}>
              <img src={contactImg} alt="Contact" />
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
