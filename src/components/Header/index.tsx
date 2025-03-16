import Image from '@/components/Image';
import Link from 'next/link';

import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className='absolute z-2 flex h-36 w-full items-center justify-between p-12'>
      <Link href='/'>
        <Image
          priority
          src='/logo.svg'
          alt='Forefront logo'
          width={343}
          height={48}
        />
      </Link>

      <NavLinks />
    </header>
  );
}
