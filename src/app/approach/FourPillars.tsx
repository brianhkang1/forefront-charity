import Image from '@/components/Image';
import clsx from 'clsx';

import PillarEducationImage from './assets/Pillar_Education.png';
import PillarEmpowermentImage from './assets/Pillar_Empowerment.png';
import PillarMedicalImage from './assets/Pillar_Medical.png';
import PillarWaterImage from './assets/Pillar_Water.png';

const FOUR_PILLARS = [
  {
    backgroundColor: 'bg-forefront-water-background',
    imageUrl: PillarWaterImage,
    alt: 'Woman drinking water',
    title: 'Clean Water',
    underlineColor: 'decoration-forefront-water',
    description: (
      <div>
        We build water wells directly in villages, ensuring everyone has access
        to life&apos;s most basic needs. As of 2025, we have built{' '}
        <span className='bg-forefront-water/50 px-1 font-bold'>
          89+ water wells
        </span>
        , providing clean water for{' '}
        <span className='bg-forefront-water/50 px-1 font-bold'>
          78,000+ people.
        </span>
      </div>
    ),
  },
  {
    backgroundColor: 'bg-forefront-medical-background',
    imageUrl: PillarMedicalImage,
    alt: 'Woman receiving medical care',
    title: 'Accessible Medical Care',
    underlineColor: 'decoration-forefront-medical',
    description: (
      <div>
        We provide public health workshops, helping people live healthier lives.
        We have served over{' '}
        <span className='bg-forefront-medical/50 px-1 font-bold'>
          1,300+ patients in 29 villages.
        </span>
      </div>
    ),
  },
  {
    backgroundColor: 'bg-forefront-education-background',
    imageUrl: PillarEducationImage,
    alt: 'Teacher and students pointing up at FOREFRONT School',
    title: 'Quality Education',
    underlineColor: 'decoration-forefront-education',
    description: (
      <div>
        We invest in children, inspiring them to dream of a brighter future. In
        2020, we launched our pre-K to 8th grade school and have{' '}
        <span className='bg-forefront-education/50 px-1 font-bold'>
          235+ students enrolled.
        </span>
      </div>
    ),
  },
  {
    backgroundColor: 'bg-forefront-empowerment-background',
    imageUrl: PillarEmpowermentImage,
    alt: 'Kids holding FOREFRONT provided soap',
    title: 'Empowerment Opportunities',
    underlineColor: 'decoration-forefront-empowerment',
    description: (
      <div>
        We create pathways that build long-term community growth. We have
        trained{' '}
        <span className='bg-forefront-empowerment/50 px-1 font-bold'>
          175+ Changemakers, impacting 98,000+ people.
        </span>
      </div>
    ),
  },
];

export default function FourPillars() {
  return (
    <section className='mb-12 flex flex-col items-center not-md:mx-0 not-md:mt-12'>
      <div className='max-w-6xl px-4 not-md:px-6'>
        <h2 className='mb-3 md:mt-12'>
          How We Create Lasting Change: Our Four-Pillar Approach
        </h2>
        <div className='mb-6'>
          Our four-pillar holistic approach provides communities with the
          essential resources they need to thrive. Through culturally responsive
          solutions, long-term relationship building, and leadership training,
          we ensure communities can take ownership of their futures.
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {FOUR_PILLARS.map(
            ({
              backgroundColor,
              imageUrl,
              alt,
              underlineColor,
              title,
              description,
            }) => (
              <div
                key={title}
                className={clsx('rounded-xl p-6', backgroundColor)}
              >
                <Image
                  src={imageUrl}
                  fillWidth='100%'
                  fillHeight={220}
                  alt={alt}
                  className='rounded-lg'
                />

                <h3
                  className={clsx(
                    'my-4 underline decoration-3 underline-offset-6',
                    underlineColor,
                  )}
                >
                  {title}
                </h3>
                <div>{description}</div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
