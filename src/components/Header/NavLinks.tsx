'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { label: 'Home', href: '/', textColor: 'black' },
  { label: 'Approach', href: '/approach', textColor: 'black' },
  { label: 'About', href: '/about', textColor: 'black' },
  { label: 'Gala', href: '/gala', textColor: 'white' },
  { label: 'Donate', href: '' },
];

export default function Header() {
  const pathname = usePathname();

  const textColor =
    LINKS.find((link) => link.href === pathname)?.textColor || 'black';
  const textStyle = `text-${textColor}`;

  return (
    <nav className={clsx('flex gap-12', textStyle)}>
      {LINKS.map((link) => (
        <Link key={link.label} href={link.href}>
          <h2>{link.label}</h2>
        </Link>
      ))}
    </nav>
  );
}
