import React from "react";
import styles from "./Contact.module.css";

import images from "../../images";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactLinks}>
        <h3 className={styles.title}>
          Contact <span>Me</span>
        </h3>
        <div className={styles.contactDetails}>
          <div className={styles.contactBox}>
            <i class="fa-solid fa-location-dot" />
            <a
              href="https://goo.gl/maps/JqeYacBbEAtojJn57"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.map}
            >
              Details
            </a>
          </div>

          <div className={styles.contactBox}>
            <i class="fa-solid fa-phone" />
            <a href="tel:+91 9505222778" className={styles.number}>
              Call me{" "}
            </a>
          </div>

          <div className={styles.contactBox}>
            <i class="fa-solid fa-envelope" />
            <a href="mailto:sriharijagan04@gmail.com" className={styles.mail}>
              Mail me
            </a>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <div className={styles.socialBox}>
            <a
              href="www.linkedin.com/in/sri-hari-jagan-mushini"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src={images.linkedinImg} alt="linkedin" />
            </a>
          </div>

          <div className={styles.socialBox}>
            <a
              href="https://github.com/SriHariJagan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src={images.gitImg} alt="git" />
            </a>
          </div>

          <div className={styles.socialBox}>
            <a
              href="https://www.instagram.com/sriharijagan.m/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src={images.instagramImg} alt="instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.contactform}>
        <form action="">
          
          <div className={styles.input}>
            <section>
              {/* <label htmlFor="name">Name</label> <br /> */}
              <input type="text" name="name" id="name"  placeholder="Enter your Name"/>
            </section>

            <section>
              {/* <label htmlFor="email">Email</label><br /> */}
              <input type="email" name="email" id="email" placeholder="Enter your Email"/>
            </section>
          </div>

          <section className={styles.textarea}>
            <textarea name="message" id="message"  placeholder="Type Message"/>
          </section>

          <section className={styles.buttons}>
            <button type="submit" className={styles.sendBtn}>Send</button>
            <button type="reset" className={styles.clearBtn}>Clear</button>
          </section>

        </form>
      </div>
    </div>
  );
};

export default Contact;
