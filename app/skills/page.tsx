'use client';

import { motion } from 'motion/react';

import React from 'react';

import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { LuFigma } from 'react-icons/lu';
import { FaGitAlt } from 'react-icons/fa';
import { playFair } from '../ui/fonts';

const Skills = () => {
  return (
    <div className="w-full md:w-[80%] h-full mt-44 md:mt-0 md:grid md:grid-cols-2 md:grid-rows-4">
      <motion.div
        className="-z-10 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      >
        <FaHtml5 className="text-8xl" />
        <p
          className={`${playFair.className} antialiased w-[100px] text-center text-lg`}
        >
          HTML
        </p>
      </motion.div>
      <motion.div
        className="-z-10 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
      >
        <FaCss3 className="text-7xl" />
        <p
          className={`${playFair.className} antialiased w-[100px] text-center text-lg`}
        >
          CSS
        </p>
      </motion.div>
      <motion.div
        className="-z-10 w-full flex justify-center items-center gap-2"
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
      >
        <SiJavascript className="text-7xl" />
        <p
          className={`${playFair.className} antialiased w-[100px] text-center text-lg`}
        >
          JavaScript
        </p>
      </motion.div>
      <motion.div
        className="-z-10 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 2.5 } }}
      >
        <FaReact className="text-7xl" />
        <p
          className={`${playFair.className} antialiased w-[100px] text-center text-lg`}
        >
          React JS
        </p>
      </motion.div>
      <motion.div
        className="-z-10 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
      >
        <RiNextjsFill className="text-7xl" />
        <p
          className={`${playFair.className} antialiased w-[100px] text-center text-lg`}
        >
          Next JS
        </p>
      </motion.div>
      <motion.div
        className="-z-10 w-full flex justify-center items-center gap-2"
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 3.5 } }}
      >
        <SiTailwindcss className="text-7xl" />
        <p
          className={`${playFair.className} antialiased w-[100px] text-center text-lg`}
        >
          TailwindCSS
        </p>
      </motion.div>
      <motion.div
        className="-z-10 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 4 } }}
      >
        <LuFigma className="text-7xl" />
        <p
          className={`${playFair.className} antialiased w-[100px] text-center text-lg`}
        >
          Figma
        </p>
      </motion.div>
      <motion.div
        className="-z-10 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 4.5 } }}
      >
        <FaGitAlt className="text-7xl" />
        <p
          className={`${playFair.className} antialiased w-[100px] text-center text-lg`}
        >
          Git
        </p>
      </motion.div>
    </div>
  );
};

export default Skills;
