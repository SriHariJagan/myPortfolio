import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, MapPin, Clock, Sparkles } from "lucide-react";
import { personalData } from "../../data";
import styles from "./currently.module.css";

const Currently = () => {
  const shouldReduce = useReducedMotion();
  return (
    <section id="currently" className={styles.section} aria-labelledby="currently-heading">
      <div className={styles.inner}>
        <motion.div
          className={styles.card}
          initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={shouldReduce ? undefined : { duration: 0.5, ease: "easeOut" }}
        >
          <div className={styles.left}>
            <span className={styles.eyebrow}>
              <Sparkles size={12} aria-hidden="true" /> Currently
            </span>
            <h2 id="currently-heading" className={styles.title}>
              Open to <span>Backend / Full-Stack</span> opportunities
            </h2>
            <p className={styles.sub}>
              Available for full-time roles where I can build secure, scalable backend systems and production web applications.
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.meta}>
              <span className={styles.pill}>
                <Briefcase size={13} aria-hidden="true" /> Available for full-time
              </span>
              <span className={styles.pill}>
                <MapPin size={13} aria-hidden="true" /> {personalData.location} · Remote
              </span>
              <span className={styles.pill}>
                <Clock size={13} aria-hidden="true" /> Replies within 24h
              </span>
            </div>

            <div className={styles.roles} aria-label="Target roles">
              <span className={styles.rolesLabel}>Target roles</span>
              <div className={styles.roleChips}>
                {personalData.targetRoles.map((r) => (
                  <span key={r} className={styles.roleChip}>{r}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Currently;
