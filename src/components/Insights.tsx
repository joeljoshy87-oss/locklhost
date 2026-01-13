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
    image: "/img/blog-1.jpg", // To be provided later
    alt: "Modern interior with warm lighting",
  },
  {
    id: 2,
    title: "Luxury living redefined: what modern homebuyers desire most",
    image: "/img/blog-2.jpg", // To be provided later
    alt: "Luxury villa with a pool at sunset",
  },
];

export default function Insights() {
  return (
    <section className="bg-white w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1512px] mx-auto flex flex-col lg:flex-row gap-[100px] items-start">
        
        {/* --- Left Content: Info & CTA --- */}
        <div className="w-full lg:w-1/3">
          <span className="text-[#FF0000] font-inter text-[14px] font-semibold uppercase tracking-widest mb-4 block">
            INSIGHTS & BLOGS
          </span>
          <h2 className="font-cormorant font-semibold text-[64px] leading-[100%] text-[#1A1A1A] mb-8">
            Stories That <br /> Inspire Spaces
          </h2>
          <p className="font-inter font-normal text-[18px] leading-[28px] text-[#555555] mb-12">
            Elixir Homes stands as a symbol of refined architecture and uncompromised quality. 
            With every project, we aim to create living spaces that embody elegance, functional 
            excellence, and lasting durability.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#E31E24] text-white px-9 py-4 font-inter text-sm uppercase tracking-widest flex items-center gap-4 transition-all"
          >
            View All <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* --- Right Content: Blog Grid --- */}
        {/* Total width for both images including gap: 940px */}
        <div className="w-full lg:w-[940px] flex flex-col md:flex-row gap-[40px]">
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 group cursor-pointer"
            >
              {/* Image Container: Individual height: 688px */}
              <div className="relative w-full h-[688px] overflow-hidden rounded-sm mb-6">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-cormorant font-normal text-[24px] leading-[32px] text-[#1A1A1A] group-hover:text-[#FF0000] transition-colors">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}