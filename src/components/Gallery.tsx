"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  { id: 1, src: "/buildings/flat.jpg", alt: "Elixir Anfield", className: "h-[300px] md:h-[450px]" },
  { id: 2, src: "/buildings/2.webp", alt: "Elixir Highbury", className: "h-[400px] md:h-[600px] md:mt-20" },
  { id: 3, src: "/buildings/3.webp", alt: "Elixir Greens", className: "h-[300px] md:h-[450px]" },
  { id: 4, src: "/buildings/4.webp", alt: "Elixir Avalon", className: "h-[400px] md:h-[600px] md:mt-20" },
  { id: 5, src: "/buildings/5.webp", alt: "The Orchid", className: "h-[300px] md:h-[450px]" },
  { id: 6, src: "/buildings/1.jpg", alt: "Dining Room", className: "h-[400px] md:h-[600px] md:mt-20" },
];

export default function Gallery() {
  return (
    <div className="bg-white">
      <section className="max-w-[1512px] mx-auto px-6 md:px-[100px] py-20 lg:py-24">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
            <div className="w-full lg:w-1/2">
              <span className="text-[#FF0000] font-inter text-sm md:text-[18px] leading-[28px] uppercase tracking-widest mb-4 block">
                GALLERY
              </span>
              <h2 className="font-cormorant font-semibold text-4xl md:text-[64px] leading-[105%] text-[#1A1A1A]">
                A Glimpse Into <br className="hidden lg:block" /> Elegance
              </h2>
            </div>
             <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end mt-8 lg:mt-0">
                 <p className="font-inter font-normal text-base md:text-[18px] leading-[28px] text-[#555555] max-w-md mb-8 text-left lg:text-right">
                    As a symbol of refined architecture, we create living spaces that embody elegance, functional excellence, and lasting quality.
                 </p>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-fit h-[60px] bg-[#E31E24] text-white flex items-center justify-center gap-4 transition-colors hover:bg-black px-8"
                >
                    <span className="font-inter text-sm md:text-[18px] uppercase">
                    View Gallery
                    </span>
                    <ArrowRight size={20} />
                </motion.button>
            </div>
        </div>

        {/* --- Masonry Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden group rounded-sm w-full ${item.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-black font-bold opacity-0 group-hover:opacity-100 transition-all text-xl">
                +
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}