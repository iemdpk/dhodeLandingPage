import React from "react";

const ImageFieldSvg = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path className={`fill-current `} d="M11 16v-5h5V0H5v5H0v11h11zM2 7h7v7H2V7z" />
    </svg>
  );
};

export default ImageFieldSvg;
