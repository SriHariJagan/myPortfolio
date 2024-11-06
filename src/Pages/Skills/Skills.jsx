import React from 'react'
import styles from './Skills.module.css'
import images from '../../images'

import Marquee from "react-fast-marquee";

const Skills = () => {

    return (
    <div className={styles.skillsContainer}>

        <div className={styles.skillsBlock}>
            <h4 className={styles.title}>Professional <span>Skillset</span></h4>
            <div className={styles.skills}>
                <Marquee pauseOnHover>
                    <div className={styles.box}><img src={images.htmlImage} alt="html" /></div>
                    <div className={styles.box}><img src={images.cssImage} alt="css" /></div>
                    <div className={styles.box}><img src={images.jsImg} alt="js" /></div>
                    <div className={styles.box}><img src={images.reactImg} alt="react" /></div>
                    <div className={styles.box}><img src={images.reduxImage} alt="redux" /></div>
                    <div className={styles.box}><img src={images.nodeImg} alt="node" /></div>
                    <div className={styles.box}><img src={images.expressImage} alt="express" /></div>
                    <div className={styles.box}><img src={images.mangodbImage} alt="mongodb" /></div>
                    <div className={styles.box}><img src={images.gitImage} alt="git" /></div>
                </Marquee>
            </div>
        </div>

        <div className={styles.toolsBlock}>
            <h4 className={styles.title}><span>Tools</span> I use</h4>
            <div className={styles.tools}>
                <Marquee direction='right' pauseOnHover>
                    <div className={styles.box}><img src={images.vscodeImage} alt="vs" /></div>
                    <div className={styles.box}><img src={images.sublimeTextImage} alt="sublimeText" /></div>
                    <div className={styles.box}><img src={images.githubImage} alt="github" /></div>
                    <div className={styles.box}><img src={images.mongodbComposs} alt="mdbComposs" /></div>
                    <div className={styles.box}><img src={images.netlifyImage} alt="netlify" /></div>
                    <div className={styles.box}><img src={images.renderImage} alt="render" /></div>
                </Marquee>
            </div>
        </div>
    </div>
  )
}

export default Skills
