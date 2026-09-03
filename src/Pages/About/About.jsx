import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, Shield, Database, Rocket, Palette, Users, Code2, ArrowRight, Sparkles } from "lucide-react";
import styles from "./about.module.css";

const strengths = [
  {
    icon: Layers,
    title: "Backend API Development",
    desc: "RESTful APIs with Node.js, Express.js and TypeScript — validation with Zod, centralized error handling and JWT-secured routes.",
  },
  {
    icon: Shield,
    title: "Authentication & RBAC",
    desc: "JWT authentication with role-based access control for multi-role applications — protecting sensitive workflows per user tier.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Normalized schemas with MySQL, PostgreSQL and MongoDB using Prisma and SQLAlchemy — relationships, transactions and query design.",
  },
  {
    icon: Palette,
    title: "Full-Stack Integration",
    desc: "React interfaces connected to REST APIs with validation and error states — production UI integrated end-to-end with backend workflows.",
  },
  {
    icon: Rocket,
    title: "Deployment & Infrastructure",
    desc: "Docker, Linux, Nginx, PM2 and Vercel / Netlify / Render — from build to production with monitoring and graceful shutdown.",
  },
  {
    icon: Users,
    title: "Third-Party Integrations",
    desc: "Payment gateways (Razorpay, M-Pesa), email APIs and external REST integrations for real business transactions.",
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
            I&apos;m a Backend / Full-Stack Developer with hands-on experience building
            production-oriented web applications using Node.js, TypeScript, Express.js, React and
            relational/non-relational databases. I&apos;ve worked on healthcare, project management,
            payment and business platforms, with experience spanning API development, authentication,
            role-based access control, database design, third-party integrations and deployment.
          </p>
          <p className={styles.body}>
            My core stack is Node.js, TypeScript, Express.js and FastAPI with MySQL, PostgreSQL,
            MongoDB, Prisma and SQLAlchemy. I focus on secure, scalable backend systems — REST APIs
            with validation and error handling, JWT/RBAC, normalized schemas and clean
            router&nbsp;→&nbsp;service&nbsp;→&nbsp;schema separation.
          </p>
          <p className={styles.body}>
            At TTL Engineering I&apos;ve shipped production applications used daily by business
            clients, building JWT-secured, role-based platforms while working directly with
            stakeholders. I also have frontend depth with React, TypeScript and Tailwind CSS for
            end-to-end delivery.
          </p>
          <div className={styles.metaGroup}>
            <span className={styles.metaPill}>
              <Code2 size={12} aria-hidden="true" /> Node.js <span className={styles.metaDot}>·</span> TypeScript <span className={styles.metaDot}>·</span> Express <span className={styles.metaDot}>·</span> PostgreSQL <span className={styles.metaDot}>·</span> MongoDB
            </span>
            <span className={styles.metaPill}>
              <Layers size={12} aria-hidden="true" /> APIs <ArrowRight size={10} aria-hidden="true" /> Auth & RBAC <ArrowRight size={10} aria-hidden="true" /> Database <ArrowRight size={10} aria-hidden="true" /> Deployment
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
