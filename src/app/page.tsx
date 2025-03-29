// import SelectAnnualReport from '@/components/SelectAnnualReport';
// import { getGoogleDriveFiles } from '@/lib/googleDrive';
import Image from '@/components/Image';
import { getGoogleDriveImages } from '@/lib/googleDrive';
import findImage from '@/utils/findImage';
import type { Metadata } from 'next';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const homePageImagesData = await getGoogleDriveImages(
    process.env.HOME_PAGE_IMAGES_FOLDER_ID,
  );

  const heroImage = findImage(homePageImagesData, 'hero');

  // const annualReportsData = await getGoogleDriveFiles(
  //   process.env.ANNUAL_REPORTS_FILES_FOLDER_ID,
  // );

  // const annualReportOptions = annualReportsData?.map((report) => ({
  //   value: report.id,
  //   label: report.name,
  //   mimeType: report.mimeType,
  // }));

  return (
    <section>
      <Image
        includeOverlay
        width='100%'
        height={1064}
        src={heroImage?.url || ''}
        alt='Home Page Hero Image'
      />
    </section>
  );
}

{
  /* {!!annualReportOptions && (
        <div>
          <SelectAnnualReport annualReportOptions={annualReportOptions} />
        </div>
      )} */
}
