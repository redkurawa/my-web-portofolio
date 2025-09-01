import { ArrowRight } from 'lucide-react';

import AnimatedHeading from '@/components/ui/animated-heading';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { portofolios } from '@/constants/portofolio';

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
          {portofolios.map((data, index) => (
            <CarouselItem
              key={index}
              className='pl-1 md:basis-1/2 lg:basis-1/3'
            >
              {/* <div> */}
              <div
                className='relative mx-2 h-93.25 rounded-2xl bg-cover bg-center px-6'
                style={{ backgroundImage: `url(${data.src})` }}
              >
                <Button className='absolute bottom-4.25 left-1/2 w-3/4 -translate-x-1/2 bg-white/60 backdrop-blur-[2px]'>
                  Portofolio {index + 1}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='absolute right-1/2 -bottom-18 flex -translate-x-5 items-center justify-center'>
          <CarouselPrevious className='hover:bg-primary-100 relative left-0 translate-x-0 hover:translate-x-0' />
        </div>
        <div className='absolute right-1/2 -bottom-18 flex translate-x-5 items-center justify-center'>
          <CarouselNext className='hover:bg-primary-100 relative right-0 translate-x-0 hover:translate-x-0' />
        </div>
      </Carousel>
    </section>
  );
};

export default Portfolio;
