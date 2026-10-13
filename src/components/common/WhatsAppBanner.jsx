import React from "react";
import "./WhatsAppBanner.css";

const WHATSAPP_NUMBER_DISPLAY = "+91 9834604137";
const WHATSAPP_RAW_NUMBER = "919834604137";
const WHATSAPP_PREFILL_MSG = "Hello FxTrade Consulting, I would like to consult with your advisory team regarding financial solutions.";

export default function WhatsAppBanner({
  title = "You Can Also Connect on WhatsApp",
  subtitle = "Message our advisory team directly on WhatsApp for instant guidance on Trade Finance, Forex & Debt Syndication.",
  phone = WHATSAPP_NUMBER_DISPLAY,
  className = ""
}) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILL_MSG)}`;

  return (
    <section className={`whatsapp-connect-banner ${className}`} aria-label="WhatsApp Consultation">
      <div className="container-custom">
        <div className="whatsapp-banner-content reveal-init reveal-fade-up">
          <h2 className="whatsapp-banner-title">{title}</h2>
          <p className="whatsapp-banner-desc">{subtitle}</p>

          <div className="whatsapp-banner-action">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-pill-btn"
              aria-label={`Chat on WhatsApp with FxTrade at ${phone}`}
            >
              <span className="whatsapp-pill-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="whatsapp-pill-svg">
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.237-.244-.588-.492-.508-.678-.518-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.229 3.111c.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.175-1.431-.075-.126-.276-.201-.577-.351z"
                  />
                  <path
                    fill="currentColor"
                    d="M12.004 2C6.479 2 1.996 6.478 1.996 12c0 1.947.558 3.766 1.527 5.309L2 22l4.832-1.49A9.957 9.957 0 0012.004 22c5.524 0 10.003-4.478 10.003-10S17.528 2 12.004 2zm0 18.25c-1.654 0-3.21-.497-4.524-1.353l-.324-.21-2.871.884.897-2.798-.23-.339A8.214 8.214 0 013.75 12c0-4.551 3.702-8.25 8.254-8.25 4.55 0 8.252 3.699 8.252 8.25 0 4.551-3.702 8.25-8.252 8.25z"
                  />
                </svg>
              </span>
              <span className="whatsapp-pill-number">{phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
