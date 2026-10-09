import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function PageShell({ children }) {
  return (
    <div className="site-wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToTop />
      <Header />
      <main className="site-main" style={{ flex: "1 0 auto" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
