import Image from '@/components/Image';
import Title from '@/components/Title';
import { getGoogleSheetsData } from '@/lib/googleSheets';
import findImage from '@/utils/findImage';
import Z_INDEX from '@/utils/zIndex';
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
  const image1 = findImage(aboutPageImages, 'image 1');
  const mockBoardImages = teamMemberImages?.slice(0, 6);
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
          width='100%'
          height={947}
          src={heroImage?.url || ''}
          alt='About Page Hero Image'
        >
          <Title className='absolute top-36 left-1/2 -translate-x-1/2 transform whitespace-nowrap'>
            UNITED IN COMPASSION
          </Title>
        </Image>
      </section>

      <section>
        <Image
          containerStyle={{
            marginTop: '-60px',
          }}
          src='/about/arrowBackground.svg'
          alt='arrow background'
          width='100%'
          height={639}
        >
          <div className='flex h-full items-center justify-center gap-19.5'>
            <div className={clsx('ml-16', Z_INDEX.ARROW_BACKGROUND_TEXT)}>
              <h1 className='mb-3'>
                <div>It all started with a</div>
                <div>conversation...</div>
              </h1>
              <p className='max-w-144'>
                Our journey began with a simple conversation during a
                transformative trip to India. Founders Matt and Chanwook
                discovered the power of friendship and shared ideas that sparked
                a vision. Inspired by the resilience of local communities, they
                established Forefront to provide essential resources like clean
                water, medical care, education, and empowerment. Together with
                local changemakers, we are dedicated to making a lasting impact
                in the lives of those we serve.
              </p>
            </div>
            <div className='[clip-path:polygon(0%_0%,100%_13%,100%_100%,0%_87%)]'>
              {!!image1 && (
                <Image
                  src={image1.url}
                  alt={image1.name || ''}
                  width={663}
                  height={456}
                />
              )}
            </div>
          </div>
        </Image>
      </section>

      <section className='mt-[-65px] h-172.5 bg-teal-800 px-9 text-white'>
        <h2 className='pt-15 text-center'>How We Got Here</h2>

        <div className='relative h-139 overflow-x-auto'>
          {/* white line */}
          <div className='absolute top-1/2 left-0 h-[2px] w-full bg-white' />

          {HOW_WE_GOT_HERE.map(({ title, description }, index) => {
            const isEven = index % 2 === 0;
            const leftPosition = 160 * index;
            const topPosition = isEven ? 9 : 274;

            return (
              <div
                key={title}
                className={clsx(
                  'absolute flex w-40 items-center',
                  isEven ? 'flex-col' : 'flex-col-reverse',
                )}
                style={{ top: topPosition, left: leftPosition }}
              >
                <Image
                  width={160}
                  height={185}
                  alt={`How we got here picture ${index + 1}`}
                  src={image1?.url || ''}
                  className='py-2'
                />

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
      </section>

      <section>
        <h1 className='my-9 text-center'>OUR BOARD</h1>
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
              <h3 className='mt-3 text-center break-words'>{image?.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-8'>
        <h1 className='my-9 text-center'>OUR TEAM</h1>
        <div className='mx-auto flex max-w-264 flex-wrap justify-center gap-4'>
          {teamMemberBios?.map(([firstName, lastName, bio]) => {
            const fullName = `${firstName} ${lastName}`;
            const teamMember = teamMemberImagesByName[fullName];
            if (!teamMember) return null;

            return (
              <div className='w-[154px]' key={teamMember.name}>
                <Image
                  className='object-top'
                  src={teamMember.url}
                  width='100%'
                  height={154}
                  alt={teamMember.name}
                >
                  <div className='absolute inset-0 h-full overflow-y-auto bg-white p-3 opacity-0 transition-opacity hover:opacity-90'>
                    <p className='text-center text-xs font-bold'>{bio}</p>
                  </div>
                </Image>
                <h3 className='mt-3 text-center leading-5 break-words'>
                  <div>{firstName}</div>
                  <div>{lastName}</div>
                </h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
