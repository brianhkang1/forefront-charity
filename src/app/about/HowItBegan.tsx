import Image from '@/components/Image';

interface Props {
  matthewOh:
    | {
        id: string;
        name: string | null | undefined;
        url: string;
      }
    | undefined;
}

export default function HowItBegan({ matthewOh }: Props) {
  return (
    <section className='mt-[-100px] w-full not-md:mt-[-110px]'>
      {/* Desktop view */}
      <div className='desktop h-[740px] bg-teal-100 [clip-path:polygon(50%_0%,0_10%,0_100%,50%_90%,100%_100%,100%_10%)]'>
        <div className='flex items-center'>
          <div className='flex-1'>
            <h2 className='mt-6 mb-3 text-center'>How It All Began</h2>
            <div className='max-h-[500px] overflow-y-auto'>
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
              <p className='mx-[32px] mb-3'>
                Since 2015, FOREFRONT Charity has been transforming and bringing
                hope to unreached communities. What started as a personal
                calling to do something has grown into my life’s dedication
                driven by faith, compassion, and belief that everyone deserves
                access to essential resources. FOREFRONT Charity seeks to
                partner with more local leaders to create sustainable change one
                life and one story at a time. This is a journey that keeps
                unfolding with new hope at every step.
              </p>
              <p className='mx-[32px]'>
                -Matthew Oh, Founder and CEO of FOREFRONT Charity
              </p>
            </div>
          </div>

          <div className='flex-1'>
            {!!matthewOh && (
              <Image
                src={matthewOh.url}
                alt={matthewOh.name || ''}
                fillWidth='100%'
                fillHeight={700}
                className='2xl:object-[50%_35%]'
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile view text */}
      <div className='mobile bg-teal-100 [clip-path:polygon(50%_0%,0_10%,0_100%,50%_90%,100%_100%,100%_10%)]'>
        <div className='flex flex-col items-center'>
          <h2 className='mb-3 pt-16 text-center'>How It All Began</h2>

          <p className='mx-[32px] mb-3'>
            In 2012, I went to India on a mission trip and witnessed children
            walking 10 hours a day to collect water and women using livestock
            waste for sanitary napkins. It was clear that I had to do something
            about these dire needs. Year after year, I was committed to going
            back to India and finding a lasting solution for these communities.
            That is how we came to our mission: partnering with local leaders to
            provide essential resources to unreached communities no matter their
            background or circumstances.
          </p>
          <p className='mx-[32px] mb-3'>
            Our impact is built on four pillars: clean water that improves
            health, accessible medical care that addresses preventable diseases,
            quality education that unlocks potential, and empowerment
            opportunities that create pathways for sustainable community growth.
          </p>
          <p className='mx-[32px] mb-3'>
            Since 2015, FOREFRONT Charity has been transforming and bringing
            hope to unreached communities. What started as a personal calling to
            do something has grown into my life’s dedication driven by faith,
            compassion, and belief that everyone deserves access to essential
            resources. FOREFRONT Charity seeks to partner with more local
            leaders to create sustainable change one life and one story at a
            time. This is a journey that keeps unfolding with new hope at every
            step.
          </p>
          <p className='mx-[32px] mb-[120px]'>
            -Matthew Oh, Founder and CEO of FOREFRONT Charity
          </p>
        </div>
      </div>

      {/* Mobile view image */}
      <div className='mobile mt-[-110px] h-[740px] bg-teal-100 [clip-path:polygon(50%_0%,0_10%,0_100%,50%_90%,100%_100%,100%_10%)]'>
        <div>
          {!!matthewOh && (
            <Image
              src={matthewOh.url}
              alt={matthewOh?.name || ''}
              fillWidth='100%'
              fillHeight={700}
            />
          )}
        </div>
      </div>
    </section>
  );
}
