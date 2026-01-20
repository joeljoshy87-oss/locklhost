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
    description: "Elixir Anfield is set in one of Thrissur's finest residential localities, surrounded by well-known colonies such as Hill Gardens and Green Valley.",
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
      <div ref={slider} className="relative w-full h-[80vh]  overflow-hidden">
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
                <h3 className="font-cormorant text-6xl md:text-8xl lg:text-[63px] text-white leading-none pb-5">
                  {project.title}
                </h3>
              </div>

              <div className="border-t border-b border-white/30 p-2 py-2 flex flex-col md:flex-row justify-around items-center gap-7 text-center md:text-left">
                <span className="font-inter text-sm md:text-base text-white/90 uppercase tracking-wide flex-1">
                  {project.status}
                </span>
                <span className="px-5 font-inter text-sm md:text-base text-white/70 flex-[1] text-center whitespace-nowrap px-5">
                  {project.location}
                </span>
                <span className="font-inter text-sm md:text-base text-white/90 tabular-nums flex-1 text-right">
                  {String(index + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-around gap-10">
                <div className="max-w-md  mt-20 ">
                  <p className="font-inter text-sm md:text-base text-gray-300 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <button className="flex items-end   gap-2 group text-white uppercase text-sm tracking-[0.2em] border-b border-white/30 pb-2 hover:border-white transition-all">
                    VIEW PROJECT <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>

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