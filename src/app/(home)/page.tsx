import Button from '@/components/Button';
import DonationDialog from '@/components/DonationDialog';
import Image from '@/components/Image';
import { getGoogleDriveImages } from '@/lib/googleDrive';
import findImage from '@/utils/findImage';
import type { Metadata } from 'next';
import Link from 'next/link';

import ChangeTheWorld from './ChangeTheWorld';
import Changemakers from './Changemakers';
import ExponentialImpact from './ExponentialImpact';
import FourPillars from './FourPillars';
import LivingTheMission from './LivingTheMission';
import Partnership from './Partnership';
import PlatinumTransparency from './PlatinumTransparency';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Home',
};

// TODO: add image alts
// const CHANGEMAKERS_CARDS = [
//   {
//     title: 'A Brighter Future',
//     description:
//       'I grew up in a village where clean water was scarce and opportunities were few. But I always dreamed of helping others. FOREFRONT Charity brought clean water to our community and supported my education. Today, I’m proud to give back as a caregiver, a parent, and a reminder that a little opportunity can change everything.',
//     src: PillarsWaterImage,
//     alt: '',
//   },
//   {
//     title: 'Paying It Forward',
//     description:
//       'When FOREFRONT built a well in my village, it changed my life. Inspired by their example, I now volunteer to help bring clean water to other communities. It’s my way of paying it forward and spreading the same hope I once received.',
//     src: PillarsEducationImage,
//     alt: '',
//   },
//   {
//     title: 'Igniting Young Minds',
//     description:
//       'After years as an engineer, I became a teacher through FOREFRONT’s education program. I helped launch a general knowledge class where our students rose to the top—competing against university-level peers and winning. It’s amazing what students can achieve when given the chance.',
//     src: PillarsMedicalImage,
//     alt: '',
//   },
// ];

export default async function HomePage() {
  const homePageImagesData = await getGoogleDriveImages(
    process.env.HOME_PAGE_IMAGES_FOLDER_ID,
  );

  const heroDesktopImage = findImage(homePageImagesData, 'hero_desktop');
  const heroMobileImage = findImage(homePageImagesData, 'hero_mobile');

  return (
    <>
      <section>
        {/* Desktop Hero Image */}
        <Image
          priority
          hideContainerWhenMobile
          fillWidth='100%'
          fillHeight='95vh'
          src={heroDesktopImage?.url || ''}
          alt='Home Page Hero Image'
          className='desktop'
        >
          <div className='desktop absolute top-[35%] left-[6%] text-white not-md:top-[15%]'>
            <h1 className='mb-9'>
              <div className='mb-4 text-[40px] font-normal italic'>
                I dream of...
              </div>
              <div className='mb-3'>helping my</div>
              <div>whole village thrive</div>
            </h1>

            <div className='flex gap-3'>
              <DonationDialog />

              <Button color='bg-white'>
                <Link href='/approach'>Learn More</Link>
              </Button>
            </div>
          </div>
        </Image>

        {/* Mobile Hero Image */}
        <Image
          priority
          hideContainerWhenDesktop
          fillWidth='100%'
          fillHeight='70vh'
          src={heroMobileImage?.url || ''}
          alt='Home Page Hero Image'
          className='mobile'
        >
          {/* black overlay */}
          <div className='mobile absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent' />

          <div className='mobile absolute bottom-[8%] left-[6%] text-white'>
            <h1 className='mb-9'>
              <div className='mb-[16px] text-[24px] font-normal italic'>
                I dream of...
              </div>
              <div className='mb-[12px]'>helping my</div>
              <div>whole village thrive</div>
            </h1>

            <div className='flex gap-3'>
              <DonationDialog />

              <Button color='bg-white'>
                <Link href='/approach'>Learn More</Link>
              </Button>
            </div>
          </div>
        </Image>
      </section>

      <div className='m-12 flex flex-col items-center gap-9 not-md:m-6 not-md:gap-6'>
        <FourPillars />
        <PlatinumTransparency />
        <Partnership />
        <Changemakers />
        <LivingTheMission />
        <ExponentialImpact />
        <ChangeTheWorld />

        {/* <section className='bg-teal-logo-200 w-full rounded-xl p-6'>
          <div className='flex gap-6 not-md:flex-col'>
            {CHANGEMAKERS_CARDS.map(({ title, description, src, alt }) => (
              <div
                key={title}
                className='flex-1 rounded-xl bg-white p-6 shadow-[2px_3px_7px_4px_rgba(0,_0,_0,_0.2)]'
              >
                <div className='aspect-square w-full'>
                  <Image
                    className='rounded-lg'
                    src={src}
                    fillWidth='100%'
                    fillHeight='100%'
                    alt={alt}
                  />
                </div>
                <h3 className='mt-[24px] mb-[12px]'>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </>
  );
}
