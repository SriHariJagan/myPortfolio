import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Star, Check } from "lucide-react";
import styles from "../../Pages/Projects/projects.module.css";
import techIcons from "../TechIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const ProjectCard = (props) => {
  const { id, title, image, tech, description, points, live, github, category, featured, onView } = props;
  const fullProject = props;
  return (
    <motion.article
      className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      onClick={() => onView?.(fullProject)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onView?.(fullProject);
        }
      }}
    >
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.cardTop}>
        <span className={styles.categoryPill}>{category}</span>
        <div className={styles.topRight}>
          {featured && (
            <span className={styles.featuredBadge}>
              <Star size={11} aria-hidden="true" /> Featured
            </span>
          )}
          <span className={styles.indexBadge}>0{id}</span>
        </div>
      </div>

      <div className={styles.imageWrap}>
        <div className={styles.browserBarSmall} aria-hidden="true">
          <span className={styles.browserDots}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
          </span>
          <span className={styles.browserUrlSmall}>{live ? (() => { try { return new URL(live).hostname; } catch { return category; } })() : category}</span>
          {live && <span className={styles.livePulse} aria-hidden="true" />}
        </div>
        <img src={image} alt={`${title} — preview`} width={640} height={360} loading="lazy" decoding="async" />
        <span className={styles.viewHint} aria-hidden="true">
          View details <ArrowUpRight size={12} aria-hidden="true" />
        </span>
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.pointsPreview}>
        {points.slice(0, 2).map((p, i) => (
          <li key={i}>
            <span className={styles.miniCheck} aria-hidden="true">
              <Check size={11} />
            </span>
            <span>{p.length > 92 ? `${p.slice(0, 92)}…` : p}</span>
          </li>
        ))}
      </ul>

      <div className={styles.techPreview} aria-label="Tech stack">
        {tech.slice(0, 4).map((t) => {
          const Icon = techIcons[t];
          return (
            <span key={t} className={styles.techMini} title={t}>
              {Icon ? <Icon size={13} aria-hidden="true" /> : null}
              {t}
            </span>
          );
        })}
        {tech.length > 4 && <span className={styles.moreTech}>+{tech.length - 4}</span>}
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.viewDetails}>
          View case study <ArrowUpRight size={13} aria-hidden="true" />
        </span>
        <div className={styles.cardLinks} onClick={(e) => e.stopPropagation()}>
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className={styles.liveBadge} aria-label={`Live demo of ${title}`}>
              <ExternalLink size={12} aria-hidden="true" /> Live
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className={styles.codeBadge} aria-label={`Source code for ${title}`}>
              <Github size={12} aria-hidden="true" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
