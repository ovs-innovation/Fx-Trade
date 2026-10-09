import React from "react";
import { Link } from "react-router-dom";
import { Home, PhoneCall } from "lucide-react";
import PageShell from "../components/layout/PageShell";
import Container from "../components/common/Container";

export default function NotFound() {
  return (
    <PageShell>
      <section className="section-padding" style={{ minHeight: "60vh", display: "flex", alignItems: "center", backgroundColor: "var(--white)" }}>
        <Container>
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <span className="section-eyebrow">PAGE NOT FOUND</span>

            <h1 style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)", fontFamily: "var(--font-display)", color: "var(--navy-900)", marginBottom: "0.5rem", lineHeight: 1 }}>
              404
            </h1>

            <h2 style={{ fontSize: "1.75rem", color: "var(--navy-950)", marginBottom: "1rem" }}>
              Corporate Page Not Found
            </h2>

            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "2rem" }}>
              The financial advisory page or instrument documentation you requested cannot be located. It may have been moved or updated.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link to="/" className="btn btn-navy btn-lg">
                <Home size={18} />
                <span>Return to Homepage</span>
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                <PhoneCall size={18} />
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
