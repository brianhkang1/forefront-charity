import Image from '@/components/Image';

import ChangeMakerImage from './assets/Changemaker.png';

export default function LivingTheMission() {
  return (
    <section className='bg-teal-logo-200 flex w-full justify-center gap-6 rounded-xl p-4 not-md:flex-col'>
      <div className='rounded-xl bg-white p-3'>
        <Image
          src={ChangeMakerImage}
          alt='Changemaker smiling'
          className='h-[40vh] w-[40vh] rounded-lg not-md:w-full'
        />
      </div>

      <div className='flex max-w-2xl flex-col justify-center'>
        <h2 className='mb-3'>
          <div>Living the Mission.</div>
          <div>Changing the Next Generation.</div>
        </h2>

        <p>
          Dev grew up without access to education and is unable to read.
          Determined to make a change for his children’s generation, Dev became
          a Changemaker with FOREFRONT, particularly investing his time into
          FOREFRONT School— bringing literacy, opportunity, and transformation
          to the next generation.
        </p>
      </div>
    </section>
  );
}
