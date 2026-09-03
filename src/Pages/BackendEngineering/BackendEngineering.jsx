import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Server, ShieldCheck, Database, Zap, Container, Plug, Sparkles } from "lucide-react";
import styles from "./backendengineering.module.css";
import { backendEngineeringData } from "../../data";

const iconMap = {
  api: Server,
  security: ShieldCheck,
  database: Database,
  performance: Zap,
  infra: Container,
  integrations: Plug,
};

const BackendEngineering = () => {
  const shouldReduce = useReducedMotion();
  return (
    <section id="backend" className={styles.section} aria-labelledby="backend-heading">
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
              <Sparkles size={12} aria-hidden="true" /> Backend Engineering
            </span>
            <h2 id="backend-heading" className={styles.title}>
              Backend <span>Engineering</span>
            </h2>
            <p className={styles.sub}>
              Capabilities supported by actual production work — APIs, security, databases, infrastructure and integrations.
            </p>
          </div>
          <span className={styles.provenance}>
            <span className={styles.dot} aria-hidden="true" />
            Production-oriented
          </span>
        </motion.div>

        <div className={styles.grid}>
          {backendEngineeringData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Server;
            return (
              <motion.div
                key={item.title}
                className={styles.card}
                initial={shouldReduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={shouldReduce ? undefined : { duration: 0.45, delay: idx * 0.05 }}
              >
                <span className={styles.glow} aria-hidden="true" />
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={18} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BackendEngineering;
