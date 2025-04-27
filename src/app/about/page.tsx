import Image from '@/components/Image';
import { getGoogleSheetsData } from '@/lib/googleSheets';
import findImage from '@/utils/findImage';
import type { Metadata } from 'next';

import {
  getGoogleDriveFiles,
  getGoogleDriveImages,
} from '../../lib/googleDrive';
import AnnualReports from './AnnualReports';
import HowItBegan from './HowItBegan';
import HowWeGotHere from './HowWeGotHere';
import OurTeam from './OurTeam';
import { TeamMemberImageMetadata } from './types';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'About',
};

export default async function AboutPage() {
  const teamMembersMetadata = getGoogleDriveFiles(
    process.env.TEAM_MEMBERS_IMAGES_FOLDER_ID,
  );

  const teamMemberBiosData = getGoogleSheetsData(
    process.env.TEAM_MEMBERS_BIO_SHEETS_ID,
  );

  const aboutPageImagesData = getGoogleDriveImages(
    process.env.ABOUT_PAGE_IMAGES_FOLDER_ID,
  );

  const [teamMembers, teamMemberBios, aboutPageImages] = await Promise.all([
    teamMembersMetadata,
    teamMemberBiosData,
    aboutPageImagesData,
  ]);

  const heroImage = findImage(aboutPageImages, 'hero');

  const teamMembersByName =
    teamMembers
      ?.filter((image): image is TeamMemberImageMetadata => {
        return !!image?.name && !!image?.mimeType;
      })
      .reduce(
        (prev, curr) => {
          prev[curr.name] = curr;
          return prev;
        },
        {} as Record<string, TeamMemberImageMetadata>,
      ) || {};

  return (
    <>
      <section>
        <Image
          priority
          fillWidth='100%'
          fillHeight='120vh'
          src={heroImage?.url || ''}
          alt='About Page Hero Image'
        >
          <h1 className='absolute top-[18%] left-1/2 -translate-x-1/2 transform text-center lg:min-w-4xl'>
            UNITED IN COMPASSION
          </h1>
        </Image>
      </section>

      <HowItBegan />
      <HowWeGotHere />
      <OurTeam
        teamMemberBios={teamMemberBios}
        teamMembersByName={teamMembersByName}
      />
      <AnnualReports />

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
    </>
  );
}
