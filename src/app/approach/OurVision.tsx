import Image from '@/components/Image';

import OurVisionImage from './assets/OurVision.png';

export default function OurVision() {
  return (
    //negative margin-top b/c the picture has white space at top, making the margin look bigger
    <section className='-mt-6 w-full px-6 py-12'>
      <Image
        src={OurVisionImage}
        fillWidth='100%'
        fillHeight='90vh'
        alt='FOREFRONT teacher and students waving in front of FOREFRONT School'
        className='rounded-xl'
      >
        <div className='absolute top-6 w-full text-white'>
          <h2 className='mb-3 text-center'>Our Vision</h2>
          <h3 className='text-center'>
            <div>A world where everyone propels their communities forward,</div>
            <div>creating a ripple effect of change.</div>
          </h3>
        </div>
      </Image>
    </section>
  );
}
