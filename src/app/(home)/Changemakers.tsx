import Button from '@/components/Button';
import Image from '@/components/Image';
import Link from 'next/link';

import OurChangemakersImage from './assets/OurChangemakers.png';

export default function Changemakers() {
  return (
    <section className='w-full'>
      <Image
        src={OurChangemakersImage}
        alt='Family in local community'
        className='w-full rounded-xl not-md:aspect-square not-md:object-top md:h-[70vh]'
      >
        <div className='absolute top-[15%] left-[5%] max-w-118.25 not-md:top-[5%]'>
          <h2>
            <div>Our Changemakers.</div>
            <div>The Catalysts for Change.</div>
          </h2>

          <p className='mt-4 mb-4 not-md:max-w-[70%] not-md:text-sm'>
            We partner with our Changemakers: local leaders who understand and
            know their communities’ needs. This approach drives long-term,
            sustainable change.
          </p>

          <Button>
            <Link href='/approach'>Learn More</Link>
          </Button>
        </div>
      </Image>
    </section>
  );
}
