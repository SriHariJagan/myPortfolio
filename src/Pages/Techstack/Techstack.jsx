import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, Server, Database, Shield, Wrench, Sparkles } from "lucide-react";
import styles from "./techstack.module.css";

const groups = [
  { label: "Frontend", icon: Layers, items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux"] },
  { label: "Backend", icon: Server, items: ["Node.js", "Express", "FastAPI", "Python"] },
  { label: "Data", icon: Database, items: ["MongoDB", "MySQL", "Firebase"] },
  { label: "Engineering", icon: Shield, items: ["REST APIs", "JWT", "RBAC", "Validation"] },
  { label: "Tooling", icon: Wrench, items: ["Git", "GitHub", "Postman", "Vercel", "Netlify", "Vite"] },
];

const iconMap = {
  React: "/Images/tech/React.png",
  JavaScript: "/Images/tech/JavaScript.png",
  "Tailwind CSS": "/Images/tech/Tailwind CSS.png",
  "Node.js": "/Images/tech/Node.js.png",
  Express: "/Images/tech/Express.png",
  MongoDB: "/Images/tech/MongoDB.png",
  Git: "/Images/tech/Git.png",
  GitHub: "/Images/tech/GitHub.png",
  Firebase: "/Images/tech/Firebase.png",
  Netlify: "/Images/tech/netlify.png",
  Postman: "/Images/tech/Postman.png",
  Python: "/Images/tech/Python.png",
  Redux: "/Images/tech/Redux.png",
  TypeScript: "/Images/tech/TypeScript.png",
  Vercel: "/Images/tech/Vercel.png",
  Vite: "/Images/tech/Vite.js.png",
};

const Techstack = () => {
  const shouldReduce = useReducedMotion();
  return (
    <section className={styles.techSection} aria-label="Engineering stack detail">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.inner}>
        <motion.div
          className={styles.head}
          initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={shouldReduce ? undefined : { duration: 0.45 }}
        >
          <div className={styles.headLeft}>
            <span className={styles.eyebrow}>
              <Sparkles size={12} aria-hidden="true" /> Detail
            </span>
            <h2 className={styles.title}>Stack by layer</h2>
            <p className={styles.sub}>Grouped for scanning — icons where available, with production context.</p>
          </div>
          <span className={styles.badge}>Production-verified</span>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((g, idx) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.label}
                className={styles.group}
                initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
                whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={shouldReduce ? undefined : { duration: 0.4, delay: idx * 0.05 }}
              >
                <div className={styles.glow} aria-hidden="true" />
                <div className={styles.labelWrap}>
                  <span className={styles.labelIcon} aria-hidden="true">
                    <Icon size={16} />
                  </span>
                  <h3 className={styles.groupLabel}>{g.label}</h3>
                </div>

                <div className={styles.row}>
                  {g.items.map((name) => {
                    const src = iconMap[name];
                    return (
                      <span key={name} className={styles.chip}>
                        {src && (
                          <img
                            src={src}
                            alt=""
                            width={16}
                            height={16}
                            loading="lazy"
                            decoding="async"
                            aria-hidden="true"
                          />
                        )}
                        {name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Techstack;
