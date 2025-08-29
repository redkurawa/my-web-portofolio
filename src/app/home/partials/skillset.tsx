import AnimatedHeading from '@/components/ui/animated-heading';
import { Button } from '@/components/ui/button';

const Skillset = () => {
  return (
    <section className='custom-container bg-primary-200 pt-20 pb-20'>
      <Button variant='outline' size='outline' className='text-neutral-25'>
        Skillset
      </Button>

      <AnimatedHeading className='text-display-xl text-neutral-25 mt-2 mb-10 text-center font-extrabold'>
        Skills That Build Great Interfaces
      </AnimatedHeading>

      <div className='grid grid-cols-4 grid-rows-2 gap-4'>
        <div className='rounded-xl bg-white text-black'>1</div>
        <div className='rounded-xl bg-white text-black'>2</div>
        <div className='rounded-xl bg-white text-black'>3</div>
        <div className='rounded-xl bg-white text-black'>4</div>
        <div className='rounded-xl bg-white text-black'>5</div>
        <div className='rounded-xl bg-white text-black'>6</div>
        <div className='rounded-xl bg-white text-black'>7</div>
        <div className='rounded-xl bg-white text-black'>8</div>
      </div>
    </section>
  );
};

export default Skillset;
