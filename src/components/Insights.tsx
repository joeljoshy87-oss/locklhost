"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// --- Blog Data List ---
const blogPosts = [
  {
    id: 1,
    title: "How space and light define modern luxury living",
    image: "/buildings/5.jpg", // Using one of the provided images
    alt: "Modern interior with warm lighting",
  },
  {
    id: 2,
    title: "Luxury living redefined: what modern homebuyers desire most",
    image: "/buildings/6.jpg", // Using one of the provided images
    alt: "Luxury villa with a pool at sunset",
  },
];

export default function Insights() {
  return (
    <section className="bg-white w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1512px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* --- Left Side: Header Content --- */}
        <div className="w-full lg:w-1/3">
          <span className="text-[#FF0000] font-inter text-[14px] font-semibold uppercase tracking-widest mb-4 block">
            INSIGHTS & BLOGS
          </span>
          <h2 className="font-cormorant font-semibold text-5xl md:text-[64px] leading-[100%] text-[#1A1A1A] mb-6">
            Stories That <br className="hidden lg:block"/> Inspire Spaces
          </h2>
          <p className="font-inter font-normal text-lg leading-relaxed text-[#555555] mb-10 max-w-md">
            Elixir Homes stands as a symbol of refined architecture and uncompromised quality. With every project, we aim to create living spaces that embody elegance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#E31E24] text-white px-9 py-4 font-inter text-sm uppercase tracking-widest flex items-center gap-4 transition-all"
          >
            View All <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* --- Right Side: Blog Posts Grid --- */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-sm mb-6">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-cormorant font-normal text-[22px] md:text-[24px] leading-tight text-[#1A1A1A] group-hover:text-[#FF0000] transition-colors">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
