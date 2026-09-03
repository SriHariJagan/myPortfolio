import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Sparkles, X, ExternalLink, Github, Check, Layers, Sparkle, ArrowUpRight } from "lucide-react";
import styles from "./projects.module.css";
import { projectsData } from "../../data";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import techIcons from "../../Components/TechIcons";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPadding = document.body.style.paddingRight;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.paddingRight = prevBodyPadding;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      aria-hidden="true"
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close details">
          <X size={18} />
        </button>

        <div className={styles.modalGrid}>
          <div className={styles.modalImageWrap}>
            <div className={styles.browserBar} aria-hidden="true">
              <span className={styles.browserDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </span>
              <span className={styles.browserUrl}>{project.live ? (() => { try { return new URL(project.live).hostname; } catch { return "preview"; } })() : "preview"} — {project.category}</span>
              <span className={styles.browserLive} data-live={project.live ? "true" : "false"}>
                {project.live ? "● Live" : "○ Preview"}
              </span>
            </div>
            <div className={styles.modalImage}>
              <img src={project.image} alt={`${project.title} — screenshot`} width={880} height={560} loading="eager" decoding="async" />
            </div>
            <div className={styles.modalImageBar}>
              <span className={styles.monoSmall}>{project.category} · {project.tech.length} technologies</span>
              {project.live && (
                <span className={styles.monoSmallAccent}>
                  ↗ {(() => { try { return new URL(project.live).hostname; } catch { return project.live; } })()}
                </span>
              )}
            </div>
          </div>

          <div className={styles.modalContent}>
            <div className={styles.modalHead}>
              <span className={styles.modalEyebrow}>
                <Layers size={12} aria-hidden="true" /> {project.category} {project.featured ? "· Featured" : ""}
              </span>
              <h3 id="modal-title" className={styles.modalTitle}>
                {project.title}
              </h3>
              <p className={styles.modalDesc}>{project.description}</p>
            </div>

            <div className={styles.modalTech} aria-label="Technologies">
              {project.tech.map((t) => {
                const Icon = techIcons[t];
                return (
                  <span key={t} className={styles.modalTechChip}>
                    {Icon ? <Icon size={13} aria-hidden="true" /> : null}
                    {t}
                  </span>
                );
              })}
            </div>

            {project.problem && (
              <div className={styles.modalSection}>
                <h4>Problem</h4>
                <p className={styles.modalText}>{project.problem}</p>
              </div>
            )}
            {project.solution && (
              <div className={styles.modalSection}>
                <h4>Solution</h4>
                <p className={styles.modalText}>{project.solution}</p>
              </div>
            )}
            {project.myContribution && (
              <div className={styles.modalSection}>
                <h4>My Contribution</h4>
                <p className={styles.modalText}>{project.myContribution}</p>
              </div>
            )}
            {project.keyFeatures && (
              <div className={styles.modalSection}>
                <h4>
                  <Check size={14} aria-hidden="true" /> Key Features
                </h4>
                <ul className={styles.modalPoints}>
                  {project.keyFeatures.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.modalSection}>
              <h4>
                <Check size={14} aria-hidden="true" /> How it was built
              </h4>
              <ul className={styles.modalPoints}>
                {project.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            {project.techStack && (
              <div className={styles.modalSection}>
                <h4>Technology</h4>
                <p className={styles.modalTextMono}>{project.techStack}</p>
              </div>
            )}

            {project.architecture && (
              <div className={styles.modalSection}>
                <h4>Architecture</h4>
                <pre className={styles.architectureBlock} aria-label="Architecture diagram">
                  {project.architecture}
                </pre>
                <p className={styles.architectureNote}>Represents real implementation — no invented services.</p>
              </div>
            )}

            {project.engineeringHighlights && (
              <div className={styles.modalSection}>
                <h4>Engineering Highlights</h4>
                <div className={styles.highlightRow}>
                  {project.engineeringHighlights.map((h) => (
                    <span key={h} className={styles.highlightChip}>{h}</span>
                  ))}
                </div>
              </div>
            )}

            {project.privateNote && (
              <p className={styles.monoSmall} style={{ fontStyle: "italic", opacity: 0.85 }}>{project.privateNote}</p>
            )}

            <div className={styles.modalActions}>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className={styles.modalLive}>
                  <ExternalLink size={14} aria-hidden="true" /> Live demo <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className={styles.modalCode}>
                  <Github size={14} aria-hidden="true" /> View code
                </a>
              )}
              {!project.live && !project.github && !project.privateNote && (
                <span className={styles.monoSmall}>Private build — links on request</span>
              )}
              {!project.live && !project.github && project.privateNote && (
                <span className={styles.monoSmall}>Private production build — details on request</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CATEGORIES = ["All", "Featured / Production", "Other / Production", "Product Ecosystem", "Other"];

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [activeCat, setActiveCat] = useState("All");

  const open = useCallback((p) => setSelected(p), []);
  const close = useCallback(() => setSelected(null), []);

  const filtered = activeCat === "All" ? projectsData : projectsData.filter((p) => (p.group || p.category) === activeCat);
  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="work" className={styles.projects} aria-labelledby="work-heading">
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headLeft}>
            <span className={styles.eyebrow}>
              <Sparkles size={12} aria-hidden="true" /> Selected Work · {projectsData.length} builds
            </span>
            <h2 id="work-heading" className={styles.title}>
              Featured <span>Projects</span>
            </h2>
            <p className={styles.subtitle}>
              <strong>Production</strong> and <strong>full-stack</strong> builds — backend, APIs and databases first, with frontend depth. Featured are largest and most detailed.
            </p>
            <p className={styles.hint}>
              <ArrowUpRight size={12} aria-hidden="true" /> Tap any card — case study with Problem → Solution → Contribution → Architecture
            </p>
          </div>

          <div className={styles.headRight}>
            <span className={styles.stat}>
              <span className={styles.statNum}>{featuredProjects.length}</span>
              <span className={styles.statLabel}>featured</span>
            </span>
            <span className={styles.statDivider} aria-hidden="true" />
            <span className={styles.stat}>
              <span className={styles.statNum}>{projectsData.filter((p) => p.live).length}</span>
              <span className={styles.statLabel}>live</span>
            </span>
            <span className={styles.statDivider} aria-hidden="true" />
            <span className={styles.stat}>
              <span className={styles.statNum}>{projectsData.length}</span>
              <span className={styles.statLabel}>total</span>
            </span>
          </div>
        </div>

        <div className={styles.filterBar} role="tablist" aria-label="Project categories">
          {CATEGORIES.map((cat) => {
            const count = cat === "All" ? projectsData.length : projectsData.filter((p) => (p.group || p.category) === cat).length;
            const isActive = activeCat === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterBtn} ${isActive ? styles.filterActive : ""}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat} <span className={styles.filterCount}>{count}</span>
              </button>
            );
          })}
        </div>

        {activeCat === "All" ? (
          <>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelDot} aria-hidden="true" />
              Featured / Production Projects — backend & full-stack depth
            </div>
            <div className={styles.gridFeatured}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} onView={open} />
              ))}
            </div>

            <div className={styles.sectionLabel} style={{ marginTop: "1.6rem" }}>
              <span className={styles.sectionLabelDot} aria-hidden="true" style={{ background: "var(--text-muted)" }} />
              Other Projects & Experiments
            </div>
            <div className={styles.grid}>
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} {...project} onView={open} />
              ))}
            </div>
          </>
        ) : (
          <div className={styles.grid}>
            {filtered.map((project) => (
              <ProjectCard key={project.id} {...project} onView={open} />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={close} />}</AnimatePresence>
    </section>
  );
};

export default Projects;
