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
  TrendingDown,
  Anchor,
  Compass,
  ShieldCheck
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import PageBanner from "../components/layout/PageBanner";
import RelatedServices from "../components/common/RelatedServices";
import AnimatedCounter from "../components/common/AnimatedCounter";
import useScrollReveal from "../hooks/useScrollReveal";

import bannerInternationalImg from "../assets/images/banner-international.jpg";
import intlCargoImg from "../assets/images/intl-cargo.jpg";
import intlCorrespondentImg from "../assets/images/intl-correspondent.jpg";
import "./InternationalTradeFinance.css";

export default function InternationalTradeFinance() {
  const revealRef = useScrollReveal();

  const coreChecklist = [
    "Import & Export Financing",
    "Letter of Credit (LC)",
    "Standby Letter of Credit (SBLC)",
    "Export Bill Discounting",
    "Supplier's Credit Syndication",
    "Global Regulatory & FEMA Support"
  ];

  const whyChooseFeatures = [
    {
      icon: Landmark,
      title: "Wide Network of Global Banks",
      desc: "Direct access to 50+ overseas bank branches across major trade centers."
    },
    {
      icon: TrendingDown,
      title: "Competitive Pricing",
      desc: "Benchmark spreads tied to SOFR/EURIBOR for minimal borrowing costs."
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      desc: "Dedicated desk coordination from term sheet issuance to cargo release."
    },
    {
      icon: Award,
      title: "Trusted by Businesses",
      desc: "Decades of verified institutional advisory with premier Indian corporations."
    }
  ];

  const services = [
    {
      num: "01",
      title: "Supplier's Credit Syndication",
      desc: "Arranging cost-effective foreign currency credit for Indian importers against letters of credit, backed by top overseas lenders.",
      icon: BadgeDollarSign
    },
    {
      num: "02",
      title: "Export LC Discounting",
      desc: "Instant liquidity for Indian exporters by discounting accepted export letters of credit at competitive international benchmark spreads.",
      icon: FileText
    },
    {
      num: "03",
      title: "Cross-Border Letters of Credit",
      desc: "Structuring and confirming import/export LCs through established overseas correspondent banks to minimize commercial payment risk.",
      icon: Landmark
    },
    {
      num: "04",
      title: "Overseas Correspondent Banking",
      desc: "Direct access to more than 50 overseas bank branches across key trade hubs including Singapore, Dubai, Europe, and the UK.",
      icon: Globe2
    }
  ];

  const intlHeroMetrics = [
    { val: "50+", label: "Overseas Bank Branches" },
    { val: "Daily", label: "Supplier's Credit Desk" },
    { val: "Lowest", label: "Benchmark Spreads Arranged" }
  ];

  return (
    <PageShell>
      <div ref={revealRef}>
        {/* 1. Page Hero Banner */}
        <PageBanner
          title="International Trade Finance"
          category="PRACTICE AREA 02 • CROSS-BORDER TRADE FINANCE"
          serviceIndex="2"
          breadcrumb={[
            { label: "Services", path: "/services" },
            { label: "International Trade Finance" }
          ]}
          image={bannerInternationalImg}
          subtitle="End-to-end foreign trade credit, supplier's credit, and international LC confirmation facilities spanning major global commerce corridors."
          metrics={intlHeroMetrics}
        />

        {/* 2. Primary Service Block: Image Left (45%) + Checklist Right (55%) */}
        <section className="section-padding itf-main-feature-section">
          <Container>
            <div className="itf-hero-grid">
              <div className="itf-hero-image-wrap reveal-init reveal-fade-right">
                <div className="corporate-image-card img-zoom-wrap">
                  <img
                    src={intlCargoImg}
                    alt="International Cargo Ship and Trade Finance"
                    className="corporate-photo"
                  />
                  <div className="image-accent-badge">
                    <Anchor size={18} />
                    <span>Global Cargo & Port Facilities</span>
                  </div>
                </div>
              </div>

              <div className="itf-hero-content-wrap reveal-init reveal-fade-left delay-100">
                <span className="section-eyebrow-accent">CROSS-BORDER FACILITATION</span>
                <h2 className="section-title">
                  Facilitating Global Trade With Confidence
                </h2>
                <p className="section-lead">
                  We provide tailored international trade finance solutions to help businesses manage cross-border transactions, reduce risks, and access global markets.
                </p>
                <p className="body-text">
                  In today's interconnected trade ecosystem, Indian importers and exporters require reliable foreign bank arrangements that eliminate payment delays, optimize currency cash flow, and ensure continuous adherence to RBI guidelines.
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

        {/* 3. Why Choose FXTrade? 4-Card Trust Strip */}
        <section className="section-padding-sm itf-why-strip-section">
          <Container>
            <div className="section-header-center reveal-init reveal-fade-up">
              <span className="section-eyebrow-accent">INSTITUTIONAL RELIABILITY</span>
              <h2 className="section-title">Why Choose FXTrade for Cross-Border Trade?</h2>
              <p className="section-subtitle">
                Decades of direct banking relationships empowering seamless execution for mid-corporates and trading houses.
              </p>
            </div>

            <div className="why-strip-grid">
              {whyChooseFeatures.map((item, idx) => {
                const IconComp = item.icon;
                const delayClass = `delay-${(idx + 1) * 70}`;
                return (
                  <div
                    key={idx}
                    className={`why-strip-card reveal-init reveal-fade-up ${delayClass}`}
                  >
                    <div className="why-strip-icon-box">
                      <IconComp size={24} className="why-strip-icon" />
                    </div>
                    <h3 className="why-strip-title">{item.title}</h3>
                    <p className="why-strip-desc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 4. Core Solutions Cards with Micro-Interactions */}
        <section className="section-padding itf-services-section">
          <Container>
            <div className="section-header-center reveal-init reveal-fade-up">
              <span className="section-eyebrow-accent">SPECIALIZED FACILITIES</span>
              <h2 className="section-title">International Trade Solutions</h2>
              <p className="section-subtitle">
                Comprehensive financing instruments designed to streamline import commitments and unlock foreign export revenue.
              </p>
            </div>

            <div className="itf-services-grid">
              {services.map((item, idx) => {
                const IconComp = item.icon;
                const delayClass = `delay-${(idx + 1) * 80}`;
                return (
                  <div
                    key={idx}
                    className={`itf-service-card reveal-init reveal-fade-up ${delayClass}`}
                  >
                    <div className="itf-card-top">
                      <div className="itf-card-icon-wrap">
                        <IconComp size={22} className="itf-card-icon" />
                      </div>
                      <span className="itf-card-num">{item.num}</span>
                    </div>
                    <h3 className="itf-card-title">{item.title}</h3>
                    <p className="itf-card-desc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 5. Global Correspondent Network: Text Left (50%) + Map Graphic / Photo Right (50%) */}
        <section className="section-padding itf-network-section">
          <Container>
            <div className="itf-network-grid">
              <div className="itf-network-text-col reveal-init reveal-fade-left">
                <span className="section-eyebrow-accent">CORRESPONDENT NETWORK</span>
                <h2 className="section-title">
                  Worldwide Banking Relationships Across 50+ Branches
                </h2>
                <p className="section-lead">
                  Our established relationships with international and foreign bank branches empower clients to negotiate directly with global lenders.
                </p>
                <p className="body-text">
                  By maintaining continuous contact with offshore credit desks in major financial centers like Singapore, Dubai, Western Europe, and the UK, we secure competitive discounting margins and swift credit approvals for large-scale procurement.
                </p>

                <div className="itf-stats-row">
                  <div className="itf-stat-box">
                    <span className="itf-stat-val">
                      <AnimatedCounter target={50} suffix="+" duration={1200} />
                    </span>
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

              <div className="itf-network-image-col reveal-init reveal-fade-right delay-100">
                <div className="corporate-image-card img-zoom-wrap">
                  <img
                    src={intlCorrespondentImg}
                    alt="International correspondent banking consultation"
                    className="corporate-photo"
                    loading="lazy"
                  />
                  <div className="network-visual-badge">
                    <Compass size={18} />
                    <span>Singapore • Dubai • London • Frankfurt</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 6. Strategic Dark Global Commerce Assurance Band */}
        <section className="itf-assurance-band">
          <Container>
            <div className="itf-assurance-content reveal-init reveal-fade-up">
              <div className="assurance-header">
                <span className="section-eyebrow-accent">COMPREHENSIVE ADVISORY</span>
                <h3 className="assurance-title">
                  Mitigating Global Risk & Ensuring Regulatory Compliance
                </h3>
                <p className="assurance-subtitle">
                  Cross-border transactions demand rigorous regulatory diligence. FXTrade ensures full adherence to RBI master directions, FEMA regulations, and ICC UCP 600 standards.
                </p>
              </div>

              <div className="assurance-grid">
                <div className="assurance-card">
                  <ShieldCheck size={24} className="assurance-icon" />
                  <h4>FEMA & RBI Alignment</h4>
                  <p>Strict verification of import-export documentation to ensure smooth regulatory clearances and compliance reporting.</p>
                </div>
                <div className="assurance-card">
                  <Globe2 size={24} className="assurance-icon" />
                  <h4>Currency Risk Cushion</h4>
                  <p>Integration with our forex desk to lock in competitive currency forwards and mitigate foreign exchange volatility.</p>
                </div>
                <div className="assurance-card">
                  <FileText size={24} className="assurance-icon" />
                  <h4>UCP 600 Compliance</h4>
                  <p>Flawless structuring of international documentary credits ensuring seamless acceptance by issuing and confirming banks.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. Related Services Cross-Navigation */}
        <RelatedServices currentServiceId="international-trade-finance" />

        {/* 8. Final CTA Strip */}
        <section className="itf-cta-strip">
          <Container>
            <div className="itf-cta-content">
              <div className="itf-cta-text reveal-init reveal-fade-left">
                <span className="itf-cta-eyebrow">READY TO SCALE GLOBALLY?</span>
                <h2 className="itf-cta-title">
                  Planning an import/export transaction?
                </h2>
                <p className="itf-cta-subtitle">
                  Connect with our international trade desk to evaluate trade structures and arrange competitive supplier's credit quotes.
                </p>
              </div>
              <div className="itf-cta-actions reveal-init reveal-fade-right delay-100">
                <Link to="/contact" className="btn btn-accent btn-lg itf-cta-btn">
                  <PhoneCall size={18} />
                  <span>Connect With Our Desk</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageShell>
  );
}
