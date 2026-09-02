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
    label: "Frontend",
    icon: Layers,
    accent: "frontend",
    items: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "CSS Modules", "Redux Toolkit", "Framer Motion"],
    note: "Production interfaces — responsive, accessible, component-driven.",
  },
  {
    label: "Backend",
    icon: Server,
    accent: "backend",
    items: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs", "Zustand"],
    note: "APIs designed for real business workflows — router → service → schema.",
  },
  {
    label: "Database",
    icon: Database,
    accent: "data",
    items: ["MongoDB", "MySQL", "SQLAlchemy", "Firebase Firestore"],
    note: "Normalized schemas and queries for projects, tasks, users and reporting.",
  },
  {
    label: "Authentication & APIs",
    icon: ShieldCheck,
    accent: "auth",
    items: ["JWT Authentication", "RBAC", "API Integration", "Django REST API"],
    note: "Role-scoped JWT, validation and secure frontend–backend communication.",
  },
  {
    label: "Tools & Deployment",
    icon: Rocket,
    accent: "tools",
    items: ["Git", "GitHub", "Postman", "Vite", "Vercel", "Netlify", "Render", "VS Code"],
    note: "Shipping with Vercel / Netlify / Render — from commit to production.",
  },
];

const concepts = [
  { label: "Component Architecture", icon: Component, desc: "Reusable, composable UI" },
  { label: "Responsive Design", icon: Smartphone, desc: "Mobile-first layouts" },
  { label: "SEO Optimisation", icon: Search, desc: "Semantic & crawlable" },
  { label: "Performance Optimisation", icon: Zap, desc: "Fast, light bundles" },
  { label: "Lazy Loading", icon: Clock3, desc: "Load when needed" },
  { label: "Code Splitting", icon: Code2, desc: "Chunked delivery" },
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
              <Sparkles size={12} aria-hidden="true" /> Stack
            </span>
            <h2 id="skills-heading" className={styles.title}>
              Engineering <span>Stack</span>
            </h2>
            <p className={styles.sub}>
              Technologies I use in production — grouped by where they actually ship.
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
