import Image from '@/components/Image';

import Egypt from './assets/Logo_Egypt.png';
import LaurelSociety from './assets/Logo_Laurel.png';
import NamiNori from './assets/Logo_Nami.png';
import SojoSpa from './assets/Logo_Sojo.png';

const LOGOS = [
  { name: 'Nami Nori Logo', src: NamiNori },
  { name: 'Laurel Society Logo', src: LaurelSociety },
  { name: 'Egypt Tour Company Logo', src: Egypt },
  { name: 'Sojo Spa Logo', src: SojoSpa },
];

export default function SpecialThanks() {
  return (
    <section className='flex flex-col items-center py-10'>
      <div className='mb-5 flex w-[90%] items-center justify-center'>
        <div className='h-[1px] w-full flex-grow-1 border-1' />
        <div className='mx-5 rounded-lg p-4 text-2xl text-nowrap not-md:text-xl'>
          SPECIAL THANKS TO
        </div>
        <div className='h-[1px] w-full flex-grow-1 border-1' />
      </div>

      <div className='flex flex-wrap items-center justify-center gap-10 not-md:max-w-[60%]'>
        {LOGOS.map((logo, index) => (
          <div key={index}>
            <Image
              src={logo.src}
              alt={logo.name}
              fillWidth={100}
              fillHeight={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
