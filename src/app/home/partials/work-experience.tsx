'use client';
import { motion, useAnimation } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMedia } from 'react-use';

// import ExperienceCard from '@/components/ExperienceCard';
import AnimatedHeading from '@/components/ui/animated-heading';
import { Button } from '@/components/ui/button';

import experienceData from '@/constants/work-experience';
import { cn } from '@/lib/utils';

import workcalendar from '../../../../public/icons/calendar.png';

const WorkExperience = () => {
  const isLargeIsh = useMedia('(min-width:1024px', false);
  return (
    <section className='bg-base-white pb-20'>
      <section className='custom-container'>
        <Button variant='outline' size='xs' className='mx-auto'>
          Work Experience
        </Button>
        <AnimatedHeading className='text-display-xl mx-auto mt-2 mb-10 max-w-180 text-center font-extrabold text-neutral-900'>
          A timeline of companies and roles that helped shape my skills.
        </AnimatedHeading>
        {/* <div className='grid gap-6 md:grid-cols-2'>
        {experienceData.map((job, index) => (
          <ExperienceCard key={index} job={job} />
        ))}
      </div> */}
        <ProfesionalWorkCard>
          {experienceData.map((work) => {
            const atrr = { isLargeIsh: isLargeIsh, ...work };
            return <WorkItem key={work.index} {...atrr} />;
          })}
        </ProfesionalWorkCard>
      </section>
    </section>
  );
};

export default WorkExperience;

type ProfesionalWorkCardProps = {
  children: React.ReactNode;
};

const ProfesionalWorkCard: React.FC<ProfesionalWorkCardProps> = ({
  children,
}) => {
  return (
    <div className='mt-6 grid grid-cols-[2.5rem_auto] gap-x-4 max-lg:gap-y-4 md:mt-16 md:gap-x-16 lg:grid-cols-[auto_3rem_auto] lg:gap-y-0'>
      {children}
    </div>
  );
};

type WorkItemProps = {
  company: string;
  index: number;
  logo: StaticImageData;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  workImage: StaticImageData;
  isLargeIsh: boolean;
};

const WorkItem: React.FC<WorkItemProps> = ({
  description,
  isLargeIsh,
  logo,
  title,
  index,
  workImage,
  startDate,
  endDate,
}) => {
  return (
    <>
      {index % 2 !== 0 && isLargeIsh && (
        <>
          <WorkImageContainer>
            <Image
              src={workImage}
              alt='title'
              className='rounded-2xl border border-neutral-100 shadow-md'
            />
          </WorkImageContainer>

          <LineAndCircle index={index} isLargeIsh={isLargeIsh} />
        </>
      )}
      {!isLargeIsh && <LineAndCircle index={index} isLargeIsh={isLargeIsh} />}

      {/* Right Column */}

      <div className='bg-base-white hover:border-primary-200 rounded-2xl border border-neutral-200 shadow-md md:rounded-3xl md:p-6'>
        <div className='flex flex-wrap items-start justify-between'>
          <Image
            src={workImage}
            alt='title'
            className='rounded-t-2xl object-contain md:hidden'
          />
          <div className='p-2 md:p-0'>
            <p className='text-sm-regular md:text-md-medium mb-2 text-neutral-900'>
              <Image src={workcalendar} alt='calendar' className='inline' />{' '}
              {startDate}-{endDate}
            </p>
            <Image src={logo} alt='title' className='mb-2 w-auto' />
            <p className='md:display-xs-bold text-md-bold text-neutral-900'>
              {title}
            </p>
          </div>
        </div>
        <p className='text-sm-regular md:text-md-regular p-2 text-neutral-900 md:p-0'>
          {description}
        </p>
      </div>
      {index % 2 === 0 && isLargeIsh && (
        <>
          <LineAndCircle index={index} isLargeIsh={isLargeIsh} />
          <WorkImageContainer>
            <Image
              src={workImage}
              alt='title'
              className='rounded-2xl border border-neutral-100 shadow-md'
            />
          </WorkImageContainer>
        </>
      )}
    </>
  );
};

const WorkImageContainer: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className='hidden items-center md:flex'
      style={{ width: 'clamp(19.0625rem, 40.87vw, 31.875rem)' }}
    >
      {children}
    </div>
  );
};

const LineAndCircle: React.FC<{ index: number; isLargeIsh: boolean }> = ({
  index,
  isLargeIsh = false,
}) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  const lineControls = useAnimation();
  const lineControlsMd = useAnimation();

  useEffect(() => {
    if (inView) {
      lineControls.start({
        height: 'calc(100%-1.5rem)',
        backgroundColor: '#252b37',
      });
      lineControlsMd.start({
        height: 'calc(100% - 3rem)',
        backgroundColor: '#a4a7ae',
      });
    }
  }, [inView, lineControls, lineControlsMd]);
  return (
    <div
      ref={ref}
      className={cn('group relative mb-0 [&:nth-last-child(2)]:mb-0')}
    >
      {/* line decoration */}
      {index !== 4 && (
        <motion.div
          initial={{ height: 0, backgroundColor: '#92ff04' }}
          animate={isLargeIsh ? lineControlsMd : lineControls}
          transition={{ duration: 3, ease: 'easeOut' }}
          className={cn(
            'line-decoration absolute top-[calc(50%+1.25rem)] left-1/2 w-0.25 -translate-x-1/2 bg-neutral-400 md:top-[calc(50%+1.2rem)] lg:top-[calc(50%+1.5rem)]'
          )}
        />
      )}

      {/* index circle */}
      <motion.span
        initial={{ opacity: 0, borderColor: '#ffffff' }}
        animate={{ opacity: 1, borderColor: '#a4a7ae' }}
        transition={{ duration: 5, ease: 'easeOut' }}
        className='flex-center text-primary-200 md:text-md-bold text-sm-bold bg-base-white absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full border border-neutral-400'
      >
        {index}
      </motion.span>
    </div>
  );
};
