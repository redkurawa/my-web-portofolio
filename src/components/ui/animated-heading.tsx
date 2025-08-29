'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimatedHeading = ({
  children,
  className = '',
  threshold = 1,
  triggerOnce = true,
}: AnimatedHeadingProps) => {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedHeading;
