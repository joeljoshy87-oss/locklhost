"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const quickLinks1 = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Projects' },
  { href: '#', label: 'Gallery' },
  { href: '#', label: 'Testimonial' },
];

const quickLinks2 = [
  { href: '#', label: 'Insights' },
  { href: '#', label: 'FAQ' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Legal And Privacy' },
];

const projectLinks = [
  { href: '#', label: 'Elixir Anfield (Ongoing)' },
  { href: '#', label: 'The Orchid (Completed)' },
  { href: '#', label: 'Elixir Akkara Gardens (Completed)' },
  { href: '#', label: 'Elixir Manavath Heights (Completed)' },
  { href: '#', label: 'Elixir Super Luxury Villas (Completed)' },
];

export default function Footer() {
  return (
    <footer className="bg-black  text-gray-300 font-inter pt-16 pb-12 px-4    relative overflow-hidden
        xl:px-24 
       lg:px-6
      md:pt-15 md:px-10
    sm:px-6">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Top Section: CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-5 lg:mt-[3.8%]   md:mt-0 lg:items-center lg:pb-[7.7%]   border-b  border-white">
          <div className="w-full lg:w-2/3 lg:pl-8 mb-8 lg:mb-0 ">
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl md:text-5xl lg:-tracking-[0.3] lg:text-[65px] lg:leading-[79.2px] xl:text-[64px] text-white leading-[110%] sm:leading-[100%] md:text-[min(10vw,55px)]  md:leading-[125%] md:tracking-[0.5] ">
              Let's Discuss<br className="block  sm:hidden md:block lg:block xl:block" /> Your Vision With<br className="block sm:hidden  md:hidden lg:block xl:hidden" />  Us
            </h2>
            <p className="font-comfortaa text-base lg:text-[15px] xl:text-lg text-[#707070] xl:mt-12 leading-relaxed mt-4 md:mt-6 max-w-lg  md:text-[min(10vw,14.5px)]  md:text-nowrap">
              Elixir Homes stands as a symbol of refined architecture and  <br className="block  sm:hidden md:hidden lg:block xl:hidden" />  uncompromised <br className="block  sm:hidden md:block lg:hidden xl:hidden" /> quality.
            </p>
          </div>
          <div className="w-full lg:w-auto mt-6 md:mt-0 lg:mt-20  flex xl:mt-20 justify-start md:justify-start   ">
            <Button 
              className="bg-[#E31E24] md:text-[min(10vw,16px)] rounded-none text-white w-full h-12 px-6 py-3 flex items-center xl:mt-24   justify-between gap-2  uppercase  font-comfortaa hover:bg-red-700 transition-all
              text-sm
              md:h-11 md:py-6 md:gap-7  md:mb-[6.5%]
              lg:mt-[43%]
              sm:px-8  sm:py-4 sm:gap-3 sm:w-auto sm:h-14

              "
            >
              Book a Visit<ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Middle Section: Links and Info */}
        <div className="grid grid-cols-1    gap-8  mt-[10.5%] mr-32 mb-16 justify-between
             xl:mt-24
            lg:gap-16 lg:mt-[min(10vw,10%)] lg:grid-cols-4 lg:gap-x-[2%] lg:gap-y-[10%] 
          md:gap-16 md:mt-[19%] md:grid-cols-2 md:gap-x-[22%] md:gap-y-[10%]
        sm:grid-cols-2 
        
        
        ">
          
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="w-1/2 text-white  text-nowrap font-cormorant  md:mb-10 md:text-[min(10vw,20px)]   font-medium text-lg sm:text-xl  uppercase   underline   mb-6 inline-block">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4 md:pt-2 ">
              {quickLinks1.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white md:text-[min(10vw,15px)] transition-colors text-comfortaa sm:text-lg block ">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Links 2 */}
          <div>
            <h3 className=" w-1/2 text-white text-nowrap font-cormorant  md:mb-10 md:text-[min(10vw,20px)]   font-medium text-lg sm:text-xl  uppercase   underline   mb-6 inline-block">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4 md:pt-2">
              {quickLinks2.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white md:text-[min(10vw,15px)] transition-colors text-comfortaa sm:text-lg block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div>
            <h3 className="w-1/2 text-white text-nowrap font-cormorant  md:mb-10 md:text-[min(10vw,20px)]   font-medium text-lg sm:text-xl  uppercase   underline   mb-6 inline-block">Projects</h3>
            <ul className="space-y-3 sm:space-y-4">
              {projectLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white md:text-[min(10vw,15px)] transition-colors text-comfortaa sm:text-lg block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          {/* Column 4: Get In Touch */}
<div>
  <h3 className="w-1/2 text-white text-nowrap font-cormorant  md:mb-10 md:text-[min(10vw,20px)]   font-medium text-lg sm:text-xl  uppercase   underline   mb-6 inline-block">
    Get In Touch
  </h3>

  <div className="space-y-5 text-gray-300">
    {/* Address Row */}
    <div className="flex items-start gap-3">
      <MapPin size={13} className="text-white shrink-0 mt-1" />
      <address className="not-italic text-sm sm:text-base leading-snug font-inter">
        <span className="block font-comfortaa text-white">Elixir Villas & Apartments Pvt. Ltd.</span>
        Ground Floor (Below SBI Kuttanellur Branch) <br />
        Kuttanellur P.O, Thrissur, Kerala - 680014
      </address>
    </div>

    {/* Phone Row */}
    <div className="flex items-center gap-3">
      <Phone size={14} className="text-white shrink-0" />
      <Link href="tel:+919048733355" className="hover:text-white transition-colors text-sm sm:text-base font-inter">
        +91 9048733355
      </Link>
    </div>

    {/* Email Row */}
    <div className="flex items-center gap-3">
      <Mail size={12} className="text-white shrink-0" />
      <Link href="mailto:sales@elixirhomes.com" className="hover:text-white transition-colors text-sm sm:text-base font-inter">
        sales@elixirhomes.com
      </Link>
    </div>
  </div>
</div>
        </div>

       
        
      </div>
    </footer>
  );
}