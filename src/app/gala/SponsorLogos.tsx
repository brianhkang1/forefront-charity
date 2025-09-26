import Image from '@/components/Image';

import BronzeFake from './assets/Bronze_Fake.png';
import GoldFake from './assets/Gold_Fake.png';
import SilverFake from './assets/Silver_Fake.png';

const DIAMOND_SPONSORS = [{ name: 'GoldFake', src: GoldFake }];

const GOLD_SPONSORS = [
  { name: 'GoldFake', src: GoldFake },
  { name: 'SilverFake', src: SilverFake },
];

const SILVER_SPONSORS = [
  { name: 'GoldFake', src: GoldFake },
  { name: 'SilverFake', src: SilverFake },
  { name: 'BronzeFake', src: BronzeFake },
  { name: 'GoldFake', src: GoldFake },
  { name: 'SilverFake', src: SilverFake },
  { name: 'BronzeFake', src: BronzeFake },
];

const BRONZE_SPONSORS = [
  { name: 'GoldFake', src: GoldFake },
  { name: 'SilverFake', src: SilverFake },
  { name: 'BronzeFake', src: BronzeFake },
];

export default function SponsorLogos() {
  return (
    <>
      <section className='flex flex-col items-center pb-10 text-white'>
        {/* DIAMOND SPONSORS */}
        <div className='flex w-[90%] flex-col items-center'>
          <div className='flex w-full items-center'>
            <div className='h-[1px] w-full flex-grow-1 border-1 border-white' />
            <div className='mx-5 text-2xl text-nowrap not-md:text-xl'>
              DIAMOND SPONSOR
            </div>
            <div className='h-[1px] w-full flex-grow-1 border-1 border-white' />
          </div>

          <div className='flex flex-wrap items-center justify-center gap-5 py-10'>
            {DIAMOND_SPONSORS.map((sponsor, index) => (
              <Image
                key={`diamond-${index}-${sponsor.name}`}
                src={sponsor.src}
                alt={sponsor.name}
              />
            ))}
          </div>
        </div>

        {/* GOLD SPONSORS */}
        <div className='flex w-[90%] flex-col items-center'>
          <div className='flex w-full items-center'>
            <div className='h-[1px] w-full flex-grow-1 border-1 border-white' />
            <div className='mx-5 text-2xl text-nowrap not-md:text-xl'>
              GOLD SPONSOR
            </div>
            <div className='h-[1px] w-full flex-grow-1 border-1 border-white' />
          </div>

          <div className='flex flex-wrap items-center justify-center gap-5 py-10'>
            {GOLD_SPONSORS.map((sponsor, index) => (
              <Image
                key={`gold-${index}-${sponsor.name}`}
                src={sponsor.src}
                alt={sponsor.name}
              />
            ))}
          </div>
        </div>

        {/* SILVER SPONSORS */}
        <div className='flex w-[90%] flex-col items-center'>
          <div className='flex w-full items-center'>
            <div className='h-[1px] w-full flex-grow-1 border-1 border-white' />
            <div className='mx-5 text-2xl text-nowrap not-md:text-xl'>
              SILVER SPONSOR
            </div>
            <div className='h-[1px] w-full flex-grow-1 border-1 border-white' />
          </div>

          <div className='flex flex-wrap items-center justify-center gap-5 py-10'>
            {SILVER_SPONSORS.map((sponsor, index) => (
              <Image
                key={`silver-${index}-${sponsor.name}`}
                src={sponsor.src}
                alt={sponsor.name}
              />
            ))}
          </div>
        </div>

        {/* BRONZE SPONSORS */}
        <div className='flex w-[90%] flex-col items-center'>
          <div className='flex w-full items-center'>
            <div className='h-[1px] w-full flex-grow-1 border-1 border-white' />
            <div className='mx-5 text-2xl text-nowrap not-md:text-xl'>
              BRONZE SPONSOR
            </div>
            <div className='h-[1px] w-full flex-grow-1 border-1 border-white' />
          </div>

          <div className='flex flex-wrap items-center justify-center gap-5 py-10'>
            {BRONZE_SPONSORS.map((sponsor, index) => (
              <Image
                key={`bronze-${index}-${sponsor.name}`}
                src={sponsor.src}
                alt={sponsor.name}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
