import Image from '@/components/Image';

import RippleImage from './assets/Ripple.png';
import RippleMobileImage from './assets/Ripple_Mobile.png';

export default function ExponentialImpact() {
  return (
    <section className='bg-teal-800 text-white xl:pl-[5vw]'>
      <div className='flex not-xl:flex-col-reverse'>
        <div className='flex flex-col justify-center not-xl:mx-6 not-xl:mt-6 xl:max-w-md'>
          <h2 className='mb-3'>
            Exponential Impact: A Ripple Effect of Change
          </h2>
          <div className='mb-6'>
            When people have access to the essential resources, they can focus
            on growth, opportunity, and uplifting others. They become the next
            generation of leaders and this is how real change happens - not just
            for today, but for the future.
          </div>
          <div className='mb-6'>
            Mothers who once spent hours collecting water can now devote more
            time caring for their families. Children who once worked in
            brickfields with no access to education now have the opportunity to
            learn, dreaming of careers in medicine, engineering, and
            beyond—hoping to help their own communities.
          </div>
          <div className='mb-6'>
            They create a ripple effect of lasting, self-sustaining change,
            inspiring transformation in neighboring communities.
          </div>
        </div>

        {/* Desktop Image */}
        <Image
          hideContainerWhenMobile
          src={RippleImage}
          alt='Multiple Changemakers creating a ripple effect'
          fillWidth='100%'
          fillHeight={700}
          className='desktop'
        />

        {/* Mobile Image */}
        <Image
          hideContainerWhenDesktop
          src={RippleMobileImage}
          alt='Multiple Changemakers creating a ripple effect'
          fillWidth='100%'
          fillHeight='55vh'
          className='mobile'
        />
      </div>
    </section>
  );
}
