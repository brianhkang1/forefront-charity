'use client';

import Image from '@/components/Image';
import {
  EVENT_NAME,
  PATHNAME_TO_PAGE,
  SECTION,
  trackEvent,
} from '@/utils/trackEvent';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Cross2Icon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, VisuallyHidden } from 'radix-ui';
import { useEffect, useState } from 'react';

import DonationDialog from '../DonationDialog';

const LINKS = [
  { label: 'Home', href: '/', textColor: 'white' },
  { label: 'Approach', href: '/approach', textColor: 'black' },
  { label: 'About', href: '/about', textColor: 'black' },
  { label: 'Gala', href: '/gala', textColor: 'white' },
  { label: '', href: '/auction', textColor: 'white' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    // reset open state when route changes
    setMobileMenuIsOpen(false);
  }, [pathname]);

  const textColor =
    LINKS.find((link) => link.href === pathname)?.textColor || 'black';

  const textStyle = `text-${textColor}`;

  const currentPage =
    PATHNAME_TO_PAGE[pathname as keyof typeof PATHNAME_TO_PAGE];

  return (
    <>
      {/* Desktop header */}
      <header className='desktop absolute z-2 h-36 w-full items-center justify-between p-12 md:flex md:flex-wrap'>
        <Link
          href='/'
          onClick={() =>
            trackEvent({
              name: EVENT_NAME.FOREFRONT_ICON_CLICK,
              page: currentPage,
              section: SECTION.HEADER,
            })
          }
        >
          <Image
            priority
            loading='eager'
            src='/icons/logo.svg'
            alt='Forefront logo'
            fillWidth='21.4375rem'
            fillHeight='3rem'
          />
        </Link>

        <nav className={clsx('flex flex-wrap items-center gap-5', textStyle)}>
          {LINKS.map(({ label, href }) => {
            if (!label) return;
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

          <DonationDialog
            trackEventParams={{
              name: EVENT_NAME.DONATE_BUTTON_CLICK,
              page: currentPage,
              section: SECTION.HEADER,
            }}
          />
        </nav>
      </header>

      {/* Mobile header */}
      <header className='mobile sticky top-0 z-2 shadow-2xl'>
        <div className='flex w-full items-center justify-between bg-white px-6 py-4'>
          <Link
            href='/'
            onClick={() =>
              trackEvent({
                name: EVENT_NAME.FOREFRONT_ICON_CLICK,
                page: currentPage,
                section: SECTION.HEADER,
              })
            }
          >
            <Image
              priority
              loading='eager'
              src='/icons/logo.svg'
              alt='Forefront logo'
              fillWidth='10.71875rem'
              fillHeight='1.6rem'
            />
          </Link>

          <div className='flex items-center gap-4'>
            <DonationDialog
              buttonSize='small'
              trackEventParams={{
                name: EVENT_NAME.DONATE_BUTTON_CLICK,
                page: currentPage,
                section: SECTION.HEADER,
              }}
            />

            <HamburgerMenuIcon
              width={24}
              height={24}
              onClick={() => setMobileMenuIsOpen(true)}
              className='hover:cursor-pointer'
            />
          </div>
        </div>

        <Dialog.Root open={mobileMenuIsOpen} onOpenChange={setMobileMenuIsOpen}>
          <Dialog.Content className='data-[state=closed]:animate-slide-ltr data-[state=open]:animate-slide-rtl fixed top-0 right-0 h-full w-[60vw] bg-white px-10 pt-[20%] shadow-xl'>
            <VisuallyHidden.Root>
              <Dialog.Title>Navigation Menu</Dialog.Title>
            </VisuallyHidden.Root>

            <Dialog.Close asChild>
              <button
                className='hover:bg-forefront-teal/20 absolute top-6 right-4 inline-flex size-8 appearance-none items-center justify-center rounded-full text-black hover:cursor-pointer hover:text-teal-700 focus:outline-none'
                aria-label='Close'
              >
                <Cross2Icon width='1.5rem' height='1.5rem' />
              </button>
            </Dialog.Close>

            <nav>
              {LINKS.map(({ label, href }) => {
                const isActivePage = pathname === href;

                return (
                  <Link key={label} href={href}>
                    <div
                      className={clsx(
                        'mb-6 text-2xl font-bold',
                        isActivePage &&
                          'decoration-forefront-teal underline decoration-3 underline-offset-6',
                      )}
                    >
                      {label}
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* <DonationDialog onClick={() => setMobileMenuIsOpen(false)} /> */}
          </Dialog.Content>
        </Dialog.Root>
      </header>
    </>
  );
}
