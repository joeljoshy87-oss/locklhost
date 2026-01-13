"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from "embla-carousel-react";
import { motion, useTransform, useMotionValue } from "framer-motion";
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
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const currentProject = projects[selectedIndex];
  const otherProjects = projects.filter((_, i) => i !== selectedIndex);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="overflow-hidden flex-1" ref={emblaRef}>
        <div className="flex h-full">
          {projects.map((project, index) => (
            <CarouselSlide project={project} key={index} emblaApi={emblaApi} index={index} />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 bg-[#1A1A1A] border-t border-white/10">
        <motion.div 
            key={currentProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION, ease: "easeOut" }}
            className="px-6 md:px-12 lg:px-24 pt-12 pb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-8">
            <h3 className="font-cormorant text-5xl md:text-7xl leading-none">
              {currentProject.title}
            </h3>
            <div className="flex gap-3">
              <button
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                className="p-3 border border-white/20 rounded-full text-white disabled:opacity-30 hover:bg-white hover:text-black transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                className="p-3 border border-white/20 rounded-full text-white disabled:opacity-30 hover:bg-white hover:text-black transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end border-t border-white/20 pt-8">
            <div>
              <p className="font-inter text-sm text-gray-300 uppercase tracking-wider mb-2">Location</p>
              <p className="font-inter text-base text-white">{currentProject.location}</p>
            </div>
            <div>
              <p className="font-inter text-sm text-gray-300 uppercase tracking-wider mb-2">Status</p>
              <p className="font-inter text-base text-white">{currentProject.status}</p>
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

const CarouselSlide = ({ project, emblaApi, index }: { project: Project, emblaApi: EmblaCarouselType | undefined, index: number }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;
        const onScroll = () => {
            const engine = emblaApi.internalEngine();
            const scrollProgress = emblaApi.scrollProgress();
            const scrollSnapList = emblaApi.scrollSnapList();
            const snapLength = scrollSnapList.length;
            const snapIndex = engine.index.get();
            const distanceToSnap = scrollSnapList[snapIndex] - scrollProgress;

            const progress = 1 - Math.abs(distanceToSnap);
            if (snapIndex === index) {
                setProgress(progress);
            } else {
                setProgress(0);
            }
        };

        emblaApi.on('scroll', onScroll);
        return () => {
            emblaApi && emblaApi.off('scroll', onScroll);
        };
    }, [emblaApi, index]);

    const y = useTransform(useMotionValue(progress), [0, 1], ['0%', '-10%']);
    const scale = useTransform(useMotionValue(progress), [0, 1], [1, 1.15]);


    return (
        <div className="flex-shrink-0 flex-grow-0 basis-full relative">
            <motion.div className="h-full" style={{ y }}>
                <div className="relative h-full w-full">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        style={{
                            scale,
                            objectPosition: "center",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
                </div>
            </motion.div>
        </div>
    );
};
