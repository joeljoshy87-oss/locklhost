"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Placeholder data
const testimonialData = [
  {
    id: 1,
    name: "Vijith Nambiar",
    role: "Film Director",
    quote: "We own a 3BHK apartment at “The Orchid” of Elixir in Thrissur. I wanted to buy a property in Kuttanellur, Thrissur road. In search of renowned home builders and developers, for affordable yet elegant apartments, most of them showed me expensive properties. Sometimes, locations were not as per my requirement. Later on, my friend suggested Elixir. Because of that precise decision, I bought my dream home which was handed over to us in 2014. Today I feel much happy & satisfied with my decision of taking a flat in Elixir Apartment. It’s the quality of their work, professionalism and delivery on the exact time makes them stand out from other builders.",
    image: "/testimonials.webp" 
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonialData[index];

  return (
    <section className="relative w-full bg-[#1a1a1a] overflow-hidden">
      
      {/* --- Header Section --- */}
      <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[87.5rem] mx-auto pt-20 pb-[1.875rem] lg:pt-30 lg:pb-[3.125rem] xl:pt-[12.5rem] 2xl:pt-[12.5rem] xl:pb-[4.8125rem]">
        <div className="w-full h-fit flex justify-between">
          
          {/* Left Column: Text */}
          <div className="w-full h-auto md:w-[48%] lg:w-[45%] xl:w-[46.25rem] mb-10 md:mb-0">
            <div style={{ opacity: 1 }}>
              <h5 className="taghead-text text-[#8B8E72] font-inter xl:mt-0.5 uppercase tracking-widest text-sm font-medium">
                testimonials
              </h5>
            </div>
            <div style={{ opacity: 1 }}>
              <h2 className="font-cormorant section-title text-white mt-4 xl:w-[80%] lg:mt-[1.4375rem] xl:mt-[1.4375rem] text-[48px] md:text-[64px] leading-[100%] font-semibold">
                Trusted by Those Who Call It Home
              </h2>
            </div>
            <div style={{ opacity: 1 }}>
              <p className="para-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-[2.625rem] text-[18px] leading-[28px]">
                The true measure of our success is the happiness of the families who live in our homes. Their words reflect the trust, comfort, and confidence they’ve placed in Elixir Homes. Read their stories and experiences...
              </p>
            </div>
          </div>

          {/* Right Column: Slider Controls */}
          <div className="relative hidden lg:flex items-end justify-end min-h-full md:w-[48%] lg:w-[50%] xl:w-[26.15rem]" style={{ opacity: 1 }}>
            <div className="flex gap-4">
              <button disabled className="opacity-40 cursor-not-allowed transition hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff80" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" className="size-10">
                  <path d="m8 5 -7 7 7 7"></path>
                  <path d="M18 12h-16"></path>
                </svg>
              </button>
              <button className="opacity-100 transition hover:opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" className="size-10">
                  <path d="M5 12h16"></path>
                  <path d="m15 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* --- Main Content Split --- */}
      <div className="max-w-[1512px] mx-auto">
        <div className="flex flex-col lg:flex-row w-full min-h-[792px]">
          
          {/* Left Side: Large Image */}
          <div className="relative w-full lg:w-[756px] h-[500px] lg:h-[792px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full"
              >
                <Image
                  src={current.image}
                  alt="Interior"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Quote Content - CORRECTED ALIGNMENT */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#1a1a1a] px-6 py-12 md:py-20 lg:p-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                // Added max-w to contain text like the image, removed large top margins
                className="flex flex-col w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]"
              >
                
                {/* Quote Icon */}
                <div className="relative w-[50px] h-[35px] md:w-[79px] md:h-[58px] mb-8 lg:mb-12">
                   <Image 
                      src="/QuoteIcon.webp" 
                      alt="Quote Icon" 
                      fill
                      className="object-contain opacity-80"
                   />
                </div>

                {/* Quote Text */}
                <p className="font-cormorant italic text-white/80 text-[20px] md:text-[26px] xl:text-[30px] leading-relaxed mb-12">
                  “{current.quote}”
                </p>

                {/* Profile Section */}
                <div className="flex items-center gap-4">
                  <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden">
                    <Image 
                      src="/testimonials.webp" 
                      alt={current.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white font-medium text-[16px] md:text-[20px] font-poppins">
                      {current.name}
                    </p>
                    <p className="font-inter text-[#8B8E72] text-sm md:text-base uppercase tracking-wider">
                      {current.role}
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}