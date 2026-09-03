import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Layers,
  Server,
  Database,
  ShieldCheck,
  Rocket,
  Component,
  Smartphone,
  Search,
  Zap,
  Clock3,
  Code2,
  Sparkles,
} from "lucide-react";
import styles from "./skills.module.css";

const groups = [
  {
    label: "Languages",
    icon: Code2,
    accent: "frontend",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
    note: "Core languages used across backend, database and frontend work.",
  },
  {
    label: "Backend",
    icon: Server,
    accent: "backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication", "RBAC"],
    note: "Secure APIs — validation, error handling, pagination and authorization.",
  },
  {
    label: "Databases",
    icon: Database,
    accent: "data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "SQLAlchemy"],
    note: "Schema design, relationships, transactions and query optimization.",
  },
  {
    label: "Frontend",
    icon: Layers,
    accent: "auth",
    items: ["React", "React Router", "React Query", "Zustand", "Redux Toolkit", "Tailwind CSS"],
    note: "Component-driven, responsive interfaces integrated with REST APIs.",
  },
  {
    label: "DevOps",
    icon: Rocket,
    accent: "tools",
    items: ["Docker", "Linux", "Nginx", "PM2", "Git", "GitHub", "Vercel", "Netlify"],
    note: "Containerization and VPS deployment with Git-based shipping.",
  },
  {
    label: "Integrations",
    icon: ShieldCheck,
    accent: "backend",
    items: ["Razorpay", "M-Pesa", "Email APIs", "REST API Integrations"],
    note: "Payment verification, email services and external API workflows.",
  },
];

const concepts = [
  { label: "API Design", icon: Component, desc: "REST, validation, pagination" },
  { label: "Database Design", icon: Database, desc: "Normalized schemas & relations" },
  { label: "Security", icon: ShieldCheck, desc: "JWT, RBAC, validation" },
  { label: "Performance", icon: Zap, desc: "Caching & async where applicable" },
  { label: "Infrastructure", icon: Rocket, desc: "Docker, Nginx, VPS" },
  { label: "Clean Architecture", icon: Code2, desc: "Router → Service → Schema" },
];

const Skills = () => {
  const shouldReduce = useReducedMotion();
  return (
    <section id="skills" className={styles.skills} aria-labelledby="skills-heading">
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.head}
          initial={shouldReduce ? undefined : { opacity: 0, y: 14 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={shouldReduce ? undefined : { duration: 0.55, ease: "easeOut" }}
        >
          <div className={styles.headLeft}>
            <span className={styles.eyebrow}>
              <Sparkles size={12} aria-hidden="true" /> Skills
            </span>
            <h2 id="skills-heading" className={styles.title}>
              Technical <span>Skills</span>
            </h2>
            <p className={styles.sub}>
              Technologies I genuinely use and can explain in an interview — grouped professionally, no inflated percentages.
            </p>
          </div>
          <span className={styles.provenance}>
            <span className={styles.provenanceDot} aria-hidden="true" />
            Verified in projects & experience
          </span>
        </motion.div>

        <div className={styles.grid}>
          {groups.map((g, idx) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.label}
                className={`${styles.group} ${styles[g.accent]}`}
                initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={shouldReduce ? undefined : { duration: 0.45, delay: idx * 0.06 }}
              >
                <div className={styles.glow} aria-hidden="true" />
                <div className={styles.groupHead}>
                  <span className={`${styles.groupIcon} ${styles[`icon_${g.accent}`]}`} aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <div className={styles.groupTitleWrap}>
                    <h3>{g.label}</h3>
                    <p className={styles.groupNote}>{g.note}</p>
                  </div>
                  <span className={styles.count}>{g.items.length}</span>
                </div>
                <div className={styles.chips}>
                  {g.items.map((it) => (
                    <span key={it} className={styles.chip}>
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className={styles.concepts}
          initial={shouldReduce ? undefined : { opacity: 0, y: 14 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={shouldReduce ? undefined : { duration: 0.5, delay: 0.12 }}
        >
          <div className={styles.conceptsHead}>
            <p className={styles.conceptsLabel}>
              <Code2 size={12} aria-hidden="true" /> Engineering concepts — proven in practice
            </p>
            <span className={styles.conceptsHint}>detail</span>
          </div>
          <div className={styles.conceptGrid}>
            {concepts.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className={styles.conceptCard}>
                  <span className={styles.conceptIcon} aria-hidden="true">
                    <Icon size={16} />
                  </span>
                  <div>
                    <span className={styles.conceptLabel}>{c.label}</span>
                    <span className={styles.conceptDesc}>{c.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
