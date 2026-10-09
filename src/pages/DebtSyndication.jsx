import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Landmark,
  Building2,
  TrendingDown,
  Layers,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import PageBanner from "../components/layout/PageBanner";
import { servicePagesData } from "../data/services";

import bannerDebtImg from "../assets/images/banner-debt.jpg";
import debtStructuringImg from "../assets/images/debt-structuring.jpg";
import debtConsortiumImg from "../assets/images/debt-consortium.jpg";
import "./DebtSyndication.css";

export default function DebtSyndication() {
  const data = servicePagesData.debtSyndication;

  const facilities = [
    {
      title: "Bank Overdrafts & Working Capital Loans",
      desc: "Securing structured credit lines and overdraft limits to support daily business liquidity, inventories, and operational cash requirements.",
      icon: Landmark
    },
    {
      title: "Revolving Credit Facilities",
      desc: "Flexible, ongoing borrowing arrangements allowing corporate borrowers to draw down, repay, and withdraw capital as operational cycles demand.",
      icon: Layers
    },
    {
      title: "Customized Financing Solutions",
      desc: "Bespoke corporate debt packages tailored to specific asset purchases, expansion projects, or balance sheet recapitalizations.",
      icon: Building2
    },
    {
      title: "Cost of Capital Optimization",
      desc: "Harmonizing benchmark spreads, margins, and collateral terms across multiple institutions to minimize overall blended interest expenses.",
      icon: TrendingDown
    }
  ];

  return (
    <PageShell>
      {/* 1. Page Hero Banner */}
      <PageBanner
        title="Debt Syndication"
        breadcrumb={[
          { label: "Services", path: "/services" },
          { label: "Debt Syndication" }
        ]}
        image={bannerDebtImg}
      />

      {/* 2. Intro: Image Left + Text Right */}
      <section className="section-padding ds-intro-section">
        <Container>
          <div className="ds-intro-grid">
            <div className="ds-intro-image-col">
              <div className="corporate-image-card img-zoom-wrap">
                <img
                  src={debtStructuringImg}
                  alt="Corporate debt syndication consultation"
                  className="corporate-photo"
                />
              </div>
            </div>

            <div className="ds-intro-text-col">
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

      {/* 3. What We Provide: Clean Facilities Grid */}
      <section className="section-padding ds-facilities-section">
        <Container>
          <div className="section-header-center">
            <span className="section-eyebrow-accent">FINANCING VEHICLES</span>
            <h2 className="section-title">What We Provide</h2>
            <p className="section-subtitle">
              Structured debt instruments engineered to deliver predictable capital and sustainable interest costs.
            </p>
          </div>

          <div className="ds-facilities-grid">
            {facilities.map((fac, idx) => {
              const IconComp = fac.icon;
              return (
                <div key={idx} className="ds-facility-card">
                  <div className="facility-icon-wrap">
                    <IconComp size={24} className="facility-icon" />
                  </div>
                  <h3 className="facility-title">{fac.title}</h3>
                  <p className="facility-desc">{fac.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. How FXTrade Helps: Text Left + Image Right */}
      <section className="section-padding ds-how-section">
        <Container>
          <div className="ds-how-grid">
            <div className="ds-how-text-col">
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

            <div className="ds-how-image-col">
              <div className="corporate-image-card img-zoom-wrap">
                <img
                  src={debtConsortiumImg}
                  alt="Banking syndication and lender negotiations"
                  className="corporate-photo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Why Choose Debt Syndication With FXTrade: 2-Column Benefits */}
      <section className="section-padding ds-why-section">
        <Container>
          <div className="ds-why-box">
            <div className="section-header-center">
              <span className="section-eyebrow-accent">THE FXTRADE ADVANTAGE</span>
              <h2 className="section-title">Why Partner With FXTrade for Debt Syndication</h2>
              <p className="section-subtitle">
                Institutional credibility, extensive banking reach, and dedicated structuring guidance.
              </p>
            </div>

            <div className="ds-why-grid">
              <div className="ds-why-item">
                <CheckCircle2 size={20} className="why-icon" />
                <div>
                  <strong>70+ Bank Branch Network</strong>
                  <p>Unmatched reach across public sector banks, leading private banks, and multinational credit institutions in India.</p>
                </div>
              </div>

              <div className="ds-why-item">
                <CheckCircle2 size={20} className="why-icon" />
                <div>
                  <strong>Optimized Cost of Capital</strong>
                  <p>We negotiate blended pricing structures that significantly reduce ongoing debt servicing burdens.</p>
                </div>
              </div>

              <div className="ds-why-item">
                <CheckCircle2 size={20} className="why-icon" />
                <div>
                  <strong>Accelerated Execution</strong>
                  <p>Our veteran bankers streamline due diligence, security creation, and documentation to prevent sanction bottlenecks.</p>
                </div>
              </div>

              <div className="ds-why-item">
                <CheckCircle2 size={20} className="why-icon" />
                <div>
                  <strong>Independent Advisory</strong>
                  <p>Our focus is 100% aligned with the corporate borrower, ensuring you secure the terms best suited to your operational goals.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CTA Strip */}
      <section className="ds-cta-strip">
        <Container>
          <div className="ds-cta-content">
            <div>
              <h2 className="ds-cta-title">Discuss Your Funding Requirement</h2>
              <p className="ds-cta-subtitle">
                Connect with our debt syndication desk to structure working capital loans, term facilities, or consortium borrowing.
              </p>
            </div>
            <Link to="/contact" className="btn btn-accent btn-lg">
              <PhoneCall size={18} />
              <span>Get In Touch</span>
            </Link>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
