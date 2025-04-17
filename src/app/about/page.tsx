import Image from '@/components/Image';
import SelectAnnualReport from '@/components/SelectAnnualReport';
import { getGoogleSheetsData } from '@/lib/googleSheets';
import findImage from '@/utils/findImage';
import clsx from 'clsx';
import type { Metadata } from 'next';

import { getGoogleDriveImages } from '../../lib/googleDrive';

const HOW_WE_GOT_HERE = [
  { title: 2015, description: 'First Well in Pallapatla, India' },
  { title: 2016, description: 'Launched Handwashing Initiative' },
  { title: 2017, description: 'Identified land for our FOREFRONT School' },
  { title: 2018, description: 'Began building FOREFRONT School' },
  { title: 2019, description: 'Piloted a diabetes awareness workshop' },
  { title: 2020, description: 'Officially launched FOREFRONT School' },
  { title: 2021, description: 'Provided COVID relief with masks and food' },
  { title: 2022, description: 'Launched FOREFRONT Fearless' },
  { title: 2023, description: 'Launched newborn care' },
];

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'About',
};

export default async function AboutPage() {
  const teamMemberImagesData = getGoogleDriveImages(
    process.env.TEAM_MEMBERS_IMAGES_FOLDER_ID,
  );

  const teamMemberBiosData = getGoogleSheetsData(
    process.env.TEAM_MEMBERS_BIO_SHEETS_ID,
  );

  const aboutPageImagesData = getGoogleDriveImages(
    process.env.ABOUT_PAGE_IMAGES_FOLDER_ID,
  );

  const [teamMemberImages, teamMemberBios, aboutPageImages] = await Promise.all(
    [teamMemberImagesData, teamMemberBiosData, aboutPageImagesData],
  );

  const heroImage = findImage(aboutPageImages, 'hero');
  const matthewOh = teamMemberImages?.[0];
  // const mockBoardImages = teamMemberImages?.slice(0, 6);
  const teamMemberImagesByName =
    teamMemberImages
      ?.filter((image): image is { id: string; url: string; name: string } => {
        return !!image?.name && !!image?.url;
      })
      .reduce(
        (prev, curr) => {
          prev[curr.name] = curr;
          return prev;
        },
        {} as Record<string, { id: string; url: string; name: string }>,
      ) || {};

  return (
    <>
      <section>
        <Image
          priority
          fillWidth='100%'
          fillHeight='110vh'
          src={heroImage?.url || ''}
          alt='About Page Hero Image'
        >
          <h1 className='absolute top-36 left-1/2 -translate-x-1/2 transform text-center'>
            UNITED IN COMPASSION
          </h1>
        </Image>
      </section>

      <section className='mt-[-100px] w-full not-md:mt-[-110px]'>
        {/* Desktop view */}
        <div className='desktop h-[740px] bg-teal-100 [clip-path:polygon(50%_0%,0_10%,0_100%,50%_90%,100%_100%,100%_10%)]'>
          <div className='flex items-center'>
            <div className='flex-1'>
              <h2 className='mt-6 mb-3 text-center'>How It All Began</h2>
              <div className='max-h-[500px] overflow-y-auto'>
                <p className='mx-[32px] mb-3'>
                  In 2012, I went to India on a mission trip and witnessed
                  children walking 10 hours a day to collect water and women
                  using livestock waste for sanitary napkins. It was clear that
                  I had to do something about these dire needs. Year after year,
                  I was committed to going back to India and finding a lasting
                  solution for these communities. That is how we came to our
                  mission: partnering with local leaders to provide essential
                  resources to unreached communities no matter their background
                  or circumstances.
                </p>
                <p className='mx-[32px] mb-3'>
                  Our impact is built on four pillars: clean water that improves
                  health, accessible medical care that addresses preventable
                  diseases, quality education that unlocks potential, and
                  empowerment opportunities that create pathways for sustainable
                  community growth.
                </p>
                <p className='mx-[32px] mb-3'>
                  Since 2015, FOREFRONT Charity has been transforming and
                  bringing hope to unreached communities. What started as a
                  personal calling to do something has grown into my life’s
                  dedication driven by faith, compassion, and belief that
                  everyone deserves access to essential resources. FOREFRONT
                  Charity seeks to partner with more local leaders to create
                  sustainable change one life and one story at a time. This is a
                  journey that keeps unfolding with new hope at every step.
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
              waste for sanitary napkins. It was clear that I had to do
              something about these dire needs. Year after year, I was committed
              to going back to India and finding a lasting solution for these
              communities. That is how we came to our mission: partnering with
              local leaders to provide essential resources to unreached
              communities no matter their background or circumstances.
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
              hope to unreached communities. What started as a personal calling
              to do something has grown into my life’s dedication driven by
              faith, compassion, and belief that everyone deserves access to
              essential resources. FOREFRONT Charity seeks to partner with more
              local leaders to create sustainable change one life and one story
              at a time. This is a journey that keeps unfolding with new hope at
              every step.
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

      <section className='relative mt-[-90px] w-full items-center bg-teal-800 text-white [clip-path:polygon(50%_0%,0_10%,0_100%,50%_90%,100%_100%,100%_10%)]'>
        <h3 className='pt-14 text-center'>How We Got Here</h3>

        <div className='relative mx-auto h-[300px] w-full max-w-[1440px] overflow-x-auto'>
          {/* white line */}
          <div className='absolute top-[130px] left-0 h-[2px] w-[1440px] bg-white' />

          {HOW_WE_GOT_HERE.map(({ title, description }, index) => {
            const isEven = index % 2 === 0;
            const leftPosition = 160 * index;
            const topPosition = isEven ? 45 : 126;

            return (
              <div
                key={title}
                className={clsx(
                  'absolute flex w-40 items-center',
                  isEven ? 'flex-col' : 'flex-col-reverse',
                )}
                style={{ top: topPosition, left: leftPosition }}
              >
                <div className='min-h-[32px] text-center text-xs font-bold'>
                  {description}
                </div>

                <div className='my-2 text-2xl font-bold'>{title}</div>

                {/* white dot */}
                <div className='h-2.75 w-2.75 rounded-full bg-white' />
              </div>
            );
          })}
        </div>

        {/* space filler */}
        <div className='h-[60px]' />
      </section>

      {/* <section>
        <h2 className='my-9 text-center'>OUR BOARD</h2>
        <div className='mx-auto flex max-w-264 flex-wrap justify-center gap-4'>
          {mockBoardImages?.map((image) => (
            <div className='w-[154px]' key={image?.name || ''}>
              <Image
                className='object-top'
                src={image?.url || ''}
                width='100%'
                height={154}
                alt={image?.name || ''}
              />
              <h4 className='mt-3 text-center break-words'>{image?.name}</h4>
            </div>
          ))}
        </div>
      </section> */}

      <section className='mb-8'>
        <h2 className='my-9 text-center'>OUR TEAM</h2>
        <div className='mx-auto flex max-w-264 flex-wrap justify-center gap-4 not-md:mx-[16px]'>
          {teamMemberBios?.map(([firstName, lastName, bio]) => {
            const fullName = `${firstName} ${lastName}`;
            const teamMember = teamMemberImagesByName[fullName];
            if (!teamMember) return null;

            return (
              <div className='w-[154px]' key={teamMember.name}>
                <Image
                  className='object-top'
                  src={teamMember.url}
                  fillWidth='100%'
                  fillHeight={154}
                  alt={teamMember.name}
                >
                  <div className='absolute inset-0 h-full overflow-y-auto bg-white p-3 opacity-0 transition-opacity hover:opacity-90'>
                    <p className='text-center text-xs font-bold'>{bio}</p>
                  </div>
                </Image>
                <h4 className='mt-3 text-center leading-5 break-words'>
                  <div>{firstName}</div>
                  <div>{lastName}</div>
                </h4>
              </div>
            );
          })}
        </div>
      </section>

      <section className='bg-teal-logo-200 w-full py-8'>
        <h2 className='mb-4 text-center not-md:mb-[24px] not-md:px-[16px]'>
          Proudly Platinum for Transparent Impact
        </h2>

        <div className='flex items-center justify-center gap-6 px-2 not-md:flex-col'>
          <div>
            <Image
              src='/icons/platinumTransparency.svg'
              alt='Platinum Transparency Logo'
              fillWidth={156}
              fillHeight={156}
            />
          </div>

          <div className='max-w-xl not-md:mx-6'>
            <p className='mb-6 not-md:text-center'>
              We are proud to have a Platinum Seal of Transparency from Candid
              in 2024— because at Forefront Charity, transparency is at the
              heart of everything we do. Learn more by reading our annual
              reports.
            </p>

            <SelectAnnualReport />
          </div>
        </div>
      </section>
    </>
  );
}
