import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  MapPin,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";
import { personalData } from "../../data";
import styles from "./hero.module.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.inner}>
        {/* Left content */}
        <motion.div
          className={styles.content}
          variants={shouldReduce ? undefined : container}
          initial={shouldReduce ? undefined : "hidden"}
          animate={shouldReduce ? undefined : "show"}
        >
          <motion.div variants={shouldReduce ? undefined : fadeUp} className={styles.eyebrowRow}>
            <span className={styles.eyebrow}>Full-Stack Developer</span>
            {personalData.available && (
              <span className={styles.available}>
                <span className={styles.dot} aria-hidden="true" />
                Available for full-time opportunities
              </span>
            )}
          </motion.div>

          <motion.h1 variants={shouldReduce ? undefined : fadeUp} className={styles.title}>
            {personalData.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className={styles.accentWord}>
              {personalData.name.split(" ").slice(-1)[0]}
            </span>
          </motion.h1>

          <motion.p variants={shouldReduce ? undefined : fadeUp} className={styles.headline}>
            Building <span>production-ready</span> web applications — frontend, APIs, databases &amp;
            deployment.
          </motion.p>

          <motion.p variants={shouldReduce ? undefined : fadeUp} className={styles.body}>
            I take requirements from idea to production: responsive React interfaces, secure REST
            APIs with FastAPI &amp; Express, MongoDB / MySQL schemas, JWT &amp; RBAC, and Vercel /
            Netlify / Render deployments. At TTL Engineering I own delivery end-to-end — working
            directly with non-technical stakeholders to ship apps that are used daily.
          </motion.p>

          <motion.div variants={shouldReduce ? undefined : fadeUp} className={styles.ctaRow}>
            <a href="#work" className={styles.primaryBtn}>
              View My Work <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="/resume/SriHariJaganMushini.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
            <a href="#contact" className={styles.tertiaryBtn}>
              Let&apos;s Connect <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          <motion.div variants={shouldReduce ? undefined : fadeUp} className={styles.microRow} aria-label="Core stack">
            <span className={styles.mono}>React</span>
            <span className={styles.sep} aria-hidden="true">/</span>
            <span className={styles.mono}>Node.js</span>
            <span className={styles.sep} aria-hidden="true">/</span>
            <span className={styles.mono}>FastAPI</span>
            <span className={styles.sep} aria-hidden="true">/</span>
            <span className={styles.mono}>MySQL</span>
            <span className={styles.sep} aria-hidden="true">/</span>
            <span className={styles.mono}>MongoDB</span>
            <span className={styles.monoMuted}>→ Frontend → APIs → Database → Deployment</span>
          </motion.div>

          <motion.div variants={shouldReduce ? undefined : fadeUp} className={styles.socials}>
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub — SriHariJagan"
              className={styles.socialIcon}
            >
              <Github size={16} />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn — Sri Hari Jagan Mushini"
              className={styles.socialIcon}
            >
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${personalData.email}`} aria-label={`Email ${personalData.email}`} className={styles.socialIcon}>
              <Mail size={16} />
            </a>
            <span className={styles.location}>
              <MapPin size={14} aria-hidden="true" /> {personalData.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Photo card */}
        <motion.div
          className={styles.photoWrap}
          initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduce ? undefined : { duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <div className={styles.photoCard}>
            <div className={styles.photoMeta}>
              <span className={styles.mono}>01 — Profile</span>
              <a href={personalData.github} target="_blank" rel="noreferrer" className={styles.metaLink} aria-label="View GitHub">
                GitHub <ExternalLink size={12} />
              </a>
            </div>
            <div className={styles.photo}>
              <img
                src="/Images/jagan.png"
                alt="Sri Hari Jagan Mushini — Full-Stack Developer"
                width={560}
                height={560}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className={styles.photoFooter}>
              <div className={styles.photoInfo}>
                <strong className={styles.photoName}>
                  <BadgeCheck size={14} aria-hidden="true" /> {personalData.name}
                </strong>
                <span className={styles.photoStack}>
                  <span className={styles.stackTech}>
                    React <span className={styles.sepDot} aria-hidden="true">·</span> FastAPI <span className={styles.sepDot} aria-hidden="true">·</span> MERN
                  </span>
                  <span className={styles.stackDivider} aria-hidden="true">—</span>
                  <span className={styles.stackShip}>production shipping</span>
                </span>
              </div>
              <span className={styles.photoBadge}>
                <MapPin size={11} aria-hidden="true" /> Andhra Pradesh, India
              </span>
            </div>
          </div>
          <p className={styles.photoCaption}>
            Engineering across the stack — UI to database to deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
