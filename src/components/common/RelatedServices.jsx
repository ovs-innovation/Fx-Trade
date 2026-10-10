import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Receipt, Globe2, TrendingUp, Building2 } from "lucide-react";
import Container from "./Container";
import { servicesSummary } from "../../data/services";
import "./RelatedServices.css";

const defaultServiceIcons = {
  "domestic-trade-finance": Receipt,
  "international-trade-finance": Globe2,
  "forex-services": TrendingUp,
  "debt-syndication": Building2
};

const relatedMapping = {
  "domestic-trade-finance": ["international-trade-finance", "debt-syndication"],
  "international-trade-finance": ["forex-services", "domestic-trade-finance"],
  "forex-services": ["international-trade-finance", "debt-syndication"],
  "debt-syndication": ["domestic-trade-finance", "forex-services"]
};

export default function RelatedServices({ currentServiceId, serviceIds }) {
  const idsToShow = serviceIds || relatedMapping[currentServiceId] || [];
  if (idsToShow.length === 0) return null;

  const services = servicesSummary.items.filter((item) => idsToShow.includes(item.id));

  return (
    <section className="section-padding-sm related-services-section">
      <Container>
        <div className="related-services-header reveal-init reveal-fade-up">
          <div>
            <span className="section-eyebrow-accent">COMPREHENSIVE ADVISORY</span>
            <h3 className="related-services-title">Explore Related Services</h3>
          </div>
          <Link to="/services" className="related-services-view-all link-arrow">
            <span>View All Practice Areas</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="related-services-grid">
          {services.map((service, idx) => {
            const IconComp = defaultServiceIcons[service.id] || Receipt;
            const delayClass = `delay-${(idx + 1) * 100}`;
            return (
              <div
                key={service.id}
                className={`related-service-card reveal-init reveal-fade-up ${delayClass}`}
              >
                <div className="related-card-top">
                  <div className="related-icon-wrap">
                    <IconComp size={20} className="related-card-icon" />
                  </div>
                  <span className="related-card-number">0{idx + 1}</span>
                </div>

                <div className="related-card-body">
                  <h4 className="related-card-title">{service.title}</h4>
                  <p className="related-card-desc">{service.description}</p>
                </div>

                <Link to={service.path} className="related-card-link">
                  <span>Explore Details</span>
                  <ArrowRight size={15} className="related-card-arrow" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
