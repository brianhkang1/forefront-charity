import Image from '@/components/Image';

import ExponentialImpactImage from './assets/ExponentialImpact.png';

export default function LivingTheMission() {
  return (
    //negative margin-top b/c the picture has white space at top, making the margin look bigger
    <section className='-mt-4 w-full'>
      <Image
        src={ExponentialImpactImage}
        alt='Students in front of FOREFRONT School'
        className='h-[70vh] w-full rounded-xl'
      >
        <div className='absolute top-[5%] left-0 flex w-full justify-center'>
          <h2 className='max-w-[80%] text-center not-md:max-w-[90%] 2xl:max-w-[60%]'>
            <div>Exponential Impact.</div>
            <div>Made Possible by our Changemakers.</div>
          </h2>
        </div>
      </Image>
    </section>
  );
}
