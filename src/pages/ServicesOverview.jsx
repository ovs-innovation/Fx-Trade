import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import PageBanner from "../components/layout/PageBanner";
import { servicesSummary } from "../data/services";

import bannerServicesImg from "../assets/images/banner-services.jpg";
import serviceDomesticThumb from "../assets/images/service-domestic-thumb.jpg";
import serviceIntlThumb from "../assets/images/service-intl-thumb.jpg";
import serviceForexThumb from "../assets/images/service-forex-thumb.jpg";
import serviceDebtThumb from "../assets/images/service-debt-thumb.jpg";
import "./ServicesOverview.css";

const serviceThumbs = {
  "domestic-trade-finance": serviceDomesticThumb,
  "international-trade-finance": serviceIntlThumb,
  "forex-services": serviceForexThumb,
  "debt-syndication": serviceDebtThumb
};

export default function ServicesOverview() {
  return (
    <PageShell>
      {/* 1. Page Hero Banner */}
      <PageBanner
        title="Our Services"
        breadcrumb={[{ label: "Services" }]}
        image={bannerServicesImg}
        subtitle="Specialized trade finance syndication, corporate treasury advisory, and large-scale debt structuring."
      />

      {/* 2. Image-Led Services Grid */}
      <section className="section-padding services-directory-section">
        <Container>
          <div className="section-header-center">
            <span className="section-eyebrow-accent">PRACTICE AREAS</span>
            <h2 className="section-title">Institutional Financial Solutions</h2>
            <p className="section-subtitle">
              Tailored advisory and competitive bank quotes arranged across domestic and cross-border lending markets.
            </p>
          </div>

          <div className="services-directory-grid">
            {servicesSummary.items.map((service, index) => {
              const thumbImg = serviceThumbs[service.id] || serviceDomesticThumb;
              return (
                <div key={service.id} className="directory-card">
                  <div className="directory-thumb-wrap img-zoom-wrap">
                    <img
                      src={thumbImg}
                      alt={service.title}
                      className="directory-thumb-img"
                      loading="lazy"
                    />
                    <span className="directory-num-badge">0{index + 1}</span>
                  </div>

                  <div className="directory-card-body">
                    <h3 className="directory-title">{service.title}</h3>
                    <p className="directory-desc">{service.description}</p>

                    <ul className="directory-features">
                      {service.features.map((feat, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={15} className="feat-check-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to={service.path} className="directory-link link-arrow">
                      <span>Explore Service Details</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. CTA Strip */}
      <section className="services-cta-strip">
        <Container>
          <div className="services-cta-content">
            <div>
              <h2 className="services-cta-title">
                Unsure which financial structure is right for your transaction?
              </h2>
              <p className="services-cta-subtitle">
                Consult with our senior financial advisors for an objective analysis of your working capital and trade finance requirements.
              </p>
            </div>
            <Link to="/contact" className="btn btn-accent btn-lg">
              <PhoneCall size={18} />
              <span>Request Advisory Call</span>
            </Link>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
