import React, { useEffect, useState, useRef, useCallback } from "react";
import { Sun, Moon, Menu, X, FileText } from "lucide-react";
import { personalData } from "../../data";
import styles from "./navbar.module.css";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "work", label: "Projects", href: "#work" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
    }
    return "dark";
  });
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ESC closes mobile, lock scroll
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const onClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [mobileOpen]);

  const toggleTheme = useCallback(() => {
    setTheme((p) => (p === "light" ? "dark" : "light"));
  }, []);

  return (
    <>
      <a href="#main" className="skipLink">
        Skip to content
      </a>
      <header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${mobileOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.inner}>
          <a href="#home" className={styles.brand} aria-label="Go to home">
            <span className={styles.logoWrap} aria-hidden="true">
              <img
                src={theme === "light" ? "/Images/logo/dark.png" : "/Images/logo/light.png"}
                alt=""
                width={44}
                height={44}
                className={styles.logo}
                loading="eager"
                decoding="async"
              />
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>Sri Hari Jagan</span>
              <span className={styles.brandRole}>Backend / Full-Stack Developer</span>
            </span>
          </a>

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul role="list">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={l.href}
                    data-active={activeId === l.id ? "true" : "false"}
                    aria-current={activeId === l.id ? "page" : undefined}
                    className={styles.navLink}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a
              href={personalData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeLink}
            >
              <FileText size={14} aria-hidden="true" /> Resume
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className={styles.themeBtn}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              aria-pressed={theme === "dark"}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              ref={toggleRef}
              type="button"
              className={styles.burger}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          ref={menuRef}
          className={`${styles.mobileNav} ${mobileOpen ? styles.mobileOpen : ""}`}
          aria-label="Mobile"
          aria-hidden={!mobileOpen}
          {...(!mobileOpen ? { inert: "" } : {})}
        >
          <ul role="list">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  data-active={activeId === l.id ? "true" : "false"}
                  onClick={() => setMobileOpen(false)}
                  className={styles.mobileLink}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personalData.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileResume}
            onClick={() => setMobileOpen(false)}
          >
            <FileText size={14} aria-hidden="true" /> Download Resume
          </a>
          <a href="#contact" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>
            Let&apos;s Connect →
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
