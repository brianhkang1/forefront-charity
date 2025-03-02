import SelectAnnualReport from '@/components/SelectAnnualReport';
import { getGoogleDriveFiles } from '@/lib/googleDrive';
import type { Metadata } from 'next';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const annualReportsData = await getGoogleDriveFiles(
    process.env.ANNUAL_REPORTS_FILES_FOLDER_ID,
  );

  const annualReportOptions = annualReportsData?.map((report) => ({
    value: report.id,
    label: report.name,
    mimeType: report.mimeType,
  }));

  return (
    <>
      <div className='flex h-screen items-center justify-center'>Home page</div>
      {!!annualReportOptions && (
        <div>
          <SelectAnnualReport annualReportOptions={annualReportOptions} />
        </div>
      )}
    </>
  );
}
