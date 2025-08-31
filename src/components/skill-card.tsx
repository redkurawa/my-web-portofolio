import Image from 'next/image';

import { RingProgress } from './ring-progress';

interface SkillCardProps {
  name: string;
  src: string;
  w: number;
  h: number;
  p: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, src, w, h, p }) => {
  return (
    <div className='mx-auto'>
      <div className='bg-base-white rounded-3xl px-10 py-9'>
        <RingProgress percentage={p} />
        <div className='mt-3 flex items-center gap-4'>
          <span className='text-md-bold'>{name}</span>
          <Image src={src} alt={name} width={w} height={h} />
        </div>
      </div>
    </div>
  );
};
