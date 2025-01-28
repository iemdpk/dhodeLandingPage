/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import React, { useEffect } from "react";

import Image1 from "../images/carousel-item-01.jpg";
import Image2 from "../images/carousel-item-02.jpg";
import Image3 from "../images/carousel-item-03.jpg";
import Image4 from "../images/carousel-item-04.jpg";
import Image5 from "../images/carousel-item-05.jpg";
import Swiper, { Autoplay, Navigation } from "swiper";
import "swiper/css";
Swiper.use([Autoplay, Navigation]);

const listImg = [Image1, Image2, Image3, Image4, Image5];

const Carousel = () => {
  useEffect(() => {
    const carousel = new Swiper(".carousel", {
      slidesPerView: "auto",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3,
      },
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  }, []);

  return (
    <section className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20">
        
        

        {/* Carousel */}
        <div className="carousel swiper">
          <div className="swiper-wrapper">
            {/* Carousel items */}
            {listImg.map((img, index) => (
              <div key={index} className="swiper-slide max-w-lg">
                <img src={img.src} className="transition-opacity duration-300 rounded-lg" width="540" height="460" alt="Carousel item 01" />
                <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                  <div className="flex flex-grow">
                    <a className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="#0">
                      Learn more
                    </a>
                  </div>
                  <div className="absolute bottom-0 right-0 p-6">
                    <a
                      className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                      href="#0">
                      Creative Services
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mt-12 md:mt-16">
            <button className="carousel-prev relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
