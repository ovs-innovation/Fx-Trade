import React from "react";

export default function Container({ children, className = "", style = {} }) {
  return (
    <div className={`container-custom ${className}`} style={style}>
      {children}
    </div>
  );
}
