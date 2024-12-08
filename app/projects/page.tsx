'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { TbWorldWww } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import { playFair } from '../ui/fonts';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="w-full md:w-[80%] h-full">
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <motion.div
          className="flex justify-center items-center gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <div className="w-[200px] h-[150px]">
            <Image
              className="w-full h-full object-cover border-2"
              src="/borcelle.png"
              alt="borcelle"
              width={500}
              height={500}
            />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <TbWorldWww className="text-6xl" />

            <Link
              href="https://borcelle-boutique.netlify.app/"
              target="_blank"
              passHref
            >
              <span className={`${playFair.className} antialiased text-xl`}>
                View Live
              </span>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaGithub className="text-6xl" />
            <Link
              href="https://github.com/emirCo95/flower_shop"
              target="_blank"
              passHref
            >
              <span className={`${playFair.className} antialiased text-xl`}>
                View on GitHub
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          <div className="w-[200px] h-[150px]">
            <Image
              className="w-full h-full object-contain border-2"
              src="/cuisine.png"
              alt="cuisine"
              width={500}
              height={500}
            />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <TbWorldWww className="text-6xl" />

            <Link
              href="https://cuisine-restaurant1.netlify.app/"
              target="_blank"
              passHref
            >
              <span className={`${playFair.className} antialiased text-xl`}>
                View Live
              </span>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaGithub className="text-6xl" />
            <Link
              href="https://github.com/emirCo95/cuisine_restaurant"
              target="_blank"
              passHref
            >
              <span className={`${playFair.className} antialiased text-xl`}>
                View on GitHub
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 3 } }}
        >
          <div className="w-[200px] h-[150px]">
            <Image
              className="w-full h-full object-cover border-2"
              src="/elysium.png"
              alt="elysium"
              width={500}
              height={500}
            />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <TbWorldWww className="text-6xl" />

            <Link
              href="https://elysium-photography.netlify.app/"
              target="_blank"
              passHref
            >
              <span className={`${playFair.className} antialiased text-xl`}>
                View Live
              </span>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaGithub className="text-6xl" />
            <Link
              href="https://github.com/emirCo95/elysium_photo_studio"
              target="_blank"
              passHref
            >
              <span className={`${playFair.className} antialiased text-xl`}>
                View on GitHub
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
