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
      "Get ready to bid on exclusive experiences and unique items! Browse our auction packages now and place your bids to support Forefront's mission.",
    buttonLabel: 'Bid',
  },
  {
    title: 'Auction Items',
    description:
      "Join us for an unforgettable evening in support of Forefront's work. Secure your tickets today and be part of a night filled with inspiration, impact, and celebration!",
    buttonLabel: 'Purchase',
  },
  {
    title: "Can't Attend?",
    description:
      "Can't attend? You can still make a difference! Consider making a donation to help further Forefront's work and create lasting change.",
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
        <Image
          priority
          width='100%'
          height={700}
          src={heroImage?.url || ''}
          alt='Gala Page Hero Image'
        >
          {/* black overlay */}
          <div className='absolute bottom-0 left-0 h-3/4 w-full bg-gradient-to-t from-black to-transparent' />
        </Image>

        <div className='text-center not-md:mx-4'>
          <div className='mb-3 text-4xl font-extralight text-white'>
            FOREFRONT Charity&apos;s 10th Anniversary Gala
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
          <Button color='bg-dark-gold'>Buy Ticket</Button>
          <Button color='bg-dark-gold'>Become a Sponsor</Button>
        </div>
      </section>

      <section className='flex items-center justify-center gap-18.75 pb-10 text-white not-md:flex-col not-md:gap-12'>
        {GOLD_CARDS_METADATA.map(({ title, description, buttonLabel, url }) => (
          <div
            key={title}
            className='from-gold to-dark-gold h-[411px] w-[348px] rounded-md bg-gradient-to-r p-[3px]'
          >
            <div className='relative h-full w-full rounded bg-black px-[23px] pt-[15px] pb-[54px]'>
              <div className='w-min text-4xl font-bold'>{title}</div>

              {/* line divider */}
              <div className='mt-[24px] mb-[30px] h-[1px] w-[236px] rounded-lg bg-white' />

              <div className='leading-[27px]'>{description}</div>
              <Button className='absolute bottom-[48px]' color='bg-dark-gold'>
                <Link
                  href={url || ''}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {buttonLabel}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
