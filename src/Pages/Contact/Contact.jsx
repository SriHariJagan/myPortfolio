import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  ArrowRight,
  Clock,
  BadgeCheck,
  Sparkles,
  Send,
} from "lucide-react";
import { personalData } from "../../data";
import styles from "./contact.module.css";

const Contact = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={shouldReduce ? undefined : { opacity: 0, y: 14 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={shouldReduce ? undefined : { duration: 0.55, ease: "easeOut" }}
        >
          <span className={styles.eyebrow}>
            <Sparkles size={12} aria-hidden="true" /> Contact
          </span>
          <h2 id="contact-heading" className={styles.title}>
            Let&apos;s build <span>something useful.</span>
          </h2>
          <p className={styles.sub}>
            {personalData.available
              ? "I’m currently open to Backend and Full-Stack Developer opportunities — especially teams building secure, scalable APIs and production web applications."
              : "I’m open to discussing interesting product work and engineering collaborations."}{" "}
            The fastest way to reach me is email or LinkedIn — I reply within a day.
          </p>

          <div className={styles.trustRow} aria-label="Trust signals">
            <span className={styles.pill}>
              <BadgeCheck size={13} aria-hidden="true" /> Available for full-time
            </span>
            <span className={styles.pill}>
              <Clock size={13} aria-hidden="true" /> Replies in ~24h
            </span>
            <span className={styles.pill}>
              <MapPin size={13} aria-hidden="true" /> Andhra Pradesh · Remote
            </span>
          </div>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.infoCard}
            initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={shouldReduce ? undefined : { duration: 0.5, delay: 0.08 }}
          >
            <div className={styles.cardHead}>
              <h3>Contact Information</h3>
              <span className={styles.responseDot}>
                <span className={styles.dotPulse} aria-hidden="true" />
                Fast response
              </span>
            </div>

            <div className={styles.infoList}>
              <a href={`mailto:${personalData.email}`} className={styles.infoItem}>
                <span className={`${styles.icon} ${styles.iconMail}`} aria-hidden="true">
                  <Mail size={18} />
                </span>
                <span className={styles.infoText}>
                  <span className={styles.label}>Work Email</span>
                  <span className={styles.value}>{personalData.email}</span>
                  <span className={styles.actionHint}>Click to email →</span>
                </span>
                <span className={styles.arrowWrap} aria-hidden="true">
                  <ArrowRight size={16} />
                </span>
              </a>

              <a href={`tel:${personalData.phone.replace(/\s/g, "")}`} className={styles.infoItem}>
                <span className={`${styles.icon} ${styles.iconPhone}`} aria-hidden="true">
                  <Phone size={18} />
                </span>
                <span className={styles.infoText}>
                  <span className={styles.label}>Phone</span>
                  <span className={styles.value}>{personalData.phone}</span>
                  <span className={styles.actionHint}>Tap to call →</span>
                </span>
                <span className={styles.arrowWrap} aria-hidden="true">
                  <ArrowRight size={16} />
                </span>
              </a>

              <div className={`${styles.infoItem} ${styles.static}`}>
                <span className={`${styles.icon} ${styles.iconMap}`} aria-hidden="true">
                  <MapPin size={18} />
                </span>
                <span className={styles.infoText}>
                  <span className={styles.label}>Location</span>
                  <span className={styles.value}>{personalData.location}</span>
                  <span className={styles.hint}>Open to remote / hybrid · Can relocate for right role</span>
                </span>
              </div>
            </div>

            <div className={styles.socialRow}>
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub — SriHariJagan"
                className={styles.socialBtn}
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn — Sri Hari Jagan Mushini"
                className={styles.socialBtn}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={personalData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialBtn} ${styles.socialPrimary}`}
              >
                <FileText size={16} /> Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.ctaCard}
            initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={shouldReduce ? undefined : { duration: 0.5, delay: 0.14 }}
          >
            <div className={styles.ctaGlow} aria-hidden="true" />
            <span className={styles.ctaEyebrow}>
              <Send size={12} aria-hidden="true" /> Let&apos;s Connect
            </span>
            <p className={styles.ctaBody}>
              I focus on taking requirements from{" "}
              <strong>idea to production</strong> — secure REST APIs with Node.js and TypeScript,
              database design, authentication with <strong>RBAC</strong>, and clean deployment.
            </p>
            <p className={styles.ctaBodyMuted}>
              If you&apos;re hiring for a <strong>Backend / Full-Stack</strong> role or want to see how
              I&apos;d approach your system, let&apos;s talk. I&apos;ll share architecture, trade-offs,
              and a delivery plan — not just code.
            </p>

            <div className={styles.ctaBtns}>
              <a href={`mailto:${personalData.email}`} className={styles.primary}>
                <Mail size={16} aria-hidden="true" /> Email Me
                <ArrowRight size={16} aria-hidden="true" className={styles.btnArrow} />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.secondary}
              >
                <Linkedin size={16} aria-hidden="true" /> Message on LinkedIn
              </a>
            </div>

            <div className={styles.responseBar}>
              <span className={styles.responseLeft}>
                <Clock size={12} aria-hidden="true" /> Typical response time:
                <strong> within 24 hours</strong>
              </span>
              <span className={styles.responseRight}>Mon–Sat · IST (UTC+5:30)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
