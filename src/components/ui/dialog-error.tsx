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
  onRetry?: () => void;
};

export function ErrorDialog({ open, onOpenChange, onRetry }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-md overflow-hidden border-white/10 text-white'>
        <DialogHeader className='bg-neutral-300'>
          <div className='mx-auto'>
            <Image
              src='/images/mail-error.png'
              alt='Error'
              width={264}
              height={200}
            />
          </div>
        </DialogHeader>
        <DialogTitle className='text-center text-xl font-bold text-neutral-950'>
          Message Failed to Send
        </DialogTitle>

        <p className='text-md-medium mx-auto max-w-sm text-center text-neutral-700'>
          We couldn’t send your message. Please try again or check your
          connection.
        </p>

        <Button
          className='bg-primary-200 hover:bg-primary-300 text-sm-bold mt-6 rounded-full text-white'
          onClick={() => (onRetry ? onRetry() : onOpenChange(false))}
        >
          Try Again
        </Button>
      </DialogContent>
    </Dialog>
  );
}
