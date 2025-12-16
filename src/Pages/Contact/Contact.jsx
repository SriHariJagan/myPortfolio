import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In <span>Touch</span>
      </motion.h1>

      <div className="headingDivider" style={{ margin: "auto" }} />

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Have a project in mind or looking for a skilled developer to collaborate
        with? Let’s connect.
      </motion.p>

      <div className={styles.cardsWrapper}>
        {/* Contact Info Card */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Contact Information</h3>

          <div className={styles.infoGrid}>
            <a href="mailto:sriharijagan04@gmail.com" className={styles.infoItem}>
              <div className={styles.iconBox}>
                <Mail size={18} />
              </div>
              <div>
                <span>Work Email</span>
                <p>sriharijagan04@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919505222778" className={styles.infoItem}>
              <div className={styles.iconBox}>
                <Phone size={18} />
              </div>
              <div>
                <span>Phone</span>
                <p>+91&nbsp;9505222778</p>
              </div>
            </a>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <MapPin size={18} />
              </div>
              <div>
                <span>Location</span>
                <p>Hyderabad, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connect Card */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Let’s Connect</h3>
          <p className={styles.connectText}>
            I’m a passionate full-stack developer focused on building clean,
            scalable, and user-centric web applications. Whether you’re hiring,
            launching a product, or need help bringing an idea to life, I’d love
            to discuss how I can contribute to your goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
