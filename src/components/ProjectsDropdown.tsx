"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Elixir Anfield',
    status: 'Ongoing Apartment Project',
    location: 'Near Hill Gardens Colony & HiLite Mall, Thrissur - Kuttanellur Main Road',
    image: '/buildings/flat.jpg',
  },
  {
    id: 2,
    title: 'Elixir Akkara Gardens',
    status: 'Completed Villa Project',
    location: 'Near Regency Club, Kuttanellur, Thrissur',
    image: '/buildings/2.webp',
  },
  {
    id: 3,
    title: 'Elixir Super Luxury Villas',
    status: 'Completed Villa Project',
    location: 'Moscow Road, Anchery, Thrissur',
    image: '/buildings/3.webp',
  },
  {
    id: 4,
    title: 'Elixir Manavath Heights',
    status: 'Completed Villa Project',
    location: 'Vadakkenchery, Palakkad',
    image: '/buildings/4.webp',
  },
  {
    id: 5,
    title: 'The Orchid',
    status: 'Completed Villa Project',
    location: 'Kuttanellur, Thrissur, Kerala',
    image: '/buildings/5.webp',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export const ProjectsDropdown = () => {
  return (
    <div className="bg-[#1C1C1C] text-white w-full pt-[120px] pb-12 shadow-lg border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.05, ease: 'easeOut' }}
            className="group"
          >
            <Link href="#">
              <div className="flex items-start gap-5">
                <div className="relative w-[150px] h-[100px] overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <h3 className="font-cormorant text-xl font-medium text-white transition-colors group-hover:text-[#FFD700]">
                      {project.title}
                    </h3>
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:translate-x-1">
                      <ArrowRight size={14} className="text-white transition-colors group-hover:text-black" />
                    </div>
                  </div>
                  <span className={`text-sm font-medium mt-1 ${project.status.startsWith('Ongoing') ? 'text-green-400' : 'text-red-400'}`}>
                    {project.status}
                  </span>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                    {project.location}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
