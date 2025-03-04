import Image from '@/components/Image';
import Title from '@/components/Title';
import { getGoogleSheetsData } from '@/lib/googleSheets';
import findImage from '@/utils/findImage';
import type { Metadata } from 'next';

import { getGoogleDriveImages } from '../../lib/googleDrive';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'About',
};

export default async function AboutPage() {
  // TODO: fetch all in parallel, not sequential
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
      {!!heroImage && (
        <section>
          <Image
            width='100%'
            height={947}
            src={heroImage.url}
            alt='About Page Hero Image'
          >
            <Title className='absolute top-36 left-1/2 -translate-x-1/2 transform whitespace-nowrap'>
              UNITED IN COMPASSION
            </Title>
          </Image>
        </section>
      )}

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
            <div className='z-1 ml-16'>
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
            <div className='z-1 [clip-path:polygon(0%_0%,100%_13%,100%_100%,0%_87%)]'>
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

      <section>
        <h1 className='my-9 text-center'>OUR TEAM</h1>
        <div className='mx-auto flex max-w-264 flex-wrap justify-center gap-4'>
          {teamMemberBios?.map(([name, bio]) => {
            const teamMember = teamMemberImagesByName[name];

            return (
              <div className='w-[154px]' key={teamMember.name}>
                <Image
                  className='object-top'
                  src={teamMember.url}
                  width='100%'
                  height={154}
                  alt={teamMember.name}
                />
                <h3 className='mt-3 text-center break-words'>
                  {teamMember.name}
                </h3>
                <span className='hidden'>{bio}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
