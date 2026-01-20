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
    description: "Elixir Anfield is set in one of Thrissur’s finest residential localities, surrounded by well-known colonies such as Hill Gardens, Lesona Enclave, Garden Enclave, Green Valley, and Silent Valley.",
    image: "/buildings/flat.jpg",
    status: "Ongoing Apartment Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "02",
    title: "Elixir Highbury",
    location: "Ayyanthole | Thrissur",
    description: "“The Orchid” is one of our signature projects, created with a strong focus on luxury and comfort. Located in the heart of Kuttanellur, it stands in one of Thrissur’s finest residential areas.",
    image: "/buildings/2.webp",
    status: "Completed Apartment Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "03",
    title: "Elixir Greens",
    location: "Puranattukara | Thrissur",
    description: "Akkara Gardens is a luxury villa Project at Kuttanellur, Thrissur. Spread across 1.20 acres with 12 exclusive units, it offers privacy, sustainability, and refined living.",
    image: "/buildings/3.webp",
    status: "Completed Villa Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "04",
    title: "Elixir Avalon",
    location: "Kuttanellur | Thrissur",
    description: "Elixir Manavath Heights was a 4-acre land development project at Vadakkenchery, near Alathur in Palakkad.",
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
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".project-panel");
      gsap.set(panels, { yPercent: 0, opacity: 0 });
      gsap.set(panels[0], { opacity: 1 });

      gsap.timeline({
        scrollTrigger: {
          trigger: slider.current,
          start: "top 14%", 
          end: "+=+3000",
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0,
            ease: "power1.inOut"
          },
          onUpdate: (self) => {
            const index = Math.round(self.progress * (panels.length - 1));
            panels.forEach((panel, i) => {
              gsap.set(panel, { opacity: i === index ? 1 : 0 });
            });
          }
        }
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="bg-[#1B1A1F] text-white  w-full">
      {/* Header Section */}
      <div className="max-w-[1440px] mx-auto  md:px-12 lg:px-4 py-20 lg:py-32">
        <div className="flex flex-col md:flex-row justify-arround items-start md:items-end gap-12 lg:gap-20">
          <div className="max-w-3xl">
            <span className="font-inter text-sm uppercase tracking-[0.3em] text-[#E31E24] mb-14 block font-medium">
              FEATURED PROJECTS
            </span>
            <h2 className="font-cormorant font-semibold text-5xl md:text-7xl lg:text-[80px] leading-[0.9] text-white">
              Shaping Skylines with Distinction
            </h2>
            <p className="text-gray-500 font-inter text-base md:text-lg leading-relaxed mb-8 gap-4 py-5">
              Our portfolio features elegant completed and ongoing projects across Thrissur.
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

      {/* Slider Section */}
      <div ref={slider} className="relative w-full h-screen  overflow-hidden">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-panel absolute inset-0 w-full h-full flex items-center  justify-center bg-[#1B1A1F]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
            </div>

            {/* Content Overlay */}
            
<div className="relative z-10 w-[74%]  mt-[26%] mx-auto pl-1 h-full  flex flex-col justify-start">
              <div className="mb-0">
                <h3 className="font-cormorant  text-6xl md:text-8xl lg:text-[63px] text-white leading-none pb-5">
                  {project.title}
                </h3>
              </div>

             <div className="border-t border-b border-white/30   mb-32 py-1 flex flex-col md:flex-row justify-between items-center gap-1 text-center md:text-left">
              <div className="w-1/2 flex justify-start p-5 mr-10 items-center ">
                <span className="font-inter text-sm md:text-base text-white/90 uppercase tracking-wide">
                  {project.status}
                </span>
              </div>
              <div className="w-1/2 flex justify-between items-center">
                <span className="font-inter text-sm md:text-base text-white/70 lg:-ml-36 2xl:-ml-32 whitespace-nowrap">
                  {project.location}
                </span>
                <span className="font-inter text-sm md:text-base text-white/90 tabular-nums">
                  {String(index + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
                </span>
              </div>
            </div>

              <div className="flex flex-col   w-full mt-16 md:flex-row  justify-center items-around gap-10  ">
                <div className="max-w-2xl lg:max-w-3x ml-5  ">
                  <p className="font-inter  para-text text-sm md:text-lg text-gray-300 mb-8 ">
                    {project.description}
                  </p>
                  <button className="flex items-end  mr-24  gap-2 group text-white uppercase text-sm tracking-[0.2em] border-b border-white/30 pb-2 hover:border-white transition-all">
                    VIEW PROJECT <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>

                <div className="flex ml-20 scrollbar-hide items-end gap-2 md:gap-4 overflow-x-auto max-w-full">
                  {project.thumbnails.map((thumb, tIndex) => (
                    <div key={tIndex} className="relative group">
                      <div className={`relative w-20 h-14 md:w-32 md:h-20 overflow-hidden transition-all duration-500 ${index === tIndex ? 'border-2 border-white scale-105' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'}`}>
                        <Image src={thumb} alt="thumb" fill className="object-cover" />
                      </div>
                      <span className="absolute -top-8 left-0 text-[20px]  font-mono text-white/40">
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