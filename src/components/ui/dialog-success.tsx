'use client';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onBackHome?: () => void;
};

export function SuccessDialog({ open, onOpenChange, onBackHome }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-md overflow-hidden border-white/10 text-white'>
        <DialogHeader>
          <div className='mx-auto'>
            <Image
              src='/images/mail-success.png'
              alt='Success'
              width={80}
              height={80}
            />
          </div>
          <DialogTitle className='text-center text-xl font-bold text-neutral-950'>
            Got Your Message!
          </DialogTitle>
        </DialogHeader>

        <p className='text-md-medium mx-auto max-w-sm text-center text-neutral-700'>
          Really appreciate you reaching out. I’ll be in touch soon.
        </p>

        <Button
          className='bg-primary-300 hover:bg-primary-200 mt-6 w-full rounded-full text-black'
          onClick={() => (onBackHome ? onBackHome() : onOpenChange(false))}
        >
          Back to Home
        </Button>
      </DialogContent>
    </Dialog>
  );
}
