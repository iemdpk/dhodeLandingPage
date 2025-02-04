/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import Image from "next/image";
import React, { useState } from "react";
import CheckSvg from "../assets/svg/CheckSvg";
import GlowSvg from "../assets/svg/GlowSvg";
import PlayButton from "../images/play-button.svg";
import PhoneImage from "../images/home.jpg";
import PhoneMockup from "../images/iphone-mockup.png";
import Modal from "../utils/Modal";

const HeroAbout = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-20">
        
        <div className="pt-32 pb-10">
      
          {/* Hero content */}
          <div>
            
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-extrabold" data-aos="fade-down">
                Dhode
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
              Looking for a convenient laundry app? Check out Cleanly, Rinse, or Laundryheap for pick-up, wash, and delivery services near you. Save time and stay fresh with reliable options tailored to your needs!
              </p>
              {/* CTA form */}
              <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <div className="flex flex-col sm:flex-row  max-w-sm mx-auto sm:max-w-md md:mx-0">
                  {/* <input
                    type="tel"
                    placeholder="Phone number"
                    aria-label="Phone number"
                    className="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                  /> */}
                
                </div>
              </form>
              <ul
                className="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2"
                data-aos="fade-down"
                data-aos-delay="450">
                <li className="flex items-center mb-2">
                
                  <span><strong>Convenience</strong>: Laundry apps provide hassle-free pick-up and delivery, saving you time for things that truly matter.</span>
                </li>
                <li className="flex items-center mb-2">
                
                  <span><strong>Professional Care</strong>: Get your clothes cleaned, pressed, and handled by experts using top-notch techniques.</span>
                </li>
                <li className="flex items-center mb-2">
                
                  <span><strong>Flexible Scheduling</strong>: Choose when and where your laundry gets picked up or dropped off, fitting seamlessly into your lifestyle.</span>
                </li>
              </ul>
            </div>

          
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
