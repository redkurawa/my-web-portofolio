// /data/experienceData.ts

import { StaticImageData } from 'next/image';

import logoAdobe from '../../public/images/work-adobe.png';
import logoDribble from '../../public/images/work-dribble.png';
import logoDropbox from '../../public/images/work-dropbox.png';
import logoPaypal from '../../public/images/work-paypal.png';
import work1 from '../../public/images/work1.png';
import work2 from '../../public/images/work2.png';
import work3 from '../../public/images/work3.png';
import work4 from '../../public/images/work4.png';

export interface Experience {
  company: string;
  index: number;
  logo: StaticImageData;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  workImage: StaticImageData;
}

const experienceData: Experience[] = [
  {
    index: 1,
    workImage: work1,
    company: 'Adobe',
    logo: logoAdobe,
    title: 'Frontend Developer',
    startDate: '2025',
    endDate: 'Present',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
  {
    index: 2,
    workImage: work2,
    company: 'Dribbble',
    logo: logoDribble,
    title: 'Frontend Developer',
    startDate: '2025',
    endDate: 'Present',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
  {
    index: 3,
    workImage: work3,
    company: 'Dropbox',
    logo: logoDropbox,
    title: 'Frontend Developer',
    startDate: '2025',
    endDate: 'Present',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
  {
    index: 4,
    workImage: work4,
    company: 'PayPal',
    logo: logoPaypal,
    title: 'Frontend Developer',
    startDate: '2025',
    endDate: 'Present',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
];

export default experienceData;
