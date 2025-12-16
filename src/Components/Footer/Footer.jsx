import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Left - Site Name & Tagline */}
      <div className={styles.left}>
        <h2 className={styles.siteName}>Jagan Mushini</h2>
        <p className={styles.tagline}>Building the future, one line at a time.</p>
      </div>

      {/* Center - Social Icons */}
      <div className={styles.center}>
        <a
          href="https://www.linkedin.com/in/sri-hari-jagan-mushini/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className={styles.socialIcon}
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://github.com/SriHariJagan"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={styles.socialIcon}
        >
          <Github size={22} />
        </a>
        <a
          href="mailto:sriharijagan04@gmail.com"
          aria-label="Email"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.socialIcon}
        >
          <Mail size={22} />
        </a>
      </div>

      {/* Right - Credits */}
      <div className={styles.right}>
        <p>
          Made with <span className={styles.heart}>💜</span> by Jagan Mushini
        </p>
        <p>© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
