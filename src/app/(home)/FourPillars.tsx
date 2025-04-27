import Image from '@/components/Image';
import clsx from 'clsx';

import PillarsEducationImage from './assets/Pillars_Education.png';
import PillarsEmpowermentImage from './assets/Pillars_Empowerment.png';
import PillarsMedicalImage from './assets/Pillars_Medical.png';
import PillarsWaterImage from './assets/Pillars_Water.png';

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

export default function FourPillars() {
  return (
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
          ({ key, title, highlight, description, src, alt, borderColor }) => (
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
  );
}
