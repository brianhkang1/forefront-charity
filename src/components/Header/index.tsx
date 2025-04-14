'use client';

import Image from '@/components/Image';
import useIsMobile from '@/hooks/useIsMobile';
import Z_INDEX from '@/utils/zIndex';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Collapsible } from 'radix-ui';
import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'Home', href: '/', textColor: 'white' },
  { label: 'Approach', href: '/approach', textColor: 'white' },
  { label: 'About', href: '/about', textColor: 'black' },
  { label: 'Gala', href: '/gala', textColor: 'white' },
  { label: 'Donate', href: '' },
];

export default function Header() {
  const pathname = usePathname();
  const { isMobile, screenSizeUnknown } = useIsMobile();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    setMobileMenuIsOpen(false); // reset open state when route changes
  }, [pathname]);

  const textColor =
    LINKS.find((link) => link.href === pathname)?.textColor || 'black';
  const textStyle = `text-${textColor}`;

  if (screenSizeUnknown) return null;
  if (isMobile) {
    return (
      <header className={clsx('sticky top-0 shadow-2xl', Z_INDEX.HEADER)}>
        <Collapsible.Root
          open={mobileMenuIsOpen}
          onOpenChange={setMobileMenuIsOpen}
        >
          <div className='flex w-full items-center justify-between bg-white p-6'>
            <Link href='/'>
              <Image
                priority
                src='/icons/logo.svg'
                alt='Forefront logo'
                width='14.3125rem'
                height='2rem'
              />
            </Link>

            <Collapsible.Trigger>
              <HamburgerMenuIcon width={24} height={24} />
            </Collapsible.Trigger>
          </div>

          <Collapsible.Content className='data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden'>
            <nav className='flex flex-col items-center bg-white'>
              {LINKS.map(({ label, href }) => {
                const isActivePage = pathname === href;

                return (
                  <Link
                    key={label}
                    href={href}
                    className={clsx(
                      'active:bg-forefront-teal w-full border-t border-t-black py-[8px] text-center active:text-white',
                    )}
                  >
                    <div
                      className={clsx(
                        isActivePage && 'text-forefront-teal font-bold',
                      )}
                    >
                      {label}
                    </div>
                  </Link>
                );
              })}
            </nav>
          </Collapsible.Content>
        </Collapsible.Root>
      </header>
    );
  }

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
          src='/icons/logo.svg'
          alt='Forefront logo'
          width='21.4375rem'
          height='3rem'
        />
      </Link>

      <nav className={clsx('flex flex-wrap items-center gap-5', textStyle)}>
        {LINKS.map(({ label, href }) => {
          const isActivePage = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={clsx(
                'px-[10px] py-[4px]',
                isActivePage && 'border-forefront-teal border-b-3',
              )}
            >
              <h3>{label}</h3>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
