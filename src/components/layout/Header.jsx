import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";
import fxtradeLogo from "../../assets/logo/fxtrade-consulting-logo-trans.png";
import "./Header.css";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);

  // Smart sticky header: hides smoothly on scroll down, comes back immediately on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Blur & elevation state when scrolled
      setIsScrolled(currentScrollY > 15);

      // Smart scroll reveal logic
      if (currentScrollY <= 60) {
        // At the top of page: always visible
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling DOWN: slide up out of view
        setIsVisible(false);
        setServicesOpen(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling UP: glide back down into view ("come back")
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`site-header ${isScrolled ? "is-scrolled" : ""} ${
          !isVisible && !mobileMenuOpen ? "is-hidden" : ""
        }`}
      >
        <div className="container-custom header-inner">
          {/* Logo Left */}
          <Link to="/" className="brand-logo" aria-label="FxTrade Consulting Pvt. Ltd. Home">
            <img
              src={fxtradeLogo}
              alt="FxTrade Consulting Pvt. Ltd."
              className="logo-img"
              height="46"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === "/" ? "is-active" : ""}`}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${location.pathname === "/about" ? "is-active" : ""}`}
                >
                  About
                </Link>
              </li>

              {/* Services Dropdown */}
              <li
                className="nav-item dropdown-item"
                ref={dropdownRef}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className={`nav-link dropdown-trigger ${
                    location.pathname.startsWith("/services") ? "is-active" : ""
                  }`}
                  onClick={() => setServicesOpen((prev) => !prev)}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={15}
                    className={`chevron-icon ${servicesOpen ? "is-flipped" : ""}`}
                  />
                </Link>

                {/* Clean Simple White Dropdown */}
                {servicesOpen && (
                  <div className="services-dropdown-panel" role="menu">
                    <Link
                      to="/services"
                      className={`dropdown-link overview-link ${
                        location.pathname === "/services" ? "is-current" : ""
                      }`}
                      onClick={() => setServicesOpen(false)}
                    >
                      <span>All Services Overview</span>
                      <ArrowRight size={14} className="dropdown-item-arrow" />
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      to="/services/domestic-trade-finance"
                      className={`dropdown-link ${
                        location.pathname === "/services/domestic-trade-finance" ? "is-current" : ""
                      }`}
                      onClick={() => setServicesOpen(false)}
                    >
                      <span>Domestic Trade Finance</span>
                      <ArrowRight size={14} className="dropdown-item-arrow" />
                    </Link>
                    <Link
                      to="/services/international-trade-finance"
                      className={`dropdown-link ${
                        location.pathname === "/services/international-trade-finance" ? "is-current" : ""
                      }`}
                      onClick={() => setServicesOpen(false)}
                    >
                      <span>International Trade Finance</span>
                      <ArrowRight size={14} className="dropdown-item-arrow" />
                    </Link>
                    <Link
                      to="/services/forex-services"
                      className={`dropdown-link ${
                        location.pathname === "/services/forex-services" ? "is-current" : ""
                      }`}
                      onClick={() => setServicesOpen(false)}
                    >
                      <span>Forex & Treasury Consulting</span>
                      <ArrowRight size={14} className="dropdown-item-arrow" />
                    </Link>
                    <Link
                      to="/services/debt-syndication"
                      className={`dropdown-link ${
                        location.pathname === "/services/debt-syndication" ? "is-current" : ""
                      }`}
                      onClick={() => setServicesOpen(false)}
                    >
                      <span>Debt Syndication</span>
                      <ArrowRight size={14} className="dropdown-item-arrow" />
                    </Link>
                  </div>
                )}
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${location.pathname === "/contact" ? "is-active" : ""}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Action CTA */}
          <div className="header-actions">
            <Link to="/contact" className="btn btn-accent header-cta-btn">
              <span>Join Now</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
