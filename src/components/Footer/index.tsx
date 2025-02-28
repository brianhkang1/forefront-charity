import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-teal-logo-400 grid h-57.75 grid-cols-3 items-center gap-43.5 p-12'>
      <div className='justify-self-start'>hello</div>
      <div className='justify-self-center'>now</div>
      <div className='justify-self-end'>
        <Image
          src='/platinumTransparency.png'
          alt='Platinum Transparency Logo'
          width={108}
          height={108}
        />
      </div>
    </footer>
  );
}
