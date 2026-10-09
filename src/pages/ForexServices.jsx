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
  PhoneCall
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import PageBanner from "../components/layout/PageBanner";
import { servicePagesData } from "../data/services";

import bannerForexImg from "../assets/images/banner-forex.jpg";
import forexAuditImg from "../assets/images/forex-audit.jpg";
import forexRiskImg from "../assets/images/forex-risk.jpg";
import "./ForexServices.css";

export default function ForexServices() {
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
      title: "Treasury Operation Review",
      desc: "Independent evaluation of existing treasury structures, controls, banking relationships, and transactional workflows."
    },
    {
      title: "Forex Transaction Process Outsourcing (FTPO)",
      desc: "Outsourced treasury execution ensuring compliant, timely, and cost-effective currency conversions with major banks."
    },
    {
      title: "Risk Management Policies & Guidelines",
      desc: "Customized policy documents defining clear hedging parameters, authority limits, and acceptable exposure boundaries."
    },
    {
      title: "Management Information Systems (MIS)",
      desc: "Standardized treasury reporting frameworks delivering real-time visibility into open positions, mark-to-market, and cash flow."
    }
  ];

  return (
    <PageShell>
      {/* 1. Page Hero Banner */}
      <PageBanner
        title="Forex & Treasury Consulting"
        breadcrumb={[
          { label: "Services", path: "/services" },
          { label: "Forex & Treasury Consulting" }
        ]}
        image={bannerForexImg}
      />

      {/* 2. Treasury Consulting Intro: Image Left + Text Right */}
      <section className="section-padding forex-intro-section">
        <Container>
          <div className="forex-intro-grid">
            <div className="forex-intro-image-col">
              <div className="corporate-image-card img-zoom-wrap">
                <img
                  src={forexAuditImg}
                  alt="Forex and treasury consulting review"
                  className="corporate-photo"
                />
              </div>
            </div>

            <div className="forex-intro-text-col">
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
                  <span>Objective audits of internal treasury operations and counterparty spreads</span>
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

      {/* 3. Core Practice Services */}
      <section className="section-padding forex-core-section">
        <Container>
          <div className="section-header-center">
            <span className="section-eyebrow-accent">CORE PRACTICE AREAS</span>
            <h2 className="section-title">Treasury Management Solutions</h2>
            <p className="section-subtitle">
              Comprehensive frameworks designed to minimize foreign exchange risks and enhance working capital control.
            </p>
          </div>

          <div className="forex-core-grid">
            {coreServices.map((item, idx) => (
              <div key={idx} className="forex-core-card">
                <span className="core-card-index">0{idx + 1}</span>
                <h3 className="core-card-title">{item.title}</h3>
                <p className="core-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Treasury Operation Review (Clean list with icons) */}
      <section className="section-padding treasury-review-section">
        <Container>
          <div className="section-header-center">
            <span className="section-eyebrow-accent">AUDIT & CONTROL OBJECTIVES</span>
            <h2 className="section-title">{data.reviewObjectives.heading}</h2>
            <p className="section-subtitle">{data.reviewObjectives.intro}</p>
          </div>

          <div className="review-list-grid">
            {data.reviewObjectives.items.map((item, idx) => {
              const IconComp = reviewIcons[idx % reviewIcons.length];
              return (
                <div key={item.id} className="review-list-item">
                  <div className="review-item-icon-box">
                    <IconComp size={22} className="review-icon" />
                  </div>
                  <div className="review-item-content">
                    <div className="review-item-top">
                      <h3 className="review-item-title">{item.title}</h3>
                      <span className="review-item-num">{item.number}</span>
                    </div>
                    <p className="review-item-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Risk Management: Text Left + Image Right + 4-Step Flow Below */}
      <section id="risk-policy" className="section-padding risk-section">
        <Container>
          <div className="risk-top-grid">
            <div className="risk-top-text">
              <span className="section-eyebrow-accent">INSTITUTIONAL GOVERNANCE</span>
              <h2 className="section-title">{data.riskPolicy.heading}</h2>
              <p className="section-lead">
                A structured policy protects profitability by eliminating speculative exposure and adhering strictly to documented operational thresholds.
              </p>
              <p className="body-text">{data.riskPolicy.description}</p>

              <div className="risk-actions">
                <Link to="/contact" className="btn btn-navy">
                  <span>Formulate Risk Policy</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="risk-top-image">
              <div className="corporate-image-card img-zoom-wrap">
                <img
                  src={forexRiskImg}
                  alt="Corporate financial risk assessment and treasury management"
                  className="corporate-photo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* 4 Basic Steps Below */}
          <div className="risk-steps-header">
            <span className="section-eyebrow-accent">METHODICAL EXECUTION</span>
            <h3 className="section-title-sm">{data.riskPolicy.componentsHeading}</h3>
          </div>

          <div className="risk-steps-grid">
            {data.riskPolicy.components.map((comp) => (
              <div key={comp.id} className="risk-step-card">
                <span className="step-tag">{comp.step}</span>
                <h4 className="step-title">{comp.title}</h4>
                <p className="step-desc">{comp.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CTA Strip */}
      <section className="forex-cta-strip">
        <Container>
          <div className="forex-cta-content">
            <div>
              <h2 className="forex-cta-title">Schedule a Treasury Consultation</h2>
              <p className="forex-cta-subtitle">
                Connect with our forex specialists to evaluate currency risks, audit bank quotes, and institute sound treasury controls.
              </p>
            </div>
            <Link to="/contact" className="btn btn-accent btn-lg">
              <PhoneCall size={18} />
              <span>Book Consultation</span>
            </Link>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
