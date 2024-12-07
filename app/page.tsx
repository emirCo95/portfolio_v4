'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full md:w-[80%] h-full">
      <div className="w-full h-full flex items-center justify-center">
        <motion.div
          className="-z-10"
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          <Image
            className="-z-10"
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>
    </div>
  );
}
