"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HorizontalScrollCarousel } from "./HorizontalScrollCarousel";

const galleryItems = [
    { id: 1, src: "/buildings/flat.jpg", alt: "Elixir Anfield" },
    { id: 2, src: "/buildings/2.webp", alt: "Elixir Highbury" },
    { id: 3, src: "/buildings/3.webp", alt: "Elixir Greens" },
    { id: 4, src: "/buildings/4.webp", alt: "Elixir Avalon" },
];

export default function Gallery() {

  return (
    <div className="bg-white">
      <section className="max-w-[1512px] mx-auto px-6 md:px-[100px] py-20 lg:py-24">
        
        {/* --- Header Section --- */}
        <div className="w-full lg:w-1/3">
          <span className="text-[#FF0000] font-inter text-sm md:text-[18px] leading-[28px] uppercase tracking-widest mb-4 block">
            GALLERY
          </span>
          <h2 className="font-cormorant font-semibold text-4xl md:text-[64px] leading-[105%] text-[#1A1A1A] mb-8">
            A Glimpse Into <br className="hidden lg:block" /> Elegance
          </h2>
          <p className="font-inter font-normal text-base md:text-[18px] leading-[28px] text-[#555555] mb-12">
            As a symbol of refined architecture, we create living spaces that embody elegance, functional excellence, and lasting quality.
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
      <HorizontalScrollCarousel items={galleryItems} />
    </div>
  );
}
