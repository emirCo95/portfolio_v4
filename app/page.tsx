import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full md:w-[80%] h-full">
      <div className="w-full h-full flex items-center justify-center">
        <Image
          className="-z-10 animate-appear"
          src="/logo.png"
          alt="logo"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
