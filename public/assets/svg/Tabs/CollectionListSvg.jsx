import React from "react";

const CollectionListSvg = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path className={`fill-current`} d="M8 3l4 4H4zM8 13L4 9h8zM1 0h14v2H1zM1 14h14v2H1z" />
    </svg>
  );
};

export default CollectionListSvg;
