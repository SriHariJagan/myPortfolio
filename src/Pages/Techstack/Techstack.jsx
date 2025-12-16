import React from "react";
import { motion } from "framer-motion";
import styles from "./techstack.module.css";
import { Code2 } from "lucide-react";

/* ======================
   TECH STACK DATA
====================== */
const techStack = [
  { name: "React", src: "/Images/tech/React.png" },
  { name: "JavaScript", src: "/Images/tech/JavaScript.png" },
  { name: "HTML5", src: "/Images/tech/HTML5.png" },
  { name: "CSS3", src: "/Images/tech/CSS3.png" },
  { name: "Node.js", src: "/Images/tech/Node.js.png" },
  { name: "Express", src: "/Images/tech/Express.png" },
  { name: "MongoDB", src: "/Images/tech/MongoDB.png" },
  { name: "Tailwind CSS", src: "/Images/tech/Tailwind CSS.png" },
  { name: "Bootstrap", src: "/Images/tech/Bootstrap.png" },
  { name: "Git", src: "/Images/tech/Git.png" },
  { name: "GitHub", src: "/Images/tech/GitHub.png" },
  { name: "GitLab", src: "/Images/tech/GitLab.png" },
  { name: "Firebase", src: "/Images/tech/Firebase.png" },
  { name: "Netlify", src: "/Images/tech/netlify.png" },
  { name: "Postman", src: "/Images/tech/Postman.png" },
  { name: "Python", src: "/Images/tech/Python.png" },
  { name: "Redux", src: "/Images/tech/Redux.png" },
  { name: "Sass", src: "/Images/tech/Sass.png" },
  { name: "TypeScript", src: "/Images/tech/TypeScript.png" },
  { name: "Vercel", src: "/Images/tech/Vercel.png" },
  { name: "Vite", src: "/Images/tech/Vite.js.png" },
];

/* ======================
   FRAMER VARIANTS
====================== */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // 👈 one after another
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const Techstack = () => {
  return (
    <section className={styles.techSection}>
      {/* ===== Title ===== */}
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Code2 size={26} />
       Tech <span>Stack</span>
      </motion.h1>

      <div className="headingDivider" />

      {/* ===== Grid ===== */}
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {techStack.map(({ name, src }) => (
          <motion.div
            key={name}
            className={styles.techCard}
            variants={cardVariants}
          >
            <span className={styles.techName}>{name}</span>
            <img src={src} alt={name} className={styles.icon} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Techstack;
