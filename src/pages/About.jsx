import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Compass,
  Handshake,
  TrendingUp,
  X,
  Globe2,
  Landmark,
  ShieldCheck,
  Users
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import AnimatedCounter from "../components/common/AnimatedCounter";
import useScrollReveal from "../hooks/useScrollReveal";

// Imagery
import heroTeamMeetingImg from "../assets/images/about-hero-team-meeting.jpg";
import hqBuildingImg from "../assets/images/Modern FXTrade Corporate Headquarters.png";
import advisoryMeetingImg from "../assets/images/advisory-meeting.jpg";
import approachTeamImg from "../assets/images/about-team.jpg";
import timeline1Img from "../assets/images/domestic-lc.jpg";
import timeline2Img from "../assets/images/intl-cargo.jpg";
import timeline3Img from "../assets/images/service-debt-handshake.jpg";
import timeline4Img from "../assets/images/about-consulting.jpg";
import timeline5Img from "../assets/images/service-forex-thumb.jpg";
import timeline6Img from "../assets/images/intl-trade-cargo-port.jpg";
import leaderSubhashImg from "../assets/images/leader-subhash.jpg";
import leaderSunayanaImg from "../assets/images/leader-sunayana.jpg";
import ctaPortImg from "../assets/images/intl-trade-cargo-port.jpg";

import "./About.css";

const leadershipTeam = [
  {
    name: "Mr. Subhash Chandra",
    role: "Managing Director",
    image: leaderSubhashImg,
    summary: "46+ years of experience in Finance, Marketing and Corporate Advisory.",
    fullBio:
      "Mr. Subhash Chandra brings over 46 years of extensive industry leadership across Corporate Finance, Trade Advisory, and Treasury operations. Under his direction, FXTrade Consulting has established partnerships with over 70 domestic and international banking institutions, advising medium and large enterprises on structured capital acquisition and risk management."
  },
  {
    name: "Ms. Sunayana Puri",
    role: "Chief Operating Officer (COO)",
    image: leaderSunayanaImg,
    summary: "Company Secretary, Law Graduate and Associate of ACG with rich experience in compliance and finance.",
    fullBio:
      "Ms. Sunayana Puri is a qualified Company Secretary, Law Graduate, and Associate of ACG. She spearheads transaction execution, legal documentation, cross-border compliance, and strategic client advisory, ensuring every trade finance deal adheres to strict regulatory and institutional guidelines."
  }
];

const timelineMilestones = [
  {
    year: "1995",
    title: "Banking & Treasury Expertise",
    image: timeline1Img,
    desc: "Built a strong foundation in commercial banking, corporate treasury, and capital markets."
  },
  {
    year: "2000",
    title: "Trade Finance Advisory",
    image: timeline2Img,
    desc: "Began specialized advisory in trade credit, letter of credit issuance, and supplier facilities."
  },
  {
    year: "2008",
    title: "Domestic & International Syndication",
    image: timeline3Img,
    desc: "Expanded capabilities across domestic syndication and cross-border trade finance."
  },
  {
    year: "2015",
    title: "Expansion of Banking Relationships",
    image: timeline4Img,
    desc: "Strengthened correspondent relationships with leading domestic and foreign bank branches."
  },
  {
    year: "2020",
    title: "Treasury & Forex Consulting",
    image: timeline5Img,
    desc: "Enhanced focus on SCF products, structured funding, and corporate currency risk advisory."
  },
  {
    year: "Today",
    title: "FXTrade Today",
    image: timeline6Img,
    desc: "Empowering SMEs, Mid-Corporates and EPC Contractors with timely, tailored capital solutions."
  }
];

const approachSteps = [
  {
    num: "01",
    title: "Understand",
    desc: "Understand the business requirement, transaction structure and financial objective."
  },
  {
    num: "02",
    title: "Analyse",
    desc: "Review available financing routes, market conditions and institutional possibilities."
  },
  {
    num: "03",
    title: "Structure",
    desc: "Build the appropriate trade finance, treasury or corporate debt structure."
  },
  {
    num: "04",
    title: "Coordinate",
    desc: "Coordinate with banks, lenders, NBFCs and relevant financial stakeholders."
  },
  {
    num: "05",
    title: "Support",
    desc: "Remain actively involved throughout transaction execution and ongoing working capital needs."
  }
];

export default function About() {
  const scrollRef = useScrollReveal();
  const [activeLeader, setActiveLeader] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHeroMouseMove = (e) => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    // Bounded max 2.5px shift
    setMouseOffset({
      x: Math.round(relX * 5 * 10) / 10,
      y: Math.round(relY * 5 * 10) / 10
    });
  };

  const handleHeroMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const secondaryImgParallax = Math.min(scrollY * 0.02, 10);
  const finalCtaParallax = Math.min(scrollY * 0.025, 14);

  return (
    <PageShell>
      <div ref={scrollRef}>
        {/* ========================================================
            1. ABOUT PAGE HERO — EXACT REFERENCE TARGET
            ======================================================== */}
        <section
          className="about-hero-ref-target"
          aria-label="About FXTrade Hero"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
        >
          <div className="about-hero-ref-main">
            {/* Subtle background wash / grid texture on far-left */}
            <div className="about-hero-left-pattern" aria-hidden="true" />

            {/* Left Content Column (~41-43%) */}
            <div className="about-hero-ref-left">
              <div className="about-hero-ref-left-body">
                <div className="about-hero-ref-eyebrow hero-seq-eyebrow">
                  <span className="hero-ref-eyebrow-line" />
                  <span className="hero-ref-eyebrow-text">ABOUT FXTRADE</span>
                </div>

                <h1 className="about-hero-ref-title hero-seq-title">
                  <span>Built on Experience.</span>
                  <span>Driven by Trust.</span>
                  <span>Connected Globally.</span>
                </h1>

                <p className="about-hero-ref-p1 hero-seq-desc">
                  FXTrade Consultancy Pvt. Ltd. brings together decades of banking, treasury and trade finance expertise to help businesses structure smarter financial solutions across India and international markets.
                </p>

                <p className="about-hero-ref-p2 hero-seq-desc">
                  Our approach combines institutional relationships, practical market knowledge and personalized advisory to support businesses at every stage of their financial journey.
                </p>
              </div>

              <div className="about-hero-ref-cta-wrap hero-seq-cta">
                <button
                  type="button"
                  onClick={() => scrollToSection("who-we-are")}
                  className="about-hero-ref-btn"
                >
                  <span>Our Story</span>
                  <ArrowRight size={17} className="btn-arrow-icon" />
                </button>
              </div>

              {/* Mobile Advantage Strip (3 compact equal items in 1 row) */}
              <div className="about-hero-mobile-advantage-strip">
                <div className="hero-adv-item">
                  <Globe2 size={16} className="hero-adv-icon" />
                  <span>Global Perspective</span>
                </div>
                <div className="hero-adv-item">
                  <Compass size={16} className="hero-adv-icon" />
                  <span>Practical Solutions</span>
                </div>
                <div className="hero-adv-item">
                  <Users size={16} className="hero-adv-icon" />
                  <span>Lasting Partnerships</span>
                </div>
              </div>
            </div>

            {/* Right Image Composition (~57-59%) */}
            <div className="about-hero-ref-right">
              <div className="about-hero-ref-img-frame">
                <img
                  src={heroTeamMeetingImg}
                  alt="FXTrade Corporate Finance and Advisory Consultation"
                  className="about-hero-ref-img hero-seq-img"
                  style={{
                    transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`
                  }}
                />

                {/* Overlapping Experience Card on lower-left */}
                <div className="about-hero-ref-exp-card hero-seq-cta">
                  <span className="exp-card-accent-bar" />
                  <div className="exp-card-body">
                    <span className="exp-card-number">30+</span>
                    <div className="exp-card-label">
                      <span>YEARS OF COMBINED</span>
                      <span>INDUSTRY EXPERIENCE</span>
                    </div>
                  </div>
                </div>

                {/* Lower-Right Understated Stacked Text Detail */}
                <div className="about-hero-ref-tag-detail">
                  <div className="tag-detail-text">
                    <span>STRATEGIC</span>
                    <span>FINANCIAL</span>
                    <span>SOLUTIONS</span>
                    <span>FOR A</span>
                    <span>CONNECTED</span>
                    <span>WORLD</span>
                  </div>
                  <span className="tag-detail-line" />
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width Horizontal Stats Strip / Mobile Impact Section */}
          <div className="about-ref-stats-strip">
            {/* Mobile-Only Impact Eyebrow & Heading */}
            <div className="about-stats-mobile-header">
              <div className="section-label-row">
                <span className="section-index-line" />
                <span className="section-index-tag">OUR IMPACT</span>
              </div>
              <h2 className="stats-mobile-title">Numbers That Reflect Our Journey.</h2>
              <p className="stats-mobile-sub">A track record built on trust, relationships and real outcomes.</p>
            </div>

            <div className="about-ref-stats-container">
              {/* Stat 1: Shield/Check - 30+ */}
              <div className="about-ref-stat-col reveal-init reveal-fade-up delay-70">
                <div className="stat-ref-icon-circle">
                  <ShieldCheck size={24} />
                </div>
                <div className="stat-ref-text-wrap">
                  <div className="stat-ref-number">
                    <AnimatedCounter target={30} suffix="+" duration={1200} />
                  </div>
                  <div className="stat-ref-label">
                    <span>Years of Combined</span>
                    <span>Industry Experience</span>
                  </div>
                </div>
              </div>

              <div className="about-ref-stat-divider" />

              {/* Stat 2: Landmark/Bank - 50+ */}
              <div className="about-ref-stat-col reveal-init reveal-fade-up delay-140">
                <div className="stat-ref-icon-circle">
                  <Landmark size={24} />
                </div>
                <div className="stat-ref-text-wrap">
                  <div className="stat-ref-number">
                    <AnimatedCounter target={50} suffix="+" duration={1200} />
                  </div>
                  <div className="stat-ref-label">
                    <span>Overseas Bank</span>
                    <span>Relationships</span>
                  </div>
                </div>
              </div>

              <div className="about-ref-stat-divider" />

              {/* Stat 3: Users - 255+ */}
              <div className="about-ref-stat-col reveal-init reveal-fade-up delay-210">
                <div className="stat-ref-icon-circle">
                  <Users size={24} />
                </div>
                <div className="stat-ref-text-wrap">
                  <div className="stat-ref-number">
                    <AnimatedCounter target={255} suffix="+" duration={1200} />
                  </div>
                  <div className="stat-ref-label">
                    <span>Corporate Clients</span>
                    <span>Served</span>
                  </div>
                </div>
              </div>

              <div className="about-ref-stat-divider" />

              {/* Stat 4: Globe - India + Global */}
              <div className="about-ref-stat-col reveal-init reveal-fade-up delay-280">
                <div className="stat-ref-icon-circle">
                  <Globe2 size={24} />
                </div>
                <div className="stat-ref-text-wrap">
                  <div className="stat-ref-number stat-ref-text-val">
                    India + Global
                  </div>
                  <div className="stat-ref-label">
                    <span>Market Coverage</span>
                    <span>Across Key Regions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Integrated Meeting Image & Quote */}
            <div className="about-stats-mobile-visual">
              <div className="stats-meeting-photo-frame">
                <img
                  src={advisoryMeetingImg}
                  alt="Financial Advisory Meeting"
                  className="stats-meeting-photo"
                  loading="lazy"
                />
              </div>
              <div className="stats-mobile-quote-card">
                <span className="quote-icon-leaf" aria-hidden="true">“</span>
                <p className="stats-mobile-quote-text">
                  Financial advisory is not only about arranging capital. It is about structuring the right opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. SECTION 01 — WHO WE ARE (EDITORIAL ASYMMETRIC SPLIT)
            ======================================================== */}
        <section id="who-we-are" className="about-whoweare-section">
          <Container>
            <div className="whoweare-grid">
              {/* Left Column: Layered Image Composition */}
              <div className="whoweare-visual-col">
                {/* Decorative faint dot-grid behind top-left */}
                <div className="whoweare-dot-grid" aria-hidden="true" />

                <div className="whoweare-main-photo-frame reveal-init reveal-fade-up">
                  <img
                    src={hqBuildingImg}
                    alt="FXTrade Corporate Headquarters Architecture"
                    className="whoweare-main-photo"
                  />
                </div>

                {/* Overlapping secondary photo */}
                <div
                  className="whoweare-overlap-photo-frame reveal-init reveal-fade-up delay-150"
                  style={{ transform: `translateY(${secondaryImgParallax}px)` }}
                >
                  <img
                    src={advisoryMeetingImg}
                    alt="Financial Advisory Meeting"
                    className="whoweare-overlap-photo"
                  />
                </div>

                {/* Bottom pill card on photo */}
                <div className="whoweare-photo-pill reveal-init reveal-fade-up delay-210">
                  <span>GLOBAL PERSPECTIVE</span>
                  <span className="pill-dot">•</span>
                  <span>PRACTICAL SOLUTIONS</span>
                  <span className="pill-dot">•</span>
                  <span>LASTING PARTNERSHIPS</span>
                </div>

                {/* Mobile-Only 3 Value Tiles below building image */}
                <div className="whoweare-mobile-value-tiles">
                  <div className="whoweare-val-tile">
                    <div className="val-tile-icon-circle">
                      <Compass size={17} />
                    </div>
                    <span className="val-tile-title">Deep Expertise</span>
                  </div>
                  <div className="whoweare-val-tile">
                    <div className="val-tile-icon-circle">
                      <ShieldCheck size={17} />
                    </div>
                    <span className="val-tile-title">Client-First Approach</span>
                  </div>
                  <div className="whoweare-val-tile">
                    <div className="val-tile-icon-circle">
                      <Users size={17} />
                    </div>
                    <span className="val-tile-title">Long-Term Relationships</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Text & Quote */}
              <div className="whoweare-text-col reveal-init reveal-fade-left">
                <div className="section-label-row">
                  <span className="section-index-line" />
                  <span className="section-index-num">01</span>
                  <span className="section-index-tag">WHO WE ARE</span>
                </div>

                <h2 className="whoweare-heading">
                  Financial Experience Built Around Real Business Needs.
                </h2>

                <p className="whoweare-body-p">
                  FxTrade Consulting Pvt. Ltd. is focused on specialized Corporate Finance, Debt Syndication, Supply Chain Finance (SCF) products, and structured financial advisory for SMEs, Mid-Corporates, and EPC contractors across India.
                </p>

                <p className="whoweare-body-p">
                  Our professionals bring deep leadership across commercial banking, debt raising, bridge finance, project funding, and financial restructuring, allowing us to understand both the financial structure and the commercial realities behind every requirement.
                </p>

                {/* Editorial Quote */}
                <div className="whoweare-quote-wrap">
                  <span className="quote-mark" aria-hidden="true">“</span>
                  <blockquote className="whoweare-quote-text">
                    Financial advisory is not only about arranging capital. It is about structuring the right opportunity.
                  </blockquote>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================
            3. SECTION 02 — OUR JOURNEY (HORIZONTAL TIMELINE)
            ======================================================== */}
        <section id="journey" className="about-journey-section">
          <Container>
            <div className="journey-header reveal-init reveal-fade-up">
              <div className="section-label-row">
                <span className="section-index-num">02</span>
                <span className="section-index-tag">OUR JOURNEY</span>
              </div>
              <h2 className="journey-main-heading">
                Experience That Has Evolved With the Market.
              </h2>
              <p className="journey-subheading">
                A journey shaped by banking expertise, financial relationships and changing global trade.
              </p>
            </div>

            {/* Timeline Track & Cards */}
            <div className="journey-timeline-wrap">
              <div className="journey-track-line timeline-line-draw" />

              <div className="journey-milestones-grid">
                {timelineMilestones.map((item, idx) => (
                  <div
                    key={idx}
                    className={`timeline-node-card reveal-init reveal-fade-up delay-${(idx + 1) * 70}`}
                  >
                    {/* Green connector dot */}
                    <div className="timeline-dot-wrap">
                      <span className="timeline-node-dot" />
                    </div>

                    <div className="timeline-year">{item.year}</div>
                    <h3 className="timeline-title">{item.title}</h3>

                    <div className="timeline-thumb-frame">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="timeline-thumb-img"
                        loading="lazy"
                      />
                    </div>

                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================
            4. SECTION 03 — OUR PHILOSOPHY (DARK NAVY STRIP)
            ======================================================== */}
        <section className="about-philosophy-section">
          <Container>
            <div className="philosophy-header reveal-init reveal-fade-up">
              <div className="section-label-row dark-label">
                <span className="section-index-num">03</span>
                <span className="section-index-tag">OUR PHILOSOPHY</span>
              </div>
              <h2 className="philosophy-main-heading">
                The Principles That Guide Everything We Do.
              </h2>
            </div>

            <div className="philosophy-columns-grid">
              {/* Column 1 */}
              <div className="philosophy-col reveal-init reveal-fade-up delay-70">
                <div className="philosophy-icon-circle">
                  <Compass size={24} strokeWidth={2.2} />
                </div>
                <h3 className="philosophy-col-title">
                  Clarity <br /> over complexity.
                </h3>
                <p className="philosophy-col-desc">
                  We focus on practical, structured solutions that eliminate friction and create measurable commercial outcomes.
                </p>
              </div>

              <div className="philosophy-divider" />

              {/* Column 2 */}
              <div className="philosophy-col reveal-init reveal-fade-up delay-140">
                <div className="philosophy-icon-circle">
                  <Handshake size={24} strokeWidth={2.2} />
                </div>
                <h3 className="philosophy-col-title">
                  Relationships <br /> over transactions.
                </h3>
                <p className="philosophy-col-desc">
                  We believe in enduring, multi-year institutional partnerships built on transparent counsel and mutual success.
                </p>
              </div>

              <div className="philosophy-divider" />

              {/* Column 3 */}
              <div className="philosophy-col reveal-init reveal-fade-up delay-210">
                <div className="philosophy-icon-circle">
                  <TrendingUp size={24} strokeWidth={2.2} />
                </div>
                <h3 className="philosophy-col-title">
                  Long-term value <br /> over short-term wins.
                </h3>
                <p className="philosophy-col-desc">
                  Our structuring advice is always aligned with your sustainable growth, risk mitigation, and long-term capital health.
                </p>
              </div>

              {/* Column 4 - 2x2 Mobile Grid Partner */}
              <div className="philosophy-col philosophy-col-fourth reveal-init reveal-fade-up delay-280">
                <div className="philosophy-icon-circle">
                  <ShieldCheck size={24} strokeWidth={2.2} />
                </div>
                <h3 className="philosophy-col-title">
                  Integrity in <br /> every engagement.
                </h3>
                <p className="philosophy-col-desc">
                  We maintain uncompromising professional ethics and transparent counsel in every advisory mandate.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================
            5. SECTION 04 — OUR APPROACH (5-STEP PROCESS)
            ======================================================== */}
        <section className="about-approach-section">
          <Container>
            <div className="approach-grid">
              {/* Left Column: Visual & Callout */}
              <div className="approach-left-col reveal-init reveal-fade-right">
                <div className="section-label-row">
                  <span className="section-index-num">04</span>
                  <span className="section-index-tag">OUR APPROACH</span>
                </div>

                <h2 className="approach-main-heading">
                  From Requirement to Execution.
                </h2>

                <p className="approach-subheading">
                  A disciplined advisory process designed around each client's financial objectives.
                </p>

                <div className="approach-media-frame">
                  <img
                    src={approachTeamImg}
                    alt="Business financial consultation session"
                    className="approach-media-img"
                    loading="lazy"
                  />
                </div>

                {/* Callout Box with Green Left Border */}
                <div className="approach-callout-box">
                  <span className="callout-tag">FXTRADE ADVISORY APPROACH</span>
                  <p className="callout-text">
                    We combine industry expertise, banking relationships and a client-first approach to deliver financial solutions that make a real difference.
                  </p>
                </div>
              </div>

              {/* Right Column: 5-Step Process */}
              <div className="approach-right-col">
                <div className="steps-vertical-track steps-track-draw" />

                <div className="steps-list">
                  {approachSteps.map((step, idx) => (
                    <div
                      key={step.num}
                      className={`step-item-card reveal-init reveal-fade-left delay-${(idx + 1) * 70}`}
                    >
                      <div className="step-num-badge">{step.num}</div>
                      <div className="step-content">
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-desc">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================
            6. SECTION 05 — GLOBAL NETWORK (DARK NAVY WITH MAP)
            ======================================================== */}
        <section className="about-network-section">
          <Container>
            <div className="network-grid">
              {/* Left Side: Header, Desc, Button */}
              <div className="network-info-col reveal-init reveal-fade-right">
                <div className="section-label-row dark-label">
                  <span className="section-index-num">05</span>
                  <span className="section-index-tag">GLOBAL NETWORK</span>
                </div>

                <h2 className="network-main-heading">
                  Relationships That Extend Beyond Borders.
                </h2>

                <p className="network-body-desc">
                  Our strong network of international banks, overseas branches, and domestic financial institutions allows us to arrange competitive quotes and tailored capital solutions across global markets.
                </p>

                <div className="network-cta-wrap">
                  <Link to="/contact" className="btn btn-accent network-cta-btn">
                    <span>Our Network</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Center: Vector World Map Graphic */}
              <div className="network-map-col reveal-init reveal-scale">
                <div className="network-map-container" aria-label="Global Banking Network Map">
                  <svg
                    className="network-map-svg"
                    viewBox="0 0 760 380"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Subtle Grid / Latitude-Longitude lines */}
                    <line x1="60" y1="120" x2="700" y2="120" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3 4" />
                    <line x1="60" y1="190" x2="700" y2="190" stroke="rgba(255, 255, 255, 0.07)" strokeDasharray="3 4" />
                    <line x1="60" y1="260" x2="700" y2="260" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3 4" />
                    <line x1="240" y1="40" x2="240" y2="340" stroke="rgba(255, 255, 255, 0.04)" strokeDasharray="3 4" />
                    <line x1="480" y1="40" x2="480" y2="340" stroke="rgba(255, 255, 255, 0.06)" strokeDasharray="3 4" />

                    {/* Continent Landmasses - Crisp & Recognizable */}
                    {/* North America */}
                    <path
                      d="M100 80 C120 60 170 55 200 80 C215 95 205 130 185 145 C165 155 140 145 130 120 C110 115 95 95 100 80 Z"
                      fill="#15364f"
                      stroke="#235275"
                      strokeWidth="0.8"
                    />
                    {/* South America */}
                    <path
                      d="M170 175 C195 180 220 210 210 255 C195 285 175 295 160 270 C150 240 155 200 170 175 Z"
                      fill="#15364f"
                      stroke="#235275"
                      strokeWidth="0.8"
                    />
                    {/* Europe */}
                    <path
                      d="M335 75 C360 65 395 70 410 95 C400 115 375 125 350 120 C330 115 325 90 335 75 Z"
                      fill="#15364f"
                      stroke="#235275"
                      strokeWidth="0.8"
                    />
                    {/* Africa */}
                    <path
                      d="M335 140 C375 145 395 185 390 235 C380 270 350 280 330 245 C320 215 320 170 335 140 Z"
                      fill="#15364f"
                      stroke="#235275"
                      strokeWidth="0.8"
                    />
                    {/* Asia / Eurasia */}
                    <path
                      d="M420 80 C480 65 570 75 600 120 C585 155 520 175 460 165 C440 155 420 125 420 80 Z"
                      fill="#15364f"
                      stroke="#235275"
                      strokeWidth="0.8"
                    />
                    {/* India Subcontinent */}
                    <path
                      d="M465 155 C485 155 495 175 480 205 C470 200 460 180 465 155 Z"
                      fill="#1b4666"
                      stroke="#5ca631"
                      strokeWidth="1"
                    />
                    {/* Australia */}
                    <path
                      d="M560 235 C595 225 630 245 635 275 C615 295 575 295 555 270 C550 250 555 240 560 235 Z"
                      fill="#15364f"
                      stroke="#235275"
                      strokeWidth="0.8"
                    />

                    {/* Arcs radiating from India (x: 480, y: 178) */}
                    {/* India to Middle East (x: 415, y: 160) */}
                    <path
                      d="M480 178 Q445 150 415 160"
                      stroke="#5ca631"
                      strokeWidth="1.8"
                      strokeDasharray="4 3"
                      className="map-arc-line map-arc-animated"
                    />
                    {/* India to Europe (x: 370, y: 100) */}
                    <path
                      d="M480 178 Q420 110 370 100"
                      stroke="#5ca631"
                      strokeWidth="1.8"
                      strokeDasharray="4 3"
                      className="map-arc-line map-arc-animated"
                    />
                    {/* India to Singapore (x: 535, y: 200) */}
                    <path
                      d="M480 178 Q510 180 535 200"
                      stroke="#5ca631"
                      strokeWidth="1.8"
                      strokeDasharray="4 3"
                      className="map-arc-line map-arc-animated"
                    />
                    {/* India to Australia (x: 590, y: 260) */}
                    <path
                      d="M480 178 Q545 210 590 260"
                      stroke="#5ca631"
                      strokeWidth="1.8"
                      strokeDasharray="4 4"
                      className="map-arc-line map-arc-animated"
                    />
                    {/* India to East Asia / Japan (x: 580, y: 125) */}
                    <path
                      d="M480 178 Q540 135 580 125"
                      stroke="rgba(92, 166, 49, 0.7)"
                      strokeWidth="1.4"
                      strokeDasharray="3 3"
                      className="map-arc-animated"
                    />

                    {/* Hub Nodes with Glow */}
                    {/* INDIA (Primary Hub) */}
                    <circle cx="480" cy="178" r="12" fill="rgba(92, 166, 49, 0.2)" className="map-hq-glow" />
                    <circle cx="480" cy="178" r="6" fill="#5ca631" stroke="#ffffff" strokeWidth="1.5" />
                    <text x="480" y="202" fill="#5ca631" fontSize="11" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
                      INDIA (HQ)
                    </text>

                    {/* MIDDLE EAST (Dubai) */}
                    <circle cx="415" cy="160" r="4" fill="#5ca631" stroke="#ffffff" strokeWidth="1" />
                    <text x="415" y="148" fill="#e2e8f0" fontSize="9.5" fontWeight="600" textAnchor="middle">
                      MIDDLE EAST
                    </text>

                    {/* EUROPE */}
                    <circle cx="370" cy="100" r="4" fill="#5ca631" stroke="#ffffff" strokeWidth="1" />
                    <text x="370" y="90" fill="#e2e8f0" fontSize="9.5" fontWeight="600" textAnchor="middle">
                      EUROPE
                    </text>

                    {/* SINGAPORE */}
                    <circle cx="535" cy="200" r="4" fill="#5ca631" stroke="#ffffff" strokeWidth="1" />
                    <text x="535" y="218" fill="#e2e8f0" fontSize="9.5" fontWeight="600" textAnchor="middle">
                      SINGAPORE
                    </text>

                    {/* AUSTRALIA */}
                    <circle cx="590" cy="260" r="4" fill="#5ca631" stroke="#ffffff" strokeWidth="1" />
                    <text x="590" y="278" fill="#e2e8f0" fontSize="9.5" fontWeight="600" textAnchor="middle">
                      AUSTRALIA
                    </text>
                  </svg>
                </div>
              </div>

              {/* Right Side: Stacked Verified Stats */}
              <div className="network-stats-col">
                <div className="net-stat-card reveal-init reveal-fade-left delay-70">
                  <div className="net-stat-num">
                    <AnimatedCounter target={30} suffix="+" duration={1200} />
                  </div>
                  <div className="net-stat-lbl">Years of Experience</div>
                </div>

                <div className="net-stat-card reveal-init reveal-fade-left delay-140">
                  <div className="net-stat-num">
                    <AnimatedCounter target={50} suffix="+" duration={1200} />
                  </div>
                  <div className="net-stat-lbl">Overseas Bank Branch Relationships</div>
                </div>

                <div className="net-stat-card reveal-init reveal-fade-left delay-210">
                  <div className="net-stat-num">
                    <AnimatedCounter target={70} suffix="+" duration={1200} />
                  </div>
                  <div className="net-stat-lbl">Domestic & Foreign Banking Connections</div>
                </div>

                <div className="net-stat-card reveal-init reveal-fade-left delay-280">
                  <div className="net-stat-num">
                    <AnimatedCounter target={255} suffix="+" duration={1200} />
                  </div>
                  <div className="net-stat-lbl">Corporate Clients Served</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================
            7. SECTION 06 — OUR LEADERSHIP (EDITORIAL PORTRAITS)
            ======================================================== */}
        <section className="about-leadership-ref-section">
          <Container>
            <div className="leadership-ref-grid">
              {/* Left Header */}
              <div className="leadership-ref-left reveal-init reveal-fade-right">
                <div className="section-label-row">
                  <span className="section-index-num">06</span>
                  <span className="section-index-tag">OUR LEADERSHIP</span>
                </div>

                <h2 className="leadership-ref-heading">
                  The People Behind the Decisions.
                </h2>

                <p className="leadership-ref-desc">
                  Our leadership combines deep financial experience with a relationship-driven approach to advisory, guiding businesses with integrity and institutional trust.
                </p>

                <button
                  type="button"
                  onClick={() => setActiveLeader(leadershipTeam[0])}
                  className="btn-link-action"
                >
                  <span>Meet Our Leadership</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Right: 2 Large Portrait Cards */}
              <div className="leadership-ref-cards-row">
                {leadershipTeam.map((leader, idx) => (
                  <div
                    key={idx}
                    className={`leader-ref-card reveal-init reveal-fade-up delay-${(idx + 1) * 100}`}
                    onClick={() => setActiveLeader(leader)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActiveLeader(leader)}
                  >
                    <div className="leader-ref-photo-wrap">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="leader-ref-photo"
                        loading="lazy"
                      />
                      <div className="leader-ref-overlay-badge">
                        <div className="leader-badge-text">
                          <span className="leader-badge-name">{leader.name}</span>
                          <span className="leader-badge-role">{leader.role}</span>
                        </div>
                        <div className="leader-badge-arrow">
                          <ArrowRight size={15} />
                        </div>
                      </div>
                    </div>

                    {/* Mobile Caption below photo (Side-by-side card layout) */}
                    <div className="leader-mobile-card-info">
                      <h3 className="leader-mobile-name">{leader.name}</h3>
                      <div className="leader-mobile-role">{leader.role}</div>
                      <div className="leader-mobile-link">
                        <span>View Profile</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Interactive Leader Bio Modal */}
        {activeLeader && (
          <div className="leader-modal-overlay" onClick={() => setActiveLeader(null)}>
            <div className="leader-modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                className="leader-modal-close"
                onClick={() => setActiveLeader(null)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
              <div className="leader-modal-inner">
                <div className="leader-modal-photo">
                  <img src={activeLeader.image} alt={activeLeader.name} />
                </div>
                <div className="leader-modal-body">
                  <div className="section-label-row">
                    <span className="section-index-tag">LEADERSHIP PROFILE</span>
                  </div>
                  <h3 className="modal-leader-name">{activeLeader.name}</h3>
                  <div className="modal-leader-role">{activeLeader.role}</div>
                  <p className="modal-leader-bio">{activeLeader.fullBio}</p>
                  <div className="modal-leader-action">
                    <Link
                      to="/contact"
                      className="btn btn-navy btn-sm"
                      onClick={() => setActiveLeader(null)}
                    >
                      <span>Schedule a Consultation</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            8. SECTION 07 — FINAL ABOUT CTA (CONTAINER PORT AT SUNSET)
            ======================================================== */}
        <section className="about-final-cta-section">
          <div className="cta-backdrop-wrap">
            <img
              src={ctaPortImg}
              alt="Global Container Port at Sunset"
              className="cta-backdrop-photo"
              loading="lazy"
              style={{ transform: `translateY(${finalCtaParallax}px)` }}
            />
            <div className="cta-backdrop-tint" />
          </div>

          <Container className="cta-container-relative">
            <div className="about-final-cta-content reveal-init reveal-fade-up">
              <span className="cta-eyebrow-accent">
                BUILT FOR LONG-TERM PARTNERSHIPS
              </span>

              <h2 className="cta-main-title">
                Experience Helps Us Understand the Challenge. <br />
                Relationships Help Us Create the Solution.
              </h2>

              <p className="cta-supporting-text">
                Discuss your trade finance, treasury or structured finance requirements with the FXTrade advisory team.
              </p>

              <div className="cta-buttons-group">
                <Link to="/contact" className="btn btn-accent btn-lg cta-primary-btn">
                  <span>Talk to Our Team</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn btn-outline-white btn-lg cta-secondary-btn">
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageShell>
  );
}
