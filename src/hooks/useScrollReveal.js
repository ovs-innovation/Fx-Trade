import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 * A lightweight, high-performance scroll reveal hook using IntersectionObserver.
 * Triggers ONCE per element when threshold is reached.
 * Respects prefers-reduced-motion.
 */
export default function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const root = containerRef.current || document;
    const elements = root.querySelectorAll(
      ".reveal-init, .timeline-line-draw, .steps-track-draw, .map-arc-animated"
    );

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("is-revealed")) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return containerRef;
}
