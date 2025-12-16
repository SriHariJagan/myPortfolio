import React from "react";
import styles from "./skills.module.css";
import { FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90, color: "var(--skill-react)" },
  { name: "JavaScript", level: 85, color: "var(--skill-js)" },
  { name: "HTML & CSS", level: 92, color: "var(--skill-html)" },
  { name: "Tailwind CSS", level: 88, color: "var(--skill-tailwind)" },
  { name: "Node.js", level: 75, color: "var(--skill-node)" },
  { name: "MongoDB", level: 72, color: "var(--skill-mongo)" },
  { name: "Python", level: 70, color: "var(--skill-python)" },
];


const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h1 className={styles.title}>
        <FolderGit2 size={26} />
        Core <span>Skills</span>
      </h1>

      <div className="headingDivider" />

      {/* Single Card */}
      <motion.div
        className={styles.skillCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {skills.map((skill, index) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <span>{skill.name}</span>
              <span className={styles.percent}>{skill.level}%</span>
            </div>

            <div className={styles.track}>
              <motion.div
                className={styles.fill}
                style={{ background: skill.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
