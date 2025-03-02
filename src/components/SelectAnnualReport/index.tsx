'use client';

import Select from '@/components/Select';
import { downloadGoogleDriveFile } from '@/lib/googleDrive';
import { parseError } from '@/utils/error';

interface Props {
  annualReportOptions: {
    value: string | null | undefined;
    label: string | null | undefined;
    mimeType: string | null | undefined;
  }[];
}

export default function SelectAnnualReport({ annualReportOptions }: Props) {
  const onSelectAnnualReport = async (fileId: string) => {
    try {
      const fileBlob = await downloadGoogleDriveFile(fileId);

      if (!!fileBlob) {
        const file = annualReportOptions.find((report) => {
          return report.value === fileId;
        });
        const fileName = file?.label || 'Annual_Report';
        const fileURL = URL.createObjectURL(fileBlob);

        // Create a temporary download link
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;
        link.click();
        // Clean up the created URL after the download starts
        URL.revokeObjectURL(fileURL);
      }
    } catch (error) {
      console.error('Select annual report failed: ', parseError(error).message);
    }
  };

  return (
    <Select
      ariaLabel='Select Annual Reports'
      options={annualReportOptions}
      onValueChange={onSelectAnnualReport}
    />
  );
}
