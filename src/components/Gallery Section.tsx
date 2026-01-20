"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GALLERY_ITEMS = [
  { id: 1, src: "/buildings/1.jpg", alt: "Dining Room" },
  { id: 2, src: "/buildings/2.webp", alt: "Villa Exterior" },
  { id: 3, src: "/buildings/3.webp", alt: "Living Space" },
  { id: 4, src: "/buildings/4.webp", alt: "Kitchen" },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !galleryRef.current) return;

    gsap.to(galleryRef.current, {
      y: -300,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white w-full overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 min-h-screen">

        {/* ───────────── LEFT COLUMN ───────────── */}
        <div className="grid grid-cols-[1fr_auto] grid-rows-auto gap-x-12 gap-y-6 max-w-4xl">

{/* GALLERY */}
<span className="col-span-2 text-[#FF0000] font-inter text-sm md:text-[18px] uppercase tracking-widest">
  GALLERY
</span>

{/* HEADING */}
<h2 className="font-cormorant font-semibold text-4xl md:text-[64px] leading-[105%] text-[#1A1A1A]">
  A Glimpse Into Elegance
</h2>

{/* BUTTON — explicitly aligned with PARAGRAPH */}
<button className="self-start h-[60px] px-10 bg-[#E31E24] text-white flex items-center gap-3 uppercase tracking-widest font-inter text-sm hover:bg-black transition-colors whitespace-nowrap">
  View Gallery →
</button>

{/* PARAGRAPH */}
<p className="text-[#7B7B7B] text-[16px] leading-[26px] max-w-xl">
  Step into the world of Elixir Homes through our gallery, where every image
  reflects our commitment to quality and fine living. From architectural
  brilliance to crafted interiors, each frame showcases excellence. Explore
  the spaces where your dream home begins.
</p>
  <button className="h-[60px] px-10 bg-[#E31E24] text-white uppercase">
              View Gallery
            </button>
          </div>
          </div>

          


        

        {/* ───────────── RIGHT COLUMNS (GALLERY) ───────────── */}
        <div className="lg:col-span-2">
          <div
            ref={galleryRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="relative h-[300px] overflow-hidden rounded-xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

  
    </section>
  );
}