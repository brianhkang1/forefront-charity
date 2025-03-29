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
    <nav className={clsx('flex items-center gap-12', textStyle)}>
      {LINKS.map(({ label, href }) => {
        const isActivePage = pathname === href;

        return (
          <Link
            key={label}
            href={href}
            className={clsx(
              'py-[8px]',
              isActivePage && 'border-forefront-teal border-b-3',
            )}
          >
            <h2>{label}</h2>
          </Link>
        );
      })}
    </nav>
  );
}
