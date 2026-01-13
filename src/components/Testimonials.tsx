"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

// Placeholder data - You can expand this list later
const testimonialData = [
  {
    id: 1,
    name: "Vijith Nambiar",
    role: "Film Director",
    quote: "Elixir Homes stands as a symbol of refined architecture and uncompromised quality. With every project, we aim to create living spaces that embody elegance, functional Elixir Homes stands as a symbol of refined architecture and uncompromised quality.",
    image: "/img/testimonial-1.jpg" // Main living room image
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonialData[index];

  return (
    <section className="relative w-full bg-[#1A1A1A] overflow-hidden">
      <div className="max-w-[1512px] mx-auto">
        
        {/* --- Header Section --- */}
        <div className="px-6 md:px-12 lg:px-24 pt-20 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-2xl">
              <span className="text-gray-400 font-inter text-sm uppercase tracking-[0.2em] mb-4 block">
                TESTIMONIALS
              </span>
              <h2 className="font-cormorant font-semibold text-[48px] md:text-[64px] leading-[100%] text-white">
                Trusted by Those Who <br className="hidden md:block" /> Call It Home
              </h2>
            </div>
            
            {/* Slider Controls */}
            <div className="flex gap-4 mb-2">
              <button className="p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-full">
                <ArrowLeft size={20} />
              </button>
              <button className="p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-full">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <p className="font-inter font-normal text-[18px] leading-[28px] text-gray-400 max-w-xl mt-8">
            Elixir Homes stands as a symbol of refined architecture and uncompromised quality. 
            With every project, we aim to create living spaces that embody elegance, functional 
            excellence, and lasting durability.
          </p>
        </div>

        {/* --- Main Content Split --- */}
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

          {/* Right Side: Quote Content */}
          <div className="flex-1 bg-[#2C2C2A] p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
            <Quote className="text-white/10 w-24 h-24 absolute top-12 left-12" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-cormorant italic font-normal text-[24px] md:text-[28px] leading-[34px] md:leading-[40px] text-white mb-12">
                  “ {current.quote} ”
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                     <Image 
                        src="/img/client-avatar.jpg" 
                        alt={current.name} 
                        fill 
                        className="object-cover"
                      />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-[18px] leading-[28px] text-white">
                      {current.name}
                    </h4>
                    <p className="font-inter text-sm text-gray-400">
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