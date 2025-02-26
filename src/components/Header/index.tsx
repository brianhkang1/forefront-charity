import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <header className='flex h-36 items-center justify-between'>
      <Image src='/images/logo.svg' alt='logo' />

      <nav></nav>
    </header>
  );
}
