import Image from 'next/image';
import React from 'react';

import AnimatedHeading from '@/components/ui/animated-heading';
import { Button } from '@/components/ui/button';
import RotatingStar from '@/components/ui/rotating-star';

import { withMe, withOther } from '@/constants/superiority-data';

const Superiority = () => {
  return (
    <>
      <section className='bg-base-white pt-20 pb-20'>
        <div className='custom-container'>
          <Button variant='outline' size='xs' className='mx-auto'>
            Superiority
          </Button>
          <AnimatedHeading className='text-display-xl mt-2 mb-10 text-center font-extrabold text-neutral-900'>
            Built with design, speed, and UX in mind.
          </AnimatedHeading>
          <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div className='bg-secondary-100 rounded-3xl p-6 text-black'>
              <h1 className='text-display-xs text-center font-bold'>
                Working With me
              </h1>
              <Image
                className='mx-auto my-6'
                alt='anonymous'
                src='/images/hero-foto.png'
                width={80}
                height={80}
              />
              <ul>
                {withMe.map((data, index) => (
                  <React.Fragment key={index}>
                    <li className='my-5 flex items-center gap-2 text-lg font-bold'>
                      <RotatingStar src='/icons/superiority-star-me.svg' />
                      {data.text}
                    </li>
                    <hr className='border-[#FDFDFD]/50' />
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className='rounded-3xl border border-neutral-300 p-6 text-black'>
              <h1 className='text-display-xs text-center font-bold'>
                Another Developer
              </h1>
              <Image
                className='mx-auto my-6'
                alt='anonymous'
                src='/icons/anony-foto.svg'
                width={80}
                height={80}
              />
              <ul>
                {withOther.map((data, index) => (
                  <React.Fragment key={index}>
                    <li className='my-5 flex items-center gap-2 text-lg font-bold'>
                      <RotatingStar src='/icons/superiority-star-other.svg' />
                      {data.text}
                    </li>
                    <hr className='border-neutral-300' />
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Superiority;
