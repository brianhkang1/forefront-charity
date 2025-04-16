import Image from '@/components/Image';
import { getGoogleDriveImages } from '@/lib/googleDrive';
import findImage from '@/utils/findImage';
import type { Metadata } from 'next';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Approach',
};

export default async function ApproachPage() {
  const approachPageImagesData = await getGoogleDriveImages(
    process.env.APPROACH_PAGE_IMAGES_FOLDER_ID,
  );

  const heroImage = findImage(approachPageImagesData, 'hero');

  return (
    <section>
      <Image
        priority
        includeOverlay
        fillWidth='100%'
        fillHeight={1064}
        src={heroImage?.url || ''}
        alt='Approach Page Hero Image'
      />
    </section>
  );
}
