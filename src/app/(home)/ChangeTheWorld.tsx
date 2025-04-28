import Button from '@/components/Button';
import DonationDialog from '@/components/DonationDialog';
import Image from '@/components/Image';
import Link from 'next/link';

import CallToAction from './assets/CallToAction.png';
import CallToActionMobile from './assets/CallToAction_Mobile.png';

export default function ChangeTheWorld() {
  return (
    <section>
      {/* Desktop Image */}
      <Image
        hideContainerWhenMobile
        src={CallToAction}
        alt='Two FOREFRONT students smiling at camera'
        className='desktop h-[70vh] w-full rounded-xl'
      >
        <div className='desktop absolute top-[28%] left-[5%]'>
          <h2 className='mb-2'>Change the World with Us</h2>
          <div className='max-w-xl'>
            Our mission is stronger with people you. Your passion, story, and
            skills add to the impact we can make together, and every action
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
        className='mobile aspect-square h-[50vh] rounded-xl object-[10%_50%]'
      >
        <div className='mobile absolute top-[5%] left-0 px-[5vw]'>
          <h2 className='mb-2'>Change the World with Us</h2>
          <div className='max-w-lg'>
            Our mission is stronger with people you. Your passion, story, and
            skills add to the impact we can make together, and every action
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
    </section>
  );
}
