import AnimatedHeading from '@/components/ui/animated-heading';
import { Button } from '@/components/ui/button';

const WorkExperience = () => {
  return (
    <section className='custom-container mb-20'>
      <Button variant='outline' size='xs' className='mx-auto'>
        Work Experience
      </Button>
      <AnimatedHeading className='text-display-xl mx-auto mt-2 mb-10 max-w-180 text-center font-extrabold text-neutral-900'>
        A timeline of companies and roles that helped shape my skills.
      </AnimatedHeading>
    </section>
  );
};

export default WorkExperience;
