import React from 'react';
import styles from './Education.module.css';
import { Fade } from 'react-awesome-reveal';

const Education = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}><Fade>Education</Fade></h3>
      <Fade>
      <div className={styles.timeline}>
        <div className={styles.timelineRow}>
          <div className={styles.timelineTime}>
            <small>Aug 2019</small> April 2023
          </div>
          <Fade direction="up" delay={20}>
          <div className={styles.timelineContent}>
            <i><span class="fa-solid fa-building-columns" /></i>
            <div  className={styles.schoolName}>
              <h4>Srinivasa Institute of Engineering</h4>
              <a href='https://sriniet.edu.in/' target='_blank' rel="noreferrer noopener">details</a>
            </div>
            
            <p>
              Affiliated to <h4>JNTUK</h4>
            </p>

            <p>
              <h4>7.15</h4> CGPA
            </p>

          </div>
          </Fade>
        </div>

        <div className={styles.timelineRow}>
          
          <div className={styles.timelineTime}>
            <small>June 2017</small>March 2019
          </div>
          <Fade direction="up" delay={20}>
          <div className={styles.timelineContent}>
            <i><span class="fa-solid fa-school" /></i>
            <div className={styles.schoolName}>
              <h4>Bhashayam Titanic Campus</h4>
              <a href='https://maps.app.goo.gl/X3tDaya7kdrxFsHk9' target='_blank' rel="noreferrer noopener">details</a>
            </div >
            <p>
              <h4>8.73</h4> CGPA
            </p>
          </div>
          </Fade>
        </div>
        

        <div className={styles.timelineRow}>
          <div className={styles.timelineTime}>
          <small>June 2016</small>March 2017
          </div>
          <Fade direction="up" delay={20}>
          <div className={styles.timelineContent}>
            <i><span class="fa-solid fa-school" /></i>
            <div className={styles.schoolName}>
              <h4>Bhashyam</h4>
              <a href='https://bhashyamschools.com/' target='_blank' rel="noreferrer noopener">details</a>
            </div>
            
            <p>
              <h4>9.2</h4> GPA
            </p>

          </div>
          </Fade>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Education;
