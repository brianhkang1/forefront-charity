import Button from '@/components/Button';
import Image from '@/components/Image';
import { getGoogleDriveImages } from '@/lib/googleDrive';
import findImage from '@/utils/findImage';
import clsx from 'clsx';
import type { Metadata } from 'next';

import CallToAction from './assets/Call_To_Action.png';
import OurVision from './assets/Our_Vision.png';
import Ripple from './assets/Ripple.png';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Approach',
};

const FOUR_PILLARS = [
  {
    backgroundColor: 'bg-forefront-water-background',
    title: 'Clean Water',
    description: (
      <div>
        We build water wells directly in villages, ensuring everyone has access
        to life&apos;s most basic needs. As of 2025, we have built{' '}
        <span className='decoration-forefront-water font-bold underline decoration-3 underline-offset-2'>
          87+ water wells
        </span>
        , providing clean water for{' '}
        <span className='decoration-forefront-water font-bold underline decoration-3 underline-offset-2'>
          78,000+ people
        </span>
        .
      </div>
    ),
  },
  {
    backgroundColor: 'bg-forefront-medical-background',
    title: 'Accessible Medical Care',
    description: (
      <div>
        We provide public health workshops, helping people live healthier lives.
        We have served over{' '}
        <span className='decoration-forefront-medical font-bold underline decoration-3 underline-offset-2'>
          1,300 patients in 29 villages.
        </span>
      </div>
    ),
  },
  {
    backgroundColor: 'bg-forefront-education-background',
    title: 'Quality Education',
    description: (
      <div>
        We invest in children, inspiring them to dream of a brighter future. In
        2020, we launched our pre-K to 8th grade school and have
        <span className='decoration-forefront-education font-bold underline decoration-3 underline-offset-2'>
          235+ students enrolled.
        </span>
      </div>
    ),
  },
  {
    backgroundColor: 'bg-forefront-empowerment-background',
    title: 'Empowerment Opportunities',
    description: (
      <div>
        We create pathways that build long-term community growth. We have
        trained{' '}
        <span className='decoration-forefront-empowerment font-bold underline decoration-3 underline-offset-2'>
          38 Changemakers, impacting 98,000+ people.
        </span>
      </div>
    ),
  },
];

export default async function ApproachPage() {
  const approachPageImagesData = await getGoogleDriveImages(
    process.env.APPROACH_PAGE_IMAGES_FOLDER_ID,
  );

  const heroImage = findImage(approachPageImagesData, 'hero');

  return (
    <>
      <section>
        <Image
          priority
          fillWidth='100%'
          fillHeight='100vh'
          src={heroImage?.url || ''}
          alt='Woman walking away with jar on her head'
        >
          <div className='absolute top-[40%] left-[50%]'>
            <h1 className='mb-[16px]'>
              <div>From Unreached</div>
              <div>to Unstoppable</div>
            </h1>

            <h3>
              FOREFRONT Charity&apos;s approach is to partner with communities
              to ignite a ripple effect of lasting change.
            </h3>
          </div>
        </Image>
      </section>

      <section className='flex'>
        <div className='z-1 flex-1 justify-self-end bg-teal-800 py-[24px] pr-[48px] pl-[10vw] text-white [clip-path:polygon(0%_0%,95%_0%,100%_50%,95%_100%,0%_100%)]'>
          <h3 className='mb-[16px]'>
            When essentials are out of reach, potential is left behind
          </h3>
          <div>
            <div className='mb-[24px]'>
              Around the world, lack of essential resources holds entire
              communities back, especially in unreached areas.
            </div>
            <div className='mb-[24px]'>
              Women and children walk over ten hours a day to collect water -
              water that is not even safe to drink. There are no local schools,
              leaving children without the opportunity to learn. Preventable
              diseases impact communities without access to medical care.
            </div>
            <div className='mb-[24px]'>
              When basic life necessities are not met, potential remains
              untapped.
            </div>
          </div>
        </div>

        <div className='ml-[-40px] flex-1 bg-teal-100 py-[24px] pr-[10vw] pl-[64px]'>
          <h3 className='mb-[16px]'>
            A mission rooted in hope and transformation
          </h3>
          <div>
            <div className='mb-[24px]'>
              We partner with local leaders—our Changemakers—to bring lasting
              transformation.
            </div>
            <div className='mb-[24px]'>
              Our mission is simple yet powerful: FOREFRONT Charity partners
              with local leaders to provide essential resources to unreached
              communities.
            </div>
            <div className='mb-[24px]'>
              By building deep relationships and co-creating solutions, we help
              unlock the potential already within these communities. Together,
              we plant the seeds for lasting impact—led by those who know their
              communities best.
            </div>
          </div>
        </div>
      </section>

      <section className='mb-[48px] flex flex-col items-center'>
        <div className='max-w-[1060px]'>
          <h2 className='mt-[48px] mb-[12px]'>
            How We Create Lasting Change: Our Four-Pillar Approach
          </h2>
          <div className='mb-[24px]'>
            Our four-pillar holistic approach provides communities with the
            essential resources they need to thrive.
          </div>

          <div className='grid grid-cols-2 gap-[24px]'>
            {FOUR_PILLARS.map(({ backgroundColor, title, description }) => (
              <div
                key={title}
                className={clsx('rounded-xl p-[24px]', backgroundColor)}
              >
                <h3 className='mb-[24px]'>{title}</h3>
                <div>{description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-teal-800 pl-[10vw] text-white'>
        <div className='flex'>
          <div className='flex max-w-[412px] flex-col justify-center'>
            <h2 className='mb-[12px]'>
              Exponential Impact: A Ripple Effect of Change
            </h2>
            <div className='mb-[24px]'>
              When people have access to the essential resources, they can focus
              on growth, opportunity, and uplifting others. They become the next
              generation of leaders and this is how real change happens - not
              just for today, but for the future.
            </div>
            <div className='mb-[24px]'>
              Mothers who once spent hours collecting water can now devote more
              time caring for their families. Children who once worked in
              brickfields with no access to education now have the opportunity
              to learn, dreaming of careers in medicine, engineering, and
              beyond—hoping to help their own communities.
            </div>
            <div className='mb-[24px]'>
              Through culturally responsive solutions, long-term relationship
              building, and leadership training, we ensure communities can take
              ownership of their futures.
            </div>
          </div>

          <Image
            src={Ripple}
            alt='Multiple Changemakers creating a ripple effect'
            fillWidth={900}
            fillHeight={700}
          />
        </div>
      </section>

      <section className='p-[48px]'>
        <Image
          src={OurVision}
          fillWidth='100%'
          fillHeight='90vh'
          alt='FOREFRONT teacher and students posing in front of school'
          className='rounded-xl'
        >
          <div className='absolute top-[24px] w-full'>
            <h2 className='mb-[12px] text-center'>Our Vision</h2>
            <h3 className='text-center'>
              <div>
                A world where everyone propels their communities forward,
              </div>
              <div>creating a ripple effect of change.</div>
            </h3>
          </div>
        </Image>
      </section>

      <section className='flex flex-col items-center'>
        <h3 className='mb-[24px] max-w-[1060px] text-center'>
          We are focused on reaching all parts of the world because we believe
          in a world where everyone has the essential resources to reach their
          full potential
        </h3>

        <div className='grid max-w-[1060px] grid-cols-3 gap-[24px]'>
          {/* Column 1 */}
          <div className='flex flex-wrap gap-[24px]'>
            <Image
              src={CallToAction}
              alt=''
              fillWidth={332}
              fillHeight={156}
              className='rounded-xl'
            />
            <Image
              src={CallToAction}
              alt=''
              fillWidth={156}
              fillHeight={156}
              className='rounded-xl'
            />
            <Image
              src={CallToAction}
              alt=''
              fillWidth={156}
              fillHeight={156}
              className='rounded-xl'
            />
          </div>

          {/* Column 2 */}
          <div className='flex flex-wrap gap-[24px]'>
            <Image
              src={CallToAction}
              alt=''
              fillWidth={156}
              fillHeight={336}
              className='rounded-xl'
            />
            <Image
              src={CallToAction}
              alt=''
              fillWidth={156}
              fillHeight={336}
              className='rounded-xl'
            />
          </div>

          {/* Column 3 */}
          <div className='flex flex-wrap gap-[24px]'>
            <Image
              src={CallToAction}
              alt=''
              fillWidth={156}
              fillHeight={156}
              className='aspect-square rounded-xl'
            />
            <Image
              src={CallToAction}
              alt=''
              fillWidth={156}
              fillHeight={156}
              className='aspect-square rounded-xl'
            />
            <Image
              src={CallToAction}
              alt=''
              fillWidth={332}
              fillHeight={156}
              className='aspect-[3/2] rounded-xl'
            />
          </div>
        </div>
      </section>

      <section className='mx-[48px] my-[24px]'>
        <Image
          src={CallToAction}
          alt='Students playing at FOREFRONT School'
          className='h-[70vh] w-full rounded-xl object-[50%_55%]'
        >
          <div className='desktop absolute top-[40%] left-[5%]'>
            <h2>Change the World with Us</h2>

            <div className='mt-3 flex gap-2'>
              <Button>[L] Give</Button>
              <Button color='bg-white'>[L] Get Involved</Button>
            </div>
          </div>
        </Image>
      </section>
    </>
  );
}
