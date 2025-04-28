import Button from '@/components/Button';
import DonationDialog from '@/components/DonationDialog';
import Image from '@/components/Image';
import Link from 'next/link';

import CallToActionImage from './assets/CallToAction.png';
import CallToActionMobileImage from './assets/CallToAction_Mobile.png';

export default function ChangeTheWorld() {
  return (
    <section className='mx-12 my-6 not-md:mx-6'>
      {/* Desktop Image */}
      <Image
        hideContainerWhenMobile
        src={CallToActionImage}
        alt='Two FOREFRONT students smiling at camera'
        className='desktop h-[70vh] w-full rounded-xl'
      >
        <div className='desktop absolute top-[40%] left-[5%]'>
          <h2>Change the World with Us</h2>

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
        src={CallToActionMobileImage}
        alt='Two FOREFRONT students smiling at camera'
        className='mobile aspect-square h-[50vh] rounded-xl'
      >
        <div className='mobile absolute top-[20%] left-0 px-[5vw]'>
          <h2>Change the World with Us</h2>

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
