import Button from '@/components/Button';
import Link from 'next/link';

const GOLD_CARDS = [
  {
    title: 'Sponsorship Packages',
    description:
      "Get ready to bid on exclusive experiences and unique items! Browse our auction packages now and place your bids to support FOREFRONT's mission.",
    buttonLabel: 'Learn More',
    url: '/documents/Forefront_Gala_Sponsorship_Deck_2025.pdf',
  },
  {
    title: 'Auction Items',
    description:
      "Join us for an unforgettable evening in support of FOREFRONT Charity's work. Secure your tickets today and be part of a night filled with inspiration, impact, and celebration!",
    // buttonLabel: 'Purchase',
    buttonLabel: 'Auction items coming soon - check back later!',
  },
  {
    title: 'Give',
    description:
      "Can't attend? You can still make a difference! Consider making a donation to help further FOREFRONT Charity's work and create lasting change.",
    buttonLabel: 'Donate',
    url: 'https://givebutter.com/c/FF10thgala',
  },
];

export default function LivingTheMission() {
  return (
    <section className='flex flex-wrap items-center justify-center gap-6 pb-10 text-white not-md:flex-col not-md:gap-12'>
      {GOLD_CARDS.map(({ title, description, buttonLabel, url }) => (
        <div
          key={title}
          className='from-gold to-dark-gold h-[360px] w-[340px] rounded-md bg-gradient-to-r p-[3px]'
        >
          <div className='relative h-full w-full rounded bg-black px-[23px] pt-[15px] pb-[54px]'>
            <div className='min-h-[80px] w-min text-4xl font-bold'>{title}</div>

            {/* line divider */}
            <div className='bg-gold mt-[16px] mb-[16px] h-[1px] w-full rounded-lg' />

            <div className='min-h-[150px]'>{description}</div>

            {url ? (
              <Button color='bg-dark-gold' size='small' disabled={!url}>
                <Link href={url} rel='noopener noreferrer' target='_blank'>
                  {buttonLabel}
                </Link>
              </Button>
            ) : (
              <span className='text-gold italic'>{buttonLabel}</span>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
