import { StarIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string | StaticImageData;
  stars?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatar,
  stars = 5,
}) => {
  return (
    <div className='relative mx-auto mt-5 mb-10 max-w-[364px]'>
      {/* Outer gradient border wrapper */}
      <div className='rounded-2xl border border-neutral-200 p-[1px] drop-shadow-xl'>
        {/* Inner card */}
        <div className='relative space-y-6 rounded-2xl bg-white px-5 pt-15 pb-16 text-neutral-950'>
          {/* Kutipan SVG */}
          <Image
            src={avatar}
            alt={name}
            width={80}
            height={80}
            className='absolute -top-10 left-6 z-10'
          />

          {/* Stars */}
          <div className='flex gap-1'>
            {Array(stars)
              .fill(0)
              .map((_, i) => (
                <StarIcon
                  key={i}
                  className='h-5 w-5 fill-[#F3B64C] text-[#F3B64C]'
                />
              ))}
          </div>

          {/* Quote */}
          <p className='text-lg leading-relaxed font-semibold'>“{quote}”</p>

          {/* Name & Role */}
          <div className='space-y-1'>
            <p className='text-md font-semibold'>-- {name}</p>
            <p className='text-md font-medium'>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
