// import SelectAnnualReport from '@/components/SelectAnnualReport';
// import { getGoogleDriveFiles } from '@/lib/googleDrive';
import Button from '@/components/Button';
import Image from '@/components/Image';
import Title from '@/components/Title';
import { getGoogleDriveImages } from '@/lib/googleDrive';
import findImage from '@/utils/findImage';
import type { Metadata } from 'next';

import PartnerImage from './assets/Partners.png';
import PillarsEducationImage from './assets/Pillars_Education.png';
import PillarsEmpowermentImage from './assets/Pillars_Empowerment.png';
import PillarsMedicalImage from './assets/Pillars_Medical.png';
import PillarsWaterImage from './assets/Pillars_Water.png';
import PotentialImage from './assets/Potential.png';

// TODO: add image alts
const PILLARS_CARDS_METADATA = [
  {
    title: 'CLEAN WATER',
    highlight: '87+',
    description: 'Water Wells Built',
    src: PillarsWaterImage,
    alt: '',
  },
  {
    title: 'QUALITY EDUCATION',
    highlight: '235+',
    description: 'Students Enrolled',
    src: PillarsEducationImage,
    alt: '',
  },
  {
    title: 'ACCESSIBLE MEDICAL CARE',
    highlight: '1300+',
    description: 'Patients Served',
    src: PillarsMedicalImage,
    alt: '',
  },
  {
    title: 'EMPOWERMENT OPPORTUNITIES',
    highlight: '175+',
    description: 'Changemakers Trained',
    src: PillarsEmpowermentImage,
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
          <div className='absolute top-[40%] left-[6%] text-white'>
            <Title className='mb-9'>
              <div>I can be the change</div>
              <div>my community needs.</div>
            </Title>

            <div className='flex gap-3'>
              <Button>Donate</Button>
              <Button color='bg-white'>Learn More</Button>
            </div>
          </div>
        </Image>
      </section>

      <div className='m-6 flex flex-col items-center gap-9'>
        <section className='w-full'>
          <Image
            width='100%'
            height={564}
            src={PartnerImage}
            alt='Local community landscape'
            className='rounded-xl'
          >
            <h1 className='absolute top-[25%] left-1/2 -translate-x-1/2 transform text-center text-nowrap text-white'>
              <div>
                FOREFRONT Charity partners with local leaders to provide
              </div>
              <div>essential resources to unreached communities.</div>
            </h1>
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
            <h1 className='absolute top-[40%] left-[5%] text-nowrap'>
              <div>Potential is everywhere.</div>
              <div>Opportunity can be limited.</div>
            </h1>
          </Image>
        </section>

        <section className='bg-teal-logo-200 flex w-full gap-3 rounded-xl p-6'>
          <div>
            <h1 className='mb-6'>FOREFRONT bridges the gap.</h1>
            <div className='mb-6 text-2xl'>
              Our four-pillar holistic approach is the foundation of thriving
              communities.
            </div>
            <Button color='bg-white'>Learn More</Button>
          </div>

          <div className='flex gap-2'>
            {PILLARS_CARDS_METADATA.map(
              ({ title, highlight, description, src, alt }) => (
                <div key={title}>
                  <Image
                    width={250}
                    height={360}
                    src={src}
                    alt={alt}
                    className='rounded-xl'
                  >
                    <div className='absolute top-[24px] left-0 flex h-full w-full flex-col items-center text-center'>
                      <h2>{title}</h2>
                      <Title>{highlight}</Title>
                      <h3>{description}</h3>
                    </div>
                  </Image>
                </div>
              ),
            )}
          </div>
        </section>

        <section className='w-full'>hello</section>

        <section className='w-full'>hello</section>
      </div>
    </>
  );
}

{
  /* {!!annualReportOptions && (
        <div>
          <SelectAnnualReport annualReportOptions={annualReportOptions} />
        </div>
      )} */
}
