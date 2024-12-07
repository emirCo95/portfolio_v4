'use client';

import { motion } from 'motion/react';

import { playFair } from '../ui/fonts';

const About = () => {
  return (
    <div className="w-full md:w-[80%] h-full">
      <motion.div
        className="-z-10 w-full h-full"
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className={`${playFair.className} antialiased text-5xl mt-24`}>
            Hi, I&apos;m Emir
          </h1>
          <p
            className={`${playFair.className} antialiased text-lg max-w-[350px] lg:max-w-[400px] mt-5 text-center`}
          >
            I am a <span className="font-bold">front-end developer</span> that
            loves to combine creativity with technical skills to create
            interactive and visually appealing experiences. I love the challenge
            of turning complex ideas into intuitive designs that users can
            engage with effortlessly. Watching a concept come to life on the
            screen, knowing it can positively impact someone&apos;s experience,
            is incredibly rewarding. The fast-paced nature of front-end
            development keeps me motivated, as there is always something new to
            learn, whether it&apos;s mastering a new framework, improving
            performance, or exploring cutting-edge design trends. It&apos;s this
            mix of creativity, problem-solving, and innovation that drives my
            passion for front-end development.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
