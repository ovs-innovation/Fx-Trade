import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileCheck2,
  Receipt,
  Layers,
  Banknote,
  CheckCircle2,
  TrendingUp,
  PhoneCall
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import PageBanner from "../components/layout/PageBanner";
import { servicePagesData } from "../data/services";

import bannerDomesticImg from "../assets/images/banner-domestic.jpg";
import domesticWorkingCapitalImg from "../assets/images/domestic-working-capital.jpg";
import domesticLcImg from "../assets/images/domestic-lc.jpg";
import "./DomesticTradeFinance.css";

const instrumentIcons = [
  Receipt,
  FileCheck2,
  Banknote,
  Layers,
  TrendingUp
];

export default function DomesticTradeFinance() {
  const data = servicePagesData.domesticTradeFinance;

  const steps = [
    {
      num: "01",
      title: "Invoice & LC Verification",
      desc: "Comprehensive review of inland letters of credit, invoices, and underlying commercial contracts."
    },
    {
      num: "02",
      title: "Multi-Bank Quote Comparison",
      desc: "Direct coordination across 70+ domestic bank branches to secure the lowest discounting spread."
    },
    {
      num: "03",
      title: "Documentation & Approvals",
      desc: "Streamlined paperwork coordination ensuring total banking compliance and rapid sanction."
    },
    {
      num: "04",
      title: "Liquidity Disbursement",
      desc: "Prompt funds release directly into your corporate account to accelerate cash flow and vendor payments."
    }
  ];

  return (
    <PageShell>
      {/* 1. Page Hero Banner */}
      <PageBanner
        title="Domestic Trade Finance"
        breadcrumb={[
          { label: "Services", path: "/services" },
          { label: "Domestic Trade Finance" }
        ]}
        image={bannerDomesticImg}
      />

      {/* 2. Introduction: Image Left + Text Right */}
      <section className="section-padding domestic-intro-section">
        <Container>
          <div className="domestic-intro-grid">
            <div className="domestic-intro-image-col">
              <div className="corporate-image-card img-zoom-wrap">
                <img
                  src={domesticWorkingCapitalImg}
                  alt="Domestic working capital consultation"
                  className="corporate-photo"
                />
              </div>
            </div>

            <div className="domestic-intro-text-col">
              <span className="section-eyebrow-accent">DOMESTIC CAPITAL FACILITATION</span>
              <h2 className="section-title">
                Financing & Liquidity Solutions Within India
              </h2>
              <p className="section-lead">
                Optimizing cash flow, mitigating payment delays, and providing flexible working capital to power local trade.
              </p>
              <p className="body-text">
                {data.hero.subheading}
              </p>

              <div className="domestic-highlight-row">
                <div className="highlight-item">
                  <CheckCircle2 size={18} className="highlight-icon" />
                  <span>Immediate cash conversion for accepted inland bills</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={18} className="highlight-icon" />
                  <span>Zero collateral strain on primary corporate credit limits</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={18} className="highlight-icon" />
                  <span>Extensive network across major Indian commercial banks</span>
                </div>
              </div>

              <div className="intro-actions">
                <Link to="/contact" className="btn btn-navy">
                  <span>Request Consultation</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Featured Section: Inland LC Discounting (Text Left + Image Right) */}
      <section id="inland-lc" className="section-padding inland-lc-section">
        <Container>
          <div className="inland-lc-grid">
            <div className="inland-lc-text-col">
              <span className="section-eyebrow-accent">CORE INSTRUMENT</span>
              <h2 className="section-title">{data.featuredService.title}</h2>
              <p className="body-text">{data.featuredService.description}</p>

              <div className="inland-bullets-list">
                {data.featuredService.bulletPoints.map((point, idx) => (
                  <div key={idx} className="inland-bullet-item">
                    <CheckCircle2 size={18} className="bullet-icon" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="inland-cta-row">
                <Link to="/contact" className="btn btn-accent btn-lg">
                  <span>Request Discounting Quote</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="inland-lc-image-col">
              <div className="corporate-image-card img-zoom-wrap">
                <img
                  src={domesticLcImg}
                  alt="Inland Letter of Credit verification and trade documentation"
                  className="corporate-photo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. How It Works: Simple 4-Step Process */}
      <section className="section-padding domestic-process-section">
        <Container>
          <div className="section-header-center">
            <span className="section-eyebrow-accent">TRANSACTION WORKFLOW</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              A transparent, dependable four-stage execution process designed for maximum turnaround efficiency.
            </p>
          </div>

          <div className="process-steps-grid">
            {steps.map((step) => (
              <div key={step.num} className="process-step-card">
                <span className="step-number-badge">{step.num}</span>
                <h3 className="step-card-title">{step.title}</h3>
                <p className="step-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Domestic Instruments Portfolio */}
      <section id="instruments" className="section-padding instruments-section">
        <Container>
          <div className="section-header-center">
            <span className="section-eyebrow-accent">FACILITATION PORTFOLIO</span>
            <h2 className="section-title">{data.instrumentsHeading}</h2>
            <p className="section-subtitle">{data.instrumentsIntro}</p>
          </div>

          <div className="instruments-cards-grid">
            {data.instruments.map((inst, idx) => {
              const IconComp = instrumentIcons[idx % instrumentIcons.length];
              return (
                <div key={inst.id} className="instrument-card">
                  <div className="inst-card-top">
                    <div className="inst-icon-box">
                      <IconComp size={22} className="inst-icon" />
                    </div>
                    <span className="inst-card-num">{inst.number}</span>
                  </div>
                  <h3 className="inst-card-title">{inst.title}</h3>
                  <p className="inst-card-desc">{inst.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. CTA Strip */}
      <section className="domestic-cta-strip">
        <Container>
          <div className="domestic-cta-content">
            <div>
              <h2 className="domestic-cta-title">
                Need working capital or LC discounting support?
              </h2>
              <p className="domestic-cta-subtitle">
                Connect with our domestic trade finance desk to evaluate your bills and secure competitive lender quotes.
              </p>
            </div>
            <Link to="/contact" className="btn btn-accent btn-lg">
              <PhoneCall size={18} />
              <span>Contact Us</span>
            </Link>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
