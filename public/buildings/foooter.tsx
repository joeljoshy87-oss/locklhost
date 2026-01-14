"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ElixirBackgroundText from "./ElixirBackgroundText";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-8 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Top Section: CTA */}
      <div className="max-w-[1312px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-24">
        <div className="max-w-2xl">
          <h2 className="font-['Cormorant_Garamond'] font-semibold text-64px md:text-[64px] leading-none tracking-normal mb-6">
            Let’s Discuss <br /> Your Vision With Us
          </h2>
          <p className="text-white/60 font-inter text-sm max-w-sm">
            Elixir Homes stands as a symbol of refined architecture and
            uncompromised quality of refined architecture and quality.
          </p>
        </div>

        <button className="mt-8 md:mt-0 bg-[#E31E24] hover:bg-red-700 transition-colors flex items-center gap-4 px-10 py-5 group">
          <span className="font-inter font-bold text-sm uppercase tracking-widest">
            Book a Visit
          </span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="max-w-[1312px] mx-auto border-t border-white/10 pt-16 mb-12">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* Quick Links 1 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-white underline underline-offset-8">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm font-inter">
              <li className="hover:text-white cursor-pointer transition-colors">Home</li>
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Projects</li>
              <li className="hover:text-white cursor-pointer transition-colors">Gallery</li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-white underline underline-offset-8">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm font-inter">
              <li className="hover:text-white cursor-pointer transition-colors">Testimonial</li>
              <li className="hover:text-white cursor-pointer transition-colors">Insights</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-white cursor-pointer transition-colors">Legal & Privacy</li>
            </ul>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-6">
            <h4 className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-white underline underline-offset-8">
              Projects
            </h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm font-inter">
              <li className="hover:text-white cursor-pointer transition-colors">Ongoing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Completed</li>
              <li className="hover:text-white cursor-pointer transition-colors">Upcoming</li>
              <li className="hover:text-white cursor-pointer transition-colors">All Projects</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col gap-6">
            <h4 className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-white underline underline-offset-8">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4 text-white/60 text-sm font-inter">
              <p>
                Elixir Villas & Apartments Pvt. Ltd. 123, <br />
                Thrissur, Kerala, India Elixir Villas & <br />
                Apartments Pvt. Ltd. Thrissur, Kerala, India
              </p>
              <p className="hover:text-white cursor-pointer">+91-8946759810</p>
              <p className="hover:text-white cursor-pointer">info@elixirhomes.com</p>
            </div>
          </div>
        </div>

        {/* The Large Background Branding */}
        <div className="mt-10 -mb-20 pointer-events-none opacity-20">
           <ElixirBackgroundText />
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="max-w-[1312px] mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 font-inter border-t border-white/5 pt-8">
        <p>© 2025 Elixir Villas & Apartments Pvt. Ltd. | All Rights Reserved.</p>
        <p>Crafted With 🤍 by Woxro</p>
      </div>
    </footer>
  );
};

export default Footer;