import Image from '@/components/Image';
import Link from 'next/link';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Approach', href: '/approach' },
  { label: 'About', href: '/about' },
  { label: 'Gala', href: '/gala' },
  { label: 'Donate', href: '' },
];

export default function Header() {
  return (
    <header className='absolute z-2 flex h-36 w-full items-center justify-between p-12'>
      <Link href='/'>
        <Image
          priority
          src='/logo.svg'
          alt='Forefront logo'
          // Need to manually set width/height with tailwind b/c
          // Next Image isn't using the correct height prop value for SVGs
          // className='h-[48px] w-[343px]'
          width={343}
          height={48}
        />
      </Link>

      <nav className='flex gap-12'>
        {LINKS.map((link) => (
          <Link key={link.label} href={link.href}>
            <h2>{link.label}</h2>
          </Link>
        ))}
      </nav>
    </header>
  );
}
