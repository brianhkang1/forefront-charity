'use client';

import Select from '@/components/Select';
import { useState } from 'react';

import Button from '../Button';

const DEFAULT_OPTION = '/documents/annualReport2023.pdf';

const ANNUAL_REPORT_OPTIONS = [
  { label: 'Annual Report 2023', value: '/documents/annualReport2023.pdf' },
  { label: 'Annual Report 2022', value: '/documents/annualReport2022.pdf' },
  { label: 'Annual Report 2021', value: '/documents/annualReport2021.pdf' },
  { label: 'Annual Report 2020', value: '/documents/annualReport2020.pdf' },
  { label: 'Annual Report 2019', value: '/documents/annualReport2019.pdf' },
  { label: 'Annual Report 2018', value: '/documents/annualReport2018.pdf' },
  { label: 'Annual Report 2017', value: '/documents/annualReport2017.pdf' },
];

export default function SelectAnnualReport() {
  const [selectedReport, setSelectedReport] = useState<string>(DEFAULT_OPTION);

  const handleSelectAnnualReport = (fileId: string) => {
    setSelectedReport(fileId);
  };

  const handleDownload = () => {
    window.open(selectedReport);
  };

  return (
    <div className='flex gap-4 not-md:flex-col'>
      <Select
        ariaLabel='Select Annual Reports'
        placeholder='Select Annual Reports'
        options={ANNUAL_REPORT_OPTIONS}
        value={selectedReport}
        onValueChange={handleSelectAnnualReport}
      />

      <Button size='small' disabled={!selectedReport} onClick={handleDownload}>
        Download
      </Button>
    </div>
  );
}

// import { downloadGoogleDriveFile } from '@/lib/googleDrive';
// import { parseError } from '@/utils/error';

// interface Props {
//   annualReportOptions: {
//     value: string | null | undefined;
//     label: string | null | undefined;
//     mimeType: string | null | undefined;
//   }[];
// }

// export default function SelectAnnualReport({ annualReportOptions }: Props) {
// const onSelectAnnualReport = async (fileId: string) => {
//   try {
//     const fileBlob = await downloadGoogleDriveFile(fileId);

//     if (!!fileBlob) {
//       const file = annualReportOptions.find((report) => {
//         return report.value === fileId;
//       });
//       const fileName = file?.label || 'Annual_Report';
//       const fileURL = URL.createObjectURL(fileBlob);

//       // Create a temporary download link
//       const link = document.createElement('a');
//       link.href = fileURL;
//       link.download = fileName;
//       link.click();
//       // Clean up the created URL after the download starts
//       URL.revokeObjectURL(fileURL);
//     }
//   } catch (error) {
//     console.error('Select annual report failed: ', parseError(error).message);
//   }
// };

//   return (
//     <Select
//       ariaLabel='Select Annual Reports'
//       options={annualReportOptions}
//       onValueChange={onSelectAnnualReport}
//     />
//   );
// }

// const annualReportsData = await getGoogleDriveFiles(
//   process.env.ANNUAL_REPORTS_FILES_FOLDER_ID,
// );

// const annualReportOptions = annualReportsData?.map((report) => ({
//   value: report.id,
//   label: report.name,
//   mimeType: report.mimeType,
// }));

{
  /* {!!annualReportOptions && (
          <div>
            <SelectAnnualReport annualReportOptions={annualReportOptions} />
          </div>
        )} */
}
