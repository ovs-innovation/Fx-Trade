import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe2,
  CheckCircle2,
  FileText,
  BadgeDollarSign,
  Landmark,
  PhoneCall,
  Headphones,
  Award,
  TrendingDown
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import PageBanner from "../components/layout/PageBanner";

import bannerInternationalImg from "../assets/images/banner-international.jpg";
import intlCargoImg from "../assets/images/intl-cargo.jpg";
import intlCorrespondentImg from "../assets/images/intl-correspondent.jpg";
import "./InternationalTradeFinance.css";

export default function InternationalTradeFinance() {
  const coreChecklist = [
    "Import & Export Financing",
    "Letter of Credit (LC)",
    "Standby Letter of Credit (SBLC)",
    "Export Bill Discounting",
    "Supplier's Credit",
    "Regulatory & Compliance Support"
  ];

  const whyChooseFeatures = [
    {
      icon: Landmark,
      title: "Wide Network of Global Banks"
    },
    {
      icon: TrendingDown,
      title: "Competitive Pricing"
    },
    {
      icon: Headphones,
      title: "End-to-End Support"
    },
    {
      icon: Award,
      title: "Trusted by Businesses"
    }
  ];

  const services = [
    {
      title: "Supplier's Credit Syndication",
      desc: "Arranging cost-effective foreign currency credit for Indian importers against letters of credit, backed by top overseas lenders.",
      icon: BadgeDollarSign
    },
    {
      title: "Export LC Discounting",
      desc: "Instant liquidity for Indian exporters by discounting accepted export letters of credit at competitive international benchmark spreads.",
      icon: FileText
    },
    {
      title: "Cross-Border Letters of Credit",
      desc: "Structuring and confirming import/export LCs through established overseas correspondent banks to minimize commercial payment risk.",
      icon: Landmark
    },
    {
      title: "Overseas Correspondent Banking",
      desc: "Direct access to more than 50 overseas bank branches across key trade hubs including Singapore, Dubai, Europe, and the UK.",
      icon: Globe2
    }
  ];

  return (
    <PageShell>
      {/* 1. Page Hero Banner (Reference Panel 4) */}
      <PageBanner
        title="International Trade Finance"
        breadcrumb={[
          { label: "Services", path: "/services" },
          { label: "International Trade Finance" }
        ]}
        image={bannerInternationalImg}
        subtitle="End-to-end foreign trade credit, supplier's credit, and international LC confirmation facilities."
      />

      {/* 2. Primary Service Block: Image Left + Checklist Right (Reference Panel 4) */}
      <section className="section-padding itf-main-feature-section">
        <Container>
          <div className="itf-hero-card">
            <div className="itf-hero-image-wrap img-zoom-wrap">
              <img
                src={intlCargoImg}
                alt="International Cargo Ship and Trade Finance"
                className="itf-hero-photo"
              />
            </div>
            <div className="itf-hero-content-wrap">
              <span className="section-eyebrow-accent">CROSS-BORDER FACILITATION</span>
              <h2 className="itf-hero-title">
                Facilitating Global Trade With Confidence
              </h2>
              <p className="itf-hero-lead">
                We provide tailored international trade finance solutions to help businesses manage cross-border transactions, reduce risks and access global opportunities.
              </p>

              <div className="itf-checklist-grid">
                {coreChecklist.map((item, idx) => (
                  <div key={idx} className="itf-check-item">
                    <CheckCircle2 size={18} className="itf-check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="itf-hero-action">
                <Link to="/contact" className="btn btn-navy">
                  <span>Get Quote for Trade Facility</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Why Choose FXTrade? 4-Icon Grid (Reference Panel 4) */}
      <section className="section-padding-sm itf-why-strip-section">
        <Container>
          <div className="section-header-center">
            <h2 className="why-strip-title">Why Choose FXTrade?</h2>
          </div>

          <div className="why-strip-grid">
            {whyChooseFeatures.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="why-strip-card">
                  <div className="why-strip-icon-box">
                    <IconComp size={24} className="why-strip-icon" />
                  </div>
                  <h3 className="why-strip-text">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Core Solutions Cards with Micro-Interactions */}
      <section className="section-padding itf-services-section">
        <Container>
          <div className="section-header-center">
            <span className="section-eyebrow-accent">SPECIALIZED FACILITIES</span>
            <h2 className="section-title">International Trade Solutions</h2>
            <p className="section-subtitle">
              Comprehensive financing instruments designed to streamline import commitments and unlock foreign export revenue.
            </p>
          </div>

          <div className="itf-services-grid">
            {services.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="itf-service-card">
                  <div className="itf-card-icon-wrap">
                    <IconComp size={22} className="itf-card-icon" />
                  </div>
                  <h3 className="itf-card-title">{item.title}</h3>
                  <p className="itf-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Global Correspondent Network: Text Left + Image Right */}
      <section className="section-padding itf-network-section">
        <Container>
          <div className="itf-network-grid">
            <div className="itf-network-text-col">
              <span className="section-eyebrow-accent">CORRESPONDENT NETWORK</span>
              <h2 className="section-title">
                Worldwide Banking Relationships Across 50+ Branches
              </h2>
              <p className="section-lead">
                Our established relationships with international and foreign bank branches empower clients to negotiate directly with global lenders.
              </p>
              <p className="body-text">
                By maintaining continuous contact with offshore credit desks in major financial centers like Singapore, the UAE, the United Kingdom, and Western Europe, we secure competitive discounting margins and swift credit approvals for large-scale procurement.
              </p>

              <div className="itf-stats-row">
                <div className="itf-stat-box">
                  <span className="itf-stat-val">50+</span>
                  <span className="itf-stat-lbl">Overseas Bank Branches</span>
                </div>
                <div className="itf-stat-box">
                  <span className="itf-stat-val">Daily</span>
                  <span className="itf-stat-lbl">Supplier's Credit Syndication</span>
                </div>
                <div className="itf-stat-box">
                  <span className="itf-stat-val">Lowest</span>
                  <span className="itf-stat-lbl">Competitive Quote Arrangement</span>
                </div>
              </div>
            </div>

            <div className="itf-network-image-col">
              <div className="corporate-image-card img-zoom-wrap">
                <img
                  src={intlCorrespondentImg}
                  alt="International correspondent banking consultation"
                  className="corporate-photo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CTA Strip */}
      <section className="itf-cta-strip">
        <Container>
          <div className="itf-cta-content">
            <div>
              <h2 className="itf-cta-title">
                Connect with our International Trade Finance team
              </h2>
              <p className="itf-cta-subtitle">
                Discuss your import/export transaction and explore competitive supplier's credit and discounting rates.
              </p>
            </div>
            <Link to="/contact" className="btn btn-accent btn-lg">
              <PhoneCall size={18} />
              <span>Connect With Our Desk</span>
            </Link>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
