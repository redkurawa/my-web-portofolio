import { TestimonialCard } from '@/components/testimony-card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { testimonials } from '@/constants/testimony-data';

export const Testimony = () => {
  return (
    <section className='custom-container mb-20'>
      <Button variant='outline' size='sm' className=''>
        Testimony
      </Button>
      <h1 className='text-display-xl mb-10 font-extrabold text-neutral-900'>
        Built with Trust & Collaboration
      </h1>
      <div>
        <Carousel className=''>
          <CarouselContent className='-ml-1 p-5'>
            {testimonials.map((data, i) => (
              <CarouselItem key={i} className='pl-1 md:basis-1/2 lg:basis-1/3'>
                <TestimonialCard
                  name={data.name}
                  role={data.role}
                  quote={data.quote}
                  avatar={data.avatar}
                  stars={data.stars}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='absolute -top-15 right-0 flex -translate-x-10 items-center justify-center'>
            <CarouselPrevious className='hover:bg-primary-100 relative left-0 translate-x-0 hover:translate-x-0' />
          </div>
          <div className='absolute -top-15 right-0 flex -translate-x-0 items-center justify-center'>
            <CarouselNext className='hover:bg-primary-100 relative right-0 translate-x-0 hover:translate-x-0' />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimony;
