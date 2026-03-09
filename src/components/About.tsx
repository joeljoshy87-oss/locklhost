"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimate, useMotionValue, useTransform } from "framer-motion";
import { SpinningText } from "./SpinningText";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }
  }
};

const stats = [
  { value: 4, label: "Projects Completed" },
  { value: 7, label: "Builders Award" },
  { value: 15, label: "Years of Experience" },
];

function AnimatedStat({ value, label }: { value: number; label: string }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-100px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, animate, count, value]);

  return (
    <div ref={scope} className="flex flex-col">
      <div className="leading-[1.15] font-cormorant pb-10 font-semibold text-5xl md:text-[64px] text-[#1A1A1A] mb-8">
        <motion.span>{rounded}</motion.span>
        <span>+</span>
      </div>
      <span className="font-inter text-sm text-[#777777] uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <div className="mx-auto w-[95%] max-w-[1400px] px-0 sm:w-[90%] lg:w-[88%] py-20 lg:py-32 xl:pt-40 xl:pb-52">
      <div className="w-full flex justify-between">
        
        {/* Left Content */}
       {/* Left Content - Updated with perfect alignment */}
          <div className="w-full md:w-[48%] lg:w-[56%] xl:w-[60%] 2xl:w-[51.7%]">
            <motion.span variants={fadeInUp} className="block text-[#EE3E25] font-inter text-sm xl:text-[17px] uppercase mb-3 xl:mt-0.5">
              About Us
            </motion.span>
            
            <motion.h2 variants={fadeInUp} className="font-cormorant tracking-normal  font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-[64px]  text-[#1A1A1A] mt-4 lg:mt-5.75 xl:mt-6">
              Inspired by Vision Built, with Precision
            </motion.h2>
            
            {/* --- PERFECTLY ALIGNED PARAGRAPH CONTAINER --- */}
           {/* --- UPDATED PARAGRAPH CONTAINER --- */}
<motion.div 
  className="text-[#7B7B7B] flex flex-col mt-8 justify-between gap-y-6 lg:flex-row lg:gap-x-10 lg:mt-7 xl:mt-24.25"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
  transition={{ delay: 0.2 }}
>
  {/* First Paragraph */}
  <p className="font-comfortaa text-[14px] md:text-[15px] xl:text-[19px] leading-relaxed max-w-2xl lg:max-w-none">
    Our power comes in the form of our values. We call ourselves "The Ethical Builder" not as a slogan, but as a guarantee. We are not trying to be the largest, we work on being the most trustworthy. Our team proudly delivers what we guarantee, on schedule, with durability.
  </p>

  {/* Second Paragraph - Removed fixed w-[54rem] which was causing the break issues */}
  <p className="font-comfortaa text-[14px] md:text-[15px] xl:text-[19px] leading-relaxed max-w-2xl lg:max-w-none">
    Our commitment to precision, sustainability, and attention to detail has shaped us into one of the most trusted ones.
  </p>
</motion.div>

          {/* Stats - Desktop */}
            <motion.div 
              className="hidden md:flex justify-between mt-7 lg:mt-7 mb-12 lg:mb-12 xl:mt-3 xl:mb-20 md:mt-10 md:mb-12  max-w-5xl mx-auto w-full "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              {[
                { value: 4, label: "Projects Completed" },
                { value: 7, label: "Builders Award" },
                { value: 15, label: "Years of Experience" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-start min-w-[140px] ">
                  <div className="font-cormorant text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 flex items-baseline gap-1">
                    <span>{stat.value}</span>
                    <span className="text-3xl md:text-4xl lg:text-5xl">+</span>
                  </div>
                  <p className="font-inter w-1/2 text-base sm:text-lg text-gray-400 mt-2 xl:text-[17px] xl:text-nowrap md:text-[100%]  md:text-left  md:items-center xl:mt-4 leading-relaxed  ">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          
          
          {/* Stats - Mobile */}
          <motion.div
            className="md:hidden grid grid-cols-2 gap-6 sm:gap-8 mt-7 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {[
              { value: 15, label: "Years of Experience" },
              { value: 4, label: "Projects Completed" },
              { value: 7, label: "Builders Award" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col min-w-[120px]">
                <div className="font-cormorant text-4xl sm:text-5xl font-semibold text-gray-900 flex items-baseline">
                  <span>{stat.value}</span>
                  <span className="text-3xl sm:text-4xl ml-1">+</span>
                </div>
                <p className="font-inter text-sm text-gray-600 mt-1 whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
           <a href="/about" className="group inline-flex items-center justify-between gap-8 bg-[#d41c04] px-8 py-4 md:py-6 lg:py-4 text-white transition-all duration-300 hover:bg-white hover:text-[#dd1a00] border border-[#EE3E25] w-full sm:w-fit">
            <span className="font-inter text-sm font-medium tracking-widest uppercase">
              Know More
              </span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          </motion.div>
        </div>
         
        {/* Right Image */}
        <motion.div 
          className="hidden relative md:block md:w-[46%] md:h-[35rem] lg:w-[35%] xl:w-[27rem] xl:h-[48rem] xl:right-18 2xl:right-16"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about.webp"
            alt="About Us Image"
            fill
            className="w-full h-auto object-cover"
          />
         <div className="absolute  w-28 h-28 rounded-full flex items-center justify-center -bottom-10 -right-4 lg:-bottom-12 lg:-right-10 xl:-bottom-20 xl:-right-12 2xl:-bottom-20">
            <SpinningText text="THE ETHICAL BUILDER">
              <span className="lg:text-[130px] xl:text-[130px] text-[110px]   font-bold font-cormorant text-[#EE3E25] leading-none select-none">
                E
              </span>
            </SpinningText>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}