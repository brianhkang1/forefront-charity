import Button from '@/components/Button';
import Image from '@/components/Image';
import SelectAnnualReport from '@/components/SelectAnnualReport';
import { getGoogleDriveImages } from '@/lib/googleDrive';
import findImage from '@/utils/findImage';
import clsx from 'clsx';
import type { Metadata } from 'next';
import Link from 'next/link';

import CallToAction from './assets/CallToAction.png';
import CallToActionMobile from './assets/CallToAction_Mobile.png';
import ChangemakersImage from './assets/Changemakers.png';
import PartnerImage from './assets/Partners.png';
import PillarsEducationImage from './assets/Pillars_Education.png';
import PillarsEmpowermentImage from './assets/Pillars_Empowerment.png';
import PillarsMedicalImage from './assets/Pillars_Medical.png';
import PillarsWaterImage from './assets/Pillars_Water.png';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Home - FOREFRONT Charity',
};

const FOUR_PILLARS_CARDS = [
  {
    key: 'Clean Water',
    title: (
      <>
        <div>CLEAN</div>
        <div>WATER</div>
      </>
    ),
    highlight: '89+',
    description: 'Water Wells Built',
    src: PillarsWaterImage,
    alt: 'Clean water cup held by two hands',
    borderColor: 'border-forefront-water',
  },
  {
    key: 'Accessible Medical Care',
    title: (
      <>
        <div>ACCESSIBLE</div>
        <div>MEDICAL CARE</div>
      </>
    ),
    highlight: '1300+',
    description: 'Patients Served',
    src: PillarsMedicalImage,
    alt: 'Patient being treated',
    borderColor: 'border-forefront-medical',
  },
  {
    key: 'Quality Education',
    title: (
      <>
        <div>QUALITY</div>
        <div>EDUCATION</div>
      </>
    ),
    highlight: '235+',
    description: 'Students Enrolled',
    src: PillarsEducationImage,
    alt: 'Two young students smiling',
    borderColor: 'border-forefront-education',
  },
  {
    key: 'Empowerment Opportunities',
    title: (
      <>
        <div>EMPOWERMENT</div>
        <div>OPPORTUNITIES</div>
      </>
    ),
    highlight: '175+',
    description: 'Changemakers Trained',
    src: PillarsEmpowermentImage,
    alt: 'Female individual standing out in a crowd',
    borderColor: 'border-forefront-empowerment',
  },
];

// TODO: add image alts
const CHANGEMAKERS_CARDS = [
  {
    title: 'A Brighter Future',
    description:
      'I grew up in a village where clean water was scarce and opportunities were few. But I always dreamed of helping others. FOREFRONT Charity brought clean water to our community and supported my education. Today, I’m proud to give back as a caregiver, a parent, and a reminder that a little opportunity can change everything.',
    src: PillarsWaterImage,
    alt: '',
  },
  {
    title: 'Paying It Forward',
    description:
      'When FOREFRONT built a well in my village, it changed my life. Inspired by their example, I now volunteer to help bring clean water to other communities. It’s my way of paying it forward and spreading the same hope I once received.',
    src: PillarsEducationImage,
    alt: '',
  },
  {
    title: 'Igniting Young Minds',
    description:
      'After years as an engineer, I became a teacher through FOREFRONT’s education program. I helped launch a general knowledge class where our students rose to the top—competing against university-level peers and winning. It’s amazing what students can achieve when given the chance.',
    src: PillarsMedicalImage,
    alt: '',
  },
];

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
              <div className='mb-[16px] text-[40px] font-normal italic'>
                I dream of...
              </div>
              <div className='mb-[12px]'>helping my</div>
              <div>whole village thrive</div>
            </h1>

            <div className='flex gap-3'>
              <Button>[L] Donate</Button>
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
              <Button>[L] Donate</Button>
              <Button color='bg-white'>
                <Link href='/approach'>Learn More</Link>
              </Button>
            </div>
          </div>
        </Image>
      </section>

      <div className='m-12 flex flex-col items-center gap-9 not-md:m-6 not-md:gap-6'>
        <section className='w-full'>
          <div className='text-center'>
            <h2 className='mb-3'>Our Approach for Lasting Change</h2>
            <div className='mb-6 text-2xl'>
              Our four-pillar holistic approach is the foundation of thriving
              communities.
            </div>
          </div>

          <div className='flex flex-wrap justify-center gap-[24px]'>
            {FOUR_PILLARS_CARDS.map(
              ({
                key,
                title,
                highlight,
                description,
                src,
                alt,
                borderColor,
              }) => (
                <div key={key} className='relative'>
                  <Image
                    fillWidth={245}
                    fillHeight={360}
                    src={src}
                    alt={alt}
                    className={clsx(
                      'rounded-xl border-4 shadow-[1px_1px_3px_2px_rgba(0,_0,_0,_0.2)] md:object-top',
                      borderColor,
                    )}
                  >
                    <div className='absolute top-0 left-0 flex w-full flex-col items-center'>
                      <div className='relative w-full'>
                        {/* blurry white background */}
                        <div className='pointer-events-none absolute inset-0 z-0 mb-6 h-[125%] w-full rounded-t-xl bg-white/10 backdrop-blur-md [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]' />

                        {/* text */}
                        <div className='relative pt-[7%] text-center'>
                          <h3>{title}</h3>
                          <div className='my-1 text-6xl font-bold not-md:text-5xl'>
                            {highlight}
                          </div>
                          <div className='text-lg'>{description}</div>
                        </div>
                      </div>
                    </div>
                  </Image>
                </div>
              ),
            )}
          </div>
        </section>

        <section className='bg-teal-logo-200 w-full rounded-xl py-8'>
          <h2 className='mb-4 text-center not-md:mb-6'>
            Proudly Platinum for Transparent Impact
          </h2>

          <div className='flex items-center justify-center gap-6 px-2 not-md:flex-col'>
            <div>
              <Image
                src='/icons/platinumTransparency.svg'
                alt='Platinum Transparency Logo'
                fillWidth={156}
                fillHeight={156}
              />
            </div>

            <div className='max-w-xl not-md:mx-6'>
              <p className='mb-6 not-md:text-center'>
                We are proud to have a Platinum Seal of Transparency from Candid
                every year— because at Forefront Charity, transparency is at the
                heart of everything we do. Learn more by reading our annual
                reports.
              </p>

              <SelectAnnualReport />
            </div>
          </div>
        </section>

        <section className='relative w-full'>
          <Image
            src={PartnerImage}
            alt='Local community landscape'
            className='w-full rounded-xl not-md:aspect-square md:h-[70vh]'
          >
            <div className='absolute top-[25%] left-0 flex w-full justify-center not-md:top-[10%]'>
              <h2 className='max-w-[80%] text-center not-md:max-w-[90%] 2xl:max-w-[60%]'>
                FOREFRONT Charity partners with local leaders to provide
                essential resources to unreached communities.
              </h2>
            </div>
          </Image>
        </section>

        <section className='w-full'>
          <Image
            src={ChangemakersImage}
            alt='Family in local community'
            className='w-full rounded-xl not-md:aspect-square not-md:object-top md:h-[70vh]'
          >
            <div className='absolute top-[15%] left-[5%] max-w-118.25 not-md:top-[5%]'>
              <h2>
                <div>Our Changemakers.</div>
                <div>The Catalysts for Change.</div>
              </h2>

              <p className='mt-4 not-md:max-w-[70%] not-md:text-sm'>
                We partner with our Changemakers: local leaders who understand
                and know their communities’ needs. This approach drives
                long-term, sustainable change.
              </p>
            </div>
          </Image>
        </section>

        <section className='bg-teal-logo-200 w-full rounded-xl p-6'>
          <h2 className='mb-9 text-center'>
            <div>Exponential Impact</div>
            <div>Made Possible by Our Changemakers</div>
          </h2>

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
        </section>

        <section>
          {/* Desktop Image */}
          <Image
            hideContainerWhenMobile
            src={CallToAction}
            alt='Two FOREFRONT students smiling at camera'
            className='desktop h-[70vh] w-full rounded-xl'
          >
            <div className='desktop absolute top-[40%] left-[5%]'>
              <h2>Change the World with Us</h2>

              <div className='mt-3 flex gap-2'>
                <Button>[L] Give</Button>
                <Button color='bg-white'>[L] Get Involved</Button>
              </div>
            </div>
          </Image>

          {/* Mobile Image */}
          <Image
            hideContainerWhenDesktop
            src={CallToActionMobile}
            alt='Two FOREFRONT students smiling at camera'
            className='mobile aspect-square h-[50vh] rounded-xl'
          >
            <div className='mobile absolute top-[30%] left-0 px-[5vw]'>
              <h2>Change the World with Us</h2>

              <div className='mt-3 flex gap-2'>
                <Button>[L] Give</Button>
                <Button color='bg-white'>[L] Get Involved</Button>
              </div>
            </div>
          </Image>
        </section>
      </div>
    </>
  );
}
