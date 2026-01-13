"use client";

import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { id: 1, src: "/buildings/flat.jpg", alt: "Elixir Anfield" },
  { id: 2, src: "/buildings/2.webp", alt: "Elixir Highbury" },
  { id: 3, src: "/buildings/3.webp", alt: "Elixir Greens" },
  { id: 4, src: "/buildings/4.webp", alt: "Elixir Avalon" },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const pin = gsap.fromTo(
      trackRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${100 * (galleryImages.length - 1)}%`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=3000", // Adjust this value to control scroll speed
          scrub: 1,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);


  return (
    <section ref={sectionRef} className="bg-white w-full py-24 relative overflow-hidden">
        {/* --- Header Section --- */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mb-16 lg:mb-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
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
        </div>

      {/* --- Horizontal Scroll Section --- */}
      <div ref={triggerRef} className="relative h-screen">
        <div ref={trackRef} className="absolute top-0 left-0 flex items-center h-full w-[400vw]">
          {galleryImages.map((image) => (
            <div key={image.id} className="w-screen h-full flex justify-center items-center px-24">
              <div className="relative w-full h-[80vh] max-w-[1200px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
