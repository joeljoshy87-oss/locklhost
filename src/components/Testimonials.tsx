"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialData = [
  {
    id: 1,
    name: "Joby Payyappilly",
    role: "Film Director & Musician",
    quote: " We had many choices when we looked for affordable flats with the required amenities. But we stumbled at Elixir Homes because of its ideal layout and utilities. the wiring duct and drainage system were all just perfect. Moreover, the dealings were super perfect. I didn’t have to worry about a thing because Elixir Homes is an Ethical Builder. ",
    image: "/testimonials.webp" 
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonialData[index];
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag logic for testimonials
  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#1A1A1A] w-full overflow-hidden">
      <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px] mx-auto pt-20 pb-7.5 lg:pt-[11.4%]  lg:pb-7 xl:mt-[8.5%] xl:pb-19.25">
        <div className="flex flex-col  lg:flex-row justify-between items-start lg:items-end gap-10">
          {/* Left Column: Text */}
          <div className="w-full lg:w-[47%] xl:w-full mb-10 lg:mb-0">
            <h5 className="text-[#8B8E72] font-mono uppercase lg text-[13px] text-lg font-medium mb-4 lg:mb-6">
              testimonials
            </h5>
            <h2 className="text-justify font-cormorant text-white  text-5xl md:text-6xl md:text-left lg:text-[65px] font-semibold mt-4  xl:mt-8 xl:w-full !leading-[1.2]">
              Trusted by Those Who <br className="hidden lg:hidden xl:block" /> Call  It Home
            </h2>{/*<br className="hidden lg:block xl:hidden" />*/}
            <p className="font-inter text-[#7B7B7B] mt-8 mb-5  leading-[1.6]  md:max-w-lg xl:text-[17px] lg:text-[15px] xl:mt-16 xl:text-nowrap lg:text-wrap">
             The true measure of our success is the happiness of the families who live in our homes.<br className="hidden lg:hidden xl:block" /> Their words reflect the trust, comfort, and confidence they've placed in Elixir Homes.<br className="hidden lg:hidden xl:block" /> Read their stories and experiences...
            </p>
          </div>

          {/* Right Column: Slider Controls - Only visible on lg and above */}
          <div className="hidden ml-8 lg:flex items-end mb-7 justify-end min-h-full lg:w-[50%] w-[50%] xl:w-[418.5px] ">
            <div className="flex gap-6">
              <button 
                disabled 
                className="  opacity-40 cursor-not-allowed transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="size-10 text-white/50 stroke-[0.7] -mr-3" />
              </button>
              <button 
                className="opacity-100 transition hover:opacity-60"
                aria-label="Next testimonial"
              >
                <ChevronRight className="  size-10 text-white stroke-[0.7]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="w-full mx-auto flex flex-col lg:flex-row bg-[#373833] h-auto min-h-[600px] lg:min-h-full xl:mt-16 ">
        {/* Left Side: Image - Full width on mobile, half on lg */}
        <div className="relative w-full lg:w-1/2 h-[450px] lg:h-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full"
            >
              <Image
                src={current.image}
                alt="Testimonial Background"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Quote Content - Full width on mobile, half on lg */}
        <div className="w-full lg:w-1/2 flex items-start justify-center md:ml-2 py-16 px-6 lg:px-12">
          <div className="max-w-[400px] w-full">
            <div className="flex flex-col transition-opacity mt-20 duration-300">
              {/* Quote Icon */}
              <div className="relative w-24 h-16 mb-6 opacity-60">
                <Image 
                  src="/QuoteIcon.webp" 
                  alt="Quote Icon" 
                  fill 
                  className="object-contain object-left" 
                  sizes="96px"
                />
              </div>

              {/* Quote Text */}
              <p className="mt-28 font-cormorant italic text-white/80 text-2xl xl:text-[23px] text-balance max-w-[400px]">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Profile Section */}
              <div className="flex items-center mt-36">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                  <Image 
                    src="/Testimonials.jpg" 
                    alt={current.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <p className="text-white font-sans text-xl xl:text-[19px] font-mediumbold ">
                    {current.name}
                  </p>
                  <p className="font-sans text-[19px] text-[#CACACA]">
                    {current.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dots Navigation - Only visible below lg */}
      <div className="flex justify-center gap-3 mb-8 lg:hidden">
        {testimonialData.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-white scale-125' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}