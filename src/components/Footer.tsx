"use client";

import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { id: 1, src: "/img/gallery-1.jpg", alt: "Dining Room" },
  { id: 2, src: "/img/gallery-2.jpg", alt: "Modern Villa Exterior" },
  { id: 3, src: "/img/gallery-3.jpg", alt: "Living Space" },
  { id: 4, src: "/img/gallery-4.jpg", alt: "Kitchen Area" },
  { id: 5, src: "/img/gallery-5.jpg", alt: "Master Bedroom" },
  { id: 6, src: "/img/gallery-6.jpg", alt: "Exterior Night" },
];

export default function Gallery() {
  const containerRef = useRef(null);
  const galleryWrapperRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // The total distance the gallery needs to move up
      // We calculate the height of the gallery content minus the height of the viewable area
      const scrollAmount = galleryWrapperRef.current.offsetHeight - window.innerHeight;

      gsap.to(galleryWrapperRef.current, {
        y: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",      // Pin when the top of the section hits the top of viewport
          end: `+=${scrollAmount + 500}`, // Duration of the "lock"
          pin: true,             // This locks the viewport
          scrub: 1,              // Smoothly links scroll to movement
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="bg-white overflow-hidden">
      <section className="flex flex-col lg:flex-row min-h-screen max-w-[1512px] mx-auto px-6 md:px-[100px] py-20 gap-12">
        
        {/* --- Pinned Left Side (Header) --- */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start pt-10">
          <span className="text-[#FF0000] font-inter text-sm md:text-[18px] leading-[28px] uppercase tracking-widest mb-4 block">
            GALLERY
          </span>
          <h2 className="font-cormorant font-semibold text-4xl md:text-[64px] leading-[105%] text-[#1A1A1A] mb-8">
            A Glimpse Into <br className="hidden lg:block" /> Elegance
          </h2>
          <p className="font-inter font-normal text-base md:text-[18px] leading-[28px] text-[#555555] mb-12">
            Elixir Homes stands as a symbol of refined architecture and uncompromised quality. 
            With every project, we aim to create living spaces that embody elegance and functional 
            distinction.
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

        {/* --- Scrolling Right Side (Images) --- */}
        <div className="w-full lg:w-2/3 h-[80vh] overflow-hidden relative rounded-lg bg-gray-50">
          <div 
            ref={galleryWrapperRef} 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8"
          >
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative overflow-hidden group rounded-sm w-full 
                  ${index % 3 === 1 ? 'h-[400px] md:h-[600px] md:mt-20' : 'h-[300px] md:h-[450px]'}
                `}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-black font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  D
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}