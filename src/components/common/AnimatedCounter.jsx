import React, { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({
  target,
  duration = 500,
  suffix = "",
  prefix = ""
}) {
  const endVal = Number(target) || 0;
  const [count, setCount] = useState(endVal);
  const countRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(endVal);
      return;
    }

    let hasTriggered = false;
    let timer = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          hasTriggered = true;
          setCount(0);
          const startTime = Date.now();

          timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(endVal * ease));

            if (progress >= 1) {
              clearInterval(timer);
              setCount(endVal);
            }
          }, 25);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
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
