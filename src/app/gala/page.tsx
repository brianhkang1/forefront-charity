import Button from '@/components/Button';
import Image from '@/components/Image';
import { getGoogleDriveImages } from '@/lib/googleDrive';
import findImage from '@/utils/findImage';
import type { Metadata } from 'next';
import Link from 'next/link';

const GOLD_CARDS_METADATA = [
  {
    title: 'Sponsorship Packages',
    description:
      "Get ready to bid on exclusive experiences and unique items! Browse our auction packages now and place your bids to support FOREFRONT Charity's mission.",
    buttonLabel: 'Bid',
    url: './documents/Forefront_Gala_Sponsorship_Deck_2025.pdf',
  },
  {
    title: 'Auction Items',
    description:
      "Join us for an unforgettable evening in support of FOREFRONT Charity's work. Secure your tickets today and be part of a night filled with inspiration, impact, and celebration!",
    // buttonLabel: 'Purchase',
    buttonLabel: 'Auction items coming soon - check back later!',
  },
  {
    title: "Can't Attend?",
    description:
      "Can't attend? You can still make a difference! Consider making a donation to help further FOREFRONT Charity's work and create lasting change.",
    buttonLabel: 'Donate',
    url: 'https://givebutter.com/c/FF10thgala',
  },
];

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
            FOREFRONT Charity&apos;s 10 Year Annual Gala
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
          <Button color='bg-dark-gold'>[L] Buy Ticket</Button>
          <Button color='bg-dark-gold'>[L] Become a Sponsor</Button>
        </div>
      </section>

      <section className='flex items-center justify-center gap-6 pb-10 text-white not-md:flex-col not-md:gap-12'>
        {GOLD_CARDS_METADATA.map(({ title, description, buttonLabel, url }) => (
          <div
            key={title}
            className='from-gold to-dark-gold h-[360px] w-[340px] rounded-md bg-gradient-to-r p-[3px]'
          >
            <div className='relative h-full w-full rounded bg-black px-[23px] pt-[15px] pb-[54px]'>
              <div className='w-min text-4xl font-bold'>{title}</div>

              {/* line divider */}
              <div className='bg-gold mt-[16px] mb-[16px] h-[1px] w-full rounded-lg' />

              <div className='min-h-[150px]'>{description}</div>

              {url ? (
                <Button color='bg-dark-gold' size='small' disabled={!url}>
                  <Link href={url} rel='noopener noreferrer' target='_blank'>
                    {buttonLabel}
                  </Link>
                </Button>
              ) : (
                buttonLabel
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
