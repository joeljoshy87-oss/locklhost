"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from "embla-carousel-react";
import { motion, useTransform, useMotionValue, MotionValue } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

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
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);
  
  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollProgress(emblaApi.scrollProgress());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    onScroll(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onSelect, onScroll]);

  const currentProject = projects[selectedIndex];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="overflow-hidden flex-1" ref={emblaRef}>
        <div className="flex h-full">
          {projects.map((project, index) => (
            <CarouselSlide 
              project={project} 
              key={project.id} 
              index={index}
              emblaApi={emblaApi}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <motion.div 
            key={currentProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: DURATION, ease: "easeOut" }}
            className="px-6 md:px-12 lg:px-24 pt-12 pb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-8">
            <div>
              <h3 className="font-cormorant text-5xl md:text-7xl leading-none">
                {currentProject.title}
              </h3>
              <p className="font-inter text-base text-white mt-4">{currentProject.location}</p>
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
              <p className="font-inter text-base text-white">{currentProject.status}</p>
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
        </motion.div>
      </div>
    </div>
  );
};

const CarouselSlide = ({ project, emblaApi, index, scrollProgress }: { project: Project, emblaApi: EmblaCarouselType | undefined, index: number, scrollProgress: number }) => {
    const TWEEN_FACTOR = 4.2;

    const y = useMotionValue(0);

    useEffect(() => {
        if (!emblaApi) return;

        const engine = emblaApi.internalEngine();
        const tweenNodes = engine.tweenNodes.get(emblaApi.selectedScrollSnap());
        
        const onScroll = () => {
            const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
            engine.location.add(-engine.scrollBody.velocity());
            const a = emblaApi.scrollSnapList().length;
            const b = 1/a
            const c = (index * b)
            const d = (progress - c) / b
            const e = d*100*-1;
            
            y.set(e);
        };
        
        emblaApi.on('scroll', onScroll);
        return () => { emblaApi.off('scroll', onScroll) };

    }, [emblaApi, index, y]);

    return (
        <div className="flex-[0_0_100%] relative" key={project.id}>
            <motion.div className="h-full" style={{ y: y.get() > -100 && y.get() < 100 ? {y: `${y.get()}%`} : {y:0} }}>
                <div className="relative h-full w-full">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        style={{
                            scale: 1.35,
                            objectPosition: "center",
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
};
