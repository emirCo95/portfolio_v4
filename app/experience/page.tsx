'use client';

import { motion } from 'motion/react';
import React from 'react';
import { playFair } from '../ui/fonts';

const Experience = () => {
  return (
    <div className="w-full md:w-[80%] h-full">
      <motion.div
        className="-z-10 w-full h-full"
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1
            className={`${playFair.className} antialiased mt-20 mb-10 text-lg md:text-2xl underline`}
          >
            Experience
          </h1>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center">
              <div className="w-full flex flex-col justify-center items-center">
                <h1
                  className={`${playFair.className} antialiased mb-5 text-md md:text-xl`}
                >
                  TRJ & Associates
                </h1>
                <h2
                  className={`${playFair.className} antialiased mb-5 text-sm md:text-lg`}
                >
                  Frontend Developer
                </h2>
                <p
                  className={`${playFair.className} antialiased mb-5 text-xs md:text-base`}
                >
                  March 2023 - November 2024
                </p>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <h1
                  className={`${playFair.className} antialiased mb-5 text-md md:text-xl`}
                >
                  NeuroLeap Corp.
                </h1>
                <h2
                  className={`${playFair.className} antialiased mb-5 text-sm md:text-lg`}
                >
                  Frontend Developer
                </h2>
                <p
                  className={`${playFair.className} antialiased mb-5 text-xs md:text-base`}
                >
                  April 2022 - April 2023
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-full flex flex-col justify-center items-center">
                <h1
                  className={`${playFair.className} antialiased text-center mb-5 text-md md:text-xl`}
                >
                  Instahub
                </h1>
                <h2
                  className={`${playFair.className} antialiased mb-5 text-sm md:text-lg`}
                >
                  Frontend Developer Intern
                </h2>
                <p
                  className={`${playFair.className} antialiased mb-5 text-xs md:text-base`}
                >
                  February 2021 - July 2021
                </p>
              </div>
            </div>
          </div>
          <h1
            className={`${playFair.className} antialiased text-lg md:text-2xl my-10 underline`}
          >
            Education
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center">
              <h1
                className={`${playFair.className} antialiased mb-5 text-md md:text-xl text-center`}
              >
                New York City College of Technology
              </h1>
              <h2
                className={`${playFair.className} antialiased mb-5 text-sm md:text-lg`}
              >
                BTech in Information Systems
              </h2>
              <p
                className={`${playFair.className} antialiased mb-5 text-xs md:text-base`}
              >
                GPA: 3.7
              </p>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h1
                className={`${playFair.className} antialiased mb-5 text-md md:text-xl`}
              >
                Pace University
              </h1>
              <h2
                className={`${playFair.className} antialiased mb-5 text-sm md:text-lg`}
              >
                MS in Software Engineering
              </h2>
              <p
                className={`${playFair.className} antialiased mb-5 text-xs md:text-base`}
              >
                GPA: 4.0
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
