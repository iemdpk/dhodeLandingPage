// @ts-nocheck
import React, { useState } from "react";
import ArrowDownSvg from "../assets/svg/ArrowDownSvg";
import Transition from "./Transition";

const Dropdown = ({ children, title }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOpen = () => {
    setDropdownOpen(true);
  };

  const handleClose = () => {
    setDropdownOpen(false);
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}>
      <a
        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
        href="#0"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault}>
        {title}
        <ArrowDownSvg className="w-3 h-3 fill-current text-gray-400 cursor-pointer ml-1 flex-shrink-0" />
      </a>
      <Transition
        show={dropdownOpen}
        tag="ul"
        className="origin-top-right absolute top-full left-0 w-40 bg-white dark:bg-gray-800 shadow-lg py-2 ml-4 rounded"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0">
        {children}
      </Transition>
    </li>
  );
};

export default Dropdown;
