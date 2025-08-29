// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// import { Button } from '@/components/ui/button';

// export const Testimony = () => {
//   return (
//     <section className='custom-container mb-20'>
//       testimony
//       <Button variant='outline' size='outline' className=''>
//         Testimony
//       </Button>
//       <motion.div
//         initial={{ rotate: 0 }}
//         animate={{ rotate: 360 }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//         whileHover={{ rotate: 360 }}
//         className='inline-block'
//       >
//         <Image
//           alt='star'
//           src='/icons/superiority-star-me.svg'
//           width={32}
//           height={32}
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default Testimony;

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
// import RotatingIcon from '@/components/ui/rotating-star';
import RotatingStar from '@/components/ui/rotating-star';

export const Testimony = () => {
  return (
    <section className='custom-container mb-20'>
      testimony
      <Button variant='outline' size='outline' className=''>
        Testimony
      </Button>
      {/* <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileHover={{
          rotate: [0, 360],
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        className='inline-block'
      >
        <Image
          alt='star'
          src='/icons/superiority-star-me.svg'
          width={32}
          height={32}
        />
      </motion.div> */}
      {/* <RotatingIcon src='/icons/superiority-star-me.svg' size={32} alt='star' /> */}
      <RotatingStar src='/icons/superiority-star-me.svg' />
    </section>
  );
};

export default Testimony;
