import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import FloatingWhatsApp from "../common/FloatingWhatsApp";

export default function PageShell({ children }) {
  const location = useLocation();

  return (
    <div className="site-wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToTop />
      <Header />
      <main
        key={location.pathname}
        className="site-main page-enter"
        style={{ flex: "1 0 auto" }}
      >
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
