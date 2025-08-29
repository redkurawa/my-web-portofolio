import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

import { aboutSosmed } from '@/constants/about-data';

export const Contact = () => {
  return (
    <section className='bg-[#0A0D12] pt-20'>
      <div className='custom-container'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {/* left */}
          <div>
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
            <div className='text-display-3xl font-bold'>
              Great results begin with clear ideas.
            </div>
            <div className='mt-6 flex items-center gap-2 md:mt-0'>
              {aboutSosmed.map((data) => (
                <div
                  key={data.alt}
                  className='flex-center border-primary-200 bg-primary-200 size-10 rounded-full border'
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
          {/* right */}
          <div>
            <Button
              variant='outline'
              size='outline'
              className='text-neutral-25'
            >
              Contact
            </Button>
            <h1 className='text-display-xl font-bold'>
              Start Your Next Project
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
