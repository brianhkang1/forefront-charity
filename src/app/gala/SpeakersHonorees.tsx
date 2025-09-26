import Image from '@/components/Image';

import AnuchaBrowneImage from './assets/Anucha_Browne.png';

const SPEAKER = {
  name: 'ANUCHA BROWNE',
  subtitle: 'Keynote Speaker',
  description:
    'Global leader and visionary empowering others through purpose, equity, and impact across the corporate, government, and non-profit sectors!',
  src: AnuchaBrowneImage,
  alt: 'Anucha Browne',
};

const HONOREES = [
  {
    name: 'DANIEL LEE',
    subtitle: 'Dream Builder Award',
    description:
      'Daniel envisioned a socially responsible company that would contribute to the global community and improve the lives of people everywhere through innovative communications technologies when he founded Blue Telcom in 2006. This vision led Daniel to found the Dream Blue Foundation.',
    src: AnuchaBrowneImage,
    alt: 'Daniel Lee',
  },
  {
    name: 'HENRY LIAO',
    subtitle: 'Pillar Award',
    description:
      'In recognition of his unwavering dedication and support, Henry is being honored as FOREFRONT Charity’s longest-standing board member. His commitment has made a lasting impact on advancing the organization’s mission.',
    src: AnuchaBrowneImage,
    alt: 'Henry Liao',
  },
];

export default function SpeakersHonorees() {
  return (
    <>
      <section className='flex flex-col items-center pb-10 text-white'>
        <div className='border-dark-gold mb-6 w-[90%] rounded-lg border-4 px-6 pt-20 pb-4 not-md:px-3 not-md:pt-15'>
          <h2>Keynote Speaker</h2>
        </div>

        <div className='flex w-[75%] flex-wrap justify-center gap-4'>
          <Image
            src={SPEAKER.src}
            alt={SPEAKER.alt}
            fillWidth={350}
            fillHeight={350}
          />
          <div>
            <div className='text-2xl font-bold not-md:text-xl'>
              {SPEAKER.name}
            </div>
            <div className='mb-4 italic'>{SPEAKER.subtitle}</div>
            <div className='w-[400px]'>{SPEAKER.description}</div>
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center pb-10 text-white'>
        <div className='border-dark-gold mb-6 w-[90%] rounded-lg border-4 px-6 pt-20 pb-4 not-md:px-3 not-md:pt-15'>
          <h2>Honorees</h2>
        </div>

        <div className='flex w-[80%] flex-wrap justify-center gap-30 not-md:gap-15'>
          {HONOREES.map((honoree) => (
            <div className='flex flex-col items-center' key={honoree.name}>
              <Image
                src={honoree.src}
                alt={honoree.alt}
                fillWidth={300}
                fillHeight={300}
              />
              <div>
                <div className='mt-4 text-2xl font-bold not-md:text-xl'>
                  {honoree.name}
                </div>
                <div className='mb-4 italic'>{honoree.subtitle}</div>
                <div className='w-[300px]'>{honoree.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
