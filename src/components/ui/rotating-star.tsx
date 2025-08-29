'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface RotatingIconProps {
  src: string;
  // alt?: string;
  // size?: number;
  className?: string;
}

const RotatingStar = ({
  src,
  // alt = 'icon',
  // size = 32,
  className = '',
}: RotatingIconProps) => {
  return (
    <motion.div
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
      className={`inline-block ${className}`}
    >
      <Image src={src} alt='star' width={32} height={32} />
    </motion.div>
  );
};

export default RotatingStar;
