import Image from '@/components/Image';
import { getGoogleDriveImages } from '@/lib/googleDrive';
import findImage from '@/utils/findImage';
import type { Metadata } from 'next';

import ChangeTheWorld from './ChangeTheWorld';
import ExponentialImpact from './ExponentialImpact';
import FourPillars from './FourPillars';
import OurVision from './OurVision';
import VisionApproachImpact from './VisionApproachImpact';
import WeAreFocused from './WeAreFocused';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Approach',
};

export default async function ApproachPage() {
  const approachPageImagesData = await getGoogleDriveImages(
    process.env.APPROACH_PAGE_IMAGES_FOLDER_ID,
  );

  const heroImage = findImage(approachPageImagesData, 'hero');

  return (
    <>
      <section>
        {/* Desktop Hero Image */}
        <Image
          priority
          hideContainerWhenMobile
          fillWidth='100%'
          fillHeight='100vh'
          src={heroImage?.url || ''}
          alt='Woman walking away with jar on her head'
          className='desktop'
        >
          <div className='desktop absolute top-[40%] left-[50%]'>
            <h1 className='mb-[16px]'>
              <div>From Unreached</div>
              <div>to Unstoppable</div>
            </h1>

            <h3 className='max-w-xl'>
              FOREFRONT&apos;s approach is to partner with communities to ignite
              a ripple effect of lasting change.
            </h3>
          </div>
        </Image>

        {/* Mobile Hero Image */}
        <Image
          priority
          hideContainerWhenDesktop
          fillWidth='100%'
          fillHeight='80vh'
          src={heroImage?.url || ''}
          alt='Woman walking away with jar on her head'
          className='mobile object-[30%_50%]'
        >
          <div className='mobile absolute top-[35%] left-[30%]'>
            <h1 className='mb-4'>From Unreached to Unstoppable</h1>

            <h3 className='max-w-xl'>
              FOREFRONT&apos;s approach is to partner with communities to ignite
              a ripple effect of lasting change.
            </h3>
          </div>
        </Image>
      </section>

      <section className='flex not-lg:flex-col'>
        <div className='z-1 flex-1 bg-teal-800 py-12 pr-12 pl-[10vw] text-white not-lg:text-center not-lg:[clip-path:polygon(0%_0%,100%_0%,100%_95%,50%_100%,0%_95%)] lg:justify-self-end lg:[clip-path:polygon(0%_0%,95%_0%,100%_50%,95%_100%,0%_100%)]'>
          <h3 className='mb-4'>
            When essentials are out of reach, potential is left behind
          </h3>
          <div>
            <div className='mb-6'>
              Around the world, lack of essential resources holds entire
              communities back, especially in unreached areas. When basic life
              necessities are not met, potential remains untapped.
            </div>
          </div>
        </div>

        <div className='flex-1 bg-teal-100 py-12 pr-[10vw] pl-[7%] not-lg:mt-[-4%] not-lg:pt-[8%] not-lg:text-center lg:ml-[-5%]'>
          <h3 className='mb-4'>A mission rooted in hope and transformation</h3>
          <div>
            <div className='mb-6 not-lg:mb-0'>
              We partner with local leaders— our Changemakers— to bring lasting
              transformation. Our mission: FOREFRONT Charity partners with local
              leaders to provide essential resources to unreached communities.
            </div>
          </div>
        </div>
      </section>

      <VisionApproachImpact />
      <FourPillars />
      <ExponentialImpact />
      <OurVision />
      <WeAreFocused />
      <ChangeTheWorld />
    </>
  );
}
