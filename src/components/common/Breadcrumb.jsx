import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import "./Breadcrumb.css";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="institutional-breadcrumb" aria-label="Breadcrumb">
      <Link to="/" className="breadcrumb-link home-crumb">
        <Home size={14} />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            <ChevronRight size={13} className="crumb-sep" />
            {isLast || !item.path ? (
              <span className="crumb-current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="breadcrumb-link">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
