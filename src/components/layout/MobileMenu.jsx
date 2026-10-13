import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import { contactData } from "../../data/contact";
import fxtradeLogo from "../../assets/logo/fxtrade-consulting-logo-trans.png";
import "./MobileMenu.css";

export default function MobileMenu({ isOpen, onClose }) {
  const [servicesExpanded, setServicesExpanded] = useState(true);
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="mobile-drawer-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="mobile-drawer-top">
          <Link to="/" onClick={onClose} className="drawer-logo">
            <img src={fxtradeLogo} alt="FxTrade Consulting Pvt. Ltd." height="44" />
          </Link>
          <button onClick={onClose} className="drawer-close-btn" aria-label="Close navigation menu">
            <X size={22} />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <div className="mobile-drawer-body">
          <ul className="drawer-nav-list">
            <li>
              <Link
                to="/"
                onClick={onClose}
                className={`drawer-link ${location.pathname === "/" ? "is-active" : ""}`}
              >
                <span>Home</span>
                <ChevronRight size={16} />
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={onClose}
                className={`drawer-link ${location.pathname === "/about" ? "is-active" : ""}`}
              >
                <span>About Us</span>
                <ChevronRight size={16} />
              </Link>
            </li>

            <li className="drawer-group">
              <div
                className="drawer-group-header"
                onClick={() => setServicesExpanded((prev) => !prev)}
              >
                <span className="drawer-group-title">Services</span>
                <ChevronRight
                  size={16}
                  className={`drawer-chevron ${servicesExpanded ? "is-open" : ""}`}
                />
              </div>

              {servicesExpanded && (
                <div className="drawer-sublinks">
                  <Link
                    to="/services/domestic-trade-finance"
                    onClick={onClose}
                    className="drawer-sublink"
                  >
                    Domestic Trade Finance
                  </Link>
                  <Link
                    to="/services/international-trade-finance"
                    onClick={onClose}
                    className="drawer-sublink"
                  >
                    International Trade Finance
                  </Link>
                  <Link
                    to="/services/forex-services"
                    onClick={onClose}
                    className="drawer-sublink"
                  >
                    Forex & Treasury Consulting
                  </Link>
                  <Link
                    to="/services/debt-syndication"
                    onClick={onClose}
                    className="drawer-sublink"
                  >
                    Debt Syndication
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                onClick={onClose}
                className={`drawer-link ${location.pathname === "/contact" ? "is-active" : ""}`}
              >
                <span>Contact Us</span>
                <ChevronRight size={16} />
              </Link>
            </li>
          </ul>

          {/* Quick Contact Info */}
          <div className="drawer-contact-box">
            <span className="drawer-contact-title">Institutional Advisory</span>
            <div className="drawer-contact-row">
              <Phone size={15} className="drawer-contact-icon" />
              <a href={`tel:${contactData.phones[0].tel}`}>{contactData.phones[0].display}</a>
            </div>
            <div className="drawer-contact-row">
              <Mail size={15} className="drawer-contact-icon" />
              <a href={`mailto:${contactData.emails[0].address}`}>
                {contactData.emails[0].address}
              </a>
            </div>
            <div className="drawer-contact-row">
              <MapPin size={15} className="drawer-contact-icon" />
              <span>Sector 62, Noida, UP, India</span>
            </div>
          </div>

          <div className="drawer-actions">
            <Link to="/contact" onClick={onClose} className="btn btn-accent btn-lg w-full">
              Join Now / Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
