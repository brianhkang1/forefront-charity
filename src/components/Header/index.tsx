import Image from '@/components/Image';
import Z_INDEX from '@/utils/zIndex';
import clsx from 'clsx';
import Link from 'next/link';

import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header
      className={clsx(
        'absolute flex h-36 w-full flex-wrap items-center justify-between p-12',
        Z_INDEX.HEADER,
      )}
    >
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
