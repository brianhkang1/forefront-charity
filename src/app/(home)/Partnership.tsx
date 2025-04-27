'use client';

import Image from '@/components/Image';

import PartnerImage from './assets/Partners.png';

export default function Partnership() {
  return (
    <section className='relative w-full'>
      <Image
        src={PartnerImage}
        alt='Local community landscape'
        className='w-full rounded-xl not-md:aspect-square md:h-[70vh]'
      >
        <div className='absolute top-[16%] left-0 flex w-full justify-center not-md:top-[10%]'>
          <h2 className='max-w-[80%] text-center not-md:max-w-[90%] 2xl:max-w-[60%]'>
            FOREFRONT Charity partners with local leaders to provide essential
            resources to unreached communities.
          </h2>
        </div>
      </Image>
    </section>
  );
}
