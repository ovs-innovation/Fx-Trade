import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  BarChart3,
  Coins,
  PhoneCall,
  Activity,
  FileSpreadsheet
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import PageBanner from "../components/layout/PageBanner";
import ServiceProcessTimeline from "../components/common/ServiceProcessTimeline";
import RelatedServices from "../components/common/RelatedServices";
import useScrollReveal from "../hooks/useScrollReveal";
import { servicePagesData } from "../data/services";

import bannerForexImg from "../assets/images/banner-forex.jpg";
import forexAuditImg from "../assets/images/forex-audit.jpg";
import forexRiskImg from "../assets/images/forex-risk.jpg";
import "./ForexServices.css";

export default function ForexServices() {
  const revealRef = useScrollReveal();
  const data = servicePagesData.forexServices;

  const reviewIcons = [
    ShieldAlert,
    ShieldCheck,
    Coins,
    TrendingUp,
    Cpu,
    BarChart3
  ];

  const coreServices = [
    {
      num: "01",
      title: "Treasury Operation Review",
      desc: "Independent evaluation of existing treasury structures, controls, banking relationships, and transactional workflows to eliminate inefficiencies.",
      icon: Activity
    },
    {
      num: "02",
      title: "Forex Transaction Process Outsourcing (FTPO)",
      desc: "Outsourced treasury execution ensuring compliant, timely, and cost-effective currency conversions with major commercial banks.",
      icon: TrendingUp
    },
    {
      num: "03",
      title: "Risk Management Policies & Guidelines",
      desc: "Customized policy frameworks defining clear hedging parameters, authority delegation, and acceptable exposure boundaries.",
      icon: ShieldCheck
    },
    {
      num: "04",
      title: "Management Information Systems (MIS)",
      desc: "Standardized treasury reporting frameworks delivering real-time visibility into open positions, mark-to-market valuations, and cash flows.",
      icon: FileSpreadsheet
    }
  ];

  const riskPhases = data.riskPolicy.components.map((comp, idx) => ({
    num: `0${idx + 1}`,
    stepTag: comp.step.toUpperCase(),
    title: comp.title,
    desc: comp.description
  }));

  const forexHeroMetrics = [
    { val: "100%", label: "Independent Review" },
    { val: "Hedging", label: "Prudent Exposure Frameworks" },
    { val: "MIS", label: "Real-Time Treasury Controls" }
  ];

  return (
    <PageShell>
      <div ref={revealRef}>
        {/* 1. Page Hero Banner */}
        <PageBanner
          title="Forex & Treasury Consulting"
          category="PRACTICE AREA 03 • TREASURY & CURRENCY ADVISORY"
          serviceIndex="3"
          breadcrumb={[
            { label: "Services", path: "/services" },
            { label: "Forex & Treasury Consulting" }
          ]}
          image={bannerForexImg}
          subtitle="Protecting enterprise balance sheets against currency volatility, optimizing cash flows, and institutionalizing treasury governance."
          metrics={forexHeroMetrics}
        />

        {/* 2. Treasury Consulting Intro: Image Left (45%) + Text Right (55%) */}
        <section className="section-padding forex-intro-section">
          <Container>
            <div className="forex-intro-grid">
              <div className="forex-intro-image-col reveal-init reveal-fade-right">
                <div className="corporate-image-card img-zoom-wrap">
                  <img
                    src={forexAuditImg}
                    alt="Forex and treasury consulting review"
                    className="corporate-photo"
                  />
                  <div className="image-accent-badge">
                    <Activity size={18} />
                    <span>Independent Treasury Audits</span>
                  </div>
                </div>
              </div>

              <div className="forex-intro-text-col reveal-init reveal-fade-left delay-100">
                <span className="section-eyebrow-accent">TREASURY & CURRENCY ADVISORY</span>
                <h2 className="section-title">
                  Strategic Forex Advisory & Treasury Operation Reviews
                </h2>
                <p className="section-lead">
                  Protecting enterprise balance sheets against currency volatility, optimizing cash flows, and institutionalizing treasury controls.
                </p>
                <p className="body-text">
                  {data.hero.subheading}
                </p>

                <div className="forex-perks-list">
                  <div className="forex-perk-item">
                    <CheckCircle2 size={18} className="perk-icon" />
                    <span>Objective audits of internal treasury operations and counterparty bank spreads</span>
                  </div>
                  <div className="forex-perk-item">
                    <CheckCircle2 size={18} className="perk-icon" />
                    <span>Prudent hedging frameworks tailored to your actual import/export exposure</span>
                  </div>
                  <div className="forex-perk-item">
                    <CheckCircle2 size={18} className="perk-icon" />
                    <span>End-to-end Forex Transaction Process Outsourcing (FTPO) execution</span>
                  </div>
                </div>

                <div className="intro-actions">
                  <Link to="/contact" className="btn btn-navy">
                    <span>Schedule a Treasury Review</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. Core Practice Services: 4 Modular Cards */}
        <section className="section-padding forex-core-section">
          <Container>
            <div className="section-header-center reveal-init reveal-fade-up">
              <span className="section-eyebrow-accent">CORE PRACTICE AREAS</span>
              <h2 className="section-title">Treasury Management Solutions</h2>
              <p className="section-subtitle">
                Comprehensive frameworks designed to minimize foreign exchange risks and enhance working capital control.
              </p>
            </div>

            <div className="forex-core-grid">
              {coreServices.map((item, idx) => {
                const IconComp = item.icon;
                const delayClass = `delay-${(idx + 1) * 80}`;
                return (
                  <div
                    key={idx}
                    className={`forex-core-card reveal-init reveal-fade-up ${delayClass}`}
                  >
                    <div className="forex-card-top">
                      <div className="forex-icon-wrap">
                        <IconComp size={22} className="forex-icon" />
                      </div>
                      <span className="core-card-index">{item.num}</span>
                    </div>
                    <h3 className="core-card-title">{item.title}</h3>
                    <p className="core-card-desc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 4. Treasury Operation Review Objectives: Structured 2x3 Matrix */}
        <section className="section-padding treasury-review-section">
          <Container>
            <div className="section-header-center reveal-init reveal-fade-up">
              <span className="section-eyebrow-accent">AUDIT & CONTROL OBJECTIVES</span>
              <h2 className="section-title">{data.reviewObjectives.heading}</h2>
              <p className="section-subtitle">{data.reviewObjectives.intro}</p>
            </div>

            <div className="review-matrix-grid">
              {data.reviewObjectives.items.map((item, idx) => {
                const IconComp = reviewIcons[idx % reviewIcons.length];
                const delayClass = `delay-${(idx + 1) * 70}`;
                return (
                  <div
                    key={item.id}
                    className={`review-matrix-item reveal-init reveal-fade-up ${delayClass}`}
                  >
                    <div className="review-matrix-header">
                      <div className="review-item-icon-box">
                        <IconComp size={22} className="review-icon" />
                      </div>
                      <span className="review-matrix-num">{item.number}</span>
                    </div>
                    <h3 className="review-matrix-title">{item.title}</h3>
                    <p className="review-matrix-desc">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 5. Risk Management Policy: Editorial Section (Text Left 55% + Image Right 45%) */}
        <section id="risk-policy" className="section-padding risk-section">
          <Container>
            <div className="risk-top-grid">
              <div className="risk-top-text reveal-init reveal-fade-left">
                <span className="section-eyebrow-accent">INSTITUTIONAL GOVERNANCE</span>
                <h2 className="section-title">{data.riskPolicy.heading}</h2>
                <p className="section-lead">
                  A structured policy protects profitability by eliminating speculative exposure and adhering strictly to documented operational thresholds.
                </p>
                <p className="body-text">{data.riskPolicy.description}</p>

                {/* Editorial Quote Callout */}
                <div className="risk-quote-callout">
                  <div className="quote-green-rule" />
                  <p className="quote-text">
                    "A disciplined risk policy eliminates emotional and speculative trading, locking in corporate operating margins and protecting enterprise balance sheets against unexpected currency shocks."
                  </p>
                </div>

                <div className="risk-actions">
                  <Link to="/contact" className="btn btn-navy">
                    <span>Formulate Risk Policy</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="risk-top-image reveal-init reveal-fade-right delay-100">
                <div className="corporate-image-card img-zoom-wrap">
                  <img
                    src={forexRiskImg}
                    alt="Corporate financial risk assessment and treasury management"
                    className="corporate-photo"
                    loading="lazy"
                  />
                  <div className="image-accent-badge">
                    <ShieldCheck size={18} />
                    <span>Documented Governance Framework</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Process Flow: Key Components of Risk Management Policy */}
            <div className="risk-process-wrapper">
              <div className="section-header-center reveal-init reveal-fade-up">
                <span className="section-eyebrow-accent">METHODICAL EXECUTION</span>
                <h3 className="section-title">{data.riskPolicy.componentsHeading}</h3>
                <p className="section-subtitle">
                  A cyclical four-stage risk governance cycle safeguarding commercial margins across every quarter.
                </p>
              </div>

              <ServiceProcessTimeline steps={riskPhases} />
            </div>
          </Container>
        </section>

        {/* 7. Related Services Cross-Navigation */}
        <RelatedServices currentServiceId="forex-services" />

        {/* 8. Final CTA Strip */}
        <section className="forex-cta-strip">
          <Container>
            <div className="forex-cta-content">
              <div className="forex-cta-text reveal-init reveal-fade-left">
                <span className="forex-cta-eyebrow">SAFEGUARD YOUR MARGINS</span>
                <h2 className="forex-cta-title">Schedule a Treasury Consultation</h2>
                <p className="forex-cta-subtitle">
                  Connect with our forex specialists to evaluate currency risks, audit counterparty bank spreads, and institute sound treasury controls.
                </p>
              </div>
              <div className="forex-cta-actions reveal-init reveal-fade-right delay-100">
                <Link to="/contact" className="btn btn-accent btn-lg forex-cta-btn">
                  <PhoneCall size={18} />
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageShell>
  );
}
