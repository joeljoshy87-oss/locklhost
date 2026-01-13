"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

type Project = {
  id: string;
  title: string;
  location: string;
  status: string;
  image: string;
};

type PropType = {
  projects: Project[];
  options?: EmblaOptionsType;
};

const DURATION = 0.7;

export const ParallaxCarousel = ({ projects, options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);
  
  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const currentProject = projects[selectedIndex];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="overflow-hidden flex-1" ref={emblaRef}>
        <div className="flex h-full">
          {projects.map((project, index) => (
            <CarouselSlide 
              project={project} 
              key={project.id} 
              emblaApi={emblaApi}
              index={index}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div 
            className="px-6 md:px-12 lg:px-24 pt-12 pb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-8">
            <div>
              <h3 className="font-cormorant text-5xl md:text-7xl leading-none">
                {currentProject?.title}
              </h3>
              <p className="font-inter text-base text-white mt-4">{currentProject?.location}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={scrollPrev}
                className="p-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end border-t border-white/20 pt-8">
            <div>
              <p className="font-inter text-sm text-gray-300 uppercase tracking-wider mb-2">Status</p>
              <p className="font-inter text-base text-white">{currentProject?.status}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-inter text-sm text-gray-300 uppercase tracking-wider">
                {String(selectedIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </p>
            </div>
            <div className="flex lg:justify-end">
              <button className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-inter group">
                View Project <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarouselSlide = ({ project, emblaApi, index }: { project: Project, emblaApi: EmblaCarouselType | undefined, index: number }) => {
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!emblaApi) return;
        
        const onScroll = () => {
            if (!slideRef.current) return;
            const progress = emblaApi.scrollProgress();
            const slideProgress = progress - index / (emblaApi.scrollSnapList().length - 1);
            // Move slide up and down based on its position in the carousel
            const y = slideProgress * 50; 
            
            gsap.to(slideRef.current, { 
                y: `${y}%`, 
                duration: 0.1, // A short duration for smooth tracking
                ease: 'power1.out' 
            });
        };
        
        emblaApi.on('scroll', onScroll);
        // Clean up the event listener on component unmount
        return () => { emblaApi.off('scroll', onScroll) };

    }, [emblaApi, index]);

    return (
        <div className="flex-[0_0_100%] relative overflow-hidden">
            <div className="h-full" ref={slideRef}>
                <div className="relative h-full w-full">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        style={{
                            scale: 1.35,
                            objectPosition: "center",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
