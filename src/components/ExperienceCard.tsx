import Image from 'next/image';

import { Experience } from '@/constants/work-experience';

interface Props {
  job: Experience;
}

export default function ExperienceCard({ job }: Props) {
  return (
    <div className='flex gap-4 rounded-3xl border bg-white p-5 shadow-sm transition-transform hover:-translate-y-1'>
      <div>
        <div className='item-center flex gap-2'>
          <Image
            src='/icons/calendar.svg'
            alt='calendar'
            width={24}
            height={24}
          />
          <span className='text-md-bold text-neutral-900'>
            {job.startDate} – {job.endDate}
          </span>
        </div>
        <div>
          <Image src={job.logo} alt={job.company} width={97} height={35} />
        </div>
        <h3 className='text-display-xs font-bold text-neutral-900'>
          {job.title}
        </h3>
        <p className='mt-2 text-sm text-gray-700'>{job.description}</p>
      </div>
    </div>
  );
}
