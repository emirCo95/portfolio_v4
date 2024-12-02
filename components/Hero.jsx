import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full absolute top-0 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,58.7C840,64,960,64,1080,106.7C1200,149,1320,235,1380,277.3L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="w-full h-full absolute top-0 left-0">
        <h1>FRONT END DEVELOPER</h1>
      </div>
    </div>
  );
};

export default Hero;
