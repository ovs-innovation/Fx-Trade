import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import "./ServiceCard.css";

export default function ServiceCard({
  number,
  title,
  description,
  features = [],
  path,
  featured = false
}) {
  return (
    <div className={`institutional-service-card ${featured ? "is-featured" : ""}`}>
      <div className="service-card-top">
        <span className="service-card-num">{number}</span>
        <div className="service-card-indicator" aria-hidden="true"></div>
      </div>

      <div className="service-card-body">
        <h3 className="service-card-title">
          <Link to={path}>{title}</Link>
        </h3>
        <p className="service-card-desc">{description}</p>

        {features.length > 0 && (
          <ul className="service-card-features">
            {features.map((feat) => (
              <li key={feat}>
                <CheckCircle2 size={14} className="feat-icon" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="service-card-bottom">
        <Link to={path} className="service-explore-link">
          <span>Explore Service</span>
          <ArrowUpRight size={17} className="service-arrow" />
        </Link>
      </div>
    </div>
  );
}
