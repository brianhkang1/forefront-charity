import type { Metadata } from 'next';
import Image from 'next/image';

import {
  // getGoogleDriveFiles,
  getGoogleDrivePhotos,
} from '../api/google-drive';

export const revalidate = 3600; // Cache the page for 1 hour

export const metadata: Metadata = {
  title: 'About Us | FOREFRONT Charity',
};

export default async function Home() {
  const images = await getGoogleDrivePhotos(
    process.env.TEAM_MEMBERS_PHOTOS_FOLDER_ID,
  );

  // const annualReports = await getGoogleDriveFiles(
  //   process.env.ANNUAL_REPORTS_FILES_FOLDER_ID,
  // );

  return (
    <div className='flex gap-4'>
      {images?.map((image) => (
        <Image
          src={image?.url || ''}
          width={266}
          height={392}
          key={image?.name || ''}
          alt={image?.name || ''}
        />
      ))}
    </div>
  );
}
