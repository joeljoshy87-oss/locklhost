"use client";

import React, { useRef, useLayoutEffect } from "react";
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
    location: "Thrissur - Kuttanellur Main Road | Thrissur",
    description: "Elixir Homes stands as a symbol of refined architecture and uncompromised quality.",
    image: "/buildings/flat.jpg",
    statuses: [
      "Ongoing Apartment Project",
      "Completed Apartment Project | Sold Out",
      "Completed Villa Project | Sold Out",
      "Completed Land Development Project | Sold Out",
    ],
    thumbnails: [
      { id: "t1", image: "/buildings/flat.jpg" },
      { id: "t2", image: "/buildings/2.webp" },
      { id: "t3", image: "/buildings/3.webp" },
      { id: "t4", image: "/buildings/4.webp" },
    ],
  },
  {
    id: "02",
    title: "Elixir Highbury",
    location: "Ayyanthole | Thrissur",
    description: "A testament to modern design, offering unparalleled comfort and style.",
    image: "/buildings/2.webp",
    statuses: [
      "Completed Apartment Project",
      "Luxury 3BHK Apartments",
      "Prime Location with City Access",
    ],
     thumbnails: [
      { id: "t1", image: "/buildings/flat.jpg" },
      { id: "t2", image: "/buildings/2.webp" },
      { id: "t3", image: "/buildings/3.webp" },
      { id: "t4", image: "/buildings/4.webp" },
    ],
  },
  {
    id: "03",
    title: "Elixir Greens",
    location: "Puranattukara | Thrissur",
    description: "Experience tranquility and luxury in our exclusive villa community.",
    image: "/buildings/3.webp",
    statuses: [
      "Completed Villa Project",
      "Spacious 4BHK Villas",
      "Eco-Friendly Design",
      "Gated Community with Amenities",
    ],
     thumbnails: [
      { id: "t1", image: "/buildings/flat.jpg" },
      { id: "t2", image: "/buildings/2.webp" },
      { id: "t3", image: "/buildings/3.webp" },
      { id: "t4", image: "/buildings/4.webp" },
    ],
  },
  {
    id: "04",
    title: "Elixir Avalon",
    location: "Kuttanellur | Thrissur",
    description: "Cutting-edge apartments designed for the future of urban living.",
    image: "/buildings/4.webp",
    statuses: [
      "Ongoing Apartment Project",
      "Smart Home Features",
      "Rooftop Infinity Pool",
      "Strategic Location",
    ],
     thumbnails: [
      { id: "t1", image: "/buildings/flat.jpg" },
      { id: "t2", image: "/buildings/2.webp" },
      { id: "t3", image: "/buildings/3.webp" },
      { id: "t4", image: "/buildings/4.webp" },
    ],
  },
];

export default function FeaturedProjects() {
  const component = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';

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
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="bg-[#1B1A1F] text-white w-full overflow-hidden">
      {/* --- Header Section --- */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-2xl">
            <span className="font-inter text-sm uppercase tracking-[0.2em] text-gray-400 mb-4 block">
              FEATURED PROJECTS
            </span>
            <h2 className="font-cormorant font-semibold text-5xl md:text-6xl lg:text-7xl leading-none">
              Shaping Skylines with Distinction
            </h2>
          </div>
          <div className="max-w-sm">
             <p className="text-gray-300 font-inter font-light text-base md:text-lg leading-relaxed mb-6">
              Elixir Homes stands as a symbol of refined architecture and uncompromised quality. With every project, we aim to create living spaces that embody elegance and functional excellence.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="group w-fit bg-[#E31E24] text-white px-8 py-3.5 font-inter text-sm uppercase tracking-widest flex items-center gap-4 transition-colors"
            >
              View All Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* --- Horizontal Scrolling Section --- */}
      <div ref={slider} className="h-screen w-[400vw] flex relative">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="panel w-screen h-80% flex items-center justify-center relative"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover"
                priority={index === 0}
                sizes="90vw"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto text-white p-10 md:p-7 lg:px-24 lg:py-20 flex flex-col justify-between mt-20">
              
              {/* Top Section */}
              <div className="w-full mt-35">
                <h2 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white/90">
                  {project.title}
                </h2>
                <div className="w-full h-[1px] bg-white/20 mt-4" />
              </div>

              {/* Middle Section */}
              <div className="w-full grid grid-cols-2 gap-8 items-start -mt-20">
                {/* Left: Status List */}
                <div className="font-inter text-sm md:text-base text-white/80 space-y-2">
                  {project.statuses.map((status, i) => (
                    <p key={i}>{status}</p>
                  ))}
                </div>

                {/* Right: Location & Counter */}
                <div className="flex flex-col items-start md:items-end text-left md:text-right">
                  <p className="font-inter text-sm md:text-base text-white/80 mb-4">
                    {project.location}
                  </p>
                  <p className="font-mono text-sm text-white/60">
                    {String(index + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
                  </p>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-white/20" />

              {/* Bottom Section */}
              <div className="w-full flex justify-between items-end gap-8">
                  {/* Left: Description & CTA */}
                  <div className="max-w-xs">
                      <p className="font-inter text-sm text-white/70 mb-6">
                        {project.description}
                      </p>
                      <button className="group flex items-center gap-3 text-sm font-medium tracking-wide text-white/90 hover:text-white transition-colors">
                          VIEW PROJECT
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </button>
                      <div className="w-1/3 h-[1px] bg-white/40 mt-2" />
                  </div>

                  {/* Right: Thumbnails */}
                  <div className="flex items-end gap-3">
                      {project.thumbnails.map((thumb, thumbIndex) => (
                          <div 
                              key={thumb.id}
                              className={`relative w-20 h-14 md:w-28 md:h-20 transition-all duration-300 ease-in-out cursor-pointer ${index === thumbIndex ? 'border-2 border-white' : 'opacity-50 hover:opacity-80'}`}
                          >
                              <Image 
                                  src={thumb.image}
                                  alt={`thumbnail ${thumb.id}`}
                                  fill
                                  className="object-cover"
                              />
                               <div className={`absolute inset-0 bg-black/20 ${index === thumbIndex ? 'bg-transparent' : ''}`} />
                              <span className="absolute top-1 left-2 font-mono text-xs text-white/80">
                                {`0${thumbIndex + 1}`}
                              </span>

                              {index === thumbIndex && (
                                <div className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                                    <div className="w-3 h-3 bg-red-600 rounded-full" />
                                </div>
                              )}
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
