import React from "react";
import "./StarBorder.css";

const StarBorder = ({
  as: Component = "div",
  className = "",
  color = "#ff69b4",
  speed = "8s",
  children,
  ...rest
}) => {
  return (
    <Component className={`star-border-container ${className}`} {...rest}>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
          animationDuration: speed,
          animation: `rotate-bottom ${speed} linear infinite, pulse 3s ease-in-out infinite`,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
          animationDuration: speed,
          animation: `rotate-top ${speed} linear infinite, pulse 4s ease-in-out infinite`,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;