import React from "react";
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
  breadcrumbItems = []
}) {
  const finalImage = image || bgImage;
  const finalBreadcrumbs = breadcrumb.length > 0 ? breadcrumb : breadcrumbItems;

  return (
    <section
      className="page-banner-section"
      style={{ backgroundImage: finalImage ? `url(${finalImage})` : undefined }}
      aria-label={title}
    >
      <div className="page-banner-overlay"></div>
      <Container>
        <div className="page-banner-content">
          <nav className="page-banner-breadcrumb" aria-label="Breadcrumb">
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

          <h1 className="page-banner-title">{title}</h1>

          {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
        </div>
      </Container>
    </section>
  );
}
