"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";

const galleryItems = [
    { id: 1, src: "/buildings/flat.jpg", alt: "Elixir Anfield" },
    { id: 2, src: "/buildings/2.webp", alt: "Elixir Highbury" },
    { id: 3, src: "/buildings/3.webp", alt: "Elixir Greens" },
    { id: 4, src: "/buildings/4.webp", alt: "Elixir Avalon" },
    { id: 5, src: "/buildings/5.webp", alt: "The Orchid" },
];

export default function Gallery() {
  return (
    <div className="bg-white w-full py-20 lg:py-24 overflow-hidden">
      {/* Header aligned with max-width and padding */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mb-16 pt-[200px] pb-[77px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-y-8">
          {/* Text content on the left */}
          <div className="lg:max-w-[55%]">
            <span className="text-[#FF0000] font-inter text-sm md:text-[18px] leading-[28px] uppercase tracking-widest block mb-4">
              GALLERY
            </span>
            <h2 className="font-cormorant font-semibold text-4xl md:text-[64px] leading-[105%] text-[#1A1A1A] [word-spacing:0.1em] text-left">
              A Glimpse Into Elegance
            </h2>
            <p className="font-inter font-normal text-base md:text-[18px] leading-[28px] text-[#7B7B7B] mt-6">
              Step into the world of Elixir Homes through our gallery, where every image reflects our commitment to quality and fine living. From architectural brilliance to crafted interiors, each frame showcases excellence.
            </p>
          </div>

          {/* Button on the right, aligned to the end */}
          <div className="w-full lg:w-auto flex justify-end lg:items-end flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="h-[60px] bg-[#E31E24] text-white flex items-center justify-center gap-4 transition-colors hover:bg-black px-10 uppercase tracking-widest font-inter text-sm md:text-[16px]"
            >
              View Gallery
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Full-width Carousel */}
      <Carousel
          opts={{
              align: "start",
              loop: true,
          }}
          className="w-full"
      >
          <CarouselContent className="-ml-1 items-center">
              {galleryItems.map((item, index) => (
                  <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                          <div className={cn(
                            "relative overflow-hidden group rounded-sm w-full",
                            index % 3 === 0 && "h-[350px] md:h-[400px]", // Smaller
                            index % 3 === 1 && "h-[400px] md:h-[500px]", // Taller
                            index % 3 === 2 && "h-[350px] md:h-[450px]"  // Normal
                          )}>
                              <Image
                                  src={item.src}
                                  alt={item.alt}
                                  fill
                                  className="object-cover transition-transform duration-700 py-3 group-hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="absolute bottom-4 right-5 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-black font-bold opacity-0 group-hover:opacity-100 transition-all text-xl">
                                  +
                              </div>
                          </div>
                      </div>
                  </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>

    </div>
  );
}
