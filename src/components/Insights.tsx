"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// --- Blog Data List ---
const blogPosts = [
  {
    id: 1,
    title: "How space and light define modern luxury living",
    image: "/buildings/4.jpg",
    alt: "Modern interior with warm lighting",
  },
  {
    id: 2,
    title: "Luxury living redefined: what modern homebuyers desire most",
    image: "/buildings/5.webp",
    alt: "Luxury villa with a pool at sunset",
  },
  {
    id: 3,
    title: "The art of minimalism in high-end architecture",
    image: "/buildings/3.webp",
    alt: "Minimalist living room",
  },
  {
    id: 4,
    title: "Sustainable building: The future of luxury homes",
    image: "/buildings/2.webp",
    alt: "Eco-friendly modern home",
  },
];

export default function Insights() {
  return (
    <section className="bg-white w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1512px] mx-auto">
        {/* --- Section Header --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="w-full lg:max-w-2xl">
            <span className="text-[#FF0000] font-inter text-[14px] font-semibold uppercase tracking-widest mb-4 block">
              INSIGHTS & BLOGS
            </span>
            <h2 className="font-cormorant font-semibold text-5xl md:text-[64px] leading-[100%] text-[#1A1A1A] mb-8 lg:mb-0">
              Stories That <br className="hidden lg:block"/> Inspire Spaces
            </h2>
          </div>
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end">
             <p className="font-inter font-normal text-lg leading-relaxed text-[#555555] mb-8 max-w-lg">
                Elixir Homes stands as a symbol of refined architecture and uncompromised quality. With every project, we aim to create living spaces that embody elegance.
             </p>
             <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#E31E24] text-white px-9 py-4 font-inter text-sm uppercase tracking-widest flex items-center gap-4 transition-all"
              >
                View All <ArrowRight size={18} />
              </motion.button>
          </div>
        </div>

        {/* --- Blog Carousel --- */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {blogPosts.map((post) => (
              <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[500px] overflow-hidden rounded-sm mb-6">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="font-cormorant font-normal text-[24px] leading-[32px] text-[#1A1A1A] group-hover:text-[#FF0000] transition-colors">
                    {post.title}
                  </h3>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
}
