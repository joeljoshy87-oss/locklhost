"use client";

import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
  const component = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    // Reset scroll position on load
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

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
          invalidateOnRefresh: true,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="bg-[#1B1A1F] w-full overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
                 <span className="font-inter text-[#FF0000] text-sm md:text-[14px] uppercase tracking-widest mb-4">
                    Featured Projects
                </span>
                <h2 className="font-cormorant font-semibold text-4xl md:text-6xl lg:text-[64px] leading-[1.1] text-white">
                    Shaping Skylines with <br className="hidden md:block" /> Distinction
                </h2>
            </div>
            <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-8 py-4 bg-[#E31E24] text-white flex items-center justify-center gap-4 shrink-0 transition-colors hover:bg-red-700"
            >
            <span className="font-inter text-sm md:text-[18px] uppercase">View All Projects</span>
            <ArrowUpRight size={20} />
            </motion.button>
      </div>

      <div ref={slider} className="h-screen w-[400vw] flex relative">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="panel w-screen h-full flex items-center justify-center relative"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                />
                 <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full max-w-[1312px] text-white px-6 md:px-12">
                 <p className="text-gray-300 text-sm uppercase tracking-widest mb-4">{project.status}</p>
                <h3 className="font-cormorant text-5xl md:text-6xl lg:text-[64px] font-semibold leading-none mb-4">{project.title}</h3>
                <p className="text-gray-200 text-base md:text-lg mb-8">{project.location}</p>
                 <button className="group flex items-center gap-4 md:gap-6 px-7 py-3 md:px-9 md:py-3 border border-white text-white font-inter text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Dummy icon, replace if you have a real one
const ArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
