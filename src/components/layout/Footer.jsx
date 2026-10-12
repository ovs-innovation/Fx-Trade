import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  TwitterIcon
} from "../common/SocialIcons";
import { siteConfig } from "../../data/site";
import { contactData } from "../../data/contact";
import fxtradeLogo from "../../assets/logo/fxtrade-consulting-logo-trans.png";
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Main Footer Content */}
      <div className="container-custom footer-main">
        <div className="footer-grid">
          {/* Column 1: Logo & Company Description */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-badge">
                <img
                  src={fxtradeLogo}
                  alt="FxTrade Consulting Pvt. Ltd."
                  className="footer-logo-img"
                  height="38"
                />
              </div>
            </Link>
            <p className="footer-brand-desc">
              FxTrade Consulting Pvt. Ltd. is a premier financial consultancy specializing in Corporate Finance, Debt Syndication, SCF Products, Structured Funding, and tailored financial solutions for businesses.
            </p>
            <div className="footer-socials">
              <a
                href={siteConfig.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={siteConfig.socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={siteConfig.socialLinks[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={siteConfig.socialLinks[3].url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="YouTube"
              >
                <YouTubeIcon size={18} />
              </a>
              <a
                href={siteConfig.socialLinks[4].url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col services-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/services">
                  <span>Corporate Finance</span>
                  <ChevronRight size={13} className="footer-link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/services/debt-syndication">
                  <span>Debt Syndication</span>
                  <ChevronRight size={13} className="footer-link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/services/international-trade-finance">
                  <span>SCF Products</span>
                  <ChevronRight size={13} className="footer-link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/services/domestic-trade-finance">
                  <span>Invoice Discounting</span>
                  <ChevronRight size={13} className="footer-link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/services/forex-services">
                  <span>Credit Rating & Funding</span>
                  <ChevronRight size={13} className="footer-link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <span>All Services</span>
                  <ChevronRight size={13} className="footer-link-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/">
                  <span>Home</span>
                  <ChevronRight size={13} className="footer-link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span>About Us</span>
                  <ChevronRight size={13} className="footer-link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span>Contact Us</span>
                  <ChevronRight size={13} className="footer-link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/about#what-we-offer">
                  <span>What We Offer</span>
                  <ChevronRight size={13} className="footer-link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span>Request Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Office</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>{contactData.address.formatted}</span>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <div>
                  <a href={`tel:${contactData.phones[0].tel}`}>
                    {contactData.phones[0].display}
                  </a>
                  <span className="contact-sub"> ({contactData.phones[0].label})</span>
                </div>
              </li>
              <li>
                <Clock size={16} className="contact-icon" />
                <div>
                  <span>10:00 AM – 6:00 PM (Mon – Sat)</span>
                  <span className="contact-sub"> | Sun Closed</span>
                </div>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <a href={`mailto:${contactData.emails[0].address}`}>
                  {contactData.emails[0].address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container-custom footer-bottom-inner">
          <p className="copyright-text">
            © {CURRENT_YEAR} FxTrade Consulting Pvt. Ltd. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <span className="developer-credit-text">
              Website Developed by <span className="developer-name">Vastora Tech</span>
            </span>
            <span>•</span>
            <span>Banking & Financial Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
