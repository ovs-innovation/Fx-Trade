import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Landmark,
  Building2,
  TrendingDown,
  Layers,
  CheckCircle2,
  PhoneCall,
  Briefcase,
  ShieldCheck,
  Scale,
  Zap,
  Building
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import PageBanner from "../components/layout/PageBanner";
import ServiceProcessTimeline from "../components/common/ServiceProcessTimeline";
import RelatedServices from "../components/common/RelatedServices";
import useScrollReveal from "../hooks/useScrollReveal";
import { servicePagesData } from "../data/services";

import bannerDebtImg from "../assets/images/banner-debt.jpg";
import debtStructuringImg from "../assets/images/debt-structuring.jpg";
import debtConsortiumImg from "../assets/images/debt-consortium.jpg";
import "./DebtSyndication.css";

export default function DebtSyndication() {
  const revealRef = useScrollReveal();
  const data = servicePagesData.debtSyndication;

  const facilities = [
    {
      num: "01",
      title: "Bank Overdrafts & Working Capital Loans",
      desc: "Securing structured credit lines and overdraft limits to support daily business liquidity, inventories, and operational cash requirements.",
      icon: Landmark
    },
    {
      num: "02",
      title: "Revolving Credit Facilities",
      desc: "Flexible, ongoing borrowing arrangements allowing corporate borrowers to draw down, repay, and re-borrow as operational cycles demand.",
      icon: Layers
    },
    {
      num: "03",
      title: "Customized Financing Solutions",
      desc: "Bespoke corporate debt packages tailored to specific asset purchases, expansion projects, or balance sheet recapitalizations.",
      icon: Building2
    },
    {
      num: "04",
      title: "Cost of Capital Optimization",
      desc: "Harmonizing benchmark spreads, margins, and collateral terms across multiple institutions to minimize overall blended interest expenses.",
      icon: TrendingDown
    }
  ];

  const syndicationSteps = [
    {
      num: "01",
      stepTag: "STAGE 01",
      title: "Capital Assessment",
      desc: "In-depth financial analysis of your business model, cash flow dynamics, and specific funding requirements."
    },
    {
      num: "02",
      stepTag: "STAGE 02",
      title: "Credit Memorandum",
      desc: "Drafting institutional-grade credit dossiers and financial models designed to address lender scrutiny."
    },
    {
      num: "03",
      stepTag: "STAGE 03",
      title: "Lender Mapping",
      desc: "Reaching out directly to arranger banks and credit committees across our 70+ domestic and foreign banking network."
    },
    {
      num: "04",
      stepTag: "STAGE 04",
      title: "Term Sheet Negotiation",
      desc: "Competitive negotiation on margin spreads, moratorium periods, covenant flexibility, and collateral terms."
    },
    {
      num: "05",
      stepTag: "STAGE 05",
      title: "Consortium Closure",
      desc: "Coordinating multi-lender documentation, legal due diligence, and accelerated facility disbursement."
    }
  ];

  const debtHeroMetrics = [
    { val: "70+", label: "Lender Bank Branches" },
    { val: "Multi-Bank", label: "Consortium Lending" },
    { val: "Lowest", label: "Blended Cost of Capital" }
  ];

  return (
    <PageShell>
      <div ref={revealRef}>
        {/* 1. Page Hero Banner */}
        <PageBanner
          title="Debt Syndication"
          category="PRACTICE AREA 04 • CORPORATE CAPITAL STRUCTURING"
          serviceIndex="4"
          breadcrumb={[
            { label: "Services", path: "/services" },
            { label: "Debt Syndication" }
          ]}
          image={bannerDebtImg}
          subtitle="Pooling institutional funds across premier commercial banks and financial institutions to fulfill large-scale corporate capital requirements."
          metrics={debtHeroMetrics}
        />

        {/* 2. Intro: Image Left (45%) + Text Right (55%) */}
        <section className="section-padding ds-intro-section">
          <Container>
            <div className="ds-intro-grid">
              <div className="ds-intro-image-col reveal-init reveal-fade-right">
                <div className="corporate-image-card img-zoom-wrap">
                  <img
                    src={debtStructuringImg}
                    alt="Corporate debt syndication consultation"
                    className="corporate-photo"
                  />
                  <div className="image-accent-badge">
                    <Briefcase size={18} />
                    <span>Large-Scale Capital Structuring</span>
                  </div>
                </div>
              </div>

              <div className="ds-intro-text-col reveal-init reveal-fade-left delay-100">
                <span className="section-eyebrow-accent">LARGE-SCALE CAPITAL FORMATION</span>
                <h2 className="section-title">
                  Corporate Debt Syndication & Multi-Lender Structuring
                </h2>
                <p className="section-lead">
                  Pooling financial resources from premier commercial banks and financial institutions to fulfill substantial enterprise capital requirements.
                </p>
                <p className="body-text">
                  {data.hero.subheading}
                </p>

                <div className="ds-perks-list">
                  <div className="ds-perk-item">
                    <CheckCircle2 size={18} className="perk-icon" />
                    <span>Consortium lending coordination across public, private, and foreign banks</span>
                  </div>
                  <div className="ds-perk-item">
                    <CheckCircle2 size={18} className="perk-icon" />
                    <span>Negotiation of competitive interest margins and relaxed covenant structures</span>
                  </div>
                  <div className="ds-perk-item">
                    <CheckCircle2 size={18} className="perk-icon" />
                    <span>End-to-end term sheet harmonization and documentation closure</span>
                  </div>
                </div>

                <div className="intro-actions">
                  <Link to="/contact" className="btn btn-navy">
                    <span>Discuss Your Funding Requirement</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. What We Provide: 4 Clean Facilities Cards */}
        <section className="section-padding ds-facilities-section">
          <Container>
            <div className="section-header-center reveal-init reveal-fade-up">
              <span className="section-eyebrow-accent">FINANCING VEHICLES</span>
              <h2 className="section-title">What We Provide</h2>
              <p className="section-subtitle">
                Structured debt instruments engineered to deliver predictable capital and sustainable interest costs.
              </p>
            </div>

            <div className="ds-facilities-grid">
              {facilities.map((fac, idx) => {
                const IconComp = fac.icon;
                const delayClass = `delay-${(idx + 1) * 80}`;
                return (
                  <div
                    key={idx}
                    className={`ds-facility-card reveal-init reveal-fade-up ${delayClass}`}
                  >
                    <div className="ds-card-top">
                      <div className="facility-icon-wrap">
                        <IconComp size={22} className="facility-icon" />
                      </div>
                      <span className="facility-card-num">{fac.num}</span>
                    </div>
                    <h3 className="facility-title">{fac.title}</h3>
                    <p className="facility-desc">{fac.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 4. How FXTrade Coordinates Syndication: Text Left (50%) + Photo Right (50%) + Process Below */}
        <section className="section-padding ds-how-section">
          <Container>
            <div className="ds-how-grid">
              <div className="ds-how-text-col reveal-init reveal-fade-left">
                <span className="section-eyebrow-accent">STRATEGIC INTERMEDIATION</span>
                <h2 className="section-title">How FXTrade Coordinates Syndication</h2>
                <p className="section-lead">
                  Securing large-scale corporate debt across multiple banks can be cumbersome. FXTrade acts as your unified advisory representative.
                </p>
                <p className="body-text">
                  We manage the entire syndication lifecycle: preparing detailed credit memorandums, conducting preliminary negotiations with lead arranger banks, coordinating consortium meetings, and harmonizing inter-creditor terms.
                </p>
                <p className="body-text">
                  By maintaining active relationships with more than 70 domestic and foreign bank branches, we generate competitive lender interest, ensuring your business obtains optimal pricing with minimal covenant restrictions.
                </p>

                <div className="ds-how-cta">
                  <Link to="/contact" className="btn btn-navy">
                    <span>Speak With Our Syndication Desk</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="ds-how-image-col reveal-init reveal-fade-right delay-100">
                <div className="corporate-image-card img-zoom-wrap">
                  <img
                    src={debtConsortiumImg}
                    alt="Banking syndication and lender negotiations"
                    className="corporate-photo"
                    loading="lazy"
                  />
                  <div className="image-accent-badge">
                    <Building size={18} />
                    <span>Multi-Bank Consortium Arrangement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. 5-Stage Diagram-like Workflow Process */}
            <div className="ds-process-wrapper">
              <div className="section-header-center reveal-init reveal-fade-up">
                <span className="section-eyebrow-accent">EXECUTION LIFECYCLE</span>
                <h3 className="section-title">Syndication Lifecycle & Coordination Flow</h3>
                <p className="section-subtitle">
                  From preliminary financial diagnostics to final documentation execution and disbursement.
                </p>
              </div>

              <ServiceProcessTimeline steps={syndicationSteps} />
            </div>
          </Container>
        </section>

        {/* 6. Why Partner with FXTrade: Strategic Dark 2x2 Institutional Section */}
        <section className="ds-why-section">
          <Container>
            <div className="ds-why-box reveal-init reveal-fade-up">
              <div className="ds-why-header">
                <span className="section-eyebrow-accent">THE FXTRADE ADVANTAGE</span>
                <h2 className="ds-why-title">Why Partner With FXTrade for Debt Syndication</h2>
                <p className="ds-why-subtitle">
                  Institutional credibility, extensive banking reach, and dedicated structuring guidance.
                </p>
              </div>

              <div className="ds-why-grid">
                <div className="ds-why-item">
                  <div className="ds-why-icon-box">
                    <Building size={22} className="why-icon" />
                  </div>
                  <div>
                    <h4>70+ Bank Branch Network</h4>
                    <p>Unmatched reach across public sector banks, leading private banks, and multinational credit institutions in India.</p>
                  </div>
                </div>

                <div className="ds-why-item">
                  <div className="ds-why-icon-box">
                    <TrendingDown size={22} className="why-icon" />
                  </div>
                  <div>
                    <h4>Optimized Cost of Capital</h4>
                    <p>We negotiate blended pricing structures and competitive benchmark margins that significantly reduce ongoing debt servicing burdens.</p>
                  </div>
                </div>

                <div className="ds-why-item">
                  <div className="ds-why-icon-box">
                    <Zap size={22} className="why-icon" />
                  </div>
                  <div>
                    <h4>Accelerated Execution</h4>
                    <p>Our veteran bankers streamline due diligence, security creation, and documentation to prevent sanction bottlenecks.</p>
                  </div>
                </div>

                <div className="ds-why-item">
                  <div className="ds-why-icon-box">
                    <Scale size={22} className="why-icon" />
                  </div>
                  <div>
                    <h4>Independent Advisory</h4>
                    <p>Our focus is 100% aligned with the corporate borrower, ensuring you secure the terms best suited to your operational goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. Related Services Cross-Navigation */}
        <RelatedServices currentServiceId="debt-syndication" />

        {/* 8. Final CTA Strip */}
        <section className="ds-cta-strip">
          <Container>
            <div className="ds-cta-content">
              <div className="ds-cta-text reveal-init reveal-fade-left">
                <span className="ds-cta-eyebrow">READY TO SCALE YOUR CAPITAL BASE?</span>
                <h2 className="ds-cta-title">Discuss Your Funding Requirement</h2>
                <p className="ds-cta-subtitle">
                  Connect with our debt syndication desk to structure working capital loans, term facilities, or consortium borrowing.
                </p>
              </div>
              <div className="ds-cta-actions reveal-init reveal-fade-right delay-100">
                <Link to="/contact" className="btn btn-accent btn-lg ds-cta-btn">
                  <PhoneCall size={18} />
                  <span>Discuss Your Requirement</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageShell>
  );
}
