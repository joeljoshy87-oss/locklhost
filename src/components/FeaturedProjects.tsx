"use client";

import React, { useRef, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Elixir Anfield",
    location: "Near Hill Gardens Colony & HiLite Mall, Thrissur - Kuttanellur Main Road",
    description: "Elixir Anfield is set in one of Thrissur's finest residential localities, surrounded by well-known colonies such as Hill Gardens, Lesona Enclave, Garden Enclave, Green Valley, and Silent Valley.",
    image: "/buildings/flat.jpg",
    status: "Ongoing Apartment Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "02",
    title: "Elixir Highbury",
    location: "Ayyanthole | Thrissur",
    description: "A testament to modern design, offering unparalleled comfort and style in the heart of the city.",
    image: "/buildings/2.webp",
    status: "Completed Apartment Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "03",
    title: "Elixir Greens",
    location: "Puranattukara | Thrissur",
    description: "Experience tranquility and luxury in our exclusive villa community, designed for sustainable living.",
    image: "/buildings/3.webp",
    status: "Completed Villa Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "04",
    title: "Elixir Avalon",
    location: "Kuttanellur | Thrissur",
    description: "Cutting-edge apartments designed for the future of urban living with smart home features.",
    image: "/buildings/4.webp",
    status: "Ongoing Apartment Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
];

export default function FeaturedProjects() {
  const component = useRef(null);
  const slider = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + (slider.current.offsetWidth),
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="bg-[#1B1A1F] text-white w-full overflow-hidden">
      {/* --- Section Header --- */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-3xl">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-[#E31E24] mb-6 block font-medium">
              FEATURED PROJECTS
            </span>
            <h2 className="font-cormorant font-semibold text-5xl md:text-7xl lg:text-[80px] leading-[0.9] text-white">
              Shaping Skylines with Distinction
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-gray-400 font-inter text-base md:text-lg leading-relaxed mb-8">
              Elixir Homes stands as a symbol of refined architecture and uncompromised quality across Thrissur.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-[#E31E24] text-white px-8 py-4 flex items-center gap-4 text-sm uppercase tracking-widest font-inter"
            >
              View All Projects <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* --- Horizontal Locked Slider --- */}
      <div ref={slider} className="flex w-[400vw] h-screen overflow-hidden relative">
        {projects.map((project, index) => (
          <div key={project.id} className="panel w-screen h-full flex items-center justify-center relative">
            
            {/* Background Image with Darker Overlay for Text Clarity */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover" 
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
            </div>

            {/* Exact Figma Layout Overlay */}
            <div className="relative z-10 w-full max-w-[1312px] mx-auto px-6 h-full flex flex-col justify-center">
              
              {/* Main Title - Matches Figma Height/Position */}
              <div className="mb-4">
                 <h3 className="font-cormorant text-6xl md:text-8xl lg:text-[96px] text-white leading-none">
                    {project.title}
                 </h3>
              </div>

              {/* Data Row with Top and Bottom Borders */}
              <div className="border-t border-b border-white/30 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <span className="font-inter text-sm md:text-base text-white/90 uppercase tracking-wide flex-1">
                  {project.status}
                </span>
                <span className="font-inter text-sm md:text-base text-white/70 flex-[2] text-center px-4">
                  {project.location}
                </span>
                <span className="font-inter text-sm md:text-base text-white/90 tabular-nums flex-1 text-right">
                  {String(index + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
                </span>
              </div>

              {/* Bottom Details & Thumbnails Row */}
              <div className="flex flex-col md:flex-row justify-between items-end mt-16 gap-8">
                
                {/* Left: Description & Button */}
                <div className="max-w-md">
                  <p className="font-inter text-sm md:text-base text-gray-300 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 group text-white uppercase text-sm tracking-[0.2em] border-b border-white/30 pb-2 hover:border-white transition-all">
                    VIEW PROJECT <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>

                {/* Right: Sequential Thumbnails */}
                <div className="flex items-center gap-2 md:gap-4 overflow-x-auto max-w-full pb-4">
                  {project.thumbnails.map((thumb, tIndex) => (
                    <div key={tIndex} className="relative group">
                      <div className={`relative w-20 h-14 md:w-32 md:h-20 overflow-hidden transition-all duration-500 ${index === tIndex ? 'border-2 border-white scale-105' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'}`}>
                        <Image src={thumb} alt="thumb" fill className="object-cover" />
                      </div>
                      <span className="absolute -bottom-6 left-0 text-[10px] font-mono text-white/40">
                        {String(tIndex + 1).padStart(2, '0')}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}