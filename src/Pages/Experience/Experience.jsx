import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import styles from "./experience.module.css";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";
import { experienceData } from "../../data";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className={styles.experienceIcon}> <Briefcase size={28} /> </span>
        Professional <span>Journey</span>
      </motion.h1>
      <div className="headingDivider"/>


      <div className={styles.list}>
        {experienceData.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
