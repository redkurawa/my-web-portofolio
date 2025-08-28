// import { Sheet } from 'lucide-react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
// import { SheetTrigger } from '@/components/ui/sheet';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  return (
    <header>
      <div className='custom-container flex-between h-20'>
        {/* logo */}
        <div className='flex-center flex gap-2'>
          <Image
            src='/images/hero-foto.png'
            alt='foto'
            width={40}
            height={40}
          />
          <p className='text-xl font-bold'>-adi-</p>
        </div>
        {/* navlink */}
        <nav className='hidden md:block'>
          <ul className='text-md flex items-center gap-6 font-medium'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href}>{data.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* buttonv */}
        <Button className='hidden px-23 md:flex'>Hire Me</Button>

        <Sheet>
          <SheetTrigger className='md:hidden'>
            <Menu className='cursor-pointer' />
          </SheetTrigger>
          <SheetContent className='w-full p-4'>
            <nav className=''>
              <ul className='text-black'>
                {navigationData.map((data) => (
                  <li key={data.label} className='mb-2'>
                    <Link href={data.href}>{data.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <SheetClose asChild>
              <Button className='bg-primary-200 w-full'>Hire Me</Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
