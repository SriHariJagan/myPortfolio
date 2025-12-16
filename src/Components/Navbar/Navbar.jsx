import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.glass : ""}`}>
      {/* LEFT – Logo + Name */}
      <div className={styles.left}>
        <img
          src={
            theme === "light"
              ? "/Images/logo/dark.png"
              : "/Images/logo/light.png"
          }
          alt="Logo"
          className={styles.logo}
        />
        <span className={styles.name}>Jagan Mushini</span>
      </div>

      {/* RIGHT – Theme Toggle */}
      <div className={styles.right}>
        <button
          onClick={toggleTheme}
          className={styles.themeBtn}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon size={24} strokeWidth={1.8} />
          ) : (
            <Sun size={24} strokeWidth={1.8} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
