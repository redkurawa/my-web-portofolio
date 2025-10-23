'use client';
import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from 'framer-motion';
import React, { useEffect } from 'react';

export function RingProgress({
  percentage = 90,
  size = 94,
  trackWidth = 8,
  innerProgressWidth = 6,
  outerProgressWidth = 8,
  trackColor = '#E5E7EB',
  progressColor = '#F3B64C',
  duration = 1.2,
}: {
  percentage?: number;
  size?: number;
  trackWidth?: number;
  innerProgressWidth?: number;
  outerProgressWidth?: number;
  trackColor?: string;
  progressColor?: string;
  duration?: number;
}) {
  const radiusTrack = (size - trackWidth) / 2;
  const radiusInner = (size - innerProgressWidth) / 2;
  const radiusOuter = (size - outerProgressWidth) / 2;
  const circumference = 2 * Math.PI * radiusInner;

  const controls = useAnimation();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 20,
  });
  const displayValue = useTransform(springValue, (v) => `${Math.round(v)}%`);

  const triggerAnimation = () => {
    // Reset stroke
    controls.set({ strokeDashoffset: circumference });

    // Animate stroke
    controls.start({
      strokeDashoffset: circumference - (percentage / 100) * circumference,
      transition: { duration, ease: 'easeOut' },
    });

    // Animate number from 0 to target
    motionValue.set(0);
    animate(motionValue, percentage, { duration, ease: 'easeOut' });
  };

  // useEffect(() => {
  //   triggerAnimation();
  // }, [percentage, circumference]);

  useEffect(() => {
    // Reset stroke
    controls.set({ strokeDashoffset: circumference });

    // Animate stroke
    controls.start({
      strokeDashoffset: circumference - (percentage / 100) * circumference,
      transition: { duration, ease: 'easeOut' },
    });

    // Animate number 0 → target
    motionValue.set(0);
    animate(motionValue, percentage, { duration, ease: 'easeOut' });
  }, [circumference, percentage, duration, controls, motionValue]);

  return (
    <motion.div
      className='relative flex items-center justify-center'
      style={{ width: size, height: size }}
      onHoverStart={triggerAnimation}
    >
      <svg width={size} height={size}>
        {/* Background ring */}
        <circle
          stroke={trackColor}
          fill='transparent'
          strokeWidth={trackWidth}
          r={radiusTrack}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Outer ring */}
        <circle
          stroke={progressColor}
          fill='transparent'
          strokeWidth={outerProgressWidth}
          r={radiusOuter}
          cx={size / 2}
          cy={size / 2}
          opacity={0.3}
        />

        {/* Inner animated progress ring */}
        <motion.circle
          stroke={progressColor}
          fill='transparent'
          strokeWidth={innerProgressWidth}
          strokeLinecap='round'
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={controls}
          r={radiusInner}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>

      {/* Animated number */}
      <motion.span
        className='absolute text-[24px] font-bold'
        style={{ opacity: 1 }}
      >
        {displayValue}
      </motion.span>
    </motion.div>
  );
}
