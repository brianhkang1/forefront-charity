import type { Metadata } from 'next';
import Image from 'next/image';

import { getGoogleDrivePhotos } from '../../lib/googleDrive';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'About Us | FOREFRONT Charity',
};

export default async function Home() {
  const images = await getGoogleDrivePhotos(
    process.env.TEAM_MEMBERS_PHOTOS_FOLDER_ID,
  );

  return (
    <main>
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
    </main>
  );
}
