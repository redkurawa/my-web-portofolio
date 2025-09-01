import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import { aboutIcon, aboutSosmed } from '@/constants/about-data';

const About = () => {
  return (
    <section className='relative z-10' id='about'>
      <div className='custom-container mb-20'>
        <Button variant='outline' size='xs' className='mx-auto'>
          About
        </Button>
        <h1 className='text-display-xl mt-2 text-center font-extrabold text-neutral-900'>
          The Developer Behind the Pixel
        </h1>

        <div className='mx-auto mt-12 grid w-full grid-cols-1 gap-[20px] md:grid-cols-[2fr_1fr]'>
          <div className='bg-custom-gradient rounded-[20px] px-4 py-6 md:p-10'>
            <div className='gap-2 md:flex md:items-center md:justify-between'>
              <div className='flex items-center gap-2'>
                <div className=''>
                  <Image
                    src='/images/hero-foto.png'
                    alt='foto'
                    width={80}
                    height={80}
                  />
                </div>
                <div>
                  <p>Edwin Anderson</p>
                  <p>edwinanderson@email.com</p>
                </div>
              </div>
              <div className='mt-6 flex items-center gap-2 md:mt-0'>
                {aboutSosmed.map((data) => (
                  <div
                    key={data.alt}
                    className='flex-center size-10 rounded-full border border-neutral-300'
                  >
                    <Image
                      className=''
                      src={data.src}
                      alt={data.alt}
                      width={data.w}
                      height={data.h}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-24 md:mt-25.5'>
              <h1 className='text-display-md md:text-display-xl font-bold'>
                Pushing boundaries through innovation
              </h1>
              <p className='md:text-md mt-1.5 text-sm font-normal'>
                I create frontend solutions that not only look good but also
                load fast, work everywhere, and scale well.
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-end rounded-[20px] bg-[#F0DAC1]'>
            <Image
              src='/images/about-head.png'
              alt='about head'
              width={400}
              height={400}
              className='object-bottom'
            />
          </div>
        </div>
        <div className='mx-auto mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-[10fr_10fr_3fr]'>
          <div
            className='bg-cover-center rounded-3xl px-8 pt-8'
            style={{
              backgroundImage: "url('/images/about-bg-porto.png')",
            }}
          >
            <div className=''>
              <div>
                <h1 className='text-xl font-bold'>Check My Portfolio</h1>
                <p className='text-md font-normal'>
                  Explore selected works and real-world projects
                </p>
              </div>
              <Image
                alt='sample portofolio'
                src='/images/about-porto.png'
                width={438}
                height={438}
              />
            </div>
          </div>
          <div
            className='bg-cover-center relative flex h-90.25 flex-col-reverse overflow-hidden rounded-3xl p-8 md:h-full'
            style={{
              backgroundImage: "url('/images/about-bg2.png')",
            }}
          >
            {aboutIcon.map((data) => (
              <div
                key={data.alt}
                style={{
                  top: `${data.y * 4}px`,
                  left: `${data.x * 4}px`,
                  position: 'absolute',
                }}
                className='flex-center size-21 rounded-full bg-white/60'
              >
                <Image
                  alt={data.alt}
                  src={data.src}
                  width={data.w}
                  height={data.h}
                />
              </div>
            ))}

            <h1 className='text-display-sm text-center font-bold text-black'>
              Built with 10+ Trusted Technologies
            </h1>
          </div>
          <div className='bg-primary-200 flex-center h-12 rounded-3xl md:h-full'>
            <Link href='/#contact'>
              <Mail className='size-6 md:size-10' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
