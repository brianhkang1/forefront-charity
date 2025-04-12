// import SelectAnnualReport from '@/components/SelectAnnualReport';
// import { getGoogleDriveFiles } from '@/lib/googleDrive';
import Button from '@/components/Button';
import Image from '@/components/Image';
import { getGoogleDriveImages } from '@/lib/googleDrive';
import findImage from '@/utils/findImage';
import type { Metadata } from 'next';

import ChangemakersImage from './assets/Changemakers.png';
import PartnerImage from './assets/Partners.png';
import PillarsEducationImage from './assets/Pillars_Education.png';
import PillarsEmpowermentImage from './assets/Pillars_Empowerment.png';
import PillarsMedicalImage from './assets/Pillars_Medical.png';
import PillarsWaterImage from './assets/Pillars_Water.png';
import PotentialImage from './assets/Potential.png';

// TODO: add image alts
const PILLARS_CARDS_METADATA = [
  {
    title: 'Clean Water',
    highlight: '87+',
    description: 'Water Wells Built',
    src: PillarsWaterImage,
    alt: '',
  },
  {
    title: 'Quality Education',
    highlight: '235+',
    description: 'Students Enrolled',
    src: PillarsEducationImage,
    alt: '',
  },
  {
    title: 'Accessible Medical Care',
    highlight: '1300+',
    description: 'Patients Served',
    src: PillarsMedicalImage,
    alt: '',
  },
  {
    title: 'Empowerment Opportunities',
    highlight: '175+',
    description: 'Changemakers Trained',
    src: PillarsEmpowermentImage,
    alt: '',
  },
];

// TODO: add image alts
const CHANGEMAKERS_CARDS_METADATA = [
  {
    title: 'A Brighter Future',
    description:
      'Siri grew up in a remote village with contaminated water and limited resources. She dreamed of helping others but faced financial and environmental obstacles. FOREFRONT Charity provided clean water and funded her education. Today, Siri is a nurse, a mother, and a symbol of how clean water and opportunity can transform a life.',
    src: PillarsWaterImage,
    alt: '',
  },
  {
    title: 'Paying It Forward',
    description:
      '[NAME] was deeply moved by when FOREFRONT Charity built his village a water well. Inspired by the Changemakers’ leadership, he is now a volunteer, scouting new locations that are in need of clean water. His dedication is a powerful reminder of the ripple effect of hope and service.',
    src: PillarsEducationImage,
    alt: '',
  },
  {
    title: 'Igniting Young Minds',
    description:
      'Mr. Nagrashu, once an engineer and now a passionate educator, joined FOREFRONT’s school and built a thriving general knowledge program. Under his guidance, the grade 5 and 6 students competed—and won—against university-level peers at a major general knowledge competition. His story is a testament to the impact an individual can make.',
    src: PillarsMedicalImage,
    alt: '',
  },
];

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const homePageImagesData = await getGoogleDriveImages(
    process.env.HOME_PAGE_IMAGES_FOLDER_ID,
  );

  const heroImage = findImage(homePageImagesData, 'hero');

  // const annualReportsData = await getGoogleDriveFiles(
  //   process.env.ANNUAL_REPORTS_FILES_FOLDER_ID,
  // );

  // const annualReportOptions = annualReportsData?.map((report) => ({
  //   value: report.id,
  //   label: report.name,
  //   mimeType: report.mimeType,
  // }));

  {
    /* {!!annualReportOptions && (
          <div>
            <SelectAnnualReport annualReportOptions={annualReportOptions} />
          </div>
        )} */
  }

  return (
    <>
      <section>
        <Image
          priority
          width='100%'
          height='95vh'
          src={heroImage?.url || ''}
          alt='Home Page Hero Image'
        >
          <div className='absolute top-[35%] left-[6%] text-white'>
            <h1 className='mb-9'>
              <div className='f mb-[16px] font-(family-name:--font-libre-baskerville) text-[40px] font-normal'>
                I dream of...
              </div>
              <div className='mb-[12px]'>helping my</div>
              <div>whole village thrive</div>
            </h1>

            <div className='flex gap-3'>
              <Button>Donate</Button>
              <Button color='bg-white'>Learn More</Button>
            </div>
          </div>
        </Image>
      </section>

      <div className='m-6 flex flex-col items-center gap-9'>
        <section className='bg-teal-logo-200 flex w-full gap-3 rounded-xl p-6'>
          <div className='max-w-91.5'>
            <h2 className='mb-6'>FOREFRONT bridges the gap.</h2>
            <div className='mb-6 text-2xl'>
              Our four-pillar holistic approach is the foundation of thriving
              communities.
            </div>
            <Button color='bg-white'>Learn More</Button>
          </div>

          <div className='flex w-full gap-2'>
            {PILLARS_CARDS_METADATA.map(
              ({ title, highlight, description, src, alt }) => (
                <div key={title} className='relative flex-1'>
                  <Image
                    width='100%'
                    height={360}
                    src={src}
                    alt={alt}
                    className='rounded-xl'
                  >
                    <div className='absolute top-[24px] left-0 flex h-full w-full flex-col items-center text-center'>
                      <h4>{title}</h4>
                      <div className='text-6xl font-bold'>{highlight}</div>
                      <h4>{description}</h4>
                    </div>
                  </Image>
                </div>
              ),
            )}
          </div>
        </section>

        <section className='w-full'>
          <Image
            width='100%'
            height='70vh'
            src={PartnerImage}
            alt='Local community landscape'
          >
            <h2 className='absolute top-[25%] left-1/2 -translate-x-1/2 transform text-center text-nowrap'>
              <div>
                FOREFRONT Charity partners with local leaders to provide
              </div>
              <div>essential resources to unreached communities.</div>
            </h2>
          </Image>
        </section>

        <section className='w-full rounded-xl'>
          <Image
            width='100%'
            height={564}
            src={PotentialImage}
            alt='Students at FOREFRONT School'
            className='rounded-xl'
          >
            <h2 className='absolute top-[40%] left-[5%] text-nowrap'>
              <div>Potential is everywhere.</div>
              <div>Opportunity can be limited.</div>
            </h2>
          </Image>
        </section>

        <section className='w-full rounded-xl'>
          <Image
            width='100%'
            height={564}
            src={ChangemakersImage}
            alt='Family in local community'
            className='rounded-xl'
          >
            <div className='absolute top-[15%] left-[5%] max-w-118.25'>
              <h2>
                <div>Our Changemakers,</div>
                <div>the catalysts for change.</div>
              </h2>

              <p className='mt-4'>
                We partner with our Changemakers: local leaders who understand
                and know their communities’ needs. This approach drives
                long-term, sustainable change.
              </p>
            </div>
          </Image>
        </section>

        <section className='bg-teal-logo-200 w-full rounded-xl p-6'>
          <h2 className='mb-9 text-center'>
            <div>Exponential impact.</div>
            <div>Made possible by our Changemakers.</div>
          </h2>

          <div className='flex gap-2'>
            {CHANGEMAKERS_CARDS_METADATA.map(
              ({ title, description, src, alt }) => (
                <div key={title} className='flex-1 rounded-xl bg-white p-6'>
                  <div className='aspect-square w-full'>
                    <Image
                      className='rounded-lg'
                      src={src}
                      width='100%'
                      height='100%'
                      alt={alt}
                    />
                  </div>
                  <h3 className='mt-[24px] mb-[12px]'>{title}</h3>
                  <p>{description}</p>
                </div>
              ),
            )}
          </div>
        </section>

        <section className='w-full rounded-xl'>
          <Image
            width='100%'
            height={564}
            src={PartnerImage}
            alt='Two FOREFRONT students smiling at camera'
            className='rounded-xl'
          >
            <div className='absolute top-[40%] right-[5%]'>
              <h2>Change the world with us</h2>

              <div className='mt-3 flex gap-2'>
                <Button>Give</Button>
                <Button>Get Involved</Button>
              </div>
            </div>
          </Image>
        </section>
      </div>
    </>
  );
}
