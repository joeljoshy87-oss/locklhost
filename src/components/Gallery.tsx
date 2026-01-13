"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Use project images for the gallery
const galleryImages = [
  { id: 1, src: "/buildings/2.webp", alt: "Elixir Highbury", className: "lg:h-[450px]" },
  { id: 2, src: "/buildings/3.webp", alt: "Elixir Greens", className: "lg:h-[600px] mt-[-75px]" },
  { id: 3, src: "/buildings/4.webp", alt: "Elixir Avalon", className: "lg:h-[450px]" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
  }
};

export default function Gallery() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <span className="text-[#FF0000] font-inter text-[18px] leading-[28px] uppercase tracking-widest mb-4 block">
              GALLERY
            </span>
            <h2 className="font-cormorant font-semibold text-[48px] md:text-[64px] leading-[100%] text-[#1A1A1A] mb-8">
              A Glimpse Into Elegance
            </h2>
            <p className="font-inter font-normal text-[18px] leading-[28px] text-[#555555] max-w-xl">
              Elixir Homes stands as a symbol of refined architecture and uncompromised quality. 
              With every project, we aim to create living spaces that embody elegance, functional 
              excellence, and lasting durability.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            className="bg-[#FF0000] text-white px-9 py-4 font-inter text-sm uppercase tracking-widest flex items-center gap-4 transition-all"
          >
            View Gallery <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* --- Gallery Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`relative overflow-hidden group rounded-sm w-full h-[300px] md:h-[400px] ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
