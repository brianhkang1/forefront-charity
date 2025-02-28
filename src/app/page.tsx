import Button from '@/components/Button';
// import SelectAnnualReport from '@/components/SelectAnnualReport';
import Title from '@/components/Title';
// import { getGoogleDriveFiles } from '@/lib/googleDrive';
import type { Metadata } from 'next';
import Link from 'next/link';

// Default value, but explicitly set to ensure SSG
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Home | FOREFRONT Charity',
};

export default async function Home() {
  // const annualReportsData = await getGoogleDriveFiles(
  //   process.env.ANNUAL_REPORTS_FILES_FOLDER_ID,
  // );

  // const annualReportOptions = annualReportsData?.map((report) => ({
  //   value: report.id,
  //   label: report.name,
  //   mimeType: report.mimeType,
  // }));

  return (
    <main>
      <Title>Hello Forefront Charity</Title>
      <h1>Hello Forefront Charity</h1>
      <h2>Hello Forefront Charity</h2>
      <h3>Hello Forefront Charity</h3>
      <p>Hello Forefront Charity</p>

      <Link href='/'>Hello</Link>

      <div className='mt-1'>
        <Button>Test</Button>
      </div>

      {/* {!!annualReportOptions && (
        <div>
          <SelectAnnualReport annualReportOptions={annualReportOptions} />
        </div>
      )} */}
    </main>
  );
}
