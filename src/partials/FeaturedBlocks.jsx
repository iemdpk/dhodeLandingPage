import React from "react";

import Icon1 from "../assets/svg/Feature/Icon1";
import Icon2 from "../assets/svg/Feature/Icon2";
import Icon3 from "../assets/svg/Feature/Icon3";
import Icon4 from "../assets/svg/Feature/Icon4";

const features = [
  {
    icon: Icon1,
    title: "🧺 Pickup & Delivery",
    content: "We pick up your dirty laundry and deliver it fresh & clean.",
    className: "bg-gradient-to-tr from-teal-500 to-teal-400 dark:to-teal-500",
  },
  {
    icon: Icon2,
    title: "🧼 Deep Cleaning",
    content: "Tough on stains, gentle on fabrics—your clothes will thank you!",
    className: "bg-gradient-to-tr from-purple-500 to-purple-400 dark:to-purple-500",
  },
  {
    icon: Icon3,
    title: "🚀 Super Fast Service",
    content: "Get your laundry done quickly without any hassle.",
    className: "bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:to-indigo-500",
  },
  {
    icon: Icon4,
    title: "🌿 Eco-Friendly Washing",
    content: "Safe for your clothes, safe for the planet.",
    className: "bg-gradient-to-tr from-pink-500 to-pink-400 dark:to-pink-500",
  },
];

const FeaturedBlocks = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py:20 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display">Let Us Handle Your Laundry, So You Don’t Have To!</h2>
          </div>

          {/* Items */}
          <div
            className="max-w-xs mx-auto sm:max-w-none md:max-w-xl lg:max-w-none grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4"
            data-aos-id-featbl>
            {features.map((feature, index) => (
              <a
                key={index}
                className={`flex flex-col p-5 group text-white shadow-2xl ${feature.className}`}
                href="#0"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-featbl]"
                data-aos-delay={`${index * 100}`}>
                {/* <feature.icon /> */}
                <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">{feature.title}</div>
                <div className="flex-grow opacity-80 mb-4">{feature.content}</div>
                <svg
                  className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current" d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlocks;
