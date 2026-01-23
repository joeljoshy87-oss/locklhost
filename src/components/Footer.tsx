"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const quickLinks1 = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Projects' },
  { href: '#', label: 'Gallery' },
];

const quickLinks2 = [
  { href: '#', label: 'Testimonial' },
  { href: '#', label: 'Insights' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Legal & Privacy' },
];

const projectLinks = [
    { href: '#', label: 'Ongoing' },
    { href: '#', label: 'Completed' },
    { href: '#', label: 'Upcoming' },
    { href: '#', label: 'All Projects' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 font-inter   pt-16 pb-12 px-4 sm:px-6 md:px-8 lg:px-6 xl:px-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Top Section: CTA */}
        <div className="flex flex-col lg:flex-row justify-between  items-start mt-5 lg:mt-[1.8%] lg:items-center lg:pb-[7.7%]  border-b  border-gray-700">
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl md:text-5xl lg:-tracking-[0.3] lg:text-[65px] lg:leading-[79.2px] xl:text-[64px] text-white leading-[110%] sm:leading-[100%]">
              Let's Discuss<br className="block sm:hidden md:block lg:block xl:block" /> Your Vision With<br className="block sm:hidden md:block lg:block xl:hidden" />  Us
            </h2>
            <p className="font-comfortaa text-base md:text-[15px] lg:text-[15px] xl:text-lg text-gray-500 xl:mt-12 leading-relaxed mt-4 md:mt-6 max-w-lg">
              Elixir Homes stands as a symbol of refined architecture and uncompromised quality.
            </p>
          </div>
          <div className="w-full lg:w-auto mt-6 lg:mt-20 flex xl:mt-20 justify-start lg:justify-end">
            <Button 
              className="bg-[#E31E24] text-white w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 py-3 sm:py-4 flex items-end xl:mt-24   justify-center gap-2 sm:gap-3 text-sm uppercase tracking-widest font-inter hover:bg-red-700 transition-all group"
            >
              Book a Visit<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Middle Section: Links and Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:mt-24 md:gap-10 mt-[10.5%] mr-32 mb-16 justify-between  ">
          
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="w-1/2 text-white text-nowrap font-cormorant   font-medium text-lg sm:text-xl  uppercase  border-b border-gray-100  mb-6 inline-block">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks1.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors text-base sm:text-lg block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Links 2 */}
          <div>
            <h3 className="w-1/2 text-white text-nowrap font-cormorant font-medium text-lg sm:text-xl  uppercase  border-b border-gray-100  mb-6 inline-block">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks2.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors text-base sm:text-lg block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div>
            <h3 className="w-1/2 text-white text-nowrap font-cormorant  font-medium text-lg sm:text-xl  uppercase  border-b border-gray-100  mb-6 inline-block">Projects</h3>
            <ul className="space-y-3 sm:space-y-4">
              {projectLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors text-base sm:text-lg block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h3 className="w-1/2 text-white text-nowrap font-cormorant font-medium text-lg sm:text-xl  uppercase  border-b border-gray-100  mb-6 inline-block">Get In Touch</h3>
            <address className="not-italic text-base leading-relaxed">
              <span className="block">Elixir Villas & Apartments Pvt. Ltd.</span>
              <span className="block">123, Thrissur, Kerala, India</span>
              <span className="block mt-2">Elixir Villas & Apartments Pvt. Ltd.</span>
              <span className="block">Thrissur, Kerala, India</span>
            </address>
            <div className='mt-4 space-y-2'>
                <Link href="tel:+918946759810" className="block hover:text-white transition-colors text-base py-1">+91-8946759810</Link>
                <Link href="mailto:info@elixirhomes.com" className="block hover:text-white transition-colors text-base py-1">info@elixirhomes.com</Link>
            </div>
          </div>
        </div>

       
        
      </div>
    </footer>
  );
}