import Link from 'next/link';

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import { navigationData } from '@/constants/navigation-data';

export function DropDownUserMenu() {
  return (
    <DropdownMenuContent className='w-56' side='bottom' align='end'>
      {navigationData.map((data, i) => (
        <DropdownMenuItem key={i}>
          <Link href={data.href}>{data.label}</Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  );
}
