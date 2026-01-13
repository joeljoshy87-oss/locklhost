"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ParallaxCarousel } from "./ParallaxCarousel";

const projects = [
  {
    id: "01",
    title: "Elixir Anfield",
    location: "Thrissur - Kuttanellur Main Road | Thrissur",
    status: "Ongoing Apartment Project",
    image: "/buildings/building-1.jpg",
  },
  {
    id: "02",
    title: "Elixir Highbury",
    location: "Ayyanthole | Thrissur",
    status: "Completed Apartment Project",
    image: "/buildings/building-2.jpg",
  },
  {
    id: "03",
    title: "Elixir Greens",
    location: "Puranattukara | Thrissur",
    status: "Completed Villa Project",
    image: "/buildings/building-3.jpg",
  },
  {
    id: "04",
    title: "Elixir Avalon",
    location: "Kuttanellur | Thrissur",
    status: "Ongoing Apartment Project",
    image: "/buildings/building-4.jpg",
  },
];


export default function FeaturedProjects() {
  return (
    <section className="relative w-full h-screen bg-[#1A1A1A] text-white flex flex-col">
      {/* --- Top Header Section --- */}
      <div className="px-6 md:px-12 lg:px-24 pt-20 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 z-20">
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
          className="bg-[#FF0000] text-white px-8 py-4 font-inter text-sm uppercase tracking-widest flex items-center gap-4 flex-shrink-0"
        >
          View All Projects <ArrowUpRight size={18} />
        </motion.button>
      </div>

      {/* --- Main Project Display Area --- */}
      <div className="absolute inset-0 z-0">
         <ParallaxCarousel projects={projects} />
      </div>
    </section>
  );
}
