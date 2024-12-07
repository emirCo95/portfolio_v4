'use client';

import { motion } from 'motion/react';

import { playFair } from '@/app/ui/fonts';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="absolute top-0 right-0 md:right-14 w-[100%] h-[20%] md:w-[20%] md:h-full">
      <motion.div
        className="-z-10 w-full h-full bg-black"
        initial={{ opacity: 0, y: -250 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <div className="w-full h-full bg-black">
          <div className="w-full h-full flex md:flex-col justify-center items-center gap-8">
            <Link
              href="/"
              className={`${playFair.className} antialiased text-white text-sm md:text-lg lg:text-2xl hover:underline`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${playFair.className} antialiased text-white text-sm md:text-lg lg:text-2xl hover:underline`}
            >
              About
            </Link>
            <Link
              href="/experience"
              className={`${playFair.className} antialiased text-white text-sm md:text-lg lg:text-2xl hover:underline`}
            >
              Experience
            </Link>
            <Link
              href="/skills"
              className={`${playFair.className} antialiased text-white text-sm md:text-lg lg:text-2xl hover:underline`}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className={`${playFair.className} antialiased text-white text-sm md:text-lg lg:text-2xl hover:underline`}
            >
              Projects
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
