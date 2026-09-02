import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Layers, Code2, ShieldCheck, Bug, Rocket } from "lucide-react";
import styles from "./howiship.module.css";

const steps = [
  { n: "01", icon: Search, title: "Understand", desc: "Requirements and business goals — clarifying the problem with stakeholders before code." },
  { n: "02", icon: Layers, title: "Architect", desc: "Components, APIs, database and app structure — choosing trade-offs that scale." },
  { n: "03", icon: Code2, title: "Build", desc: "Frontend + backend implementation — React interfaces connected to REST APIs and databases." },
  { n: "04", icon: ShieldCheck, title: "Secure", desc: "Authentication, authorization, validation and RBAC — JWT with role-scoped access." },
  { n: "05", icon: Bug, title: "Validate", desc: "Testing, debugging and performance checks — component thinking and load-time care." },
  { n: "06", icon: Rocket, title: "Deploy", desc: "Production deployment, monitoring and iteration — Vercel / Netlify / Render with handoff." },
];

const HowIShip = () => {
  const shouldReduce = useReducedMotion();
  return (
    <section id="ship" className={styles.section} aria-labelledby="ship-heading">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className="mono-label">Workflow</p>
          <h2 id="ship-heading" className={styles.title}>
            How I <span>Ship</span>
          </h2>
          <p className={styles.sub}>From requirement to production — the lifecycle I own end-to-end.</p>
        </div>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              className={styles.step}
              initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={shouldReduce ? undefined : { duration: 0.4, delay: i * 0.06 }}
            >
              <div className={styles.stepTop}>
                <span className={styles.num}>{s.n}</span>
                <span className={styles.icon} aria-hidden="true">
                  <s.icon size={16} />
                </span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIShip;
