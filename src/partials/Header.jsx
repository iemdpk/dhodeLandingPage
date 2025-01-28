// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";

import Logo from "../assets/dhodeL2.png";
import CustomLink from "../partials/CustomLink";
import Dropdown from "../utils/Dropdown";
import LightSwitchSvg from "../assets/svg/LightSwitchSvg";
import HamburgerButtonSvg from "../assets/svg/HamburgerButtonSvg";
import Transition from "../utils/Transition";
import ButtonSound from "../assets/button_sound.mp3";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [audio, setAudio] = useState();

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  const handleThemeSwitch = () => {
    audio.load();
    audio.play();
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setAudio(new Audio(ButtonSound));
  }, []);

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current && !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [mobileNavOpen]);

  // Handle light mode
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const dark = localStorage.getItem(".dark-mode");
      if (dark === null) {
        return false;
      } else {
        return dark === "true";
      }
    }
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="absolute bg-transparent w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-5">
            <div className="block cursor-pointer">
              <CustomLink to="/" aria-label="Landing Page">
                <img src={Logo.src} alt="logo" width="80" height="80" />
              </CustomLink>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            <ul className="flex flex-grow flex-wrap items-center font-medium">
              {/* <li>
                <CustomLink
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  About
                </CustomLink>
              </li> */}
             
              
            </ul>

            {/* Desktop light switch */}
            <div className="form-switch focus-within:outline-blue-200 flex flex-col justify-center ml-3">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-desktop"
                className="light-switch sr-only"
                checked={darkMode}
                onChange={handleThemeSwitch}
              />
              <label className="relative" htmlFor="light-switch-desktop">
                <span
                  className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                />
                <LightSwitchSvg className="absolute inset-0" />
                <span className="sr-only">Switch to light / dark version</span>
              </label>
            </div>

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                {/* <CustomLink className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">
                  Request code
                </CustomLink> */}
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="inline-flex md:hidden">
            {/* Mobile lights switch */}
            <div className="form-switch focus-within:outline-blue-200 flex flex-col justify-center mr-6">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-desktop"
                className="light-switch sr-only"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="relative" htmlFor="light-switch-desktop">
                <span
                  className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                />
                <LightSwitchSvg className="absolute inset-0" />
                <span className="sr-only">Switch to light / dark version</span>
              </label>
            </div>

            {/* Hamburger button for mobile */}
            {/* <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-expanded={mobileNav}
              aria-controls="mobile-nav"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <HamburgerButtonSvg className="w-6 h-6 text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out" />
            </button> */}

            {/* Mobile navigation */}
            <Transition
              show={mobileNavOpen}
              tag="ul"
              className="fixed top-0 h-screen z-20 left-0 w-full max-w-xs overflow-scroll bg-white dark:bg-gray-900 shadow-lg"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-x-full"
              enterEnd="opacity-100 translate-x-0"
              leave="transition ease-out duration-200 transform"
              leaveStart="opacity-100 translate-x-0"
              leaveEnd="opacity-0 -translate-x-full">
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="fixed top-0 h-screen z-20 left-0 w-full max-w-xs overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar">
                <div className="py-6 pr-4 pl-4">
                  <img src={Logo.src} alt="logo" width="32" height="32" />
                  <ul>
                    <li>
                      <CustomLink
                        to="/about"
                        className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2 ">
                        About
                      </CustomLink>
                    </li>
                    <li>
                      <CustomLink
                        to="/blog"
                        className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2 ">
                        Blog
                      </CustomLink>
                    </li>
                    <li>
                      <CustomLink
                        to="/testimonials"
                        className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2 ">
                        Testimonials
                      </CustomLink>
                    </li>
                    <li className="py-2 my-2 border-t border-gray-200 dark:border-gray-800">
                      <span className="flex text-gray-600 dark:text-gray-400 py-2">Resource</span>
                      <ul className="pl-4">
                        <li>
                          <CustomLink
                            to="/help"
                            className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight transition duration-150">
                            Help Center
                          </CustomLink>
                        </li>
                        <li>
                          <CustomLink
                            to="/404"
                            className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight transition duration-150">
                            404
                          </CustomLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <CustomLink
                        to="/testimonials"
                        className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out">
                        Request code
                      </CustomLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </Transition>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
