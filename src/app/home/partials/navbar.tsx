// import { Sheet } from 'lucide-react';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { DropDownUserMenu } from '@/components/navbar-dropdown';
import { Button } from '@/components/ui/button';
// import { SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
        <Button className='hidden px-23 md:flex'>
          <Link href='/#contact'>Hire Me</Link>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className='md:hidden'>
            <div className='cursor-pointer'>
              <MenuIcon />
            </div>
          </DropdownMenuTrigger>
          <DropDownUserMenu />
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
