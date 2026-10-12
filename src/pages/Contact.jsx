import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Handshake,
  FileText,
  Plus,
  Minus
} from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";
import { submitContactInquiry } from "../services/contactService";
import useScrollReveal from "../hooks/useScrollReveal";

import contactHeroImg from "../assets/images/contact-hero-team.jpg";
import officeBuildingImg from "../assets/images/Modern FXTrade Corporate Headquarters.png";
import ctaBgImg from "../assets/images/intl-trade-cargo-port.jpg";

import "./Contact.css";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "What services does FXTrade offer?",
    answer:
      "FXTrade provides domestic and international trade finance, treasury and forex advisory, debt syndication, Inland LC discounting and structured financial solutions for businesses."
  },
  {
    id: 2,
    question: "How can I get started?",
    answer:
      "Contact our advisory team through the enquiry form, phone or email and share your financing or treasury requirement."
  },
  {
    id: 3,
    question: "Do you work with international clients?",
    answer:
      "Yes. Our trade finance services support domestic and cross-border business requirements through our banking and institutional relationships."
  },
  {
    id: 4,
    question: "Is my information kept confidential?",
    answer:
      "Yes. Client enquiries and financial information are treated as confidential and used only for advisory and service coordination."
  },
  {
    id: 5,
    question: "What industries do you serve?",
    answer:
      "We support businesses across manufacturing, trading, infrastructure, logistics, imports, exports and other corporate sectors."
  }
];

export default function Contact() {
  const scrollRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [activeFaq, setActiveFaq] = useState(1); // First open by default
  const [scrollY, setScrollY] = useState(0);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMsg("");
    setErrors({});

    const result = await submitContactInquiry(formData);

    if (result.success) {
      setStatus("success");
      setFeedbackMsg(result.message);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: ""
      });
    } else {
      setStatus("error");
      if (result.errors) {
        setErrors(result.errors);
      } else {
        setFeedbackMsg(result.message || "Failed to submit inquiry. Please review the inputs.");
      }
    }
  };

  const scrollToForm = () => {
    const formElem = document.getElementById("contact-form-section");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstInput = document.getElementById("contact-name");
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 600);
      }
    }
  };

  const toggleFaq = (id) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  const heroParallax = Math.min(scrollY * 0.035, 15);
  const ctaParallax = Math.min(scrollY * 0.025, 14);

  return (
    <PageShell>
      <div ref={scrollRef}>
        {/* ========================================================
            SECTION 01 — FULL-WIDTH CORPORATE HERO (REFERENCE MATCH)
            ======================================================== */}
        <section className="contact-hero-banner" aria-label="Contact FXTrade Hero">
          {/* Right Side Visual Image with Seamless Left Gradient Fade */}
          <div className="contact-hero-media-wrap">
            <img
              src={contactHeroImg}
              alt="FXTrade Corporate Advisory Team in Strategic Discussion"
              className="contact-hero-photo hero-seq-img"
              style={{ transform: `translateY(${heroParallax}px)` }}
            />
            <div className="contact-hero-gradient-overlay" />
          </div>

          <Container className="contact-hero-container">
            <div className="contact-hero-content">
              <div className="contact-hero-eyebrow hero-seq-eyebrow">
                <span className="eyebrow-dash" />
                <span className="eyebrow-text">GET IN TOUCH</span>
              </div>

              <h1 className="contact-hero-title hero-seq-title">
                Let’s Build New
                <br className="contact-hero-desktop-br" />
                Opportunities Together
              </h1>

              <p className="contact-hero-desc hero-seq-desc">
                Connect with our team to discuss your trade finance, treasury advisory or financial structuring requirements.
              </p>

              {/* Horizontal Contact Items Row with Rounded Icon Containers */}
              <div className="contact-hero-items-row hero-seq-trust">
                <a href="tel:+919873455942" className="contact-hero-item" title="Call Us">
                  <div className="contact-hero-icon-circle">
                    <Phone size={14} strokeWidth={2.4} />
                  </div>
                  <span className="contact-hero-item-text">+91&nbsp;9873455942</span>
                </a>

                <a href="mailto:kaushal@fxtradefin.com" className="contact-hero-item" title="Email Us">
                  <div className="contact-hero-icon-circle">
                    <Mail size={14} strokeWidth={2.4} />
                  </div>
                  <span className="contact-hero-item-text">kaushal@fxtradefin.com</span>
                </a>

                <div className="contact-hero-item contact-hero-item-static" title="Office Location">
                  <div className="contact-hero-icon-circle">
                    <MapPin size={14} strokeWidth={2.4} />
                  </div>
                  <span className="contact-hero-item-text">Noida, India</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================
            SECTION 02 — CONTACT SUPPORT + FORM (REFERENCE MATCH)
            ======================================================== */}
        <section id="contact-form-section" className="contact-support-section">
          <Container>
            <div className="contact-support-grid">
              {/* Left Column: Support Copy & 3 Benefit Rows */}
              <div className="support-info-col reveal-init reveal-fade-right">
                <div className="contact-section-eyebrow">
                  <span className="eyebrow-dash" />
                  <span className="eyebrow-text">CONTACT US</span>
                </div>

                <h2 className="support-main-heading">
                  We’re Here to
                  <br />
                  Support Your Growth
                </h2>

                <p className="support-intro-p">
                  Whether you have a specific requirement or simply want to explore how FXTrade can support your business, our team is ready to connect. Share your details and we’ll get back to you shortly.
                </p>

                {/* 3 Benefit Rows */}
                <div className="support-benefits-stack">
                  <div className="benefit-row-item reveal-init reveal-fade-up delay-70">
                    <div className="benefit-icon-circle">
                      <FileText size={20} className="benefit-icon" />
                    </div>
                    <div className="benefit-text-content">
                      <h3 className="benefit-title">Expert Guidance</h3>
                      <p className="benefit-desc">Speak to our specialists for tailored advice.</p>
                    </div>
                  </div>

                  <div className="benefit-row-item reveal-init reveal-fade-up delay-140">
                    <div className="benefit-icon-circle">
                      <Clock size={20} className="benefit-icon" />
                    </div>
                    <div className="benefit-text-content">
                      <h3 className="benefit-title">Quick Response</h3>
                      <p className="benefit-desc">We value your time and aim to respond promptly.</p>
                    </div>
                  </div>

                  <div className="benefit-row-item reveal-init reveal-fade-up delay-210">
                    <div className="benefit-icon-circle">
                      <Handshake size={22} className="benefit-icon" strokeWidth={2} />
                    </div>
                    <div className="benefit-text-content">
                      <h3 className="benefit-title">Confidential &amp; Professional</h3>
                      <p className="benefit-desc">Your information is always secure with us.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Large Form Card */}
              <div className="support-form-col reveal-init reveal-fade-left">
                <div className="contact-form-card">
                  <h3 className="form-card-title">Send Us a Message</h3>

                  {status === "success" && (
                    <div className="form-alert success" role="status">
                      <CheckCircle2 size={19} className="alert-icon" />
                      <div>
                        <strong>Inquiry Received</strong>
                        <p>{feedbackMsg}</p>
                      </div>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="form-alert error" role="alert">
                      <AlertCircle size={19} className="alert-icon" />
                      <div>
                        <strong>Submission Error</strong>
                        <p>{feedbackMsg}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="corporate-form">
                    {/* Row 1: Full Name * & Email Address * */}
                    <div className="form-fields-grid-2">
                      <div className="form-field-group">
                        <label htmlFor="contact-name" className="field-label">
                          Full Name <span className="req-star">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className={`field-input ${errors.name ? "has-error" : ""}`}
                          disabled={status === "loading"}
                          required
                        />
                        {errors.name && <span className="field-error-msg">{errors.name}</span>}
                      </div>

                      <div className="form-field-group">
                        <label htmlFor="contact-email" className="field-label">
                          Email Address <span className="req-star">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className={`field-input ${errors.email ? "has-error" : ""}`}
                          disabled={status === "loading"}
                          required
                        />
                        {errors.email && <span className="field-error-msg">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Row 2: Company Name & Phone Number */}
                    <div className="form-fields-grid-2">
                      <div className="form-field-group">
                        <label htmlFor="contact-company" className="field-label">
                          Company Name
                        </label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company Name"
                          className="field-input"
                          disabled={status === "loading"}
                        />
                      </div>

                      <div className="form-field-group">
                        <label htmlFor="contact-phone" className="field-label">
                          Phone Number
                        </label>
                        <div className="phone-input-wrap">
                          <div className="phone-flag-prefix">
                            <span className="flag-emoji" aria-label="India flag">🇮🇳</span>
                            <span className="prefix-code">+91</span>
                            <span className="prefix-arrow">▾</span>
                          </div>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="field-input phone-text-input"
                            disabled={status === "loading"}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Service Interest Dropdown */}
                    <div className="form-field-group">
                      <label htmlFor="contact-service" className="field-label">
                        Service Interest
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="field-select"
                        disabled={status === "loading"}
                      >
                        <option value="">Select a Service</option>
                        <option value="Domestic Trade Finance">Domestic Trade Finance</option>
                        <option value="International Trade Finance">International Trade Finance</option>
                        <option value="Forex & Treasury Advisory">Forex & Treasury Advisory</option>
                        <option value="Debt Syndication">Debt Syndication</option>
                        <option value="Inland LC Discounting">Inland LC Discounting</option>
                        <option value="MEIS/SEIS Licence Trading">MEIS/SEIS Licence Trading</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    {/* Row 4: Your Message */}
                    <div className="form-field-group">
                      <label htmlFor="contact-message" className="field-label">
                        Your Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        className={`field-textarea ${errors.message ? "has-error" : ""}`}
                        disabled={status === "loading"}
                      />
                      {errors.message && <span className="field-error-msg">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <div className="form-submit-row">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="submit-form-btn"
                      >
                        {status === "loading" ? (
                          <>
                            <span className="btn-spinner" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Message</span>
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================
            SECTION 03 — OUR OFFICE (IMAGE + MAP COMPOSITION)
            ======================================================== */}
        <section className="contact-office-section" aria-label="Visit Our Office">
          <Container>
            <div className="office-header-wrap reveal-init reveal-fade-up">
              <div className="contact-section-eyebrow">
                <span className="eyebrow-dash" />
                <span className="eyebrow-text">OUR OFFICE</span>
              </div>
              <h2 className="office-main-heading">Visit Our Office</h2>
              <p className="office-subheading">
                Our corporate office is located in Noida, strategically positioned to serve clients across India and international markets.
              </p>
            </div>

            <div className="office-content-grid">
              {/* Left Side: 3 Info Rows */}
              <div className="office-info-cards-stack">
                {/* Address */}
                <div className="office-info-card reveal-init reveal-fade-up delay-70">
                  <div className="office-card-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="office-card-details">
                    <h3 className="office-card-title">Our Address</h3>
                    <p className="office-card-text">
                      Joy Tower by Assotech Realty, Altf Noida 62, Sector 62, Noida, Uttar Pradesh 201301, India
                    </p>
                    <a
                      href="https://maps.google.com/maps?q=Joy+Tower+Assotech+Sector+62+Noida+201301"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="office-card-link"
                    >
                      <span>Get Directions</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Call Us */}
                <div className="office-info-card reveal-init reveal-fade-up delay-140">
                  <div className="office-card-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="office-card-details">
                    <h3 className="office-card-title">Call Us</h3>
                    <div className="office-card-phone-row">
                      <a href="tel:+919834604137" className="phone-num-link">+91 9834604137</a>
                      <span className="phone-sep">/</span>
                      <a href="tel:+919873459842" className="phone-num-link">+91 9873459842</a>
                    </div>
                    <span className="office-card-subtext">Mon – Sat, 10:00 AM – 6:00 PM IST</span>
                  </div>
                </div>

                {/* Email Us */}
                <div className="office-info-card reveal-init reveal-fade-up delay-210">
                  <div className="office-card-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="office-card-details">
                    <h3 className="office-card-title">Email Us</h3>
                    <a href="mailto:enquiry@fxtradefin.com" className="email-num-link">
                      enquiry@fxtradefin.com
                    </a>
                    <span className="office-card-subtext">We typically respond within 24 hours.</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Office Building Header Image + Map Overlay */}
              <div className="office-map-visual-wrap reveal-init reveal-scale">
                {/* Top Office Building Photo Frame */}
                <div className="office-building-photo-frame">
                  <img
                    src={officeBuildingImg}
                    alt="FXTrade Corporate Headquarters Building"
                    className="office-building-photo"
                  />
                </div>

                {/* Overlaid Map Box */}
                <div className="office-map-embed-card">
                  <div className="map-pin-badge">
                    <MapPin size={15} className="map-badge-icon" />
                    <div className="map-badge-text">
                      <strong>Sector 62, Noida</strong>
                      <span>Uttar Pradesh, India</span>
                    </div>
                  </div>

                  <iframe
                    title="FXTrade Corporate Office Location Map"
                    src="https://maps.google.com/maps?q=Joy+Tower+Assotech+Sector+62+Noida+201301&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="office-map-iframe"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================
            SECTION 04 — FREQUENTLY ASKED QUESTIONS (FAQ)
            ======================================================== */}
        <section className="contact-faq-section" aria-label="Frequently Asked Questions">
          <Container>
            <div className="faq-split-grid">
              {/* Left Column: Heading, Subheading & Large Subtle Question Mark */}
              <div className="faq-left-col reveal-init reveal-fade-right">
                <span className="faq-watermark-q" aria-hidden="true">?</span>

                <div className="faq-content-wrap">
                  <div className="faq-section-eyebrow">
                    <span className="eyebrow-dash" />
                    <span className="eyebrow-text">QUICK ANSWERS</span>
                  </div>

                  <h2 className="faq-main-heading">Frequently Asked Questions</h2>
                  <p className="faq-subheading">
                    Find answers to common questions about working with FXTrade.
                  </p>
                </div>
              </div>

              {/* Right Column: Single Clean Accordion Panel */}
              <div className="faq-right-col reveal-init reveal-fade-left">
                <div className="faq-accordion-panel">
                  {FAQ_ITEMS.map((item) => {
                    const isOpen = activeFaq === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`faq-accordion-row ${isOpen ? "is-expanded" : ""}`}
                      >
                        <button
                          type="button"
                          className="faq-question-btn"
                          onClick={() => toggleFaq(item.id)}
                          aria-expanded={isOpen}
                        >
                          <span className="faq-question-text">{item.question}</span>
                          <span className="faq-toggle-icon" aria-hidden="true">
                            {isOpen ? <Minus size={18} strokeWidth={2.4} /> : <Plus size={18} strokeWidth={2.4} />}
                          </span>
                        </button>

                        <div className={`faq-answer-collapse ${isOpen ? "is-open" : ""}`}>
                          <div className="faq-answer-inner">
                            <p className="faq-answer-text">{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================
            SECTION 05 — BOTTOM CTA BANNER (COMPACT BANNER)
            ======================================================== */}
        <section className="contact-cta-banner" aria-label="Bottom Call to Action">
          <div className="cta-banner-backdrop">
            <img
              src={ctaBgImg}
              alt="International trade logistics and container cargo port at sunset"
              className="cta-banner-bg-img"
              style={{ transform: `translateY(${ctaParallax}px)` }}
            />
            <div className="cta-banner-overlay" />
          </div>

          <Container>
            <div className="cta-banner-inner">
              <div className="cta-banner-left reveal-init reveal-fade-right">
                <div className="cta-banner-eyebrow-row">
                  <span className="eyebrow-dash" />
                  <span className="cta-banner-eyebrow">LET’S PARTNER</span>
                </div>
                <h2 className="cta-banner-heading">
                  Ready to Discuss Your Requirements?
                </h2>
                <p className="cta-banner-desc">
                  Our team is here to help you explore the right financial solutions for your business.
                </p>
              </div>

              <div className="cta-banner-right reveal-init reveal-fade-left">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="cta-banner-btn"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight size={16} className="cta-btn-arrow" />
                </button>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageShell>
  );
}
