import React from "react";
import { Building2, Globe2, ShieldCheck, TrendingUp, Landmark } from "lucide-react";
import "./GlobalCapitalNetwork.css";

export default function GlobalCapitalNetwork() {
  return (
    <div className="capital-network-container" aria-hidden="true">
      {/* Editorial Financial Network Graphic */}
      <div className="network-card-frame">
        {/* Top Institutional Badge Rail */}
        <div className="network-top-rail">
          <div className="node-indicator">
            <span className="node-live-dot"></span>
            <span className="node-label">SYNDICATION NETWORK ACTIVE</span>
          </div>
          <span className="node-counter">50+ OVERSEAS NODES</span>
        </div>

        {/* Central Geometric Flow Map */}
        <div className="network-svg-wrap">
          <svg
            viewBox="0 0 520 400"
            className="network-svg"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Subtle concentric orbital lines */}
            <circle cx="260" cy="200" r="170" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />
            <circle cx="260" cy="200" r="115" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" opacity="0.8" />
            <circle cx="260" cy="200" r="60" stroke="rgba(102, 159, 50, 0.25)" strokeWidth="1.5" />

            {/* Connecting Capital Flow Arcs from Center (India / HQ) to global nodes */}
            {/* Node 1: Singapore / SE Asia */}
            <path
              d="M260,200 Q350,140 410,120"
              stroke="var(--green-500)"
              strokeWidth="1.5"
              className="anim-flow-line"
            />
            {/* Node 2: Dubai / Middle East */}
            <path
              d="M260,200 Q200,120 130,130"
              stroke="var(--blue-600)"
              strokeWidth="1.5"
              className="anim-flow-line"
            />
            {/* Node 3: London / Europe */}
            <path
              d="M260,200 Q180,270 120,290"
              stroke="var(--blue-600)"
              strokeWidth="1.5"
              className="anim-flow-line"
            />
            {/* Node 4: East Asia / Tokyo */}
            <path
              d="M260,200 Q360,270 420,280"
              stroke="var(--green-500)"
              strokeWidth="1.5"
              className="anim-flow-line"
            />

            {/* Origin Node: HQ / India */}
            <circle cx="260" cy="200" r="12" fill="var(--navy-900)" />
            <circle cx="260" cy="200" r="6" fill="var(--green-500)" />
            <circle cx="260" cy="200" r="22" stroke="var(--green-500)" strokeWidth="1" opacity="0.4" className="anim-pulse-subtle" />

            {/* Peripheral Banking Nodes */}
            <circle cx="410" cy="120" r="7" fill="var(--surface)" stroke="var(--green-600)" strokeWidth="2.5" />
            <circle cx="130" cy="130" r="7" fill="var(--surface)" stroke="var(--blue-600)" strokeWidth="2.5" />
            <circle cx="120" cy="290" r="7" fill="var(--surface)" stroke="var(--blue-600)" strokeWidth="2.5" />
            <circle cx="420" cy="280" r="7" fill="var(--surface)" stroke="var(--green-600)" strokeWidth="2.5" />
          </svg>

          {/* Micro Editorial Labels positioned deliberately */}
          <div className="network-pill-tag tag-center">
            <Landmark size={12} className="tag-icon" />
            <span>FXTRADE SYNDICATION HQ</span>
          </div>

          <div className="network-pill-tag tag-top-left">
            <Globe2 size={12} className="tag-icon" />
            <span>OVERSEAS LC DESK</span>
          </div>

          <div className="network-pill-tag tag-top-right">
            <Building2 size={12} className="tag-icon" />
            <span>SUPPLIER CREDIT DESK</span>
          </div>

          <div className="network-pill-tag tag-bottom-left">
            <TrendingUp size={12} className="tag-icon" />
            <span>TREASURY & FOREX</span>
          </div>

          <div className="network-pill-tag tag-bottom-right">
            <ShieldCheck size={12} className="tag-icon" />
            <span>DEBT SYNDICATION</span>
          </div>
        </div>

        {/* Bottom Currency & Liquidity Reference Strip */}
        <div className="network-bottom-rail">
          <div className="currency-chip">
            <span className="curr-symbol">USD/INR</span>
            <span className="curr-flow">TRADE FLOW</span>
          </div>
          <div className="currency-chip">
            <span className="curr-symbol">EUR/INR</span>
            <span className="curr-flow">EXPORT CREDIT</span>
          </div>
          <div className="currency-chip">
            <span className="curr-symbol">GBP/INR</span>
            <span className="curr-flow">INLAND LCBD</span>
          </div>
          <div className="currency-chip">
            <span className="curr-symbol">AED/INR</span>
            <span className="curr-flow">SBLC FACILITY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
