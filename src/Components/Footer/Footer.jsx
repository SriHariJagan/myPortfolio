import React from "react";
import { Github, Linkedin, Mail, FileText, ArrowUpRight, MapPin, Circle } from "lucide-react";
import { personalData } from "../../data";
import styles from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brandCol}>
          <div className={styles.brandRow}>
            <span className={styles.logoWrap} aria-hidden="true">
              <img
                src="/Images/logo/dark.png"
                alt=""
                width={48}
                height={48}
                className={`${styles.logo} ${styles.logoDark}`}
                loading="lazy"
                decoding="async"
              />
              <img
                src="/Images/logo/light.png"
                alt=""
                width={48}
                height={48}
                className={`${styles.logo} ${styles.logoLight}`}
                loading="lazy"
                decoding="async"
              />
            </span>
            <div>
              <p className={styles.name}>{personalData.name}</p>
              <p className={styles.role}>Full-Stack Developer — React · Node.js · FastAPI</p>
            </div>
          </div>

          <p className={styles.bio}>
            Building production-ready web applications from UI to database to deployment — owning
            the work from requirement gathering through APIs, auth and production maintenance.
          </p>

          {personalData.available && (
            <span className={styles.available}>
              <Circle size={8} className={styles.pulse} aria-hidden="true" />
              Available for full-time opportunities
            </span>
          )}

          <div className={styles.socials}>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn — Sri Hari Jagan Mushini"
              className={styles.socialBtn}
            >
              <Linkedin size={16} />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub — SriHariJagan"
              className={styles.socialBtn}
            >
              <Github size={16} />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              aria-label={`Email ${personalData.email}`}
              className={styles.socialBtn}
            >
              <Mail size={16} />
            </a>
            <a
              href="/resume/SriHariJaganMushini.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume PDF"
              className={`${styles.socialBtn} ${styles.socialPrimary}`}
            >
              <FileText size={16} />
            </a>
          </div>
        </div>

        {/* Navigate */}
        <nav className={styles.navCol} aria-label="Footer navigate">
          <p className={styles.colLabel}>Navigate</p>
          <ul role="list">
            <li><a href="#home">Home <ArrowUpRight size={12} aria-hidden="true" /></a></li>
            <li><a href="#about">About <ArrowUpRight size={12} aria-hidden="true" /></a></li>
            <li><a href="#experience">Experience <ArrowUpRight size={12} aria-hidden="true" /></a></li>
            <li><a href="#skills">Skills <ArrowUpRight size={12} aria-hidden="true" /></a></li>
            <li><a href="#work">Work <ArrowUpRight size={12} aria-hidden="true" /></a></li>
          </ul>
        </nav>

        {/* Connect */}
        <div className={styles.connectCol}>
          <p className={styles.colLabel}>Connect</p>
          <div className={styles.contactCard}>
            <a href={`mailto:${personalData.email}`} className={styles.contactLine}>
              <Mail size={14} aria-hidden="true" />
              <span>{personalData.email}</span>
            </a>
            <span className={styles.contactLine}>
              <MapPin size={14} aria-hidden="true" />
              <span>{personalData.location}</span>
            </span>
            <div className={styles.contactActions}>
              <a href="#contact" className={styles.ctaPrimary}>
                Let&apos;s Connect →
              </a>
              <a
                href="/resume/SriHariJaganMushini.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaGhost}
              >
                Resume
              </a>
            </div>
          </div>

          <div className={styles.stackMini} aria-label="Core stack">
            <span>React</span>
            <span>Node.js</span>
            <span>FastAPI</span>
            <span>MongoDB</span>
            <span>MySQL</span>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copy}>© {year} {personalData.name}. All rights reserved.</p>

        <code
          className={styles.builtCode}
          aria-label="Built with React 19, Vite, Framer Motion — light and dark intentionally crafted"
        >
          <span className={styles.cBrace} aria-hidden="true">
            &lt;
          </span>
          <span className={styles.cTag}>Stack</span>
          <span className={styles.cAttr}> built</span>
          <span className={styles.cEq}>=</span>
          <span className={styles.cBrace}>&#123;</span>
          <span className={styles.cStr}>&apos;React 19&apos;</span>
          <span className={styles.cOp}>,</span>
          <span className={styles.cStr}> &apos;Vite&apos;</span>
          <span className={styles.cOp}>,</span>
          <span className={styles.cStr}> &apos;Framer Motion&apos;</span>
          <span className={styles.cBrace}>&#125;</span>
          <span className={styles.cBrace} aria-hidden="true">
            {" "}
            /&gt;
          </span>
          <span className={styles.cComment}> // light &amp; dark crafted</span>
        </code>

        <a href="#home" className={styles.backTop}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
