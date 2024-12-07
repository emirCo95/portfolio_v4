import { playFair } from '@/app/ui/fonts';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="absolute top-0 right-0 md:right-14 w-[100%] h-[20%] md:w-[20%] md:h-full animate-appear">
      <div className="w-full h-full bg-black">
        <div className="w-full h-full flex md:flex-col justify-center items-center gap-8">
          <Link
            href="/"
            className={`${playFair.className} antialiased text-white text-sm md:text-lg lg:text-2xl hover:underline animate-slidein`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${playFair.className} antialiased text-white text-sm md:text-lg lg:text-2xl hover:underline animate-slidein`}
          >
            About
          </Link>
          <Link
            href="/experience"
            className={`${playFair.className} antialiased text-white text-sm md:text-lg lg:text-2xl hover:underline animate-slidein`}
          >
            Experience
          </Link>
          <Link
            href="/skills"
            className={`${playFair.className} antialiased text-white text-sm md:text-lg lg:text-2xl hover:underline animate-slidein`}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className={`${playFair.className} antialiased text-white text-sm md:text-lg lg:text-2xl hover:underline animate-slidein`}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
