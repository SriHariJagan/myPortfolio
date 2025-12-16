import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import styles from "../../Pages/Projects/projects.module.css";
import techIcons from "../TechIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectCard = ({
  title,
  image,
  tech,
  description,
  points,
  live,
  github,
}) => {
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
        <h2>{title}</h2>

        <div className={styles.techIcons}>
          {tech.map((t, i) => {
            const Icon = techIcons[t];
            return Icon ? (
              <span key={i} className={styles.techIcon}>
                <Icon />
                <span className={styles.tooltip}>{t}</span>
              </span>
            ) : null;
          })}
        </div>
      </div>

      {/* IMAGE */}
      <div className={styles.imageWrap}>
        <img src={image} alt={title} />
      </div>

      {/* CONTENT */}
      <p className={styles.description}>{description}</p>

      <ul className={styles.points}>
        {points.slice(0, 3).map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {/* LINKS */}
      <div className={styles.links}>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className={styles.liveBadge}
          >
            <ExternalLink size={16} /> Live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className={styles.codeBadge}
          >
            <Github size={16} /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
