import Button from '@/components/Button';
import Image from '@/components/Image';
import { getGoogleDriveImages } from '@/lib/googleDrive';
import findImage from '@/utils/findImage';
import { EVENT_NAME, PAGE, SECTION } from '@/utils/trackEvent';
import type { Metadata } from 'next';
import Link from 'next/link';

import GoldCards from './GoldCards';
import SpeakersHonorees from './SpeakersHonorees';
import SponsorLogos from './SponsorLogos';

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
          loading='eager'
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
          loading='eager'
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
            <div>October 18, 2025 at 5:30 PM ET</div>
            <div>Stanley H. Kaplan Penthouse</div>
            <div>165 West 65th Street, 10th Floor New York, NY 10023</div>
          </div>
        </div>

        {/* line divider */}
        <div className='flex justify-center'>
          <div className='bg-gold mt-[48px] h-[1px] w-full max-w-[25%] rounded-lg' />
        </div>

        <div className='mx-[10%] mt-11 mb-6 text-center text-2xl font-extralight text-white'>
          <div>
            Thank you for making our 10th Annual Gala an unforgettable success!
          </div>
          <div>
            Your generosity and support are helping bring hope “to all parts of
            the world”
          </div>
        </div>

        <div className='flex justify-center gap-2'>
          {/* <Button
            color='bg-dark-gold'
            trackEventParams={{
              name: EVENT_NAME.BUY_TICKET_BUTTON_CLICK,
              page: PAGE.GALA,
              section: SECTION.GALA_ACTIONS,
            }}
          >
            <Link
              href='https://forefrontcharity.regfox.com/forefront-charitys-10th-annual-gala#tickets'
              rel='noopener noreferrer'
              target='_blank'
            >
              Buy Ticket
            </Link>
          </Button>
          <Button
            color='bg-dark-gold'
            trackEventParams={{
              name: EVENT_NAME.BECOME_A_SPONSOR_BUTTON_CLICK,
              page: PAGE.GALA,
              section: SECTION.GALA_ACTIONS,
            }}
          >
            <Link
              href='https://forefrontcharity.regfox.com/forefront-charitys-10th-annual-gala#sponsorship-package'
              rel='noopener noreferrer'
              target='_blank'
            >
              Become a Sponsor
            </Link>
          </Button> */}
          <Button
            color='bg-dark-gold'
            trackEventParams={{
              name: EVENT_NAME.GALA_VIEW_EVENT_PHOTOS_CLICK,
              page: PAGE.GALA,
              section: SECTION.GALA_ACTIONS,
            }}
          >
            <Link
              href='https://www.dropbox.com/scl/fo/4yiygcelgy1gyx2dm2aam/ANPSDBax9w7PSOz85nG1XpM?dl=0&e=1&rlkey=85qlyxi256lock8vshggkmxfr&st=rq3tw56b'
              rel='noopener noreferrer'
              target='_blank'
            >
              View Event Photos
            </Link>
          </Button>
        </div>
      </section>

      {/* line divider */}
      <div className='flex justify-center'>
        <div className='bg-gold my-[48px] h-[1px] w-full max-w-[25%] rounded-lg' />
      </div>

      <GoldCards />
      <SpeakersHonorees />
      <SponsorLogos />
    </div>
  );
}
