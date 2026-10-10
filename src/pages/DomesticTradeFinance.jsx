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
  PhoneCall,
  Landmark,
  ShieldCheck,
  Building,
  Clock
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import PageBanner from "../components/layout/PageBanner";
import ServiceProcessTimeline from "../components/common/ServiceProcessTimeline";
import RelatedServices from "../components/common/RelatedServices";
import useScrollReveal from "../hooks/useScrollReveal";
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
  const revealRef = useScrollReveal();
  const data = servicePagesData.domesticTradeFinance;

  const steps = [
    {
      num: "01",
      stepTag: "STAGE 01",
      title: "Invoice & LC Verification",
      desc: "Comprehensive review of inland letters of credit, invoices, and underlying commercial contracts for compliance."
    },
    {
      num: "02",
      stepTag: "STAGE 02",
      title: "Multi-Bank Quote Comparison",
      desc: "Direct coordination across 70+ domestic bank branches to secure the most competitive discounting spread."
    },
    {
      num: "03",
      stepTag: "STAGE 03",
      title: "Documentation & Approvals",
      desc: "Streamlined paperwork coordination ensuring total banking compliance and rapid sanction without bottlenecks."
    },
    {
      num: "04",
      stepTag: "STAGE 04",
      title: "Liquidity Disbursement",
      desc: "Prompt funds release directly into your corporate account to accelerate cash flow and vendor payments."
    }
  ];

  const domesticHeroMetrics = [
    { val: "70+", label: "Domestic Bank Branches" },
    { val: "24-48h", label: "Typical Quote Sanction" },
    { val: "100%", label: "Bank-Compliant Processing" }
  ];

  return (
    <PageShell>
      <div ref={revealRef}>
        {/* 1. Page Hero Banner */}
        <PageBanner
          title="Domestic Trade Finance"
          category="PRACTICE AREA 01 • INLAND TRADE FACILITATION"
          serviceIndex="1"
          breadcrumb={[
            { label: "Services", path: "/services" },
            { label: "Domestic Trade Finance" }
          ]}
          image={bannerDomesticImg}
          subtitle="Optimizing cash flow, mitigating payment delays, and providing flexible working capital across India's domestic supply chains."
          metrics={domesticHeroMetrics}
        />

        {/* 2. Introduction: Image Left (45%) + Text Right (55%) */}
        <section className="section-padding domestic-intro-section">
          <Container>
            <div className="domestic-intro-grid">
              <div className="domestic-intro-image-col reveal-init reveal-fade-right">
                <div className="corporate-image-card img-zoom-wrap">
                  <img
                    src={domesticWorkingCapitalImg}
                    alt="Domestic working capital consultation"
                    className="corporate-photo"
                  />
                  <div className="image-accent-badge">
                    <Landmark size={18} />
                    <span>Pan-India Banking Reach</span>
                  </div>
                </div>
              </div>

              <div className="domestic-intro-text-col reveal-init reveal-fade-left delay-100">
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

        {/* 3. Featured Section: Inland LC Discounting (Text Left 55% + Image Right 45%) */}
        <section id="inland-lc" className="section-padding inland-lc-section">
          <Container>
            <div className="inland-lc-grid">
              <div className="inland-lc-text-col reveal-init reveal-fade-left">
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

              <div className="inland-lc-image-col reveal-init reveal-fade-right delay-100">
                <div className="corporate-image-card img-zoom-wrap">
                  <img
                    src={domesticLcImg}
                    alt="Inland Letter of Credit verification and trade documentation"
                    className="corporate-photo"
                    loading="lazy"
                  />
                  <div className="image-accent-badge">
                    <FileCheck2 size={18} />
                    <span>Verified LC Discounting</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. How It Works: Premium Process Timeline */}
        <section className="section-padding domestic-process-section">
          <Container>
            <div className="section-header-center reveal-init reveal-fade-up">
              <span className="section-eyebrow-accent">TRANSACTION WORKFLOW</span>
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">
                A transparent, dependable four-stage execution process designed for maximum turnaround efficiency.
              </p>
            </div>

            <ServiceProcessTimeline steps={steps} />
          </Container>
        </section>

        {/* 5. Domestic Instruments Portfolio */}
        <section id="instruments" className="section-padding instruments-section">
          <Container>
            <div className="section-header-center reveal-init reveal-fade-up">
              <span className="section-eyebrow-accent">FACILITATION PORTFOLIO</span>
              <h2 className="section-title">{data.instrumentsHeading}</h2>
              <p className="section-subtitle">{data.instrumentsIntro}</p>
            </div>

            <div className="instruments-cards-grid">
              {data.instruments.map((inst, idx) => {
                const IconComp = instrumentIcons[idx % instrumentIcons.length];
                const delayClass = `delay-${(idx + 1) * 80}`;
                return (
                  <div
                    key={inst.id}
                    className={`instrument-card reveal-init reveal-fade-up ${delayClass}`}
                  >
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

        {/* 6. Strategic Dark Institutional Confidence Band */}
        <section className="domestic-network-band">
          <Container>
            <div className="domestic-network-content reveal-init reveal-fade-up">
              <div className="network-band-header">
                <span className="section-eyebrow-accent">INSTITUTIONAL CONFIDENCE</span>
                <h3 className="network-band-title">
                  Pan-India Banking Network & Multi-Lender Coordination
                </h3>
                <p className="network-band-subtitle">
                  We bridge the gap between corporate trade requirements and leading Indian commercial banks, ensuring direct access to the lowest discounting margins.
                </p>
              </div>

              <div className="network-band-features">
                <div className="network-feature-card">
                  <Building size={24} className="network-feature-icon" />
                  <h4>70+ Bank Branches</h4>
                  <p>Direct liaison with public, private, and leading foreign bank branches across major Indian commercial hubs.</p>
                </div>
                <div className="network-feature-card">
                  <ShieldCheck size={24} className="network-feature-icon" />
                  <h4>Zero Collateral Strain</h4>
                  <p>Inland bill discounting structured on accepted LC credentials rather than exhausting your primary asset pledges.</p>
                </div>
                <div className="network-feature-card">
                  <Clock size={24} className="network-feature-icon" />
                  <h4>Accelerated Turnaround</h4>
                  <p>Pre-vetted documentation workflows ensuring sanction and liquidity disbursement within 24 to 48 hours.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. Related Services Cross-Navigation */}
        <RelatedServices currentServiceId="domestic-trade-finance" />

        {/* 8. Final CTA Strip */}
        <section className="domestic-cta-strip">
          <Container>
            <div className="domestic-cta-content">
              <div className="domestic-cta-text reveal-init reveal-fade-left">
                <span className="domestic-cta-eyebrow">READY TO OPTIMIZE CASH FLOW?</span>
                <h2 className="domestic-cta-title">
                  Need working capital or LC discounting support?
                </h2>
                <p className="domestic-cta-subtitle">
                  Connect with our domestic trade finance desk to evaluate your bills and secure competitive lender quotes.
                </p>
              </div>
              <div className="domestic-cta-actions reveal-init reveal-fade-right delay-100">
                <Link to="/contact" className="btn btn-accent btn-lg domestic-cta-btn">
                  <PhoneCall size={18} />
                  <span>Request Discounting Quote</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageShell>
  );
}
