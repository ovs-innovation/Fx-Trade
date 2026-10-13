import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  X,
  ChevronRight,
  ChevronDown,
  Home,
  Building2,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { contactData } from "../../data/contact";
import fxtradeLogo from "../../assets/logo/fxtrade-consulting-logo-trans.png";
import "./MobileMenu.css";

const WHATSAPP_RAW_NUMBER = "919834604137";
const WHATSAPP_DEFAULT_MSG = "Hello FxTrade Consulting, I would like to inquire about your advisory services.";

export default function MobileMenu({ isOpen, onClose }) {
  const [servicesExpanded, setServicesExpanded] = useState(true);
  const location = useLocation();

  if (!isOpen) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;

  return (
    <div
      className="mobile-drawer-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div
        className="mobile-drawer-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Header with Logo & Circular Close Button */}
        <div className="mobile-drawer-header">
          <Link to="/" onClick={onClose} className="drawer-brand" aria-label="FxTrade Home">
            <img
              src={fxtradeLogo}
              alt="FxTrade Consulting Pvt. Ltd."
              className="drawer-brand-logo"
            />
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="drawer-close-circle"
            aria-label="Close navigation menu"
          >
            <X size={19} strokeWidth={2.4} />
          </button>
        </div>

        {/* 2. Scrollable Body */}
        <div className="mobile-drawer-body">
          <nav className="drawer-nav" aria-label="Mobile Navigation Links">
            <ul className="drawer-nav-list">
              {/* Home */}
              <li className="drawer-nav-item">
                <Link
                  to="/"
                  onClick={onClose}
                  className={`drawer-nav-link ${location.pathname === "/" ? "is-active" : ""}`}
                >
                  <span className="drawer-icon-box">
                    <Home size={17} />
                  </span>
                  <span className="drawer-link-title">Home</span>
                  <ChevronRight size={16} className="drawer-link-arrow" />
                </Link>
              </li>

              {/* About Us */}
              <li className="drawer-nav-item">
                <Link
                  to="/about"
                  onClick={onClose}
                  className={`drawer-nav-link ${location.pathname === "/about" ? "is-active" : ""}`}
                >
                  <span className="drawer-icon-box">
                    <Building2 size={17} />
                  </span>
                  <span className="drawer-link-title">About Us</span>
                  <ChevronRight size={16} className="drawer-link-arrow" />
                </Link>
              </li>

              {/* Services Accordion */}
              <li className="drawer-nav-item drawer-accordion-group">
                <button
                  type="button"
                  className={`drawer-accordion-trigger ${
                    location.pathname.startsWith("/services") ? "is-active-parent" : ""
                  }`}
                  onClick={() => setServicesExpanded((prev) => !prev)}
                  aria-expanded={servicesExpanded}
                >
                  <span className="drawer-icon-box">
                    <Briefcase size={17} />
                  </span>
                  <span className="drawer-link-title">Services</span>
                  <span className="drawer-badge">4 Solutions</span>
                  <ChevronDown
                    size={17}
                    className={`drawer-accordion-chevron ${servicesExpanded ? "is-open" : ""}`}
                  />
                </button>

                {servicesExpanded && (
                  <div className="drawer-sublinks-wrapper">
                    <div className="drawer-sublinks-inner">
                      <Link
                        to="/services"
                        onClick={onClose}
                        className={`drawer-sublink overview-sublink ${
                          location.pathname === "/services" ? "is-active-sub" : ""
                        }`}
                      >
                        <span className="sublink-dot" />
                        <span>All Services Overview</span>
                      </Link>

                      <Link
                        to="/services/domestic-trade-finance"
                        onClick={onClose}
                        className={`drawer-sublink ${
                          location.pathname === "/services/domestic-trade-finance"
                            ? "is-active-sub"
                            : ""
                        }`}
                      >
                        <span className="sublink-dot" />
                        <span>Domestic Trade Finance</span>
                      </Link>

                      <Link
                        to="/services/international-trade-finance"
                        onClick={onClose}
                        className={`drawer-sublink ${
                          location.pathname === "/services/international-trade-finance"
                            ? "is-active-sub"
                            : ""
                        }`}
                      >
                        <span className="sublink-dot" />
                        <span>International Trade Finance</span>
                      </Link>

                      <Link
                        to="/services/forex-services"
                        onClick={onClose}
                        className={`drawer-sublink ${
                          location.pathname === "/services/forex-services" ? "is-active-sub" : ""
                        }`}
                      >
                        <span className="sublink-dot" />
                        <span>Forex & Treasury Consulting</span>
                      </Link>

                      <Link
                        to="/services/debt-syndication"
                        onClick={onClose}
                        className={`drawer-sublink ${
                          location.pathname === "/services/debt-syndication"
                            ? "is-active-sub"
                            : ""
                        }`}
                      >
                        <span className="sublink-dot" />
                        <span>Debt Syndication</span>
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* Contact Us */}
              <li className="drawer-nav-item">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className={`drawer-nav-link ${
                    location.pathname === "/contact" ? "is-active" : ""
                  }`}
                >
                  <span className="drawer-icon-box">
                    <Phone size={17} />
                  </span>
                  <span className="drawer-link-title">Contact Us</span>
                  <ChevronRight size={16} className="drawer-link-arrow" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* 3. Direct Advisory Desk Card */}
          <div className="drawer-advisory-card">
            <div className="drawer-advisory-header">
              <span className="drawer-status-pill">
                <span className="status-ping" />
                Desk Online
              </span>
              <span className="drawer-advisory-tag">Institutional Desk</span>
            </div>

            {/* Quick Action Chips */}
            <div className="drawer-action-chips">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-chip-whatsapp"
                aria-label="Direct WhatsApp Message"
              >
                <svg viewBox="0 0 24 24" className="chip-wa-icon" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.237-.244-.588-.492-.508-.678-.518-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.229 3.111c.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.175-1.431-.075-.126-.276-.201-.577-.351z"
                  />
                  <path
                    fill="currentColor"
                    d="M12.004 2C6.479 2 1.996 6.478 1.996 12c0 1.947.558 3.766 1.527 5.309L2 22l4.832-1.49A9.957 9.957 0 0012.004 22c5.524 0 10.003-4.478 10.003-10S17.528 2 12.004 2zm0 18.25c-1.654 0-3.21-.497-4.524-1.353l-.324-.21-2.871.884.897-2.798-.23-.339A8.214 8.214 0 013.75 12c0-4.551 3.702-8.25 8.254-8.25 4.55 0 8.252 3.699 8.252 8.25 0 4.551-3.702 8.25-8.252 8.25z"
                  />
                </svg>
                <span>WhatsApp Desk</span>
              </a>

              <a
                href={`tel:${contactData.phones[0].tel}`}
                className="drawer-chip-contact"
                aria-label={`Call FxTrade at ${contactData.phones[0].display}`}
              >
                <Phone size={14} />
                <span>{contactData.phones[0].display}</span>
              </a>

              <a
                href={`mailto:${contactData.emails[0].address}`}
                className="drawer-chip-contact"
                aria-label={`Email FxTrade at ${contactData.emails[0].address}`}
              >
                <Mail size={14} />
                <span>{contactData.emails[0].address}</span>
              </a>
            </div>

            <div className="drawer-location-tag">
              <MapPin size={13} />
              <span>Sector 62, Noida, NCR, India</span>
            </div>
          </div>
        </div>

        {/* 4. Bottom Sticky Call-To-Action */}
        <div className="mobile-drawer-footer">
          <Link
            to="/contact"
            onClick={onClose}
            className="drawer-primary-cta"
            aria-label="Schedule Financial Consultation"
          >
            <span>Request Consultation</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
