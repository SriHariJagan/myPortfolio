import React from "react";
import { FolderGit2 } from "lucide-react";
import styles from "./projects.module.css";
import { projectsData } from "../../data";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.title}>
        <FolderGit2 size={26} />
        Selected <span>Projects</span>
      </h1>
        <div className="headingDivider"/>


      <div className={styles.grid}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
