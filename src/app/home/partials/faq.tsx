import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AnimatedHeading from '@/components/ui/animated-heading';
import { Button } from '@/components/ui/button';

import { mockFaq } from '@/constants/faq-data';

type Faq = { id: string; q: string; a: string };

const Faq = () => {
  return (
    <section
      className='relative overflow-hidden px-4 md:pt-0'
      style={{
        backgroundImage: "url('/images/hero-background2.png')",
      }}
    >
      <div className='mx-auto mt-10 mb-20 max-w-300 rounded-[48px] bg-white/30 p-3 md:mt-25 md:mb-46 md:p-5'>
        <div className='rounded-[32px] bg-white px-1 py-10 md:px-5 md:pt-10'>
          <Button variant='outline' size='outline' className='mx-auto'>
            FAQ
          </Button>
          <AnimatedHeading className='text-display-sm md:text-display-xl mt-2 mb-10 text-center font-extrabold text-neutral-900'>
            Need More Info? Start Here
          </AnimatedHeading>
          <Accordion
            type='single'
            collapsible
            className='mb-4 w-full text-neutral-900'
          >
            {mockFaq.map((item) => (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger className='text-md font-bold hover:no-underline md:text-2xl'>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className='md:text-md text-sm font-medium'>
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <svg
        className='absolute top-12/13 left-1/2 z-1 h-[538px] w-[2262px] -translate-x-1/2'
        width='2262'
        height='538'
        viewBox='0 0 2262 538'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse cx='1131' cy='269' rx='1131' ry='269' fill='#0A0D12' />
      </svg>
    </section>
  );
};

export default Faq;
