import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPinHouse, ArrowDown } from "lucide-react";
import styles from "./about.module.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section className={styles.about}>
      {/* LEFT */}
      <motion.div
        className={styles.left}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className={styles.img} variants={fadeUp}>
          <img src="/Images/Jagan.jpg" alt="Sri Hari Jagan Mushini" />
        </motion.div>

        <motion.p className={styles.location} variants={fadeUp}>
          <MapPinHouse size={18} strokeWidth={1.8} />
          <span>Kothapeta, Andhra Pradesh, India</span>
        </motion.p>

        <motion.div className={styles.socialIcons} variants={fadeUp}>
          <a
            className={`${styles.icon} ${styles.github}`}
            href="https://github.com/SriHariJagan"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>

          <a
            className={`${styles.icon} ${styles.linkedin}`}
            href="https://www.linkedin.com/in/sri-hari-jagan-mushini/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>

          <a
            className={`${styles.icon} ${styles.mail}`}
            href="mailto:sriharijagan04@gmail.com"
          >
            <Mail />
          </a>
        </motion.div>

        <a
          href="/resume/Sri_Hari_Jagan_Mushini.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.resume_btn}>
            Download Resume <ArrowDown />
          </button>
        </a>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className={styles.right}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1 className={styles.name} variants={fadeUp}>
          Sri Hari Jagan <span>Mushini</span>
        </motion.h1>

        <motion.h3 className={styles.role} variants={fadeUp}>
          Full-Stack Developer · React · Next.js · Node.js
        </motion.h3>

        <motion.span className={styles.badge} variants={fadeUp}>
          Available for Freelance
        </motion.span>

        <motion.p className={styles.desc} variants={fadeUp}>
          I am a Full-Stack Developer with experience in building modern,
          scalable web applications using React, Next.js, Node.js, and Python. I
          focus on clean UI, performance optimization, and maintainable code.
        </motion.p>

        <motion.p className={styles.desc} variants={fadeUp}>
          Alongside full-time development, I work as a freelance developer,
          helping startups and businesses design, develop, and deploy
          high-quality web applications aligned with real business goals.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
