/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import React, { useState } from "react";

import Image from "next/image";

import PlayButton from "../../images/play-button.svg";
import { TabsList, TabsVideo } from "./data";

const Tabs = () => {
  const [category, setCategory] = useState("1");

  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div
        className="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">Get Fresh Laundry Done in No Time</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
            See how easy it is to schedule, track, and enjoy our services. Watch these quick guides!
            </p>
          </div>

          {/* Section content */}
          <div>

          

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-6">
              {/* Category button */}
              <div className="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0">
                {TabsList.map((tab) => (
                  <button
                    key={tab.index}
                    className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${
                      tab.index === category &&
                      "bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25"
                    }`}
                    onClick={() => setCategory(tab.index)}>
                    <tab.icon
                      className={`w-4 h-4 flex-shrink-0 mr-2 ${
                        tab.index === category ? "text-teal-200 dark:text-teal-400" : "text-teal-500 dark:text-gray-400"
                      }`}
                    />
                    <span className={`${tab.index === category ? "text-white dark:text-teal-400" : "text-gray-600 dark:text-gray-300"}`}>
                      {tab.text}
                    </span>
                  </button>
                ))}
              </div>

              {/* Videos */}
              <div className="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">
                <div className="grid md:grid-cols-2 gap-6">
                  {TabsVideo?.[category].map((item, index) => (
                    <div className="relative" key={index}>
                      <img src={item?.image} alt="Video thumbnail" />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex flex-grow justify-center items-center">
                          <a className="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                            <Image src={PlayButton} width="72" height="72" alt="Play icon" />
                          </a>
                        </div>
                        <div className="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                          <a className="text-gray-900 dark:text-gray-400 font-medium" href="#0">
                            {item.title}
                          </a>
                          <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">
                            {item.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
