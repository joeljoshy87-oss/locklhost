"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SpinningText } from "./SpinningText";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }
  }
};

const stats = [
  { value: "4+", label: "Projects Completed" },
  { value: "7+", label: "Builders Award" },
  { value: "15+", label: "Years of Experience" },
];

export default function About() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          <motion.span variants={fadeUp} className="text-[#FF0000] font-inter text-sm font-semibold uppercase tracking-widest mb-4">
            About Us
          </motion.span>
          
          <motion.h2 variants={fadeUp} className="font-cormorant font-semibold text-[48px] md:text-[64px] leading-[100%] text-[#1A1A1A] mb-8">
            Inspired by Vision, Built <br className="hidden md:block" /> with Precision
          </motion.h2>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <p className="font-inter font-normal text-[18px] leading-[28px] text-[#555555]">
              Our power comes in the form of our values. We call ourselves "The Ethical Builder" not as a slogan, but as a guarantee. We are not trying to be the largest, we work on being the most trustworthy.
            </p>
            <p className="font-inter font-normal text-[18px] leading-[28px] text-[#555555]">
              Elixir Homes stands as a symbol of refined architecture and uncompromised quality. With every project, we aim to create living spaces that embody elegance and functional durability.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-12 md:gap-20 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-cormorant text-[48px] font-semibold text-[#1A1A1A]">{stat.value}</span>
                <span className="font-inter text-sm text-[#777777] uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="w-fit bg-[#FF0000] text-white px-8 py-4 font-inter text-sm uppercase tracking-widest flex items-center gap-4 group transition-all"
          >
            Know More
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </motion.div>

        {/* Right Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[500px] md:h-[700px] w-full"
        >
          <div className="relative h-full w-full rounded-sm overflow-hidden">
            <Image
              src="/about.webp" // Ensure image is in public folder
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Decorative Badge Overlay */}
          <div className="absolute 
            /* Mobile: Bottom Center */
            bottom-[-20px] left-1/2 -translate-x-1/2 
            /* Desktop: Bottom Right Overlap */
            lg:bottom-[-65px] lg:right-[-80px] lg:left-auto lg:translate-x-0 
            w-40 h-40 z-20">
        <SpinningText text="THE ETHICAL BUILDER">
        <span className="text-[100px] font-bold font-cormorant text-[#FF0000] leading-none select-none">
            E
        </span>
        </SpinningText>
        </div>
        </motion.div>

      </div>
    </section>
  );
}
