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

// import RotatingIcon from '@/components/ui/rotating-star';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

export const Testimony = () => {
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);

  const startSliding = async () => {
    setIsHovering(true);
    await controls.start({
      x: [0, -100, 100, 0],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    });
  };

  const stopSliding = async () => {
    setIsHovering(false);
    await controls.start({
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    });
  };

  return (
    <section className='custom-container mb-20'>
      testimony
      <Button variant='outline' size='outline' className=''>
        Testimony
      </Button>
      {/* start anime */}
      <div
        className='relative my-6 flex justify-center overflow-hidden'
        onMouseEnter={startSliding}
        onMouseLeave={stopSliding}
      >
        <motion.div animate={controls} className='w-fit'>
          <Image
            alt='anonymous'
            src='/images/hero-foto.png'
            width={80}
            height={80}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimony;
