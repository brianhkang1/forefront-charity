import Button from '@/components/Button';
import Image from '@/components/Image';
import Link from 'next/link';

import AuctionFake from './assets/Auction_Fake.png';

const AUCTION_ITEMS = [
  { name: 'AuctionFake', src: AuctionFake, link: 'https://www.google.com' },
  { name: 'AuctionFake', src: AuctionFake, link: 'https://www.google.com' },
  { name: 'AuctionFake', src: AuctionFake, link: 'https://www.google.com' },
  { name: 'AuctionFake', src: AuctionFake, link: 'https://www.google.com' },
  { name: 'AuctionFake', src: AuctionFake, link: 'https://www.google.com' },
  { name: 'AuctionFake', src: AuctionFake, link: 'https://www.google.com' },
  { name: 'AuctionFake', src: AuctionFake, link: 'https://www.google.com' },
];

export default function AuctionItems() {
  return (
    <section
      id='auction-items'
      className='flex flex-col items-center pb-10 text-white'
    >
      <div className='border-dark-gold mb-6 w-[90%] rounded-lg border-4 px-6 pt-20 pb-4 not-md:px-3 not-md:pt-15'>
        <h2>Auction Items</h2>
      </div>

      <div className='flex flex-col items-center pb-10 text-white'>
        <div className='flex w-[85%] flex-col items-center'>
          <div className='flex flex-wrap items-center justify-center gap-6'>
            {AUCTION_ITEMS.map((auction, index) => (
              <div
                key={`${index}-${auction.name}`}
                className='flex flex-col items-center gap-4'
              >
                <Image
                  src={auction.src}
                  alt={auction.name}
                  className='rounded-lg'
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
        </div>
      </div>
    </section>
  );
}
