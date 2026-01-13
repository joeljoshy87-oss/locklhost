"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Project Data List
const projects = [
  {
    id: "01",
    title: "Elixir Anfield",
    location: "Thrissur - Kuttanellur Main Road | Thrissur",
    status: "Ongoing Apartment Project",
    description: "Elixir Homes stands as a symbol of refined architecture and uncompromised quality.",
    image: "/img/project-1.jpg", // Add to public/img/
  },
  // Add more projects here to populate the thumbnail list
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function FeaturedProjects() {
  return (
    <section className="relative w-full min-h-screen bg-[#1A1A1A] text-white">
      {/* --- Top Header Section --- */}
      <div className="px-6 md:px-12 lg:px-24 py-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-gray-400 font-inter text-xs uppercase tracking-[0.2em] mb-4 block">
            Featured Projects
          </span>
          <h2 className="font-cormorant font-semibold text-[48px] md:text-[64px] leading-[110%] mb-6">
            Shaping Skylines with Distinction
          </h2>
          <p className="font-inter text-gray-400 text-[16px] leading-[26px] max-w-lg">
            Elixir Homes stands as a symbol of refined architecture and uncompromised quality. 
            With every project, we aim to create living spaces that embody elegance.
          </p>
        </motion.div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="bg-[#FF0000] text-white px-8 py-4 font-inter text-sm uppercase tracking-widest flex items-center gap-4"
        >
          View All Projects <ArrowUpRight size={18} />
        </motion.button>
      </div>

      {/* --- Main Project Display Area --- */}
      <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        {/* Background Project Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/anfield-bg.jpg" // Main background image
            alt="Elixir Anfield"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        </div>

        {/* Project Details Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-20">
          <div className="border-t border-white/20 pt-12">
            <h3 className="font-cormorant text-[60px] md:text-[80px] leading-none mb-8">
              Elixir Anfield
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Status List */}
              <div className="font-inter text-sm space-y-1 text-gray-300">
                <p className="text-white font-medium">Ongoing Apartment Project</p>
                <p>Completed Apartment Project | Sold Out</p>
                <p>Completed Villa Project | Sold Out</p>
              </div>

              {/* Location & Count */}
              <div className="flex flex-col md:items-center">
                <p className="font-inter text-sm text-gray-300 uppercase tracking-wider">
                  Thrissur - Kuttanellur Main Road
                </p>
              </div>

              <div className="flex justify-end items-center gap-4">
                <span className="font-inter text-sm text-gray-400">02 of 05</span>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-8">
              <p className="max-w-xs font-inter text-sm text-gray-400 leading-relaxed">
                Elixir Homes stands as a symbol of refined architecture and uncompromised quality.
              </p>
              
              {/* Thumbnails */}
              <div className="flex gap-4 mt-8 md:mt-0">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className={`relative w-20 h-14 md:w-24 md:h-16 overflow-hidden rounded-sm cursor-pointer border ${i === 2 ? 'border-[#FF0000]' : 'border-transparent'}`}
                  >
                    <Image 
                      src={`/img/thumb-${i}.jpg`} 
                      alt="thumb" 
                      fill 
                      className="object-cover" 
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <button className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-inter group">
              View Project <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}