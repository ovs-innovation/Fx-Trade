import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import fxtradeLogo from "../../assets/logo/fxtrade-consulting-logo-trans.png";
import "./Header.css";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Track scroll position for subtle sticky shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
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
                      className="dropdown-link overview-link"
                      onClick={() => setServicesOpen(false)}
                    >
                      <strong>All Services Overview</strong>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      to="/services/domestic-trade-finance"
                      className="dropdown-link"
                      onClick={() => setServicesOpen(false)}
                    >
                      Domestic Trade Finance
                    </Link>
                    <Link
                      to="/services/international-trade-finance"
                      className="dropdown-link"
                      onClick={() => setServicesOpen(false)}
                    >
                      International Trade Finance
                    </Link>
                    <Link
                      to="/services/forex-services"
                      className="dropdown-link"
                      onClick={() => setServicesOpen(false)}
                    >
                      Forex & Treasury Consulting
                    </Link>
                    <Link
                      to="/services/debt-syndication"
                      className="dropdown-link"
                      onClick={() => setServicesOpen(false)}
                    >
                      Debt Syndication
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
