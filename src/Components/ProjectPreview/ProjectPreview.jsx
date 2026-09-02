import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./preview.module.css";

const LivePreview = ({ live, image, title, variant = "card" }) => {
  const [failed, setFailed] = useState(!live);
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!live || failed) return;
    // Fallback timer — if iframe hasn't loaded in 4.5s, assume blocked and show image
    const timer = setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, [live, failed, loaded]);

  // Also detect X-Frame block by trying to access contentWindow (will throw if blocked but loaded)
  const handleLoad = () => {
    setLoaded(true);
    try {
      const win = iframeRef.current?.contentWindow;
      // Accessing location will throw if cross-origin blocked with X-Frame deny? Actually still accessible but empty
      // If blocked, contentDocument will be null or throw
      if (!win) {
        setFailed(true);
        return;
      }
      // If blocked, the iframe will show an error page with minimal height — we can't reliably detect, so keep loaded state
    } catch {
      setFailed(true);
    }
  };

  if (!live || failed) {
    return (
      <div ref={containerRef} className={`${styles.wrap} ${variant === "modal" ? styles.modal : styles.card}`}>
        <img src={image} alt={`${title} — preview`} width={640} height={360} loading="lazy" decoding="async" className={styles.image} />
        {live && (
          <a href={live} target="_blank" rel="noreferrer" className={styles.badge} aria-label={`Open live site for ${title}`}>
            Live → <span className={styles.liveDot} aria-hidden="true" />
          </a>
        )}
        {variant === "card" && (
          <span className={styles.viewHint} aria-hidden="true">
            View details <ArrowUpRight size={12} aria-hidden="true" />
          </span>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`${styles.wrap} ${variant === "modal" ? styles.modal : styles.card}`}>
      <img src={image} alt="" aria-hidden="true" className={`${styles.image} ${styles.fallbackImage}`} />
      <iframe
        ref={iframeRef}
        src={live}
        title={`${title} — live preview`}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        referrerPolicy="no-referrer"
        onLoad={handleLoad}
        onError={() => setFailed(true)}
        className={styles.frame}
        aria-label={`${title} live preview`}
      />
      <a href={live} target="_blank" rel="noreferrer" className={styles.badge} aria-label={`Open live site for ${title}`}>
        Live preview <span className={styles.liveDot} aria-hidden="true" />
      </a>
      {variant === "card" && (
        <span className={styles.viewHint} aria-hidden="true">
          View details <ArrowUpRight size={12} aria-hidden="true" />
        </span>
      )}
      {!loaded && <span className={styles.loading} aria-hidden="true">Loading preview…</span>}
    </div>
  );
};

export default LivePreview;
