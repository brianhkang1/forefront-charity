import Button from '@/components/Button';
import DonationDialog from '@/components/DonationDialog';
import Image from '@/components/Image';
import Link from 'next/link';

import CallToAction from './assets/CallToAction.png';
import CallToActionMobile from './assets/CallToAction_Mobile.png';

export default function ChangeTheWorld() {
  return (
    <section className='w-full'>
      {/* Desktop Image */}
      <Image
        hideContainerWhenMobile
        src={CallToAction}
        alt='Two FOREFRONT students smiling at camera'
        className='desktop h-[70vh] w-full rounded-xl'
      >
        <div className='desktop absolute top-[20%] left-[5%]'>
          <h2 className='mb-2'>Change the World with Us</h2>
          <div className='max-w-md'>
            Our mission is stronger with people like you. Your passion, story,
            and skills add to the impact we can make together, and every action
            moves us closer to fulfilling our mission.
          </div>

          <div className='mt-3 flex gap-2'>
            <DonationDialog />

            <Button color='bg-white'>
              <Link href='mailto:contact@goforefront.org'>Get Involved</Link>
            </Button>
          </div>
        </div>
      </Image>

      {/* Mobile Image */}
      <Image
        hideContainerWhenDesktop
        src={CallToActionMobile}
        alt='Two FOREFRONT students smiling at camera'
        className='mobile h-[70vh] w-full rounded-xl object-[60%_50%]'
      >
        <div className='mobile absolute top-[5%] left-0 px-[5%]'>
          <h2 className='mb-2'>Change the World with Us</h2>
          <div className='not-sm:max-w-3xs not-md:max-w-sm'>
            Our mission is stronger with people you. Your passion, story, and
            skills add to the impact we can make together, and every action
            moves us closer to fulfilling our mission.
          </div>

          <div className='mt-3 flex w-40 flex-col gap-2'>
            <DonationDialog />

            <Button color='bg-white'>
              <Link href='mailto:contact@goforefront.org'>Get Involved</Link>
            </Button>
          </div>
        </div>
      </Image>
    </section>
  );
}
