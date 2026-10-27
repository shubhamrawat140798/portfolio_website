import React from "react";

const HamburgerIcon = ({ isOpen }) => {
  return (
    <svg
      className="fill-current"
      viewBox="0 0 100 100"
      width="22"
      height="22"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className={`origin-center transition-transform duration-300 ${
          isOpen ? "rotate-45" : ""
        }`}
        width="80"
        height="10"
        x={isOpen ? "30" : "10"}
        y={isOpen ? "0" : "25"}
        rx="5"
      />
      <rect
        className={`transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
        width="80"
        height="10"
        x="10"
        y="45"
        rx="5"
      />
      <rect
        className={`origin-center transition-transform duration-300 ${
          isOpen ? "-rotate-45" : ""
        }`}
        width="80"
        height="10"
        x={isOpen ? "-50" : "10"}
        y={isOpen ? "75" : "65"}
        rx="5"
      />
    </svg>
  );
};

export default HamburgerIcon;
