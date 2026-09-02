import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2, Sparkles, Check } from "lucide-react";
import { experienceData } from "../../data";
import styles from "./experience.module.css";

const Experience = () => {
  const shouldReduce = useReducedMotion();
  return (
    <section id="experience" className={styles.experience} aria-labelledby="exp-heading">
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={shouldReduce ? undefined : { opacity: 0, y: 14 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={shouldReduce ? undefined : { duration: 0.55, ease: "easeOut" }}
        >
          <div className={styles.headLeft}>
            <span className={styles.eyebrow}>
              <Sparkles size={12} aria-hidden="true" /> Experience
            </span>
            <h2 id="exp-heading" className={styles.title}>
              Professional <span>Journey</span>
            </h2>
            <p className={styles.subtitle}>
              Shipping real products — from hospital workflows to business automation, owning
              delivery end-to-end.
            </p>
          </div>
        </motion.div>

        <div className={styles.timeline}>
          <span className={styles.line} aria-hidden="true" />
          {experienceData.map((job, idx) => {
            const isCurrent = job.period.toLowerCase().includes("present");
            return (
              <motion.article
                key={job.id}
                className={`${styles.card} ${isCurrent ? styles.current : ""}`}
                initial={shouldReduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={shouldReduce ? undefined : { duration: 0.5, delay: idx * 0.08 }}
              >
                <span className={styles.glow} aria-hidden="true" />
                <span className={styles.index} aria-hidden="true">
                  0{idx + 1}
                </span>

                <span className={`${styles.node} ${isCurrent ? styles.nodeCurrent : ""}`} aria-hidden="true">
                  <Briefcase size={13} />
                  {isCurrent && <span className={styles.nodePulse} aria-hidden="true" />}
                </span>

                <div className={styles.cardHeader}>
                  <div className={styles.companyWrap}>
                    <span className={styles.companyIcon} aria-hidden="true">
                      <Building2 size={18} />
                    </span>
                    <div className={styles.companyText}>
                      <h3>{job.company}</h3>
                      <div className={styles.roleRow}>
                        <p className={styles.role}>{job.role}</p>
                        {isCurrent && <span className={styles.presentBadge}>Present</span>}
                      </div>
                    </div>
                  </div>

                  <div className={styles.metaChips}>
                    <span className={styles.chip}>
                      <Calendar size={12} aria-hidden="true" /> {job.period}
                    </span>
                    <span className={styles.chip}>
                      <MapPin size={12} aria-hidden="true" /> {job.location} · {job.type}
                    </span>
                  </div>
                </div>

                <p className={styles.desc}>{job.description}</p>

                <ul className={styles.points}>
                  {(job.points || []).slice(0, 4).map((p, i) => (
                    <li key={i}>
                      <span className={styles.check} aria-hidden="true">
                        <Check size={12} />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.techRow} aria-label="Technologies used">
                  {job.tech?.slice(0, 12).map((t) => (
                    <span key={t} className={styles.techChip}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
