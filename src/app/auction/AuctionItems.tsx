import Button from '@/components/Button';
import Image from '@/components/Image';
import Link from 'next/link';

import Egypt from './assets/Egypt.png';
import LaurelSociety from './assets/Laurel_Society.png';
import NamiNori from './assets/Nami_Nori.png';
import SojoSpa from './assets/Sojo_Spa.png';
import Tuscany from './assets/Tuscany.png';

const AUCTION_ITEMS = [
  {
    name: 'The Egypt Tour Company: Deluxe Nile Cruise',
    src: Egypt,
    link: 'https://givebutter.com/c/FF10thgala/auction',
  },
  {
    name: 'Winspire: Under the Tuscan Sun',
    src: Tuscany,
    link: 'https://givebutter.com/c/FF10thgala/auction',
  },
  {
    name: "Nami Nori: Chef's Omakase Exclusive Experience",
    src: NamiNori,
    link: 'https://givebutter.com/c/FF10thgala/auction',
  },
  {
    name: 'Laurel Society: Private Floral Class or Tablescape',
    src: LaurelSociety,
    link: 'https://givebutter.com/c/FF10thgala/auction',
  },
  {
    name: 'Sojo Spa: Relax & Renew. A Spa Escape',
    src: SojoSpa,
    link: 'https://givebutter.com/c/FF10thgala/auction',
  },
];

export default function AuctionItems() {
  return (
    <section id='items' className='flex flex-col items-center pb-10 text-white'>
      <div className='border-dark-gold mb-8 w-[90%] rounded-lg border-4 px-6 py-10 not-md:px-3'>
        <h2>Auction Items</h2>
      </div>

      {/* Top row, two items */}
      <div className='mt-10 flex flex-wrap items-center justify-center gap-6'>
        {AUCTION_ITEMS.slice(0, 2).map((auction) => (
          <div
            key={`${auction.name}`}
            className='flex flex-col items-center gap-4'
          >
            <Image
              src={auction.src}
              alt={auction.name}
              className='rounded-lg'
              fillWidth={375}
              fillHeight={500}
            />

            <Button color='bg-dark-gold'>
              <Link
                href={auction.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                Place Bid
              </Link>
            </Button>
          </div>
        ))}
      </div>

      {/* Bottom row, three items */}
      <div className='mt-15 flex flex-wrap items-center justify-center gap-6'>
        {AUCTION_ITEMS.slice(2).map((auction) => (
          <div
            key={`${auction.name}`}
            className='flex flex-col items-center gap-4'
          >
            <Image
              src={auction.src}
              alt={auction.name}
              className='rounded-lg'
              fillWidth={375}
              fillHeight={500}
            />

            <Button color='bg-dark-gold'>
              <Link
                href={auction.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                Place Bid
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
