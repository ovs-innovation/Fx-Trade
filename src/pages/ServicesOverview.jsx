import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Receipt,
  Globe2,
  TrendingUp,
  Building2,
  ShieldCheck
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import PageBanner from "../components/layout/PageBanner";
import useScrollReveal from "../hooks/useScrollReveal";
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

const serviceCategoryIcons = {
  "domestic-trade-finance": Receipt,
  "international-trade-finance": Globe2,
  "forex-services": TrendingUp,
  "debt-syndication": Building2,
  "meis-seis-licence-trading": ShieldCheck
};

export default function ServicesOverview() {
  const revealRef = useScrollReveal();

  const heroMetrics = [
    { val: "4", label: "Core Practice Areas" },
    { val: "70+", label: "Partner Bank Branches" },
    { val: "Pan-India", label: "Lending Syndication Reach" }
  ];

  return (
    <PageShell>
      <div ref={revealRef}>
        {/* 1. Page Hero Banner */}
        <PageBanner
          title="Our Services"
          category="INSTITUTIONAL PRACTICE AREAS"
          breadcrumb={[{ label: "Services" }]}
          image={bannerServicesImg}
          subtitle="Specialized trade finance syndication, corporate treasury advisory, and large-scale debt structuring tailored for Indian mid-corporates and enterprises."
          metrics={heroMetrics}
        />

        {/* 2. Image-Led Services Grid */}
        <section className="section-padding services-directory-section">
          {/* Subtle background graphical accents */}
          <div className="services-overview-bg-pattern" aria-hidden="true" />
          
          <Container>
            <div className="section-header-center reveal-init reveal-fade-up">
              <span className="section-eyebrow-accent">PRACTICE AREAS</span>
              <h2 className="section-title">Institutional Financial Solutions</h2>
              <p className="section-subtitle">
                Tailored advisory, credit syndication, and competitive bank quotes arranged across domestic and cross-border lending markets.
              </p>
            </div>

            <div className="services-directory-grid">
              {servicesSummary.items.map((service, index) => {
                const thumbImg = serviceThumbs[service.id] || serviceDomesticThumb;
                const IconComp = serviceCategoryIcons[service.id] || Receipt;
                const delayClass = `delay-${(index + 1) * 70}`;

                return (
                  <div
                    key={service.id}
                    className={`directory-card reveal-init reveal-fade-up ${delayClass}`}
                  >
                    <div className="directory-thumb-wrap img-zoom-wrap">
                      <img
                        src={thumbImg}
                        alt={service.title}
                        className="directory-thumb-img"
                        loading="lazy"
                      />
                      <div className="directory-badge-group">
                        <div className="directory-icon-pill" title={service.title}>
                          <IconComp size={16} />
                        </div>
                        <span className="directory-num-badge">0{index + 1}</span>
                      </div>
                    </div>

                    <div className="directory-card-body">
                      <h3 className="directory-title">{service.title}</h3>
                      <p className="directory-desc">{service.description}</p>

                      <ul className="directory-features">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="directory-feature-item">
                            <CheckCircle2 size={15} className="feat-check-icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to={service.path} className="directory-link link-arrow">
                        <span>Explore Service Details</span>
                        <ArrowRight size={16} className="directory-arrow-icon" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 3. Strategic Advisory CTA Strip */}
        <section className="services-cta-strip">
          <Container>
            <div className="services-cta-content">
              <div className="services-cta-text reveal-init reveal-fade-left">
                <span className="services-cta-eyebrow">SPEAK WITH AN ADVISOR</span>
                <h2 className="services-cta-title">
                  Unsure which financial structure is right for your transaction?
                </h2>
                <p className="services-cta-subtitle">
                  Consult with our senior financial advisors for an objective analysis of your working capital, discounting spreads, and treasury exposure.
                </p>
              </div>
              <div className="services-cta-actions reveal-init reveal-fade-right delay-100">
                <Link to="/contact" className="btn btn-accent btn-lg services-cta-btn">
                  <PhoneCall size={18} />
                  <span>Request Advisory Call</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageShell>
  );
}
