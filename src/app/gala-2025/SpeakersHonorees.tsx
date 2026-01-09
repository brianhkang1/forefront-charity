import Image from '@/components/Image';

import SectionTitleBox from './SectionTitleBox';
import AnuchaBrowneImage from './assets/Anucha_Browne.jpg';
import DanielLeeImage from './assets/Daniel_Lee.jpg';
import HenryLiaoImage from './assets/Henry_Liao.jpg';
import JulianaCanaleImage from './assets/Juliana_Canale.jpg';

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
    name: 'DANIEL LEE',
    subtitle: 'Dream Builder Award',
    description:
      'As the founder and CEO of Dream Blue Foundation, Daniel Lee has exemplified generosity and dedication, helping turn countless dreams into reality. Through Dream Blue’s unwavering support and visionary initiatives, they have empowered individuals and communities in FOREFRONT India to reach their fullest potential, making a lasting impact on the lives they touch.',
    src: DanielLeeImage,
    alt: 'Daniel Lee',
  },
  {
    name: 'HENRY LIAO',
    subtitle: 'Pillar of Impact Award',
    description:
      'In recognition of his unwavering dedication and support, Henry is being honored as FOREFRONT Charity’s longest-standing board member. His commitment has made a lasting impact on advancing the organization’s mission.',
    src: HenryLiaoImage,
    alt: 'Henry Liao',
  },
  {
    name: 'JULIANA CANALE',
    subtitle: 'Cornerstone Volunteer Award',
    description:
      'Exemplifying the true spirit of volunteerism, Juliana Canale is recognized as FOREFRONT’s longest standing volunteer. She has been a cornerstone of our mission, consistently inspiring and uplifting those around her. This award honors her enduring impact and steadfast devotion.',
    src: JulianaCanaleImage,
    alt: 'Juliana canale',
  },
];

export default function SpeakersHonorees() {
  return (
    <>
      <section className='flex flex-col items-center pb-10 text-white'>
        <SectionTitleBox>
          <h2>Keynote Speaker</h2>
        </SectionTitleBox>

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
        <SectionTitleBox>
          <h2>Honorees</h2>
        </SectionTitleBox>

        <div className='flex w-[80%] flex-wrap justify-center gap-x-30 gap-y-10 not-md:gap-x-15'>
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
                <div className='mt-2 text-2xl font-bold text-nowrap not-md:text-xl not-md:text-wrap'>
                  {honoree.name}
                </div>
                <div className='mb-4 text-nowrap italic not-md:text-wrap'>
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
