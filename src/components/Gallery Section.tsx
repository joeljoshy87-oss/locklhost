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
  const sectionRef = useRef(null);
  const galleryWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Calculate how much the gallery needs to move
      // We subtract the height of the window so the last image stops at the bottom
      const totalHeight = galleryWrapperRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollDistance = totalHeight - (viewportHeight * 0.8);

      // 2. The Pinning Animation
      gsap.to(galleryWrapperRef.current, {
        y: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",      // Pin when the section hits the top
          end: "+=250%",         // LOCK duration: increase this to make scrolling slower/tighter
          pin: true,             // This locks the viewport
          scrub: 1,              // Smoothly links scroll to movement
          anticipatePin: 1,
          onRefresh: (self) => {
            // Re-calculate if layout changes
            if (galleryWrapperRef.current) {
               gsap.set(galleryWrapperRef.current, { y: 0 });
            }
          }
        },
      });
    }, sectionRef);

    // Ensure GSAP knows the correct heights after React finishes rendering
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    // sectionRef is the "Pin Container"
    <section ref={sectionRef} className="bg-white w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row h-screen max-w-[1512px] mx-auto px-6 md:px-[100px] items-center gap-12">
        
        {/* --- Left Side: Pinned Content --- */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-20">
          <span className="text-[#FF0000] font-inter text-sm md:text-[18px] uppercase tracking-widest mb-4">
            GALLERY
          </span>
          <h2 className="font-cormorant font-semibold text-4xl md:text-[64px] leading-[105%] text-[#1A1A1A] mb-8">
            A Glimpse Into <br /> Elegance
          </h2>
          <p className="font-inter text-base md:text-[18px] text-[#555555] max-w-md mb-12">
            Elixir Homes stands as a symbol of refined architecture. Every project 
            is thoughtfully crafted for modern lifestyles.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-[250px] h-[60px] bg-[#E31E24] text-white flex items-center justify-center gap-4 transition-all hover:bg-black"
          >
            <span className="font-inter text-sm md:text-[18px] uppercase">View Gallery</span>
            <ArrowRight size={20} />
          </motion.button>
        </div>

        {/* --- Right Side: The Scrolling Reel --- */}
        <div className="w-full lg:w-1/2 h-screen relative">
          {/* This div moves UP while the parent is PINNED */}
          <div 
            ref={galleryWrapperRef} 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 py-[10vh]"
          >
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative overflow-hidden group rounded-sm w-full 
                  ${index % 3 === 1 ? 'h-[400px] md:h-[550px] md:mt-12' : 'h-[300px] md:h-[450px]'}
                `}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="50vw"
                />
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-black font-bold opacity-0 group-hover:opacity-100 transition-all">
                  D
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}