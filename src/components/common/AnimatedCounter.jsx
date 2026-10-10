import React, { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({
  target,
  duration = 1200,
  suffix = "",
  prefix = ""
}) {
  const endVal = Number(target) || 0;

  // Initialize with endVal if SSR, no IntersectionObserver, or prefers-reduced-motion, otherwise 0
  const [count, setCount] = useState(() => {
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return endVal;
    }
    return 0;
  });

  const countRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (hasAnimatedRef.current) return;

    let timer = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth easeOutCubic curve approximating cubic-bezier(0.22, 1, 0.36, 1)
            const ease = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(endVal * ease);
            setCount(currentVal);

            if (progress < 1) {
              timer = requestAnimationFrame(updateCounter);
            } else {
              setCount(endVal);
            }
          };

          timer = requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.15 }
    );

    const el = countRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      if (timer) cancelAnimationFrame(timer);
    };
  }, [endVal, duration]);

  return (
    <span ref={countRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
