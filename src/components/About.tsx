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
    <div className="mx-auto w-[95%] max-w-[1400px] px-4 sm:w-[90%] lg:w-[88%] py-20 lg:py-32 xl:pt-40 xl:pb-52">
      <div className="w-full flex justify-between">
        
        {/* Left Content */}
        <div className="w-full pb-8 md:w-[48%] lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
        <motion.span variants={fadeInUp} className="block text-[#FF0000] font-inter text-lg md:text-base uppercase tracking-widest mb-5">
            About Us
          </motion.span>
          
          <motion.h2 variants={fadeInUp} className=" leading-[1.15] font-cormorant pb-10 font-semibold text-[48px] md:text-[64px]   text-[#1A1A1A] mb-8">
            Inspired by Vision, Built <br className="hidden md:block" /> with Precision
          </motion.h2>
          
          <motion.div 
           className="text-gray-500 text-lg leading-7 flex flex-col mt-8 justify-between gap-y-4 lg:flex-row lg:mt-12 lg:gap-x-16 xl:gap-x-24 xl:mt-20 2xl:gap-x-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <p className="para-text font-inter">
              Our power comes in the form of our values. We call ourselves “The Ethical Builder” not as a slogan, but as a guarantee. We are not trying to be the largest, we work on being the most trustworthy. Our team proudly delivers what we guarantee, on schedule, with durability.
            </p>
            <p className="para-text font-inter  ">
              Our commitment to precision, sustainability, and attention to detail has shaped us into one of the most trusted ones.
            </p>
          </motion.div>
          
          {/* Stats - Desktop */}
            <motion.div 
              className="hidden md:flex justify-between mt-7 lg:mt-7 mb-12 lg:mb-12 xl:mt-14 xl:mb-16 max-w-5xl mx-auto w-full px-4"
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
                  <p className="font-inter text-base sm:text-lg text-gray-600 mt-2 md:mt-3 xl:mt-4 leading-relaxed">
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
           <a href="/about" className="group inline-flex items-center justify-between gap-8 bg-[#EE3E25] px-8 py-4 text-white transition-all duration-300 hover:bg-white hover:text-[#EE3E25] border border-[#EE3E25] w-full sm:w-fit">
            <span className="font-inter text-sm font-medium tracking-widest uppercase">
              Know More
              </span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          </motion.div>
        </div>
         
        {/* Right Image */}
        <motion.div 
          className="hidden relative md:block md:w-[48%] lg:w-[35%] xl:w-[27rem] xl:h-[48rem] xl:right-18 2xl:right-16"
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
         <div className="absolute w-28 h-28 rounded-full flex items-center justify-center bottom-20 -right-4 lg:-bottom-12 lg:-right-10 xl:-bottom-20 xl:-right-14 2xl:-bottom-24">
            <SpinningText text="THE ETHICAL BUILDER">
              <span className="text-[100px] font-bold font-cormorant text-[#EE3E25] leading-none select-none">
                E
              </span>
            </SpinningText>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}