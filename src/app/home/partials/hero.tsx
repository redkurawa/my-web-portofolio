import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import Navbar from './navbar';

const Hero = () => {
  return (
    <section
      className='relative overflow-hidden'
      style={{
        backgroundImage: "url('/images/hero-background2.png')",
      }}
    >
      <Navbar />
      <div className='custom-container flex flex-wrap items-center overflow-hidden pt-16.5 md:pt-54.5'>
        {/* left */}
        <div className='max-w-128 flex-[3.1] basis-80'>
          <h1
            style={{ letterSpacing: '-0.03em' }}
            className='text-display-xl font-bold md:text-6xl'
          >
            <span
              className='inline-block px-1 py-1 text-neutral-950 md:py-4'
              style={{ backgroundColor: '#f3b64c' }}
            >
              Crafting
            </span>{' '}
            Interfaces, One Line at a Time
          </h1>
          <p className='text-md mt-6 font-semibold md:text-xl'>
            Build fast, accessible, and responsive web experiences that users
            love.
          </p>
          <Button className='mt-6 w-full md:mt-17 md:w-75'>
            <Link href='/#contact'>Say Hello</Link>
          </Button>
        </div>
        {/* right */}
        <div className='flex-[6.9] basis-80'>
          <div>
            <Image
              className=''
              src='/images/hero-big-head.png'
              width={760}
              height={760}
              alt='hero-head'
              // sizes='(max-width: 768px) 414px, 760px'
            />
          </div>
        </div>
      </div>
      <svg
        className='absolute top-15/16 left-1/2 z-1 h-[538px] w-[2262px] -translate-x-1/2'
        width='2262'
        height='538'
        viewBox='0 0 2262 538'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse
          cx='1131'
          cy='269'
          rx='1131'
          ry='269'
          fill='#FFFFFF'
          // stroke='black'
        />
      </svg>
    </section>
  );
};

export default Hero;
