import React from "react";

const HamburgerButtonSvg = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect y="4" width="24" height="2" rx="1" />
      <rect y="11" width="24" height="2" rx="1" />
      <rect y="18" width="24" height="2" rx="1" />
    </svg>
  );
};

export default HamburgerButtonSvg;
