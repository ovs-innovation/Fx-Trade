import React from "react";
import "./ServiceProcessTimeline.css";

export default function ServiceProcessTimeline({ steps = [], className = "" }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className={`service-process-timeline ${className}`}>
      {/* Horizontal connecting track line (desktop) */}
      <div className="process-timeline-rail" aria-hidden="true">
        <div className="timeline-line-draw process-track-bar" />
      </div>

      <div className="process-timeline-nodes">
        {steps.map((step, idx) => {
          const delayClass = `delay-${Math.min((idx + 1) * 100, 500)}`;
          return (
            <div
              key={step.num || idx}
              className={`process-step-node reveal-init reveal-fade-up ${delayClass}`}
            >
              <div className="process-node-header">
                <div className="process-node-badge">
                  <span className="process-node-num">{step.num || `0${idx + 1}`}</span>
                </div>
                {step.stepTag && (
                  <span className="process-node-tag">{step.stepTag}</span>
                )}
              </div>

              <div className="process-node-body">
                <h4 className="process-node-title">{step.title}</h4>
                <p className="process-node-desc">{step.desc || step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
