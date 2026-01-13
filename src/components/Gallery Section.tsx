"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// --- Project Image List (Populate this later) ---
const galleryItems = [
  { id: 1, src: "/img/gallery-1.jpg", alt: "Dining Room", className: "col-span-1 h-[450px]" },
  { id: 2, src: "/img/gallery-2.jpg", alt: "Modern Villa Exterior", className: "col-span-1 h-[600px] mt-[-75px]" }, // Matches the offset in the screenshot
  { id: 3, src: "/img/gallery-3.jpg", alt: "Living Space", className: "col-span-1 h-[450px]" },
];

export default function Gallery() {
  return (
    <section className="bg-white w-full py-24">
      {/* --- Gallery Header Container --- */}
      {/* Width: 1512px, Height: 254px, Padding: 100px */}
      <div className="max-w-[1512px] min-h-[254px] mx-auto px-[100px] flex justify-between items-end mb-20">
        <div className="max-w-[800px]">
          <span className="text-[#FF0000] font-inter text-[18px] leading-[28px] uppercase tracking-widest mb-4 block">
            GALLERY
          </span>
          <h2 className="font-cormorant font-semibold text-[64px] leading-[100%] text-[#1A1A1A] mb-8">
            A Glimpse Into Elegance
          </h2>
          <p className="font-inter font-normal text-[18px] leading-[28px] text-[#555555]">
            Elixir Homes stands as a symbol of refined architecture and uncompromised quality. 
            With every project, we aim to create living spaces that embody elegance, functional 
            Elixir Homes stands as a symbol of refined architecture and uncompromised quality.
          </p>
        </div>

        {/* --- View Gallery Button --- */}
        {/* Width: 250px, Height: 60px, Padding: 16px 36px */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="w-[250px] h-[60px] bg-[#E31E24] text-white flex items-center justify-center gap-[24px] px-[36px] py-[16px] transition-colors hover:bg-black"
        >
          <span className="font-inter text-[18px] leading-[28px] uppercase">
            View Gallery
          </span>
          <ArrowRight size={20} />
        </motion.button>
      </div>

      {/* --- Gallery Grid --- */}
      <div className="max-w-[1512px] mx-auto px-[100px] grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden group rounded-sm ${item.className}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Visual indicator (D icon from Figma) */}
            <div className="absolute bottom-6 right-6 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              D
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}