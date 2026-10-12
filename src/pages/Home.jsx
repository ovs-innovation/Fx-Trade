import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  TrendingUp,
  Landmark,
  CheckCircle2,
  Check,
  Users,
  MapPin,
  Trophy,
  BarChart3,
  Phone,
  Mail,
  Quote,
  X
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import AnimatedCounter from "../components/common/AnimatedCounter";
import useScrollReveal from "../hooks/useScrollReveal";

import heroBannerImg from "../assets/images/Business Professionals Overlooking Container Port.png";
import aboutHqBuildingImg from "../assets/images/Modern FXTrade Corporate Headquarters.png";
import intlTradeCargoImg from "../assets/images/intl-trade-cargo-port.jpg";
import serviceDomesticThumb from "../assets/images/service-domestic-thumb.jpg";
import serviceIntlThumb from "../assets/images/service-intl-thumb.jpg";
import serviceForexThumb from "../assets/images/service-forex-thumb.jpg";
import serviceDebtHandshake from "../assets/images/service-debt-handshake.jpg";
import leaderSubhashImg from "../assets/images/leader-subhash.jpg";
import leaderSunayanaImg from "../assets/images/leader-sunayana.jpg";
import whyChooseFxtradeImg from "../assets/images/why-choose-fxtrade.jpg";
import "./Home.css";

const corePillFeatures = [
  {
    icon: Landmark,
    title: "Corporate Finance",
    subtitle: "Debt syndication & structured funding",
    path: "/services/debt-syndication"
  },
  {
    icon: TrendingUp,
    title: "SCF & Invoice Factoring",
    subtitle: "Unsecured domestic & export discounting",
    path: "/services/domestic-trade-finance"
  },
  {
    icon: Globe2,
    title: "Trade Finance Solutions",
    subtitle: "Inland & international supplier credit",
    path: "/services/international-trade-finance"
  },
  {
    icon: ShieldCheck,
    title: "Credit Rating & NFB Limits",
    subtitle: "EPC contractor & infrastructure funding",
    path: "/services/forex-services"
  }
];

const homeServices = [
  {
    id: "domestic-trade-finance",
    icon: Landmark,
    title: "Domestic Trade Finance",
    description: "Working capital support, LC and bank guarantee solutions.",
    image: serviceDomesticThumb,
    path: "/services/domestic-trade-finance"
  },
  {
    id: "international-trade-finance",
    icon: Globe2,
    title: "International Trade Finance",
    description: "Import & export solutions for global markets.",
    image: serviceIntlThumb,
    path: "/services/international-trade-finance"
  },
  {
    id: "forex-services",
    icon: TrendingUp,
    title: "Forex & Treasury Advisory",
    description: "Currency risk management and treasury advisory.",
    image: serviceForexThumb,
    path: "/services/forex-services"
  },
  {
    id: "debt-syndication",
    icon: Users,
    title: "Debt Syndication",
    description: "Structured debt solutions for expansion and large projects.",
    image: serviceDebtHandshake,
    path: "/services/debt-syndication"
  }
];

const leaderBios = {
  subhash: {
    name: "Mr. Subhash Chandra",
    role: "Managing Director",
    image: leaderSubhashImg,
    summary: "30+ years of experience in Finance, Markets and Corporate Advisory.",
    fullBio: "Mr. Subhash Chandra brings over 30 years of extensive industry leadership across Corporate Finance, Trade Advisory, and Treasury operations. Under his direction, FXTrade Consulting has established partnerships with over 70 domestic and international banking institutions, advising medium and large enterprises on structured capital acquisition and risk management."
  },
  sunayana: {
    name: "Ms. Sunayana Puri",
    role: "Chief Operating Officer (COO)",
    image: leaderSunayanaImg,
    summary: "Drives operations, client relations and a culture of excellence at FXTrade.",
    fullBio: "Ms. Sunayana Puri is a qualified Company Secretary, Law Graduate, and Associate of ACG with extensive corporate governance experience. She spearheads transaction execution, legal documentation, cross-border compliance, and strategic client advisory, ensuring every trade finance deal adheres to strict regulatory and institutional guidelines."
  }
};

export default function Home() {
  const scrollRef = useScrollReveal();
  const [activeLeader, setActiveLeader] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Subtle scroll depth tracking (bounded, disabled on mobile/reduced-motion)
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ fullName: "", email: "", company: "", service: "" });
      }, 5000);
    }
  };

  // Parallax offsets bounded within 10-16px max
  const heroParallax = Math.min(scrollY * 0.035, 16);
  const whyChooseParallax = Math.min(scrollY * 0.025, 14);
  const contactParallax = Math.min(scrollY * 0.02, 12);

  return (
    <PageShell>
      <div ref={scrollRef}>
        {/* 1. HERO SECTION (Wide Compact Banner matching Reference Image 1) */}
        <section className="home-hero-section">
          <div className="hero-container">
            <div className="home-hero-grid">
              <div className="hero-left">
                <span className="hero-eyebrow hero-seq-eyebrow">
                  BANKING &amp; FINANCIAL SERVICES • CORPORATE FINANCE
                </span>

                <h1 className="hero-title hero-seq-title">
                  Enabling Business Growth <br className="hero-desktop-br" />
                  Through Structured <br className="hero-desktop-br" />
                  Financial Expertise
                </h1>

                <p className="hero-description hero-seq-desc">
                  We help SMEs, Mid-Corporates and EPC Contractors unlock growth opportunities with tailored Corporate Finance, Debt Syndication, SCF Products, and Structured Funding solutions.
                </p>

                <div className="hero-cta-group hero-seq-cta">
                  <Link to="/services" className="btn btn-navy btn-hero">
                    <span>Explore Our Services</span>
                    <ArrowRight size={17} />
                  </Link>
                  <Link to="/contact" className="btn btn-outline btn-hero">
                    <span>Get In Touch</span>
                  </Link>
                </div>

                <div className="hero-trust-strip hero-seq-trust">
                  <div className="hero-trust-item">
                    <div className="trust-item-icon-box">
                      <CheckCircle2 size={16} className="trust-check-icon" />
                    </div>
                    <div className="trust-item-text">
                      <span className="trust-item-val">30+ Years</span>
                      <span className="trust-item-lbl">Advisory Track Record</span>
                    </div>
                  </div>

                  <div className="hero-trust-divider" />

                  <div className="hero-trust-item">
                    <div className="trust-item-icon-box">
                      <CheckCircle2 size={16} className="trust-check-icon" />
                    </div>
                    <div className="trust-item-text">
                      <span className="trust-item-val">70+ Partners</span>
                      <span className="trust-item-lbl">Banking Institutions</span>
                    </div>
                  </div>

                  <div className="hero-trust-divider" />

                  <div className="hero-trust-item">
                    <div className="trust-item-icon-box">
                      <CheckCircle2 size={16} className="trust-check-icon" />
                    </div>
                    <div className="trust-item-text">
                      <span className="trust-item-val">Pan-India &amp; Global</span>
                      <span className="trust-item-lbl">Trade Execution</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-right">
                <div className="hero-image-frame">
                  <img
                    src={heroBannerImg}
                    alt="Business Professionals Overlooking Container Port"
                    className="hero-main-photo hero-seq-img"
                    style={{ transform: `translateY(${heroParallax}px)` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. COMPACT CAPABILITY STRIP (Directly attached below hero) */}
        <section className="below-hero-strip">
          <div className="hero-container">
            <div className="pill-features-grid">
              {corePillFeatures.map((item, idx) => {
                const IconComp = item.icon;
                const delayClass = `delay-${70 * (idx + 1)}`;
                return (
                  <Link
                    key={idx}
                    to={item.path}
                    className={`pill-feature-card reveal-init reveal-fade-up ${delayClass}`}
                  >
                    <div className="pill-feature-icon-box">
                      <IconComp size={19} className="pill-icon" />
                    </div>
                    <div className="pill-feature-content">
                      <h4 className="pill-feature-title">{item.title}</h4>
                      <p className="pill-feature-sub">{item.subtitle}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. ABOUT FXTRADE SECTION (2-Row Corporate Layout matching Reference) */}
        <section className="home-about-section">
          <Container>
            {/* Top Row: Left Image + Right Text Content */}
            <div className="about-top-grid">
              {/* Left Column: Corporate Building Image */}
              <div className="about-image-card reveal-init reveal-scale">
                <img
                  src={aboutHqBuildingImg}
                  alt="FXTrade Corporate Headquarters"
                  className="about-hq-img"
                  loading="lazy"
                />
              </div>

              {/* Right Column: Text Content Block */}
              <div className="about-content-col reveal-init reveal-fade-left">
                <span className="about-eyebrow">ABOUT FXTRADE</span>
                <h2 className="about-heading">
                  Experience. Integrity. Global Perspective.
                </h2>
                <p className="about-paragraph">
                  FxTrade Consulting Pvt. Ltd. delivers trusted corporate finance, debt syndication, and structured financial solutions to businesses across India and global markets. We combine deep banking relationships with tailored financial structuring to create sustainable growth opportunities.
                </p>
                <div className="about-btn-wrap">
                  <Link to="/about" className="btn btn-about-green">
                    <span>Learn More About Us</span>
                    <ArrowRight size={16} className="btn-arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Row: 4 Stats in Single Horizontal Row */}
            <div className="about-stats-row">
              <div className="about-stat-item reveal-init reveal-fade-up delay-70">
                <div className="about-stat-icon-circle">
                  <Trophy size={23} className="stat-lucide-icon" />
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-num">
                    <AnimatedCounter target={30} suffix="+" duration={1200} />
                  </div>
                  <div className="about-stat-label">Years of Experience</div>
                </div>
              </div>

              <div className="about-stat-divider" />

              <div className="about-stat-item reveal-init reveal-fade-up delay-140">
                <div className="about-stat-icon-circle">
                  <Users size={23} className="stat-lucide-icon" />
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-num">
                    <AnimatedCounter target={500} suffix="+" duration={1200} />
                  </div>
                  <div className="about-stat-label">Clients Served</div>
                </div>
              </div>

              <div className="about-stat-divider" />

              <div className="about-stat-item reveal-init reveal-fade-up delay-210">
                <div className="about-stat-icon-circle">
                  <MapPin size={23} className="stat-lucide-icon" />
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-num">
                    <AnimatedCounter target={10} suffix="+" duration={1200} />
                  </div>
                  <div className="about-stat-label">Global Locations</div>
                </div>
              </div>

              <div className="about-stat-divider" />

              <div className="about-stat-item reveal-init reveal-fade-up delay-280">
                <div className="about-stat-icon-circle">
                  <BarChart3 size={23} className="stat-lucide-icon" />
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-num">
                    <AnimatedCounter target={95} suffix="%" duration={1200} />
                  </div>
                  <div className="about-stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. INTERNATIONAL TRADE FINANCE SECTION (Compact 3-Column Layout) */}
        <section className="home-trade-finance-section">
          <Container>
            <div className="trade-finance-grid">
              {/* Left Column: Eyebrow, Title, Description & CTA */}
              <div className="trade-finance-left reveal-init reveal-fade-right">
                <span className="trade-eyebrow">OUR SERVICES</span>
                <h2 className="trade-heading">International Trade Finance</h2>
                <p className="trade-description">
                  We provide a full suite of international trade finance solutions to help businesses manage cross-border transactions with confidence and ease.
                </p>
                <Link to="/services/international-trade-finance" className="trade-cta-btn">
                  <span>Explore Trade Finance</span>
                  <ArrowRight size={18} className="trade-btn-arrow" />
                </Link>
              </div>

              {/* Center Column: Professional Landscape Port Logistics Image */}
              <div className="trade-finance-center reveal-init reveal-scale">
                <div className="trade-image-wrap">
                  <img
                    src={intlTradeCargoImg}
                    alt="International Cargo Ship and Trade Finance Port"
                    className="trade-cargo-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Heading & 6-Item Checklist */}
              <div className="trade-finance-right reveal-init reveal-fade-left">
                <h3 className="trade-right-heading">
                  Facilitating Global Trade With Confidence
                </h3>
                <ul className="trade-checklist">
                  {[
                    "Import & Export Financing",
                    "Letter of Credit (LC)",
                    "Standby Letter of Credit (SBLC)",
                    "Export Bill Discounting",
                    "Supplier's Credit",
                    "Regulatory & Compliance Support"
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className={`trade-checklist-item reveal-init reveal-fade-left delay-${(idx + 1) * 50}`}
                    >
                      <span className="trade-check-badge">
                        <Check size={15} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. OUR CORE CAPABILITIES — 4 Cards in one row */}
        <section className="home-capabilities-section">
          <Container>
            <div className="capabilities-header-row reveal-init reveal-fade-up">
              <div className="capabilities-header-left">
                <div className="capabilities-eyebrow-wrap">
                  <span className="capabilities-eyebrow-line" />
                  <span className="capabilities-eyebrow-text">OUR CORE CAPABILITIES</span>
                </div>
                <h2 className="capabilities-main-title">
                  Comprehensive Financial Solutions for Your Business
                </h2>
              </div>
              <Link to="/services" className="capabilities-header-link">
                <span>View All Services</span>
                <ArrowRight size={16} className="capabilities-header-arrow" />
              </Link>
            </div>

            <div className="capabilities-cards-grid">
              {homeServices.map((service, idx) => {
                const IconComp = service.icon;
                const delayClass = `delay-${70 * (idx + 1)}`;
                return (
                  <div
                    key={service.id}
                    className={`capability-card reveal-init reveal-fade-up ${delayClass}`}
                  >
                    <div className="capability-media-wrap">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="capability-thumb-img"
                        loading="lazy"
                      />
                      <div className="capability-badge">
                        <IconComp size={18} strokeWidth={2.2} />
                      </div>
                    </div>
                    <div className="capability-body">
                      <h3 className="capability-title">{service.title}</h3>
                      <p className="capability-desc">{service.description}</p>
                      <Link to={service.path} className="capability-learn-link">
                        <span>Learn More</span>
                        <ArrowRight size={15} className="capability-learn-arrow" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 5. WHY CHOOSE FXTRADE? (Compact Transition Banner Matching Reference) */}
        <section id="why-choose" className="home-why-choose-section">
          <div className="why-choose-bg-wrap">
            <img
              src={whyChooseFxtradeImg}
              alt="FXTrade Corporate Advisory Team"
              className="why-choose-bg-photo"
              loading="lazy"
              style={{ transform: `translateY(${whyChooseParallax}px)` }}
            />
            <div className="why-choose-bg-tint" />
          </div>

          <Container className="why-choose-container-relative">
            <div className="why-choose-inner-row">
              {/* Left Column: Eyebrow, Heading, Desc, 4 Value Pillars */}
              <div className="why-choose-left-block reveal-init reveal-fade-up">
                <span className="why-choose-eyebrow">OUR ADVANTAGE</span>
                <h2 className="why-choose-heading">Why Choose FXTrade?</h2>
                <p className="why-choose-desc">
                  We combine global expertise with deep market knowledge to deliver
                  practical solutions that help businesses trade, grow and succeed.
                </p>

                <div className="why-choose-pillars-grid">
                  {[
                    { icon: Globe2, lines: ["Wide Network", "of Global Banks"] },
                    { icon: TrendingUp, lines: ["Competitive", "Pricing"] },
                    { icon: ShieldCheck, lines: ["End-to-End", "Support"] },
                    { icon: Users, lines: ["Trusted by", "Businesses"] }
                  ].map((item, idx) => {
                    const IconComp = item.icon;
                    const delayClass = `delay-${70 * (idx + 1)}`;
                    return (
                      <div
                        key={idx}
                        className={`why-choose-pillar-item reveal-init reveal-fade-up ${delayClass}`}
                      >
                        <div className="why-choose-pillar-icon">
                          <IconComp size={24} strokeWidth={1.9} />
                        </div>
                        <span className="why-choose-pillar-text">
                          {item.lines[0]}<br />{item.lines[1]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Mission Quote Callout */}
              <div className="why-choose-right-quote reveal-init reveal-fade-left delay-200">
                <div className="why-quote-mark">“</div>
                <p className="why-quote-text">
                  Enabling businesses to trade with confidence today, and build
                  stronger opportunities tomorrow.
                </p>
                <div className="why-quote-dash" />
              </div>
            </div>
          </Container>
        </section>

        {/* 6. LEADERSHIP / VALUES SECTION (Matching Reference) */}
        <section className="home-leadership-section">
          <Container>
            <div className="leadership-header-block reveal-init reveal-fade-up">
              <div className="leadership-eyebrow-wrap">
                <span className="leadership-eyebrow-line" />
                <span className="leadership-eyebrow-text">OUR LEADERSHIP</span>
              </div>
              <h2 className="leadership-main-title">
                Guided by Experience. Driven by Values.
              </h2>
              <Link to="/about" className="leadership-header-link">
                <span>Meet Our Team</span>
                <ArrowRight size={17} className="leadership-header-arrow" />
              </Link>
            </div>

            <div className="home-leadership-grid">
              {/* Leader 1: Mr. Subhash Chandra */}
              <div className="leadership-card reveal-init reveal-fade-up delay-70">
                <div className="leader-portrait-wrap img-zoom-wrap">
                  <img
                    src={leaderSubhashImg}
                    alt="Mr. Subhash Chandra - Managing Director"
                    className="leader-portrait-img"
                    loading="lazy"
                  />
                </div>
                <div className="leader-card-info">
                  <h3 className="leader-name">Mr. Subhash Chandra</h3>
                  <span className="leader-title">Managing Director</span>
                  <p className="leader-desc">
                    30+ years of experience in Finance, Markets and Corporate Advisory.
                  </p>
                  <button
                    type="button"
                    className="leader-read-more"
                    onClick={() => setActiveLeader("subhash")}
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} className="leader-read-arrow" />
                  </button>
                </div>
              </div>

              {/* Leader 2: Ms. Sunayana Puri */}
              <div className="leadership-card reveal-init reveal-fade-up delay-140">
                <div className="leader-portrait-wrap img-zoom-wrap">
                  <img
                    src={leaderSunayanaImg}
                    alt="Ms. Sunayana Puri - Chief Operating Officer"
                    className="leader-portrait-img"
                    loading="lazy"
                  />
                </div>
                <div className="leader-card-info">
                  <h3 className="leader-name">Ms. Sunayana Puri</h3>
                  <span className="leader-title">Chief Operating Officer (COO)</span>
                  <p className="leader-desc">
                    Drives operations, client relations and a culture of excellence at FXTrade.
                  </p>
                  <button
                    type="button"
                    className="leader-read-more"
                    onClick={() => setActiveLeader("sunayana")}
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} className="leader-read-arrow" />
                  </button>
                </div>
              </div>

              {/* Column 3: Corporate Mission & Quote Card */}
              <div className="leadership-quote-card reveal-init reveal-fade-up delay-210">
                <div className="quote-icon-wrap">
                  <Quote size={46} className="quote-icon" />
                </div>
                <blockquote className="quote-text">
                  "Our mission is to empower businesses with financial solutions that create real opportunities across borders."
                </blockquote>
                <div className="quote-author-wrap">
                  <span className="quote-dash"></span>
                  <span className="quote-author">FXTrade Leadership Team</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. GET IN TOUCH (Compact Horizontal Banner Matching Reference Image) */}
        <section className="home-contact-section">
          <div className="contact-bg-overlay">
            <img
              src={intlTradeCargoImg}
              alt="International Trade Logistics Backdrop"
              className="contact-bg-photo"
              loading="lazy"
              style={{ transform: `translateY(${contactParallax}px)` }}
            />
            <div className="contact-dark-tint" />
          </div>

          <Container className="contact-container-relative">
            <div className="home-contact-grid">
              {/* Left Column: Eyebrow, Heading, Desc & 3 Compact Inline Contact Items */}
              <div className="contact-left-col reveal-init reveal-fade-right">
                <span className="contact-eyebrow">GET IN TOUCH</span>
                <h2 className="contact-main-title">
                  Let's Build New Opportunities Together
                </h2>
                <p className="contact-main-desc">
                  Connect with our team to discuss your Corporate Finance, Debt Syndication, SCF Products or structured funding needs.
                </p>

                <div className="contact-inline-strip">
                  <a href="tel:+919834604137" className="contact-inline-item">
                    <div className="contact-circle-badge">
                      <Phone size={13} strokeWidth={2.5} />
                    </div>
                    <span>+91 9834604137</span>
                  </a>

                  <a href="mailto:ranjeet@fxtradefin.com" className="contact-inline-item">
                    <div className="contact-circle-badge">
                      <Mail size={13} strokeWidth={2.5} />
                    </div>
                    <span>ranjeet@fxtradefin.com</span>
                  </a>

                  <div className="contact-inline-item">
                    <div className="contact-circle-badge">
                      <MapPin size={13} strokeWidth={2.5} />
                    </div>
                    <span>Sector 62, Noida, India</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Floating Compact White Form Card */}
              <div className="contact-right-col reveal-init reveal-fade-left">
                <div className="contact-form-panel">
                  <h3 className="form-panel-title">Send Us a Message</h3>

                  {formSubmitted ? (
                    <div className="form-success-alert">
                      <CheckCircle2 size={22} className="text-success" />
                      <h4>Thank you for reaching out!</h4>
                      <p>Our senior advisory desk will contact you within 24 business hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="contact-inquiry-form">
                      <div className="form-row-three">
                        <div className="form-group">
                          <label className="sr-only" htmlFor="fullName">Full Name</label>
                          <input
                            id="fullName"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            placeholder="Full Name *"
                            className="form-control"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          />
                        </div>

                        <div className="form-group">
                          <label className="sr-only" htmlFor="email">Email Address</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Email Address *"
                            className="form-control"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>

                        <div className="form-group">
                          <label className="sr-only" htmlFor="company">Company Name</label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            autoComplete="organization"
                            placeholder="Company Name"
                            className="form-control"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-row-action">
                        <div className="form-group select-group">
                          <label className="sr-only" htmlFor="serviceInterest">Service Interest</label>
                          <select
                            id="serviceInterest"
                            className="form-control select-control"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          >
                            <option value="">Service Interest</option>
                            <option value="Domestic Trade Finance">Domestic Trade Finance</option>
                            <option value="International Trade Finance">International Trade Finance</option>
                            <option value="Forex & Treasury Advisory">Forex &amp; Treasury Advisory</option>
                            <option value="Debt Syndication">Debt Syndication</option>
                          </select>
                        </div>

                        <button type="submit" className="contact-submit-btn">
                          <span>Submit Message</span>
                          <ArrowRight size={15} className="submit-arrow" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Leadership Bio Modal */}
        {activeLeader && leaderBios[activeLeader] && (
          <div className="leader-modal-overlay" onClick={() => setActiveLeader(null)}>
            <div
              className="leader-modal-card"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="leader-modal-close"
                onClick={() => setActiveLeader(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <div className="leader-modal-body">
                <div className="leader-modal-img-wrap">
                  <img
                    src={leaderBios[activeLeader].image}
                    alt={leaderBios[activeLeader].name}
                    className="leader-modal-img"
                  />
                </div>
                <div className="leader-modal-text">
                  <span className="leader-modal-badge">Executive Profile</span>
                  <h3 className="leader-modal-name">{leaderBios[activeLeader].name}</h3>
                  <span className="leader-modal-role">{leaderBios[activeLeader].role}</span>
                  <p className="leader-modal-bio">{leaderBios[activeLeader].fullBio}</p>
                  <div className="leader-modal-action">
                    <Link
                      to="/contact"
                      className="btn btn-accent"
                      onClick={() => setActiveLeader(null)}
                    >
                      <span>Schedule Advisory Call</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageShell>
  );
}
