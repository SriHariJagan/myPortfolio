import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, Shield, Database, Rocket, Palette, Users, Code2, ArrowRight, Sparkles } from "lucide-react";
import styles from "./about.module.css";

const strengths = [
  {
    icon: Layers,
    title: "Full-Stack Architecture",
    desc: "React interfaces connected to REST APIs and normalized databases — component systems built for reuse and growth.",
  },
  {
    icon: Shield,
    title: "Authentication & RBAC",
    desc: "JWT authentication with role-scoped access for multi-tier users — Super Admin, Supervisor, Client — protecting sensitive data.",
  },
  {
    icon: Database,
    title: "API & Backend",
    desc: "Express and FastAPI services with SQLAlchemy/Mongoose, validated inputs and clean router → service → schema separation.",
  },
  {
    icon: Palette,
    title: "Production UI",
    desc: "Responsive, accessible interfaces with Tailwind/CSS Modules, Framer Motion and SEO-minded structure.",
  },
  {
    icon: Rocket,
    title: "Deployment & Maintenance",
    desc: "Vercel, Netlify and Render releases with production monitoring — owning the app after it ships.",
  },
  {
    icon: Users,
    title: "Stakeholder Delivery",
    desc: "Gathering requirements from non-technical clients and turning ambiguity into working, on-schedule features.",
  },
];

const About = () => {
  const shouldReduce = useReducedMotion();
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className="mono-label">About</p>
          <h2 id="about-heading" className={styles.heading}>
            I build real applications <span>that ship</span> — not demos.
          </h2>
          <p className={styles.lead}>
            I&apos;m a Full-Stack Developer with 2+ years of hands-on experience delivering
            production-grade web applications for real businesses — admin dashboards, booking
            systems, e-commerce platforms and workflow managers — owning the work from requirement
            gathering through API design, UI and deployment.
          </p>
          <p className={styles.body}>
            My core stack is React, Node.js/Express, FastAPI &amp; Python with MongoDB, MySQL and
            SQLAlchemy. I care about clean architecture, secure auth, performance and maintainable
            code that teammates can extend without friction.
          </p>
          <p className={styles.body}>
            At TTL Engineering I&apos;ve shipped 5+ apps used daily by business clients, and built
            JWT-secured, role-based systems while collaborating directly with stakeholders. As a
            former Teaching Assistant I&apos;ve also mentored 100+ learners in React fundamentals.
          </p>
          <div className={styles.metaGroup}>
            <span className={styles.metaPill}>
              <Code2 size={12} aria-hidden="true" /> React <span className={styles.metaDot}>·</span> Node <span className={styles.metaDot}>·</span> FastAPI <span className={styles.metaDot}>·</span> SQL <span className={styles.metaDot}>·</span> MongoDB
            </span>
            <span className={styles.metaPill}>
              <Layers size={12} aria-hidden="true" /> Frontend <ArrowRight size={10} aria-hidden="true" /> APIs <ArrowRight size={10} aria-hidden="true" /> Database <ArrowRight size={10} aria-hidden="true" /> Deployment
            </span>
          </div>
        </div>

        <motion.div
          className={styles.grid}
          initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={shouldReduce ? undefined : { duration: 0.5, ease: "easeOut" }}
        >
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.card}
              initial={shouldReduce ? undefined : { opacity: 0, y: 10 }}
              whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduce ? undefined : { duration: 0.4, delay: i * 0.06 }}
            >
              <span className={styles.icon} aria-hidden="true">
                <s.icon size={18} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
