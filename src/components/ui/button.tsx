// import { Slot } from '@radix-ui/react-slot';
// import { cva, type VariantProps } from 'class-variance-authority';
// import * as React from 'react';

// import { cn } from '@/lib/utils';

// const buttonVariants = cva(
//   'flex-center shrink-0 disabled:pointer-event-none disabled:opacity-50 cursor-pointer outline-none disabled:text-neutral-800',
//   {
//     variants: {
//       variant: {
//         default:
//           'bg-base-white text-md text-neutral-900 shadow-xs rounded-full',
//         destructive:
//           'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
//         outline:
//           'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
//         secondary:
//           'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
//         ghost:
//           'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
//         link: 'text-primary underline-offset-4 hover:underline',
//       },
//       size: {
//         default: 'h-11 px-23',
//         sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
//         lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
//         icon: 'size-9',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'default',
//     },
//   }
// );

// function Button({
//   className,
//   variant,
//   size,
//   asChild = false,
//   ...props
// }: React.ComponentProps<'button'> &
//   VariantProps<typeof buttonVariants> & {
//     asChild?: boolean;
//   }) {
//   const Comp = asChild ? Slot : 'button';

//   return (
//     <Comp
//       data-slot='button'
//       className={cn(buttonVariants({ variant, size, className }))}
//       {...props}
//     />
//   );
// }

// export { Button, buttonVariants };

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer outline-none disabled:text-neutral-800',
  {
    variants: {
      variant: {
        default:
          'bg-base-white text-md font-bold text-neutral-900 shadow-xs rounded-full hover:shadow-[0_0_32px_rgba(248,162,4,0.6)] tranition-shadow',
        outline:
          'border border-neutral-300 text-sm font-bold px-3 py-1 text-neutral-900 rounded-full  hover:shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 mx-auto',
      },
      size: {
        default: 'h-11',
        outline: 'h-7',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
