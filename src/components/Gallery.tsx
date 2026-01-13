"use client";

import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HorizontalScrollCarousel } from "./HorizontalScrollCarousel";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
    { id: 1, src: "/img/gallery-1.jpg", alt: "Dining Room" },
    { id: 2, src: "/img/gallery-2.jpg", alt: "Modern Villa Exterior" },
    { id: 3, src: "/img/gallery-3.jpg", alt: "Living Space" },
    { id: 4, src: "/img/gallery-4.jpg", alt: "Kitchen Area" },
];

export default function Gallery() {

  return (
    <div className="bg-white">
      <section className="flex flex-col lg:flex-row min-h-screen max-w-[1512px] mx-auto px-6 md:px-[100px] py-20 gap-12">
        
        {/* --- Pinned Left Side (Header) --- */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start pt-10">
          <span className="text-[#FF0000] font-inter text-sm md:text-[18px] leading-[28px] uppercase tracking-widest mb-4 block">
            GALLERY
          </span>
          <h2 className="font-cormorant font-semibold text-4xl md:text-[64px] leading-[105%] text-[#1A1A1A] mb-8">
            A Glimpse Into <br className="hidden lg:block" /> Elegance
          </h2>
          <p className="font-inter font-normal text-base md:text-[18px] leading-[28px] text-[#555555] mb-12">
            Elixir Homes stands as a symbol of refined architecture and uncompromised quality. 
            With every project, we aim to create living spaces that embody elegance and functional 
            distinction.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full md:w-[250px] h-[60px] bg-[#E31E24] text-white flex items-center justify-center gap-4 transition-colors hover:bg-black"
          >
            <span className="font-inter text-sm md:text-[18px] uppercase">
              View Gallery
            </span>
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>
      <HorizontalScrollCarousel testimonials={galleryItems} />
    </div>
  );
}