import Image from '@/components/Image';

import OurVisionImage from '../(home)/assets/ExponentialImpact.png';

export default function OurVision() {
  return (
    //negative margin-top b/c the picture has white space at top, making the margin look bigger
    <section className='-mt-6 p-12 not-md:p-6'>
      <Image
        src={OurVisionImage}
        fillWidth='100%'
        fillHeight='90vh'
        alt='FOREFRONT teacher and students waving in front of FOREFRONT School'
        className='rounded-xl'
      >
        <div className='absolute top-6 w-full'>
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
