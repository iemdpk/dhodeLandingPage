import Image from "next/image";
import React from "react";
import mapKeys from "lodash/mapKeys";

// @ts-ignore
import Logo from "../../images/dhodeL2.png";
import CustomLink from "../CustomLink";
import { footerData } from "./Footer.data";
const Footer = () => {
  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-15 border-t border-gray-200 dark:border-gray-800 -mt-px">
          {/* Footer illustration */}
          <div className="pointer-events-none -z-1" aria-hidden="true">
            <svg
              className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40"
              width="800"
              height="264"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fillOpacity=".4" />
              <defs>
                <radialGradient
                  id="footerglow_paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(90 0 400) scale(315.089)">
                  <stop stopColor="#3ABAB4" />
                  <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Top area: Block */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-2 lg:col-span-3">
              <CustomLink className="inline-block" to="/" aria-label="Landing Page">
                <img src={Logo.src} alt="logo" className="w-[100px] md:w-[130px]"  />
              </CustomLink>
            </div>

            {/* 2,3,4 and 5th block*/}
            <div className="md:col-span-10 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">SERVICES</h6>
                <ul>
                  {footerData.products.map((item) => (
                    <li key={item.id} className="mb-1" >
                      <CustomLink className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to={item.href}>
                        {item.name}
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              </div>
              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">SUPPORT</h6>
                <ul>
                  {footerData.resources.map((item) => (
                    <li key={item.id} className="mb-1">
                      <CustomLink className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to={item.href}>
                        {item.name}
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              </div>
              {/* 4th block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">COMPANY</h6>
                <ul>
                  {footerData.company.map((item) => (
                    <li key={item.id} className="mb-1">
                      <CustomLink className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to={item.href}>
                        {item.name}
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>

          {/* Bottom area */}
          <div className="flex justify-center">
            {/* Copyrights note */}
            <div className="text-gray-600 dark:text-gray-400 text-sm">© 2025 Dhode. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
