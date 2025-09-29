import Image from '@/components/Image';

import AnuchaBrowneImage from './assets/Anucha_Browne.jpg';
import DreamBlueLogo from './assets/DreamBlueLogo.jpg';
import HenryLiaoImage from './assets/Henry_Liao.jpg';

const SPEAKER = {
  name: 'ANUCHA BROWNE',
  subtitle:
    'Coach | Leadership Development Professional | Nonprofit Social Impact and Human Rights Strategist',
  description:
    'Anucha Browne is a globally recognized leader in social impact, sports, and advocacy with more than 40 years of leadership experience. She has held senior executive roles at UNICEF USA and the Tides Foundation and is now a sought-after career and leadership coach. Throughout her career, Anucha has championed equity, justice, and youth empowerment, leaving a lasting impact across every sector she has served. Her journey reflects courage, purpose, and transformational leadership, and we are honored to welcome her as the keynote speaker for Forefront Charity’s 10th Anniversary Gala.',
  src: AnuchaBrowneImage,
  alt: 'Anucha Browne',
};

const HONOREES = [
  {
    name: 'DREAM BLUE FOUNDATION',
    subtitle: 'Dreamer Builder Honoree',
    description:
      'Dream Blue Foundation has exemplified generosity and dedication, helping turn countless dreams into reality. Through their unwavering support and visionary initiatives, they have empowered individuals and communities in India to reach their fullest potential, making a lasting impact on the lives they touch.',
    src: DreamBlueLogo,
    alt: 'Dream Blue Foundation',
  },
  {
    name: 'HENRY LIAO',
    subtitle: 'Pillar Honoree, Longest standing Board member',
    description:
      'Henry Liao has been a steadfast pillar of support and guidance. His dedication, leadership, and commitment have been instrumental in advancing the organization’s mission and creating lasting impact in the community.',
    src: HenryLiaoImage,
    alt: 'Henry Liao',
  },
];

export default function SpeakersHonorees() {
  return (
    <>
      <section className='flex flex-col items-center pb-10 text-white'>
        <div className='border-dark-gold mb-8 w-[90%] rounded-lg border-4 px-6 pt-20 pb-4 not-md:px-3 not-md:pt-15'>
          <h2>Keynote Speaker</h2>
        </div>

        <div className='flex w-[75%] flex-wrap items-center justify-center gap-4'>
          <Image
            src={SPEAKER.src}
            alt={SPEAKER.alt}
            fillWidth={350}
            fillHeight={350}
            className='rounded-lg'
          />
          <div className='w-[520px] not-md:w-full'>
            <div className='text-2xl font-bold not-md:text-xl'>
              {SPEAKER.name}
            </div>
            <div className='mb-4 text-wrap italic'>{SPEAKER.subtitle}</div>
            <div>{SPEAKER.description}</div>
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center pb-10 text-white'>
        <div className='border-dark-gold mb-8 w-[90%] rounded-lg border-4 px-6 pt-20 pb-4 not-md:px-3 not-md:pt-15'>
          <h2>Honorees</h2>
        </div>

        <div className='flex w-[80%] flex-wrap justify-center gap-30 not-md:gap-15'>
          {HONOREES.map((honoree) => (
            <div className='flex flex-col items-center' key={honoree.name}>
              <Image
                src={honoree.src}
                alt={honoree.alt}
                fillWidth={325}
                fillHeight={325}
                className='rounded-lg'
              />
              <div className='w-[325px]'>
                <div className='mt-4 text-2xl font-bold text-nowrap not-md:text-xl not-md:text-wrap'>
                  {honoree.name}
                </div>
                <div className='mb-7 text-nowrap italic not-md:text-wrap'>
                  {honoree.subtitle}
                </div>
                <div>{honoree.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
