import Image from '@/components/Image';

import MatthewOhImage from './assets/Matthew_Oh.jpg';

export default function HowItBegan() {
  return (
    <section className='mt-[-100px] w-full not-md:mt-[-130px]'>
      {/* Desktop view */}
      <div className='desktop h-[850px] bg-teal-100 [clip-path:polygon(50%_0%,0_10%,0_100%,50%_90%,100%_100%,100%_10%)]'>
        <div className='relative grid grid-cols-2'>
          <div className='mt-[20%]'>
            <h2 className='mb-3 text-center'>How It All Began</h2>

            <div className='scrollbar-forefront h-[550px] max-h-[700px] overflow-y-auto'>
              <p className='mx-[32px] mb-3'>
                In 2012, I went to India on a mission trip and witnessed
                children walking 10 hours a day to collect water and women using
                livestock waste for sanitary napkins. It was clear that I had to
                do something about these dire needs. Year after year, I was
                committed to going back to India and finding a lasting solution
                for these communities. That is how we came to our mission:
                partnering with local leaders to provide essential resources to
                unreached communities no matter their background or
                circumstances.
              </p>
              <p className='mx-[32px] mb-3'>
                Our impact is built on four pillars: clean water that improves
                health, accessible medical care that addresses preventable
                diseases, quality education that unlocks potential, and
                empowerment opportunities that create pathways for sustainable
                community growth.
              </p>
              <p className='mx-8 mb-3'>
                Since 2015, FOREFRONT Charity has been transforming and bringing
                hope to unreached communities. What started as a personal
                calling to do something has grown into my life’s dedication
                driven by faith, compassion, and belief that everyone deserves
                access to essential resources. FOREFRONT Charity seeks to
                partner with more local leaders to create sustainable change one
                life and one story at a time. This is a journey that keeps
                unfolding with new hope at every step.
              </p>
              <div className='mx-8'>
                <div>Matthew Oh,</div>
                <div className='italic'>
                  Founder and CEO of FOREFRONT Charity
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              src={MatthewOhImage}
              alt={'Portrait of Matthew Oh'}
              fillWidth='100%'
              fillHeight='110%'
              className='2xl:object-top'
            />
          </div>
        </div>
      </div>

      {/* Mobile view text */}
      <div className='mobile bg-teal-100 [clip-path:polygon(50%_0%,0_10%,0_100%,50%_90%,100%_100%,100%_10%)]'>
        <div className='flex flex-col items-center'>
          <h2 className='mb-3 pt-24 text-center'>How It All Began</h2>

          <p className='mx-8 mb-3'>
            In 2012, I went to India on a mission trip and witnessed children
            walking 10 hours a day to collect water and women using livestock
            waste for sanitary napkins. It was clear that I had to do something
            about these dire needs. Year after year, I was committed to going
            back to India and finding a lasting solution for these communities.
            That is how we came to our mission: partnering with local leaders to
            provide essential resources to unreached communities no matter their
            background or circumstances.
          </p>
          <p className='mx-8 mb-3'>
            Our impact is built on four pillars: clean water that improves
            health, accessible medical care that addresses preventable diseases,
            quality education that unlocks potential, and empowerment
            opportunities that create pathways for sustainable community growth.
          </p>
          <p className='mx-8 mb-3'>
            Since 2015, FOREFRONT Charity has been transforming and bringing
            hope to unreached communities. What started as a personal calling to
            do something has grown into my life’s dedication driven by faith,
            compassion, and belief that everyone deserves access to essential
            resources. FOREFRONT Charity seeks to partner with more local
            leaders to create sustainable change one life and one story at a
            time. This is a journey that keeps unfolding with new hope at every
            step.
          </p>
          <div className='mx-8 mr-auto mb-[130px]'>
            <div>Matthew Oh,</div>
            <div className='italic'>Founder and CEO of FOREFRONT Charity</div>
          </div>
        </div>
      </div>

      {/* Mobile view image */}
      <div className='mobile mt-[-130px] h-[740px] bg-teal-100 [clip-path:polygon(50%_0%,0_10%,0_100%,50%_90%,100%_100%,100%_10%)]'>
        <div>
          <Image
            src={MatthewOhImage}
            alt={'Portrait of Matthew Oh'}
            fillWidth='100%'
            fillHeight={700}
          />
        </div>
      </div>
    </section>
  );
}
