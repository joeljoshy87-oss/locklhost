"use client";

import React, { useState, useRef, useLayoutEffect, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Elixir Anfield",
    location: "Thrissur - Kuttanellur Main Road | Thrissur",
    status: "Ongoing Apartment Project",
    image: "/buildings/flat.jpg",
  },
  {
    id: "02",
    title: "Elixir Highbury",
    location: "Ayyanthole | Thrissur",
    status: "Completed Apartment Project",
    image: "/buildings/2.webp",
  },
  {
    id: "03",
    title: "Elixir Greens",
    location: "Puranattukara | Thrissur",
    status: "Completed Villa Project",
    image: "/buildings/3.webp",
  },
  {
    id: "04",
    title: "Elixir Avalon",
    location: "Kuttanellur | Thrissur",
    status: "Ongoing Apartment Project",
    image: "/buildings/4.webp",
  },
];

export default function FeaturedProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sectionRef = useRef(null);

  // Sync Embla state with React state
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // GSAP: Viewport Reveal
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-content", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#1B1A1F] flex flex-col items-center py-12 md:py-24 overflow-hidden min-h-screen"
    >
      {/* --- Header Panel --- */}
      <div className="reveal-content w-full max-w-[1440px] px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-24">
        <div className="flex flex-col">
          <span className="font-inter text-[#FF0000] text-sm md:text-[14px] uppercase tracking-widest mb-4">
            Featured Projects
          </span>
          <h2 className="font-cormorant font-semibold text-4xl md:text-6xl lg:text-[64px] leading-[1.1] text-white mb-6">
            Shaping Skylines with <br className="hidden md:block" /> Distinction
          </h2>
          <p className="font-inter font-normal text-base md:text-[18px] leading-relaxed text-gray-400 max-w-[700px]">
            Our portfolio features elegant completed and ongoing projects across Thrissur, 
            driven by our values of trust and innovation.
          </p>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full md:w-[250px] h-[60px] bg-[#E31E24] text-white flex items-center justify-center gap-4 shrink-0 transition-colors hover:bg-red-700"
        >
          <span className="font-inter text-sm md:text-[18px] uppercase">View All Projects</span>
          <ArrowUpRight size={20} />
        </motion.button>
      </div>

      {/* --- Main Display (Slider) --- */}
      <div className="reveal-content w-full max-w-[1600px] px-0 md:px-6">
        <div className="relative overflow-hidden group aspect-[4/5] md:aspect-[16/9] max-h-[85vh]">
          <div className="h-full" ref={emblaRef}>
            <div className="flex h-full">
              {projects.map((project) => (
                <div key={project.id} className="flex-[0_0_100%] relative h-full">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
                    priority
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1A1F] via-black/20 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* --- Content Overlay --- */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20 flex flex-col justify-end pointer-events-none">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-6 md:pb-10 pointer-events-auto">
              <h3 className="font-cormorant text-4xl md:text-6xl lg:text-[80px] leading-none text-white mb-6 md:mb-0">
                {projects[selectedIndex]?.title}
              </h3>
              
              <div className="flex gap-3 md:gap-4">
                <button onClick={scrollPrev} className="p-3 md:p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all">
                  <ArrowLeft size={20} className="md:w-6 md:h-6" />
                </button>
                <button onClick={scrollNext} className="p-3 md:p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all">
                  <ArrowRight size={20} className="md:w-6 md:h-6" />
                </button>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 pt-6 md:pt-10 gap-6 pointer-events-auto">
                <div className="font-inter text-xs md:text-sm text-gray-400 space-y-1">
                  <p className="text-white font-medium">{projects[selectedIndex]?.status}</p>
                  <p className="hidden md:block">Completed Project | Sold Out</p>
                </div>
                
                <div className="md:text-center font-inter text-xs md:text-sm text-gray-400">
                  <p className="uppercase tracking-widest">{projects[selectedIndex]?.location}</p>
                </div>
                
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-2">
                  <p className="font-inter text-sm text-white tabular-nums">
                    {String(selectedIndex + 1).padStart(2, '0')} <span className="text-gray-500">of</span> {String(projects.length).padStart(2, '0')}
                  </p>
                  <button className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-white group">
                    View Project <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}