import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Mail } from "lucide-react";
import { submitNewsletterSubscription } from "../../services/contactService";
import { contactData } from "../../data/contact";
import "./ContactCTA.css";

export default function ContactCTA({
  heading = contactData.connectCta.heading,
  description = contactData.connectCta.description
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const res = await submitNewsletterSubscription(email);
    if (res.success) {
      setStatus("success");
      setFeedback(res.message);
      setEmail("");
    } else {
      setStatus("error");
      setFeedback(res.error || "Subscription request failed.");
    }
  };

  return (
    <section className="cta-institutional-section" aria-label="Connect With Us">
      <div className="container-custom">
        <div className="cta-panel">
          {/* Subtle Capital Flow Geometric Lines Background */}
          <div className="cta-flow-bg" aria-hidden="true">
            <svg
              className="cta-flow-svg"
              viewBox="0 0 1000 360"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M-50,280 C200,100 450,320 700,140 C850,40 1050,180 1100,120"
                stroke="rgba(120, 172, 63, 0.22)"
                strokeWidth="1.5"
                className="anim-flow-line"
              />
              <path
                d="M-100,180 C150,260 400,60 650,220 C850,340 1000,100 1150,80"
                stroke="rgba(49, 91, 154, 0.35)"
                strokeWidth="1.5"
              />
              <circle cx="700" cy="140" r="4" fill="#78ac3f" className="anim-pulse-subtle" />
              <circle cx="450" cy="320" r="3" fill="#315b9a" />
              <circle cx="200" cy="100" r="4" fill="#8dbd56" />
            </svg>
          </div>

          <div className="cta-content">
            <div className="cta-header">
              <span className="cta-eyebrow">
                <span className="cta-eyebrow-dot"></span>
                COMMUNICATION & UPDATES
              </span>
              <h2 className="cta-heading">{heading}</h2>
              <p className="cta-desc">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="cta-form" noValidate>
              <div className="cta-input-wrap">
                <Mail size={18} className="cta-input-icon" />
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  aria-label="Email Address for newsletter"
                  className="cta-input"
                  disabled={status === "loading"}
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-accent cta-submit-btn"
                >
                  <span>{status === "loading" ? "Submitting..." : "Submit"}</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {status === "error" && (
                <div className="cta-feedback error" role="alert">
                  {feedback}
                </div>
              )}

              {status === "success" && (
                <div className="cta-feedback success" role="status">
                  <CheckCircle2 size={16} />
                  <span>{feedback}</span>
                </div>
              )}
            </form>

            <div className="cta-trust-note">
              <ShieldCheck size={16} className="trust-icon" />
              <span>
                Direct institutional advisory desk. Your corporate contact details remain confidential.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
