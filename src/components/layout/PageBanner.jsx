import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Container from "../common/Container";
import "./PageBanner.css";

export default function PageBanner({
  title,
  subtitle,
  image,
  bgImage,
  breadcrumb = [],
  breadcrumbItems = [],
  category,
  serviceIndex,
  metrics = []
}) {
  const bannerRef = useRef(null);
  const finalImage = image || bgImage;
  const finalBreadcrumbs = breadcrumb.length > 0 ? breadcrumb : breadcrumbItems;

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || window.innerWidth < 768) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (bannerRef.current) {
            const scrollY = window.scrollY;
            // Bound to max 14px shift
            const offset = Math.min(scrollY * 0.15, 14);
            bannerRef.current.style.backgroundPositionY = `calc(50% + ${offset}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={bannerRef}
      className="page-banner-section"
      style={{ backgroundImage: finalImage ? `url(${finalImage})` : undefined }}
      aria-label={title}
    >
      <div className="page-banner-overlay"></div>
      <Container>
        <div className="page-banner-content">
          <nav className="page-banner-breadcrumb hero-seq-eyebrow" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            {finalBreadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <ChevronRight size={14} className="breadcrumb-sep" />
                {item.path ? (
                  <Link to={item.path} className="breadcrumb-link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="breadcrumb-current">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="page-banner-header-row">
            {category && (
              <div className="page-banner-category-wrap hero-seq-eyebrow">
                <span className="page-banner-category">{category}</span>
                {serviceIndex && (
                  <span className="page-banner-index-pill">0{serviceIndex}</span>
                )}
              </div>
            )}
          </div>

          <h1 className="page-banner-title hero-seq-title">{title}</h1>

          {subtitle && (
            <p className="page-banner-subtitle hero-seq-desc">{subtitle}</p>
          )}

          {metrics && metrics.length > 0 && (
            <div className="page-banner-metrics-strip hero-seq-cta">
              {metrics.map((m, idx) => (
                <div key={idx} className="banner-metric-item">
                  <span className="banner-metric-val">{m.val}</span>
                  <span className="banner-metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
