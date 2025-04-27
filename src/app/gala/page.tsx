import Button from '@/components/Button';
import Image from '@/components/Image';
import { getGoogleDriveImages } from '@/lib/googleDrive';
import findImage from '@/utils/findImage';
import type { Metadata } from 'next';
import Link from 'next/link';

import GoldCards from './GoldCards';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Gala',
};

export default async function GalaPage() {
  const galaPageImagesData = await getGoogleDriveImages(
    process.env.GALA_PAGE_IMAGES_FOLDER_ID,
  );

  const heroImage = findImage(galaPageImagesData, 'hero');

  return (
    <div className='bg-black'>
      <section>
        {/* Desktop Hero Image */}
        <Image
          priority
          hideContainerWhenMobile
          fillWidth='100%'
          fillHeight='82vh'
          src={heroImage?.url || ''}
          alt='Lincoln Center at night'
          className='desktop'
        />

        {/* Mobile Hero Image */}
        <Image
          priority
          hideContainerWhenDesktop
          fillWidth='100%'
          fillHeight='50vh'
          src={heroImage?.url || ''}
          alt='Lincoln Center at night'
          className='mobile object-[45%_50%]'
        />

        <div className='text-center not-md:mx-4'>
          <div className='mb-3 text-4xl font-extralight text-white'>
            FOREFRONT Charity&apos;s 10th Year Annual Gala
          </div>

          <h1 className='mb-3'>
            <span className='from-gold to-dark-gold bg-gradient-to-r bg-clip-text text-transparent'>
              TO ALL PARTS{' '}
            </span>
            <span className='from-gold to-dark-gold bg-gradient-to-r bg-clip-text text-transparent'>
              OF THE WORLD
            </span>
          </h1>

          <div className='mb-5 text-2xl font-extralight text-white'>
            <div>October 18, 2025 at 5:00 PM ET</div>
            <div>Stanley H. Kaplan Penthouse</div>
            <div>165 West 65th Street, 10th Floor New York, NY 10023</div>
          </div>
        </div>

        <div className='mb-12 flex justify-center gap-2'>
          <Button color='bg-dark-gold'>
            <Link
              href='https://forefrontcharity.regfox.com/forefront-charitys-10th-annual-gala#reserve-tickets'
              rel='noopener noreferrer'
              target='_blank'
            >
              [L] Buy Ticket
            </Link>
          </Button>
          <Button color='bg-dark-gold'>
            <Link
              href='https://forefrontcharity.regfox.com/forefront-charitys-10th-annual-gala#reserve-tickets'
              rel='noopener noreferrer'
              target='_blank'
            >
              [L] Become a Sponsor
            </Link>
          </Button>
        </div>
      </section>

      <GoldCards />
    </div>
  );
}
