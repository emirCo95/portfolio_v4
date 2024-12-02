import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-[20vh] bg-lightGray">
      <div className="w-full h-full flex items-center justify-center">
        <Image src="/logo.png" alt="logo" width={400} height={400} />
      </div>
    </div>
  );
};

export default Navbar;
