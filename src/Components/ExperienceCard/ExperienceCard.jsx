import React from "react";
import { motion } from "framer-motion";
import styles from "../../Pages/Experience/experience.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ExperienceCard = ({ company, role, period, description, points }) => {
  return (
    <motion.div
      className={styles.card}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.left}>
          <h2 className={styles.company}>{company}</h2>
          <h4 className={styles.role}>{role}</h4>
        </div>

        <span className={styles.period}>{period}</span>
      </div>

      {/* BODY */}
      <p className={styles.description}>{description}</p>

      <ul className={styles.points}>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
