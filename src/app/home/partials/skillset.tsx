import { SkillCard } from '@/components/skill-card';
import AnimatedHeading from '@/components/ui/animated-heading';
import { Button } from '@/components/ui/button';

import { skills } from '@/constants/skillset-data';

const Skillset = () => {
  return (
    <section className='bg-primary-200 pt-20 pb-20'>
      <div className='custom-container'>
        <Button variant='outline' size='xs' className='text-neutral-25 mx-auto'>
          Skillset
        </Button>

        <AnimatedHeading className='text-display-xl text-neutral-25 mt-2 mb-10 text-center font-extrabold'>
          Skills That Build Great Interfaces
        </AnimatedHeading>

        <div className='grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2'>
          {skills.map((data, index) => (
            <div
              key={index}
              className='flex h-64 w-full items-center justify-center text-black'
            >
              <SkillCard
                name={data.name}
                src={data.src}
                w={data.w}
                h={data.h}
                p={data.p}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;
