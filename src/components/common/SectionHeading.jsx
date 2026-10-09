import React from "react";
import "./SectionHeading.css";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "default", // default or light (for dark sections)
  className = ""
}) {
  return (
    <div className={`section-heading-block align-${align} theme-${theme} ${className}`}>
      {eyebrow && (
        <span className="section-eyebrow">
          <span className="eyebrow-line"></span>
          <span className="eyebrow-text">{eyebrow}</span>
        </span>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
