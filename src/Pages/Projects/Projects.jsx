import React from 'react';
import styles from './Projects.module.css';
import images from '../../images';
import projectData from '../../projectsData';
import { Fade } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <div className={styles.projectContainer}>
      <Fade>
      <section className={styles.projectHeading}> 
        <h3 className={styles.title}>Recent Top <span>Works</span></h3>
        <span>Here are a few projects I've worked on recently.</span>
      </section>
      </Fade>

      <div className={styles.projects}>
        {projectData.map((project, index) => (
          <Fade direction="up">
          <div key={index} className={styles.projectCard}>
            <div className={styles.cardImage}>
              <img src={project.img} alt={project.name} className={styles.cardImagePrev}/>
              <div className={styles.cardImageLinks}> 
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <img src={images.gitImg} alt="git" width={35} />
                </a>
                {project.preview && (
                  <a href={project.preview} target="_blank" rel="noopener noreferrer">
                    <i className="fa-regular fa-eye" />
                  </a>
                )}
              </div>
            </div>
            <div className={styles.cardDetails}>
              <h2 className={styles.cardCategory}>{project.type}</h2>
              <div className={styles.projectDetails}>
                <h3 className={styles.cardTitle}>{project.name}</h3>
                <p className={styles.cardDiscription}>{project.description}</p>
              </div>
              <div className={styles.cardSkills}>
                <h3>Skills Used</h3>
                {project.skillSet.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.cardSkillName} style={{ backgroundColor: skill.color }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default Projects;
