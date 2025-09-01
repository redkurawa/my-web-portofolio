import Image from 'next/image';
import React from 'react';

import AnimatedHeading from '@/components/ui/animated-heading';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Portfolio = () => {
  return (
    <section className='custom-container mb-20'>
      portfolio
      <Button variant='outline' size='xs' className='mx-auto'>
        Portfolio
      </Button>
      <AnimatedHeading className='text-display-xl mt-2 mb-10 text-center font-extrabold text-neutral-900'>
        Built with Passion, Shipped with Precision
      </AnimatedHeading>
      <Carousel>
        <CarouselContent className='-ml-1'>
          <CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <Image
              src='/images/portofolio1.png'
              alt='portofolio1'
              width={373}
              height={373}
            />
          </CarouselItem>
          <CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <Image
              src='/images/portofolio2.png'
              alt='portofolio1'
              width={373}
              height={373}
            />
          </CarouselItem>
          <CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <Image
              src='/images/portofolio3.png'
              alt='portofolio1'
              width={373}
              height={373}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Portfolio;
