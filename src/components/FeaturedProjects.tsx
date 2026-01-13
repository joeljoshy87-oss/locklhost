"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const projects = [
  {
    id: "01",
    title: "Elixir Anfield",
    location: "Thrissur - Kuttanellur Main Road | Thrissur",
    status: "Ongoing Apartment Project",
    image: "/buildings/1.jpg",
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Refs for GSAP animations
  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const statusRef = useRef(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // GSAP Animation Logic for Project Info
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      [titleRef.current, locationRef.current, statusRef.current],
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power3.out" 
      }
    );
  }, [selectedIndex]);

  const currentProject = projects[selectedIndex];

  return (
    <section className="relative w-full h-screen bg-[#1A1A1A] text-white flex flex-col overflow-hidden">
      {/* --- Background Slider --- */}
      <div className="absolute inset-0 z-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {projects.map((project) => (
            <div className="flex-[0_0_100%] relative h-full" key={project.id}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>
      </div>

      {/* --- UI Content Overlay --- */}
      <div className="relative z-10 flex flex-col h-full">
        {/* --- Top Header Section --- */}
        <div className="px-6 md:px-12 lg:px-24 pt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-gray-400 font-inter text-xs uppercase tracking-[0.2em] mb-4 block">
              Featured Projects
            </span>
            <h2 className="font-cormorant font-semibold text-[48px] md:text-[64px] leading-[110%] mb-6">
              Shaping Skylines with Distinction
            </h2>
          </div>

          <button className="bg-[#FF0000] hover:bg-red-700 transition-colors text-white px-8 py-4 font-inter text-sm uppercase tracking-widest flex items-center gap-4 flex-shrink-0">
            View All Projects <ArrowUpRight size={18} />
          </button>
        </div>

        {/* --- Bottom Controls Section --- */}
        <div className="mt-auto w-full">
          <div className="px-6 md:px-12 lg:px-24 pt-12 pb-12 bg-gradient-to-t from-black via-black/40 to-transparent">
            <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-10">
              <div className="overflow-hidden">
                <h3 
                  ref={titleRef}
                  className="font-cormorant text-5xl md:text-7xl leading-none"
                >
                  {currentProject?.title}
                </h3>
                <p 
                  ref={locationRef}
                  className="font-inter text-base text-gray-300 mt-4"
                >
                  {currentProject?.location}
                </p>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={scrollPrev}
                  className="p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={scrollNext}
                  className="p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-white/10 pt-8">
              <div>
                <p className="font-inter text-[10px] text-gray-400 uppercase tracking-widest mb-1">Status</p>
                <p ref={statusRef} className="font-inter text-sm text-white">
                  {currentProject?.status}
                </p>
              </div>
              
              <div className="flex justify-start md:justify-center">
                <p className="font-inter text-sm text-gray-400 tabular-nums">
                  <span className="text-white">{String(selectedIndex + 1).padStart(2, '0')}</span> / {String(projects.length).padStart(2, '0')}
                </p>
              </div>

              <div className="flex justify-start md:justify-end">
                <button className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-inter group text-white">
                  View Project 
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}