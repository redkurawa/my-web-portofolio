import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import AnimatedHeading from '@/components/ui/animated-heading';
import { Button } from '@/components/ui/button';
import RotatingStar from '@/components/ui/rotating-star';

import { withMe, withOther } from '@/constants/superiority-data';

const Superiority = () => {
  return (
    <section className='custom-container mt-20 mb-20'>
      <Button variant='outline' size='outline' className=''>
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
          <ul>
            {withMe.map((data, index) => (
              <React.Fragment key={index}>
                <li className='my-2 flex items-center gap-2 text-lg font-bold'>
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
            Working With other
          </h1>
          <ul>
            {withOther.map((data, index) => (
              <React.Fragment key={index}>
                <li className='my-2 flex items-center gap-2 text-lg font-bold'>
                  <RotatingStar src='/icons/superiority-star-other.svg' />
                  {data.text}
                </li>
                <hr className='border-neutral-300' />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Superiority;
